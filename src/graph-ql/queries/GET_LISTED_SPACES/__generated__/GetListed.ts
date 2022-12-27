/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListed
// ====================================================

export interface GetListed_marketItems_token_musicNFT {
  __typename: "MusicNFT";
  metaDataUri: string;
  assetUri: string;
}

export interface GetListed_marketItems_token {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetListed_marketItems_token_musicNFT;
  expirationDuration: any;
}

export interface GetListed_marketItems {
  __typename: "MarketItem";
  itemId: any;
  price: any;
  sold: boolean;
  token: GetListed_marketItems_token;
}

export interface GetListed {
  marketItems: GetListed_marketItems[];
}

export interface GetListedVariables {
  sellerAddr?: any | null;
}
