import { gql } from "@apollo/client";
export const GET_UNSOLD = gql`
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
}`


export const GET_USER_UNSOLD = gql`
  query GetUserUnsold($sellerAddress:String) {
    marketItems(where:{seller:$sellerAddress}){
      itemId
      owner
      price
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
}`