/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllMusic
// ====================================================

export interface GetAllMusic_musicNFTs_advNfts {
  __typename: "AdvNFT";
  assetHash: string;
}

export interface GetAllMusic_musicNFTs_creator {
  __typename: "User";
  id: string;
}

export interface GetAllMusic_musicNFTs_owner {
  __typename: "User";
  id: string;
}

export interface GetAllMusic_musicNFTs {
  __typename: "MusicNFT";
  advNfts: GetAllMusic_musicNFTs_advNfts[];
  id: string;
  creator: GetAllMusic_musicNFTs_creator;
  owner: GetAllMusic_musicNFTs_owner;
  metaDataUri: string;
  assetUri: string;
}

export interface GetAllMusic {
  musicNFTs: GetAllMusic_musicNFTs[];
}

export interface GetAllMusicVariables {
  currentTime?: any | null;
}
