"use client";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useWalletClient } from "wagmi";
import AdvNFT from "../../../../components/AdvNFT/AdvNFT";
import { GET_ACTIVE_SPACES } from "../../../../graph-ql/queries/muzik/GET_ACTIVE_SPACES/getActiveSpaces";
import Spinner from "../../../../components/Spinner/Spinner";

const ActiveSpaces = () => {
  const { data: signingData } = useWalletClient();
  const { data, refetch, loading } = useQuery(GET_ACTIVE_SPACES, {});

  useEffect(() => {
    const addr = signingData?.account.address;
    if (!addr) {
      //TODO error
      return;
    }
    refetch({
      ownerAddr: addr.toLowerCase(),
    });
  }, [refetch, signingData]);

  const Header = () => (
    <div className="ml-4 pt-12">
      <p className="text-4xl font-bold mb-10">Brands</p>
      <p className="font-bold text-2xl">Active Spaces</p>
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
        {data?.advNFTs.map((token) => (
          <AdvNFT
            musicMetaDataUri={token.musicNFT.metaDataUri}
            expirationDuration={token.expirationDuration}
            onArtWorkClick={() => {
              /* */
            }}
            btnType="fill"
            price={token.marketItems[0].price}
            key={token.id}
          />
        ))}
      </div>
    </>
  );
};

export default ActiveSpaces;
