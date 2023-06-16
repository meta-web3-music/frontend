import { gql } from "../__generated__";

export const GET_UNLISTED = gql(`
  query GetUnListed($ownerAddr:String) {
    advNFTs(where:{listed:false,owner:$ownerAddr}) {
        id
        musicNFT{
            metaDataUri
            assetUri
        }
        expirationDuration
      }
}`)