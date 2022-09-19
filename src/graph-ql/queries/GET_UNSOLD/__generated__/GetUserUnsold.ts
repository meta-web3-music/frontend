/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserUnsold
// ====================================================

export interface GetUserUnsold_marketItems_token_musicNFT_creator {
  __typename: "User";
  id: string;
}

export interface GetUserUnsold_marketItems_token_musicNFT_owner {
  __typename: "User";
  id: string;
}

export interface GetUserUnsold_marketItems_token_musicNFT_advNfts {
  __typename: "AdvNFT";
  expirationDuration: any;
}

export interface GetUserUnsold_marketItems_token_musicNFT {
  __typename: "MusicNFT";
  id: string;
  creator: GetUserUnsold_marketItems_token_musicNFT_creator;
  owner: GetUserUnsold_marketItems_token_musicNFT_owner;
  metaDataUri: string;
  assetUri: string;
  advNfts: GetUserUnsold_marketItems_token_musicNFT_advNfts[];
}

export interface GetUserUnsold_marketItems_token_owner {
  __typename: "User";
  id: string;
}

export interface GetUserUnsold_marketItems_token {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetUserUnsold_marketItems_token_musicNFT;
  metaDataHash: string;
  assetHash: string;
  owner: GetUserUnsold_marketItems_token_owner;
  expirationDuration: any;
}

export interface GetUserUnsold_marketItems {
  __typename: "MarketItem";
  itemId: any;
  owner: any;
  price: any;
  forSale: boolean;
  token: GetUserUnsold_marketItems_token;
}

export interface GetUserUnsold {
  marketItems: GetUserUnsold_marketItems[];
}

export interface GetUserUnsoldVariables {
  sellerAddress?: string | null;
}
