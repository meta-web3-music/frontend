import { gql } from "../__generated__";

export const GET_MY_MUSIC = gql(`
query GetMyMusic($owner:String){
    allNfts(filter:{
      owner:{equalTo:$owner}
    }){
      nodes{
        metadataIpfsHash
        contractAddress
      }
    }
  }
`)