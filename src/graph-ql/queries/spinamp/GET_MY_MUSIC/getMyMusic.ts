import { gql } from "../__generated__";

// TODO use pagination
export const GET_MY_MUSIC = gql(`
query GetMyMusic($owner:String) @api(name: spinamp){
  allNfts(first:5,filter:{nftsCollectorsByNftId:{some:{addressId:{equalToInsensitive:$owner}}}}) {
    nodes {
      id
      tokenId
      contractAddress
      tokenMetadataUri
      tokenUri
      metadata
    }
  }
  }
`)