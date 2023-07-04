import { gql } from "../__generated__";

export const GET_ALL_MUSIC = gql(`
query GetAllMusic @api(name: octav3){
    octaveTokens {
      id
      owner
      musicNftAddr
      musicNftTokenId
      tokenUri
    }
  }
`)