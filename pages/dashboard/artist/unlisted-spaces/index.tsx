import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useWalletClient } from "wagmi";
import { DashboardPageLayout } from "../..";
import AdvNFT from "../../../../src/components/AdvNFT/AdvNFT";
import Spinner from "../../../../src/components/Spinner/Spinner";
import { NextPageWithLayout } from "../../../_app";
import ListButton from "./ListButton";
import { GET_UNLISTED } from "@/graph-ql/queries/muzik/GET_UNLISTED/getUnListed";

const UnlistedSpaces: NextPageWithLayout = () => {
  const { data: signingData } = useWalletClient();
  const { data, refetch, loading } = useQuery(GET_UNLISTED, {});

  useEffect(() => {
    if(!signingData) return
    refetch({
      ownerAddr: signingData.account.address.toLowerCase(),
    })
  }, [refetch, signingData]);

  const Header = () => (
    <div className="ml-4 pt-12">
      <p className="text-4xl font-bold mb-10">Artists</p>
      <p className="font-bold text-2xl">Unlisted Spaces</p>
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
        {data?.advNFTs.map((e) => (
          <AdvNFT
            musicMetaDataUri={e.musicNFT.metaDataUri}
            expirationDuration={e.expirationDuration}
            onArtWorkClick={() => {
              /* */
            }}
            key={e.id}
            CustomButton={<ListButton adTokenId={e.id} />}
          />
        ))}
      </div>
    </>
  );
};

UnlistedSpaces.getLayout = DashboardPageLayout;

export default UnlistedSpaces;
