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
    "\n  query GetActiveSpaces($ownerAddr:String) @api(name: muzik){\n    advNFTs(where:{owner:$ownerAddr,expirationTime_not:\"0\"}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n        marketItems{\n          price\n        }\n      }\n}": types.GetActiveSpacesDocument,
    "\n  query GetAllMusic($currentTime:BigInt) @api(name: muzik) {\n    musicNFTs{\n            advNfts(where:{expirationTime_gt:$currentTime}){\n              assetHash\n              metaDataHash\n            }\n        id\n        creator {\n            id\n        }\n        owner {\n            id\n        }\n        metaDataUri\n        assetUri\n    }\n}": types.GetAllMusicDocument,
    "\n  query GetExpiredSpaces($currentTime:BigInt,$creator:String) @api(name: muzik) {\n    musicNFTs(where:{creator:$creator}) {\n      advNfts(where: {expirationTime_lt: $currentTime, expirationTime_not: 0,latest:true},first:1) {\n        expirationTime\n        marketItems{\n          price\n        }\n        musicNFT {\n          id\n          metaDataUri\n        }\n      }\n    }\n}": types.GetExpiredSpacesDocument,
    "\n  query GetListed($sellerAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{seller:$sellerAddr,deleted:false}){\n     itemId\n     price\n     sold\n     token {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n  }\n}": types.GetListedDocument,
    "\n  query GetUnListed($ownerAddr:String) @api(name: muzik) {\n    advNFTs(where:{listed:false,owner:$ownerAddr}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n}": types.GetUnListedDocument,
    "\n  query GetUnsold($nftContractAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{nftContract:$nftContractAddr,sold:false,deleted:false}){\n      itemId\n      owner\n      price\n      seller\n      token{\n        id\n         musicNFT{\n          id\n          creator {\n            id\n          }\n          owner {\n            id\n          }\n          metaDataUri\n          assetUri\n        }\n        metaDataHash\n        assetHash\n        owner{\n          id\n        }\n        expirationDuration\n      }\n    }\n}": types.GetUnsoldDocument,
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
export function gql(source: "\n  query GetActiveSpaces($ownerAddr:String) @api(name: muzik){\n    advNFTs(where:{owner:$ownerAddr,expirationTime_not:\"0\"}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n        marketItems{\n          price\n        }\n      }\n}"): (typeof documents)["\n  query GetActiveSpaces($ownerAddr:String) @api(name: muzik){\n    advNFTs(where:{owner:$ownerAddr,expirationTime_not:\"0\"}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n        marketItems{\n          price\n        }\n      }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllMusic($currentTime:BigInt) @api(name: muzik) {\n    musicNFTs{\n            advNfts(where:{expirationTime_gt:$currentTime}){\n              assetHash\n              metaDataHash\n            }\n        id\n        creator {\n            id\n        }\n        owner {\n            id\n        }\n        metaDataUri\n        assetUri\n    }\n}"): (typeof documents)["\n  query GetAllMusic($currentTime:BigInt) @api(name: muzik) {\n    musicNFTs{\n            advNfts(where:{expirationTime_gt:$currentTime}){\n              assetHash\n              metaDataHash\n            }\n        id\n        creator {\n            id\n        }\n        owner {\n            id\n        }\n        metaDataUri\n        assetUri\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetExpiredSpaces($currentTime:BigInt,$creator:String) @api(name: muzik) {\n    musicNFTs(where:{creator:$creator}) {\n      advNfts(where: {expirationTime_lt: $currentTime, expirationTime_not: 0,latest:true},first:1) {\n        expirationTime\n        marketItems{\n          price\n        }\n        musicNFT {\n          id\n          metaDataUri\n        }\n      }\n    }\n}"): (typeof documents)["\n  query GetExpiredSpaces($currentTime:BigInt,$creator:String) @api(name: muzik) {\n    musicNFTs(where:{creator:$creator}) {\n      advNfts(where: {expirationTime_lt: $currentTime, expirationTime_not: 0,latest:true},first:1) {\n        expirationTime\n        marketItems{\n          price\n        }\n        musicNFT {\n          id\n          metaDataUri\n        }\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetListed($sellerAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{seller:$sellerAddr,deleted:false}){\n     itemId\n     price\n     sold\n     token {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n  }\n}"): (typeof documents)["\n  query GetListed($sellerAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{seller:$sellerAddr,deleted:false}){\n     itemId\n     price\n     sold\n     token {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUnListed($ownerAddr:String) @api(name: muzik) {\n    advNFTs(where:{listed:false,owner:$ownerAddr}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n}"): (typeof documents)["\n  query GetUnListed($ownerAddr:String) @api(name: muzik) {\n    advNFTs(where:{listed:false,owner:$ownerAddr}) {\n        id\n        musicNFT{\n            metaDataUri\n            assetUri\n        }\n        expirationDuration\n      }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUnsold($nftContractAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{nftContract:$nftContractAddr,sold:false,deleted:false}){\n      itemId\n      owner\n      price\n      seller\n      token{\n        id\n         musicNFT{\n          id\n          creator {\n            id\n          }\n          owner {\n            id\n          }\n          metaDataUri\n          assetUri\n        }\n        metaDataHash\n        assetHash\n        owner{\n          id\n        }\n        expirationDuration\n      }\n    }\n}"): (typeof documents)["\n  query GetUnsold($nftContractAddr:Bytes) @api(name: muzik) {\n    marketItems(where:{nftContract:$nftContractAddr,sold:false,deleted:false}){\n      itemId\n      owner\n      price\n      seller\n      token{\n        id\n         musicNFT{\n          id\n          creator {\n            id\n          }\n          owner {\n            id\n          }\n          metaDataUri\n          assetUri\n        }\n        metaDataHash\n        assetHash\n        owner{\n          id\n        }\n        expirationDuration\n      }\n    }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;