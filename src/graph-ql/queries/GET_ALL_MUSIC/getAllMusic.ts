import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query GetAllMusic($currentTime:BigInt) {
    musicNFTs{
            advNfts(where:{expirationTime_gt:$currentTime}){
              assetHash
              expirationDuration
            }
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
}`



export const GET_USER_LISTED_MUSIC = gql`
  query GetUserListedMusic($userAddress:String){
    musicNFTs(where:{owner:$userAddress}){
            advNfts{
              expirationDuration
              metaDataHash
            }
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
}`