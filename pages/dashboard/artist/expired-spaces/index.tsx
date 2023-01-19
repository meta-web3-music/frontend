import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useSigner } from "wagmi";
import { DashboardPageLayout } from "../..";
import AdvNFT from "../../../../src/components/AdvNFT/AdvNFT";
import MintSongButton from "../../../../src/components/MintSongButton/MintSongButton";
import Spinner from "../../../../src/components/Spinner/Spinner";

import { GET_EXPIRED_SPACES } from "../../../../src/graph-ql/queries/GET_EXPIRED_SPACES/getExpiredSpaces";
import { GetExpiredSpaces } from "../../../../src/graph-ql/queries/GET_EXPIRED_SPACES/__generated__/GetExpiredSpaces";
import { NextPageWithLayout } from "../../../_app";

const ExpiredSpaces: NextPageWithLayout = () => {
  const { data: signingData } = useSigner();
  const { data, refetch, loading } =
    useQuery<GetExpiredSpaces>(GET_EXPIRED_SPACES);

  useEffect(() => {
    const _currentDate = new Date();
    signingData?.getAddress().then((addr) => {
      refetch({
        creator: addr.toLowerCase(),
        currentTime: Math.ceil(_currentDate.getTime() / 1000),
      });
    });
  }, [refetch, signingData]);

  const Header = () => (
    <div className="ml-4 pt-12">
      <p className="text-4xl font-bold mb-10">Artists</p>
      <p className="font-bold text-2xl">Expired Spaces</p>
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
        {data?.musicNFTs.map(({ advNfts }) => {
          if (!advNfts[0]) {
            return <></>;
          }
          return (
            <AdvNFT
              musicMetaDataUri={advNfts[0].musicNFT.metaDataUri}
              expirationDuration={0}
              onArtWorkClick={() => {
                /* */
              }}
              status="expired"
              btnType="fill"
              onBtnClick={() => {
                // unList(itemId);
              }}
              CustomButton={
                <MintSongButton
                  color="yellow"
                  text="Renew Space"
                  musicTokenId={advNfts[0].musicNFT.id}
                />
              }
              // isLoading={currentUnListings.includes(itemId)}
              price={advNfts[0].marketItems[0].price}
              key={advNfts[0].musicNFT.id}
            />
          );
        })}
      </div>
    </>
  );
};

ExpiredSpaces.getLayout = DashboardPageLayout;

export default ExpiredSpaces;
