import { AdvNFTAddr } from "../../env";
import { GET_UNSOLD } from "../../graph-ql/queries/GET_UNSOLD/getUnsold";
import { GetUnsold } from "../../graph-ql/queries/GET_UNSOLD/__generated__/GetUnsold";
import { useQuery } from "@apollo/client";
import AdvNFT from "../AdvNFT/AdvNFT";
import { MusicPlayerSub } from "../../subs/MusicPlayerSub";
import RentSpaceButton from "../../../pages/ad-marketplace/RentSpaceButton";

export const AdList: React.FC = () => {
  const { data: allAsksConnection } = useQuery<GetUnsold>(GET_UNSOLD, {
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
                adNftId={e.token.id}
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
