import { gql } from "../__generated__";

export const GET_MY_MUSIC = gql(`
query GetMyMusic($owner:Bytes) @api(name: octav3){
  musicTokens(where:{owner:$owner}) {
      id
      tokenUri
    }
  }
`)
