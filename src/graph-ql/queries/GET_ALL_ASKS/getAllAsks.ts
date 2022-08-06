import { gql } from "@apollo/client";

export const GET_ALL_ASKS = gql`
  query GetAllAsks($nftAddr:String!) {
    asks(where:{tokenContract:$nftAddr,fullfilled:false,cancelled:false}){
    token{
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
      owner {
        id
      }
      expirationDuration
    }
  }
}`