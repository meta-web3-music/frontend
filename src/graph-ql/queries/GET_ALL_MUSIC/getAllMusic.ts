import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query GetAllMusic($currentTime:String!) {
    musicNFTs{
            advNfts(where:{expirationTime_gt:$currentTime}){
              assetHash
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