/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type AdvNft = {
  __typename?: 'AdvNFT';
  assetHash: Scalars['String']['output'];
  expirationDuration: Scalars['BigInt']['output'];
  expirationTime: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  listed: Scalars['Boolean']['output'];
  marketItems: Array<MarketItem>;
  metaDataHash: Scalars['String']['output'];
  musicNFT: MusicNft;
  owner: User;
};


export type AdvNftMarketItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarketItem_Filter>;
};

export type AdvNft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdvNft_Filter>>>;
  assetHash?: InputMaybe<Scalars['String']['input']>;
  assetHash_contains?: InputMaybe<Scalars['String']['input']>;
  assetHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  assetHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetHash_gt?: InputMaybe<Scalars['String']['input']>;
  assetHash_gte?: InputMaybe<Scalars['String']['input']>;
  assetHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  assetHash_lt?: InputMaybe<Scalars['String']['input']>;
  assetHash_lte?: InputMaybe<Scalars['String']['input']>;
  assetHash_not?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  assetHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  assetHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  assetHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  expirationDuration?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTime?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  latest?: InputMaybe<Scalars['Boolean']['input']>;
  latest_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  latest_not?: InputMaybe<Scalars['Boolean']['input']>;
  latest_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listed?: InputMaybe<Scalars['Boolean']['input']>;
  listed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listed_not?: InputMaybe<Scalars['Boolean']['input']>;
  listed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  marketItems_?: InputMaybe<MarketItem_Filter>;
  metaDataHash?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_gt?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_gte?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataHash_lt?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_lte?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT?: InputMaybe<Scalars['String']['input']>;
  musicNFT_?: InputMaybe<MusicNft_Filter>;
  musicNFT_contains?: InputMaybe<Scalars['String']['input']>;
  musicNFT_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT_ends_with?: InputMaybe<Scalars['String']['input']>;
  musicNFT_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT_gt?: InputMaybe<Scalars['String']['input']>;
  musicNFT_gte?: InputMaybe<Scalars['String']['input']>;
  musicNFT_in?: InputMaybe<Array<Scalars['String']['input']>>;
  musicNFT_lt?: InputMaybe<Scalars['String']['input']>;
  musicNFT_lte?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_contains?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  musicNFT_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  musicNFT_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  musicNFT_starts_with?: InputMaybe<Scalars['String']['input']>;
  musicNFT_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdvNft_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AdvNft_OrderBy {
  AssetHash = 'assetHash',
  ExpirationDuration = 'expirationDuration',
  ExpirationTime = 'expirationTime',
  Id = 'id',
  Latest = 'latest',
  Listed = 'listed',
  MarketItems = 'marketItems',
  MetaDataHash = 'metaDataHash',
  MusicNft = 'musicNFT',
  MusicNftAssetUri = 'musicNFT__assetUri',
  MusicNftId = 'musicNFT__id',
  MusicNftMetaDataUri = 'musicNFT__metaDataUri',
  MusicNftTitle = 'musicNFT__title',
  Owner = 'owner',
  OwnerId = 'owner__id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type MarketItem = {
  __typename?: 'MarketItem';
  createdAtTimestamp: Scalars['BigInt']['output'];
  deleted: Scalars['Boolean']['output'];
  forSale: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  itemId: Scalars['BigInt']['output'];
  metaDataUri: Scalars['String']['output'];
  nftContract: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  price: Scalars['BigInt']['output'];
  seller: Scalars['Bytes']['output'];
  sold: Scalars['Boolean']['output'];
  token: AdvNft;
};

export type MarketItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketItem_Filter>>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  deleted_not?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  forSale_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  forSale_not?: InputMaybe<Scalars['Boolean']['input']>;
  forSale_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemId?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  itemId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_not?: InputMaybe<Scalars['BigInt']['input']>;
  itemId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  metaDataUri?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_gt?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_gte?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataUri_lt?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_lte?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketItem_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sold_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  sold_not?: InputMaybe<Scalars['Boolean']['input']>;
  sold_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<AdvNft_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketItem_OrderBy {
  CreatedAtTimestamp = 'createdAtTimestamp',
  Deleted = 'deleted',
  ForSale = 'forSale',
  Id = 'id',
  ItemId = 'itemId',
  MetaDataUri = 'metaDataUri',
  NftContract = 'nftContract',
  Owner = 'owner',
  Price = 'price',
  Seller = 'seller',
  Sold = 'sold',
  Token = 'token',
  TokenAssetHash = 'token__assetHash',
  TokenExpirationDuration = 'token__expirationDuration',
  TokenExpirationTime = 'token__expirationTime',
  TokenId = 'token__id',
  TokenLatest = 'token__latest',
  TokenListed = 'token__listed',
  TokenMetaDataHash = 'token__metaDataHash'
}

