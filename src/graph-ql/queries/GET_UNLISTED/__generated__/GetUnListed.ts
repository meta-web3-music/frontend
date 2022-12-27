/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUnListed
// ====================================================

export interface GetUnListed_advNFTs_musicNFT {
  __typename: "MusicNFT";
  metaDataUri: string;
  assetUri: string;
}

export interface GetUnListed_advNFTs {
  __typename: "AdvNFT";
  id: string;
  musicNFT: GetUnListed_advNFTs_musicNFT;
  expirationDuration: any;
}

export interface GetUnListed {
  advNFTs: GetUnListed_advNFTs[];
}

export interface GetUnListedVariables {
  ownerAddr?: any | null;
}
