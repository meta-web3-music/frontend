import { gql } from "../__generated__";

export const GET_UNSOLD = gql(`
  query GetUnsold($nftContractAddr:Bytes) {
    marketItems(where:{nftContract:$nftContractAddr,sold:false,deleted:false}){
      itemId
      owner
      price
      seller
      token{
        id
         musicNFT{
          id
          creator {
            id
          }
          owner {
            id
          }
          metaDataUri
          assetUri
        }
        metaDataHash
        assetHash
        owner{
          id
        }
        expirationDuration
      }
    }
}`)