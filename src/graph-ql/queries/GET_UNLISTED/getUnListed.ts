import { gql } from "@apollo/client";
export const GET_UNLISTED = gql`
  query GetUnListed($ownerAddr:Bytes) {
    advNFTs(where:{listed:false,owner:$ownerAddr}) {
        id
        musicNFT{
            metaDataUri
            assetUri
        }
        expirationDuration
      }
}`