export type MusicNft = {
  __typename?: 'MusicNFT';
  advNfts: Array<AdvNft>;
  assetUri: Scalars['String']['output'];
  creator: User;
  id: Scalars['ID']['output'];
  latestAdvNft?: Maybe<AdvNft>;
  metaDataUri: Scalars['String']['output'];
  owner: User;
  title: Scalars['String']['output'];
};


export type MusicNftAdvNftsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdvNft_Filter>;
};

export type MusicNft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advNfts_?: InputMaybe<AdvNft_Filter>;
  and?: InputMaybe<Array<InputMaybe<MusicNft_Filter>>>;
  assetUri?: InputMaybe<Scalars['String']['input']>;
  assetUri_contains?: InputMaybe<Scalars['String']['input']>;
  assetUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  assetUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetUri_gt?: InputMaybe<Scalars['String']['input']>;
  assetUri_gte?: InputMaybe<Scalars['String']['input']>;
  assetUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  assetUri_lt?: InputMaybe<Scalars['String']['input']>;
  assetUri_lte?: InputMaybe<Scalars['String']['input']>;
  assetUri_not?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  assetUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  assetUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  assetUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  latestAdvNft?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_?: InputMaybe<AdvNft_Filter>;
  latestAdvNft_contains?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_gt?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_gte?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestAdvNft_lt?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_lte?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestAdvNft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestAdvNft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_gt?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_gte?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataUri_lt?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_lte?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDataUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDataUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MusicNft_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MusicNft_OrderBy {
  AdvNfts = 'advNfts',
  AssetUri = 'assetUri',
  Creator = 'creator',
  CreatorId = 'creator__id',
  Id = 'id',
  LatestAdvNft = 'latestAdvNft',
  LatestAdvNftAssetHash = 'latestAdvNft__assetHash',
  LatestAdvNftExpirationDuration = 'latestAdvNft__expirationDuration',
  LatestAdvNftExpirationTime = 'latestAdvNft__expirationTime',
  LatestAdvNftId = 'latestAdvNft__id',
  LatestAdvNftLatest = 'latestAdvNft__latest',
  LatestAdvNftListed = 'latestAdvNft__listed',
  LatestAdvNftMetaDataHash = 'latestAdvNft__metaDataHash',
  MetaDataUri = 'metaDataUri',
  Owner = 'owner',
  OwnerId = 'owner__id',
  Title = 'title'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  advNFT?: Maybe<AdvNft>;
  advNFTs: Array<AdvNft>;
  marketItem?: Maybe<MarketItem>;
  marketItems: Array<MarketItem>;
  musicNFT?: Maybe<MusicNft>;
  musicNFTs: Array<MusicNft>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAdvNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvNfTsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvNft_Filter>;
};


export type QueryMarketItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketItem_Filter>;
};


export type QueryMusicNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMusicNfTsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MusicNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MusicNft_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  advNFT?: Maybe<AdvNft>;
  advNFTs: Array<AdvNft>;
  marketItem?: Maybe<MarketItem>;
  marketItems: Array<MarketItem>;
  musicNFT?: Maybe<MusicNft>;
  musicNFTs: Array<MusicNft>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAdvNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdvNfTsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvNft_Filter>;
};


export type SubscriptionMarketItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketItem_Filter>;
};


export type SubscriptionMusicNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMusicNfTsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MusicNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MusicNft_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type User = {
  __typename?: 'User';
  created: Array<MusicNft>;
  id: Scalars['ID']['output'];
  tokens: Array<MusicNft>;
};


export type UserCreatedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MusicNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MusicNft_Filter>;
};


export type UserTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MusicNft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MusicNft_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  created_?: InputMaybe<MusicNft_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  tokens_?: InputMaybe<MusicNft_Filter>;
};

