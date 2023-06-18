import { gql } from "../__generated__";


export const GET_LISTED = gql(`
  query GetListed($sellerAddr:Bytes) @api(name: muzik) {
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
}`)