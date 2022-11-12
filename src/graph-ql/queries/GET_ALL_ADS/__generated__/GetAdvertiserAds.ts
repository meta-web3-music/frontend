/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAdvertiserAds
// ====================================================

export interface GetAdvertiserAds_advNFTs_musicNFT {
  __typename: "MusicNFT";
  metaDataUri: string;
  assetUri: string;
}

export interface GetAdvertiserAds_advNFTs {
  __typename: "AdvNFT";
  musicNFT: GetAdvertiserAds_advNFTs_musicNFT;
  assetHash: string;
  expirationDuration: any;
}

export interface GetAdvertiserAds {
  advNFTs: GetAdvertiserAds_advNFTs[];
}

export interface GetAdvertiserAdsVariables {
  advertiserAddress?: string | null;
}
