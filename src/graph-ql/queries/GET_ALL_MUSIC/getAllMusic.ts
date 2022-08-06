import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query GetAllMusic {
        musicNFTs{
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
}`