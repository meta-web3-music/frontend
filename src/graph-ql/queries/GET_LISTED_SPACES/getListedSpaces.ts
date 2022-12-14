import { gql } from "@apollo/client";
export const GET_LISTED = gql`
  query GetListed($sellerAddr:Bytes) {
    marketItems(where:{seller:$sellerAddr,deleted:false}){
     itemId
     price
     sold
     token {
        id
        musicNFT{
            metaDataUri
            assetUri
        }
        expirationDuration
      }
  }
}`