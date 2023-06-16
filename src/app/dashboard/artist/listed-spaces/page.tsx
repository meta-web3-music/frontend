"use client";
import { useQuery } from "@apollo/client";
import { BigNumberish } from "ethers";
import React, { useEffect, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";
import AdvNFT from "../../../../components/AdvNFT/AdvNFT";
import Spinner from "../../../../components/Spinner/Spinner";
import { MarketPlaceAddr } from "../../../../env";
import { GET_LISTED } from "@/graph-ql/queries/muzik/GET_LISTED_SPACES/getListedSpaces";
import MarketPlace from "@/contracts/abis/MarketPlace";
import { getContract } from "viem";

const ListedSpaces = () => {
  const { data: walletClient } = useWalletClient();
  const { data, refetch, loading } = useQuery(GET_LISTED, {});
  const publicClient = usePublicClient();
  const [currentUnListings, setCurrentUnListing] = useState<BigNumberish[]>([]);

  const unList = async (itemId: bigint) => {
    const _currentUnListings = currentUnListings.slice();
    _currentUnListings.push(itemId);
    setCurrentUnListing(_currentUnListings);
    if (!walletClient) return;
    const marketplace = getContract({
      address: MarketPlaceAddr,
      abi: MarketPlace,
      publicClient,
      walletClient,
    });
    try {
      await marketplace.write.removeFromSale([itemId]);
    } catch (error) {
      console.log(error);
    } finally {
      setCurrentUnListing(currentUnListings.filter((e) => e != itemId));
    }
  };
  useEffect(() => {
    if (!walletClient) {
      //TODO error in all code if no wallet
      return;
    }
    refetch({
      sellerAddr: walletClient.account.address.toLowerCase(),
    });
  }, [refetch, walletClient]);

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

export default ListedSpaces;
