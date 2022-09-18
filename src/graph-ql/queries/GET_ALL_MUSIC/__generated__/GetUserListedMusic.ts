/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserListedMusic
// ====================================================

export interface GetUserListedMusic_musicNFTs_advNfts {
  __typename: "AdvNFT";
  expirationDuration: any;
  metaDataHash: string;
}

export interface GetUserListedMusic_musicNFTs_creator {
  __typename: "User";
  id: string;
}

export interface GetUserListedMusic_musicNFTs_owner {
  __typename: "User";
  id: string;
}

export interface GetUserListedMusic_musicNFTs {
  __typename: "MusicNFT";
  advNfts: GetUserListedMusic_musicNFTs_advNfts[];
  id: string;
  creator: GetUserListedMusic_musicNFTs_creator;
  owner: GetUserListedMusic_musicNFTs_owner;
  metaDataUri: string;
  assetUri: string;
}

export interface GetUserListedMusic {
  musicNFTs: GetUserListedMusic_musicNFTs[];
}

export interface GetUserListedMusicVariables {
  userAddress?: string | null;
}
