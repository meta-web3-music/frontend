import { AdvNFTAddr } from "../../env";
import { useQuery } from "@apollo/client";
import AdvNFT from "../AdvNFT/AdvNFT";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import RentSpaceButton from "../../../pages/ad-marketplace/RentSpaceButton";
import { GET_UNSOLD } from "@/graph-ql/queries/muzik/GET_UNSOLD/getUnsold";

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
            onArtWorkClick={() => {
              MusicPlayerSub.next(e.token.musicNFT);
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
