import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query GetAllMusic($currentTime:BigInt) {
    musicNFTs{
            advNfts(where:{expirationTime_gt:$currentTime}){
              assetHash
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