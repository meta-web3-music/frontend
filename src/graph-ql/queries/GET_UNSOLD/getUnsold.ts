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
    marketItems(where:{seller:$sellerAddress,deleted:false}){
      itemId
      owner
      price
      sold
      forSale
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
          advNfts{
              expirationDuration
          }
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


export const GET_USER_UNLISTED_ADS = gql`
  query GetUserUnlisted($sellerAddress:String) {
    marketItems(where:{seller:$sellerAddress,deleted:true}){
      itemId
      owner
      price
      sold
      forSale
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
          advNfts{
              expirationDuration
          }
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