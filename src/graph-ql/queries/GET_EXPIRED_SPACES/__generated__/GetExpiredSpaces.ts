/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExpiredSpaces
// ====================================================

export interface GetExpiredSpaces_musicNFTs_advNfts_marketItems {
  __typename: "MarketItem";
  price: any;
}

export interface GetExpiredSpaces_musicNFTs_advNfts_musicNFT {
  __typename: "MusicNFT";
  id: string;
  metaDataUri: string;
}

export interface GetExpiredSpaces_musicNFTs_advNfts {
  __typename: "AdvNFT";
  expirationTime: any;
  marketItems: GetExpiredSpaces_musicNFTs_advNfts_marketItems[];
  musicNFT: GetExpiredSpaces_musicNFTs_advNfts_musicNFT;
}

export interface GetExpiredSpaces_musicNFTs {
  __typename: "MusicNFT";
  advNfts: GetExpiredSpaces_musicNFTs_advNfts[];
}

export interface GetExpiredSpaces {
  musicNFTs: GetExpiredSpaces_musicNFTs[];
}

export interface GetExpiredSpacesVariables {
  currentTime?: any | null;
}
