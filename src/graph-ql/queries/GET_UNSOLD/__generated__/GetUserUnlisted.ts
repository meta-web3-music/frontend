/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserUnlisted
// ====================================================

export interface GetUserUnlisted_marketItems_token_musicNFT_creator {
  __typename: "User";
  id: string;
}

export interface GetUserUnlisted_marketItems_token_musicNFT_owner {
  __typename: "User";
  id: string;
}

export interface GetUserUnlisted_marketItems_token_musicNFT_advNfts {
  __typename: "AdvNFT";
  expirationDuration: any;
}

export interface GetUserUnlisted_marketItems_token_musicNFT {
  __typename: "MusicNFT";
  id: string;
  creator: GetUserUnlisted_marketItems_token_musicNFT_creator;
  owner: GetUserUnlisted_marketItems_token_musicNFT_owner;
  metaDataUri: string;
  assetUri: string;
  advNfts: GetUserUnlisted_marketItems_token_musicNFT_advNfts[];
}

export interface GetUserUnlisted_marketItems_token_owner {
  __typename: "User";
  id: string;
}

export interface GetUserUnlisted_marketItems_token {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetUserUnlisted_marketItems_token_musicNFT;
  metaDataHash: string;
  assetHash: string;
  owner: GetUserUnlisted_marketItems_token_owner;
  expirationDuration: any;
}

export interface GetUserUnlisted_marketItems {
  __typename: "MarketItem";
  itemId: any;
  owner: any;
  price: any;
  sold: boolean;
  seller: any;
  forSale: boolean;
  token: GetUserUnlisted_marketItems_token;
}

export interface GetUserUnlisted {
  marketItems: GetUserUnlisted_marketItems[];
}

export interface GetUserUnlistedVariables {
  sellerAddress?: string | null;
}
