import { gql } from "../__generated__";

export const GET_MY_MUSIC_LIMIT = gql(`
query GetMyMusicLimit($owner:Bytes) @api(name: octav3){
  musicTokens(first: 5,where:{owner:$owner}) {
      id
      tokenUri
    }
  }
`)
