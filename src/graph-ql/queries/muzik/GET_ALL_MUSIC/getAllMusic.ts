import { gql } from "../__generated__";

export const GET_ALL_MUSIC = gql(`
  query GetAllMusic($currentTime:BigInt) @api(name: muzik) {
    musicNFTs{
            advNfts(where:{expirationTime_gt:$currentTime}){
              assetHash
              metaDataHash
            }
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
}`)