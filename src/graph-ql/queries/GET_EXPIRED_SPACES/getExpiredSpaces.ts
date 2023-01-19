import { gql } from "@apollo/client";

export const GET_EXPIRED_SPACES = gql`
  query GetExpiredSpaces($currentTime:BigInt,$creator:Bytes) {
    musicNFTs(where:{creator:$creator}) {
      advNfts(where: {expirationTime_lt: $currentTime, expirationTime_not: 0,latest:true},first:1) {
        expirationTime
        marketItems{
          price
        }
        musicNFT {
          id
          metaDataUri
        }
      }
    }
}`