import { gql } from "@apollo/client";
export const GET_ACTIVE_SPACES = gql`
  query GetActiveSpaces($ownerAddr:Bytes) {
    advNFTs(where:{owner:$ownerAddr,expirationTime_not:"0"}) {
        id
        musicNFT{
            metaDataUri
            assetUri
        }
        expirationDuration
        marketItems{
          price
        }
      }
}`