/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserExpiredAdspaces
// ====================================================

export interface GetUserExpiredAdspaces_advNFTs_musicNFT {
  __typename: "MusicNFT";
  metaDataUri: string;
  assetUri: string;
}

export interface GetUserExpiredAdspaces_advNFTs_owner {
  __typename: "User";
  id: string;
}

export interface GetUserExpiredAdspaces_advNFTs {
  __typename: "AdvNFT";
  musicNFT: GetUserExpiredAdspaces_advNFTs_musicNFT;
  expirationDuration: any;
  owner: GetUserExpiredAdspaces_advNFTs_owner;
}

export interface GetUserExpiredAdspaces {
  advNFTs: GetUserExpiredAdspaces_advNFTs[];
}

export interface GetUserExpiredAdspacesVariables {
  userAddress?: string | null;
  expirationTime?: any | null;
}
