import { gql } from "@apollo/client";
import { AdvNFTAddr } from "../../../env";

export const GET_ALL_ASKS = gql`
  query GetAllAsks($nftContractAddr:Bytes) {
    asks(where:{tokenContract:$nftContractAddr,fullfilled:false,cancelled:false}){
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
      owner {
        id
      }
      expirationDuration
    }
  }
}`