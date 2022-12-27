import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import { DashboardPageLayout } from "../..";
import AdvNFT from "../../../../src/components/AdvNFT/AdvNFT";
import Spinner from "../../../../src/components/Spinner/Spinner";
import { GET_UNLISTED } from "../../../../src/graph-ql/queries/GET_UNLISTED/getUnListed";
import { GetUnListed } from "../../../../src/graph-ql/queries/GET_UNLISTED/__generated__/GetUnListed";
import { NextPageWithLayout } from "../../../_app";
import ListButton from "./ListButton";

const UnlistedSpaces: NextPageWithLayout = () => {
  const { data: signingData } = useSigner();
  const { data, refetch, loading } = useQuery<GetUnListed>(GET_UNLISTED, {});

  useEffect(() => {
    signingData?.getAddress().then((addr) =>
      refetch({
        ownerAddr: addr.toLowerCase(),
      })
    );
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
