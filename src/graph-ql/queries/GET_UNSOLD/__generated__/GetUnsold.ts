/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUnsold
// ====================================================

export interface GetUnsold_marketItems_token_musicNFT_creator {
  __typename: "User";
  id: string;
}

export interface GetUnsold_marketItems_token_musicNFT_owner {
  __typename: "User";
  id: string;
}

export interface GetUnsold_marketItems_token_musicNFT {
  __typename: "MusicNFT";
  id: string;
  creator: GetUnsold_marketItems_token_musicNFT_creator;
  owner: GetUnsold_marketItems_token_musicNFT_owner;
  metaDataUri: string;
  assetUri: string;
}

export interface GetUnsold_marketItems_token_owner {
  __typename: "User";
  id: string;
}

export interface GetUnsold_marketItems_token {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetUnsold_marketItems_token_musicNFT;
  metaDataHash: string;
  assetHash: string;
  owner: GetUnsold_marketItems_token_owner;
  expirationDuration: any;
}

export interface GetUnsold_marketItems {
  __typename: "MarketItem";
  itemId: any;
  owner: any;
  price: any;
  seller: any;
  token: GetUnsold_marketItems_token;
}

export interface GetUnsold {
  marketItems: GetUnsold_marketItems[];
}

export interface GetUnsoldVariables {
  nftContractAddr?: any | null;
}
