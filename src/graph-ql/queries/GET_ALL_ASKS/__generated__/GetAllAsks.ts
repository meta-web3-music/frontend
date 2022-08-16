/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllAsks
// ====================================================

export interface GetAllAsks_asks_token_musicNFT_creator {
  __typename: "User";
  id: string;
}

export interface GetAllAsks_asks_token_musicNFT_owner {
  __typename: "User";
  id: string;
}

export interface GetAllAsks_asks_token_musicNFT {
  __typename: "MusicNFT";
  id: string;
  creator: GetAllAsks_asks_token_musicNFT_creator;
  owner: GetAllAsks_asks_token_musicNFT_owner;
  metaDataUri: string;
  assetUri: string;
}

export interface GetAllAsks_asks_token_owner {
  __typename: "User";
  id: string;
}

export interface GetAllAsks_asks_token {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetAllAsks_asks_token_musicNFT;
  metaDataHash: string;
  assetHash: string;
  owner: GetAllAsks_asks_token_owner;
  expirationDuration: any;
}

export interface GetAllAsks_asks {
  __typename: "Ask";
  token: GetAllAsks_asks_token;
}

export interface GetAllAsks {
  asks: GetAllAsks_asks[];
}

export interface GetAllAsksVariables {
  nftContractAddr?: any | null;
}
