import { gql } from "../__generated__";

export const GET_MY_LISTED_MUSIC = gql(`
query GetMyListedMusic($owner:Bytes) @api(name: octav3){
  octaveTokens(where:{owner:$owner,closed:false}) {
      id
      musicNftAddr
      musicNftTokenId
    }
  }
`)
