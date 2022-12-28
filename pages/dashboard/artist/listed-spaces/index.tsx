import { useQuery } from "@apollo/client";
import { BigNumberish } from "ethers";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import { DashboardPageLayout } from "../..";
import AdvNFT from "../../../../src/components/AdvNFT/AdvNFT";
import Spinner from "../../../../src/components/Spinner/Spinner";
import { MarketPlace__factory } from "../../../../src/contracts";
import { MarketPlaceAddr } from "../../../../src/env";
import { GET_LISTED } from "../../../../src/graph-ql/queries/GET_LISTED_SPACES/getListedSpaces";
import { GetListed } from "../../../../src/graph-ql/queries/GET_LISTED_SPACES/__generated__/GetListed";
import { NextPageWithLayout } from "../../../_app";

const ListedSpaces: NextPageWithLayout = () => {
  const { data: signingData } = useSigner();
  const { data, refetch, loading } = useQuery<GetListed>(GET_LISTED, {});
  const { data: signer } = useSigner();
  const [currentUnListings, setCurrentUnListing] = useState<BigNumberish[]>([]);

  const unList = async (itemId: BigNumberish) => {
    const _currentUnListings = currentUnListings.slice();
    _currentUnListings.push(itemId);
    setCurrentUnListing(_currentUnListings);
    if (!signer) return;
    const marketplace = MarketPlace__factory.connect(MarketPlaceAddr, signer);
    try {
      await marketplace.removeFromSale(itemId);
    } catch (error) {
      console.log(error);
    } finally {
      setCurrentUnListing(currentUnListings.filter((e) => e != itemId));
    }
  };
  useEffect(() => {
    signingData?.getAddress().then((addr) =>
      refetch({
        sellerAddr: addr.toLowerCase(),
      })
    );
  }, [refetch, signingData]);

  const Header = () => (
    <div className="ml-4 pt-12">
      <p className="text-4xl font-bold mb-10">Artists</p>
      <p className="font-bold text-2xl">Listed Spaces</p>
    </div>
  );

  if (loading)
    return (
      <>
        <Header />
        <div className="ml-2">
          <Spinner />
        </div>
      </>
    );
  return (
    <>
      <Header />
      <div className="ml-3 flex flex-wrap pb-20">
        {data?.marketItems.map(({ itemId, token, price, sold }) => (
          <AdvNFT
            musicMetaDataUri={token.musicNFT.metaDataUri}
            expirationDuration={token.expirationDuration}
            onArtWorkClick={() => {
              /* */
            }}
            status={sold ? "filled" : "open"}
            btnType={"outline"}
            buttonText="Unlist Space"
            disabled={sold}
            onBtnClick={() => {
              unList(itemId);
            }}
            isLoading={currentUnListings.includes(itemId)}
            price={price}
            key={token.id}
          />
        ))}
      </div>
    </>
  );
};

ListedSpaces.getLayout = DashboardPageLayout;

export default ListedSpaces;
