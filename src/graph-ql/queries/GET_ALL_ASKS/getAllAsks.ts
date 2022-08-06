import { gql } from "@apollo/client";
import { AdvNFTAddr } from "../../../env";

export const GET_ALL_ASKS = gql`
  query GetAllAsks() {
    asks(where:{tokenContract:${AdvNFTAddr},fullfilled:false,cancelled:false}){
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