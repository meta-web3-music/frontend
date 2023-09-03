import { gql } from "../__generated__";

export const GET_ALL_MUSIC = gql(`
query GetAllMusic @api(name: octav3){
    octaveTokens(where:{closed:false}) {
      id
      owner
      musicNftAddr
      musicNftTokenId
      tokenUri
    }
  }
`)