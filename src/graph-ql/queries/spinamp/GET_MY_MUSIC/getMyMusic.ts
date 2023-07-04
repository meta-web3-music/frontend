import { gql } from "../__generated__";

export const GET_MY_MUSIC = gql(`
query GetMyMusic($owner:String) @api(name: spinamp){
    allNfts(filter:{
      owner:{equalTo:$owner}
    },
    ,first:5,offset:3){
      nodes{
        id
        tokenId
        metadata
        contractAddress
        tokenUri
      }
    }
  }
`)