import { gql } from "../__generated__";

// TODO use pagination
export const GET_MY_MUSIC_LIMIT = gql(`
query GetMyMusicLimit($owner:String) @api(name: spinamp){
  allProcessedTracks(
    first:5
    orderBy: CREATED_AT_TIME_DESC
    filter: {
      artistByArtistId: {
        userByUserId: {
          addressesByUserId: {
            some: {
              id: {
                equalToInsensitive: $owner
              }
            }
          }
        }
      }
    }
  ) {
    nodes {
      nftsProcessedTracksByProcessedTrackId {
        nodes {
          nftByNftId {
              id
              tokenId
              contractAddress
              tokenMetadataUri
              tokenUri
              metadata
              platformId
              chainId
              artistsNftsByNftId {
                nodes {
                  artistByArtistId {
                    name
                  }
                }
              }
              nftsProcessedTracksByNftId {
                nodes {
                  platformInternalId
                }
              }
            }
        }
      }
    }
  }
  }
`)