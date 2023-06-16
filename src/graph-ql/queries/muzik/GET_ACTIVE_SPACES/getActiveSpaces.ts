import { gql } from "../__generated__";

export const GET_ACTIVE_SPACES = gql(`
  query GetActiveSpaces($ownerAddr:String) {
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
}`)