export enum User_OrderBy {
  Created = 'created',
  Id = 'id',
  Tokens = 'tokens'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetActiveSpacesQueryVariables = Exact<{
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetActiveSpacesQuery = { __typename?: 'Query', advNFTs: Array<{ __typename?: 'AdvNFT', id: string, expirationDuration: any, musicNFT: { __typename?: 'MusicNFT', metaDataUri: string, assetUri: string }, marketItems: Array<{ __typename?: 'MarketItem', price: any }> }> };

export type GetAllMusicQueryVariables = Exact<{
  currentTime?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetAllMusicQuery = { __typename?: 'Query', musicNFTs: Array<{ __typename?: 'MusicNFT', id: string, metaDataUri: string, assetUri: string, advNfts: Array<{ __typename?: 'AdvNFT', assetHash: string, metaDataHash: string }>, creator: { __typename?: 'User', id: string }, owner: { __typename?: 'User', id: string } }> };

export type GetExpiredSpacesQueryVariables = Exact<{
  currentTime?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetExpiredSpacesQuery = { __typename?: 'Query', musicNFTs: Array<{ __typename?: 'MusicNFT', advNfts: Array<{ __typename?: 'AdvNFT', expirationTime: any, marketItems: Array<{ __typename?: 'MarketItem', price: any }>, musicNFT: { __typename?: 'MusicNFT', id: string, metaDataUri: string } }> }> };

export type GetListedQueryVariables = Exact<{
  sellerAddr?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetListedQuery = { __typename?: 'Query', marketItems: Array<{ __typename?: 'MarketItem', itemId: any, price: any, sold: boolean, token: { __typename?: 'AdvNFT', id: string, expirationDuration: any, musicNFT: { __typename?: 'MusicNFT', metaDataUri: string, assetUri: string } } }> };

export type GetUnListedQueryVariables = Exact<{
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUnListedQuery = { __typename?: 'Query', advNFTs: Array<{ __typename?: 'AdvNFT', id: string, expirationDuration: any, musicNFT: { __typename?: 'MusicNFT', metaDataUri: string, assetUri: string } }> };

export type GetUnsoldQueryVariables = Exact<{
  nftContractAddr?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetUnsoldQuery = { __typename?: 'Query', marketItems: Array<{ __typename?: 'MarketItem', itemId: any, owner: any, price: any, seller: any, token: { __typename?: 'AdvNFT', id: string, metaDataHash: string, assetHash: string, expirationDuration: any, musicNFT: { __typename?: 'MusicNFT', id: string, metaDataUri: string, assetUri: string, creator: { __typename?: 'User', id: string }, owner: { __typename?: 'User', id: string } }, owner: { __typename?: 'User', id: string } } }> };


export const GetActiveSpacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveSpaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expirationTime_not"},"value":{"kind":"StringValue","value":"0","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"musicNFT"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}},{"kind":"Field","name":{"kind":"Name","value":"assetUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expirationDuration"}},{"kind":"Field","name":{"kind":"Name","value":"marketItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveSpacesQuery, GetActiveSpacesQueryVariables>;
export const GetAllMusicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMusic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"musicNFTs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advNfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expirationTime_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentTime"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetHash"}},{"kind":"Field","name":{"kind":"Name","value":"metaDataHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}},{"kind":"Field","name":{"kind":"Name","value":"assetUri"}}]}}]}}]} as unknown as DocumentNode<GetAllMusicQuery, GetAllMusicQueryVariables>;
export const GetExpiredSpacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExpiredSpaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creator"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"musicNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creator"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advNfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expirationTime_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentTime"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expirationTime_not"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"latest"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expirationTime"}},{"kind":"Field","name":{"kind":"Name","value":"marketItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"musicNFT"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetExpiredSpacesQuery, GetExpiredSpacesQueryVariables>;
export const GetListedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sellerAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"seller"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sellerAddr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"deleted"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"musicNFT"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}},{"kind":"Field","name":{"kind":"Name","value":"assetUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expirationDuration"}}]}}]}}]}}]} as unknown as DocumentNode<GetListedQuery, GetListedQueryVariables>;
export const GetUnListedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnListed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"listed"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"musicNFT"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}},{"kind":"Field","name":{"kind":"Name","value":"assetUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expirationDuration"}}]}}]}}]} as unknown as DocumentNode<GetUnListedQuery, GetUnListedQueryVariables>;
export const GetUnsoldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnsold"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nftContractAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"muzik"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nftContract"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nftContractAddr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sold"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"deleted"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"seller"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"musicNFT"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaDataUri"}},{"kind":"Field","name":{"kind":"Name","value":"assetUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaDataHash"}},{"kind":"Field","name":{"kind":"Name","value":"assetHash"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expirationDuration"}}]}}]}}]}}]} as unknown as DocumentNode<GetUnsoldQuery, GetUnsoldQueryVariables>;