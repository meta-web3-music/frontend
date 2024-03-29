"use client";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useWalletClient } from "wagmi";
import AdvNFT from "../../../../components/AdvNFT/AdvNFT";
import MintSongButton from "../../../../components/MintSongButton/MintSongButton";
import Spinner from "../../../../components/Spinner/Spinner";

import { GET_EXPIRED_SPACES } from "@/graph-ql/queries/muzik/GET_EXPIRED_SPACES/getExpiredSpaces";

const ExpiredSpaces = () => {
  const { data: signingData } = useWalletClient();
  const { data, refetch, loading } = useQuery(GET_EXPIRED_SPACES);

  useEffect(() => {
    if (!signingData) return;
    const _currentDate = new Date();
    refetch({
      creator: signingData.account.address.toLowerCase(),
      currentTime: Math.ceil(_currentDate.getTime() / 1000),
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
              CustomButton={<MintSongButton />}
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

export default ExpiredSpaces;
