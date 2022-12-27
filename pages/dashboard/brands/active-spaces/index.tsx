import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useSigner } from "wagmi";
import { DashboardPageLayout } from "../..";
import AdvNFT from "../../../../src/components/AdvNFT/AdvNFT";
import { GET_ACTIVE_SPACES } from "../../../../src/graph-ql/queries/GET_ACTIVE_SPACES/getActiveSpaces";
import { NextPageWithLayout } from "../../../_app";
import { GetActiveSpaces } from "../../../../src/graph-ql/queries/GET_ACTIVE_SPACES/__generated__/GetActiveSpaces";
import Spinner from "../../../../src/components/Spinner/Spinner";

const ActiveSpaces: NextPageWithLayout = () => {
  const { data: signingData } = useSigner();
  const { data, refetch, loading } = useQuery<GetActiveSpaces>(
    GET_ACTIVE_SPACES,
    {}
  );

  useEffect(() => {
    signingData?.getAddress().then((addr) =>
      refetch({
        ownerAddr: addr.toLowerCase(),
      })
    );
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

ActiveSpaces.getLayout = DashboardPageLayout;

export default ActiveSpaces;
