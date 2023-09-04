/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetMyMusic($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n": types.GetMyMusicDocument,
    "\nquery GetMyMusicLimit($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    first:5\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n": types.GetMyMusicLimitDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetMyMusic($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n"): (typeof documents)["\nquery GetMyMusic($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetMyMusicLimit($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    first:5\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n"): (typeof documents)["\nquery GetMyMusicLimit($owner:String) @api(name: spinamp){\n  allProcessedTracks(\n    first:5\n    orderBy: CREATED_AT_TIME_DESC\n    filter: {\n      artistByArtistId: {\n        userByUserId: {\n          addressesByUserId: {\n            some: {\n              id: {\n                equalToInsensitive: $owner\n              }\n            }\n          }\n        }\n      }\n    }\n  ) {\n    nodes {\n      nftsProcessedTracksByProcessedTrackId {\n        nodes {\n          nftByNftId {\n              id\n              tokenId\n              contractAddress\n              tokenMetadataUri\n              tokenUri\n              metadata\n              platformId\n              chainId\n              artistsNftsByNftId {\n                nodes {\n                  artistByArtistId {\n                    name\n                  }\n                }\n              }\n              nftsProcessedTracksByNftId {\n                nodes {\n                  platformInternalId\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;