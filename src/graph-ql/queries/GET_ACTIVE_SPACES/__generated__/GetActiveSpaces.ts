/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetActiveSpaces
// ====================================================

export interface GetActiveSpaces_advNFTs_musicNFT {
  __typename: "MusicNFT";
  metaDataUri: string;
  assetUri: string;
}

export interface GetActiveSpaces_advNFTs_marketItems {
  __typename: "MarketItem";
  price: any;
}

export interface GetActiveSpaces_advNFTs {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetActiveSpaces_advNFTs_musicNFT;
  expirationDuration: any;
  marketItems: GetActiveSpaces_advNFTs_marketItems[];
}

export interface GetActiveSpaces {
  advNFTs: GetActiveSpaces_advNFTs[];
}

export interface GetActiveSpacesVariables {
  ownerAddr?: any | null;
}
