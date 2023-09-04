"use client";
import { AdvNFTAddr, MusicNFTAddr } from "../../env";
import { useQuery } from "@apollo/client";
import AdvNFT from "../AdvNFT/AdvNFT";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import { GET_UNSOLD } from "@/graph-ql/queries/muzik/GET_UNSOLD/getUnsold";
import RentSpaceButton from "@/app/ad-marketplace/RentSpaceButton";
import { fetchDe, deToHttps } from "@/services/de-storage/fetchDe";
import { MusicNftMetaData } from "@/types/MusicNFTData";

export const AdList: React.FC = () => {
  const { data: allAsksConnection } = useQuery(GET_UNSOLD, {
    variables: {
      nftContractAddr: AdvNFTAddr.toLowerCase(),
    },
  });
  return (
    <>
      <div className="flex flex-wrap justify-center mb-4">
        {allAsksConnection?.marketItems.map((e) => (
          <AdvNFT
            key={e.itemId}
            expirationDuration={e.token.expirationDuration}
            musicMetaDataUri={e.token.musicNFT.metaDataUri}
            price={e.price}
            onArtWorkClick={async () => {
              const metadata = await fetchDe<MusicNftMetaData>(
                e.token.musicNFT.metaDataUri
              );
              if (!metadata) return;
              const { artist, artwork, title } = metadata;
              MusicPlayerSub.next({
                artist,
                artworkUrl: deToHttps(artwork.uri),
                contractAddr: MusicNFTAddr,
                musicUrl: e.token.musicNFT.assetUri,
                title: title ?? "....",
                tokenId: e.token.musicNFT.id,
                owner: "TODO",
              });
            }}
            CustomButton={
              <RentSpaceButton
                marketItemId={e.itemId}
                adNftId={BigInt(e.token.id)}
                price={e.price}
              />
            }
            buttonText="Rent space now"
          />
        ))}
      </div>
    </>
  );
};
