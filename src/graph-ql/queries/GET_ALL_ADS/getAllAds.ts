import { gql } from "@apollo/client";

export const GET_USER_EXPIRED_ADSPACES = gql`
query GetUserExpiredAdspaces($userAddress:String,$expirationTime:BigInt){
  advNFTs(where:{owner:$userAddress,expirationTime:$expirationTime}){
        musicNFT{
            metaDataUri
            assetUri
        }
        expirationDuration
        owner{
            id
        }
  }
}`

export const GET_ADVERTISER_ADS = gql`
query GetAdvertiserAds($advertiserAddress:String){
  advNFTs(where:{owner:$advertiserAddress,assetHash_not:""}){
        musicNFT{
            metaDataUri
            assetUri
        }
        assetHash
        expirationDuration
  }
}`

