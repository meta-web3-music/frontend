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
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Address = Node & {
  __typename?: 'Address';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  ensAvatar?: Maybe<Scalars['String']['output']>;
  ensAvatarChecked?: Maybe<Scalars['Datetime']['output']>;
  ensName?: Maybe<Scalars['String']['output']>;
  ensNameChecked?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['String']['output'];
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  isSession?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `LensProfile`. */
  lensProfilesByAddress: LensProfilesConnection;
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  nftTransfersByFrom: NftTransfersConnection;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  nftTransfersByTo: NftTransfersConnection;
  /** Reads and enables pagination through a set of `NftsCollector`. */
  nftsCollectorsByAddressId: NftsCollectorsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `ReservoirEvent`. */
  reservoirEventsByFromAddress: ReservoirEventsConnection;
  /** Reads and enables pagination through a set of `ReservoirEvent`. */
  reservoirEventsByToAddress: ReservoirEventsConnection;
  /** Reads and enables pagination through a set of `ReservoirOrder`. */
  reservoirOrdersByMaker: ReservoirOrdersConnection;
  /** Reads and enables pagination through a set of `ReservoirOrder`. */
  reservoirOrdersByTaker: ReservoirOrdersConnection;
  /** Reads a single `User` that is related to this `Address`. */
  userByUserId?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type AddressLensProfilesByAddressArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<LensProfileCondition>;
  filter?: InputMaybe<LensProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LensProfilesOrderBy>>;
};


export type AddressNftTransfersByFromArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftTransferCondition>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftTransfersOrderBy>>;
};


export type AddressNftTransfersByToArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftTransferCondition>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftTransfersOrderBy>>;
};


export type AddressNftsCollectorsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsCollectorCondition>;
  filter?: InputMaybe<NftsCollectorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsCollectorsOrderBy>>;
};


export type AddressReservoirEventsByFromAddressArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirEventCondition>;
  filter?: InputMaybe<ReservoirEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirEventsOrderBy>>;
};


export type AddressReservoirEventsByToAddressArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirEventCondition>;
  filter?: InputMaybe<ReservoirEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirEventsOrderBy>>;
};


export type AddressReservoirOrdersByMakerArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirOrderCondition>;
  filter?: InputMaybe<ReservoirOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirOrdersOrderBy>>;
};


export type AddressReservoirOrdersByTakerArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirOrderCondition>;
  filter?: InputMaybe<ReservoirOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirOrdersOrderBy>>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `ensAvatar` field. */
  ensAvatar?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `ensAvatarChecked` field. */
  ensAvatarChecked?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `ensName` field. */
  ensName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `ensNameChecked` field. */
  ensNameChecked?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isPublic` field. */
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `isSession` field. */
  isSession?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Address` object types. All fields are combined with a logical ‘and.’ */
export type AddressFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `ensAvatar` field. */
  ensAvatar?: InputMaybe<StringFilter>;
  /** Filter by the object’s `ensAvatarChecked` field. */
  ensAvatarChecked?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `ensName` field. */
  ensName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `ensNameChecked` field. */
  ensNameChecked?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isPublic` field. */
  isPublic?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isSession` field. */
  isSession?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `lensProfilesByAddress` relation. */
  lensProfilesByAddress?: InputMaybe<AddressToManyLensProfileFilter>;
  /** Some related `lensProfilesByAddress` exist. */
  lensProfilesByAddressExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftTransfersByFrom` relation. */
  nftTransfersByFrom?: InputMaybe<AddressToManyNftTransferFilter>;
  /** Some related `nftTransfersByFrom` exist. */
  nftTransfersByFromExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftTransfersByTo` relation. */
  nftTransfersByTo?: InputMaybe<AddressToManyNftTransferFilter>;
  /** Some related `nftTransfersByTo` exist. */
  nftTransfersByToExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsCollectorsByAddressId` relation. */
  nftsCollectorsByAddressId?: InputMaybe<AddressToManyNftsCollectorFilter>;
  /** Some related `nftsCollectorsByAddressId` exist. */
  nftsCollectorsByAddressIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<AddressFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AddressFilter>>;
  /** Filter by the object’s `reservoirEventsByFromAddress` relation. */
  reservoirEventsByFromAddress?: InputMaybe<AddressToManyReservoirEventFilter>;
  /** Some related `reservoirEventsByFromAddress` exist. */
  reservoirEventsByFromAddressExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `reservoirEventsByToAddress` relation. */
  reservoirEventsByToAddress?: InputMaybe<AddressToManyReservoirEventFilter>;
  /** Some related `reservoirEventsByToAddress` exist. */
  reservoirEventsByToAddressExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `reservoirOrdersByMaker` relation. */
  reservoirOrdersByMaker?: InputMaybe<AddressToManyReservoirOrderFilter>;
  /** Some related `reservoirOrdersByMaker` exist. */
  reservoirOrdersByMakerExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `reservoirOrdersByTaker` relation. */
  reservoirOrdersByTaker?: InputMaybe<AddressToManyReservoirOrderFilter>;
  /** Some related `reservoirOrdersByTaker` exist. */
  reservoirOrdersByTakerExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userByUserId` relation. */
  userByUserId?: InputMaybe<UserFilter>;
  /** A related `userByUserId` exists. */
  userByUserIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `LensProfile` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyLensProfileFilter = {
  /** Every related `LensProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<LensProfileFilter>;
  /** No related `LensProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<LensProfileFilter>;
  /** Some related `LensProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<LensProfileFilter>;
};

/** A filter to be used against many `NftTransfer` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyNftTransferFilter = {
  /** Every related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftTransferFilter>;
  /** No related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftTransferFilter>;
  /** Some related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftTransferFilter>;
};

/** A filter to be used against many `NftsCollector` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyNftsCollectorFilter = {
  /** Every related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftsCollectorFilter>;
  /** No related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftsCollectorFilter>;
  /** Some related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftsCollectorFilter>;
};

/** A filter to be used against many `ReservoirEvent` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyReservoirEventFilter = {
  /** Every related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReservoirEventFilter>;
  /** No related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReservoirEventFilter>;
  /** Some related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReservoirEventFilter>;
};

/** A filter to be used against many `ReservoirOrder` object types. All fields are combined with a logical ‘and.’ */
export type AddressToManyReservoirOrderFilter = {
  /** Every related `ReservoirOrder` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReservoirOrderFilter>;
  /** No related `ReservoirOrder` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReservoirOrderFilter>;
  /** Some related `ReservoirOrder` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReservoirOrderFilter>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Maybe<Address>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Address` at the end of the edge. */
  node?: Maybe<Address>;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  EnsAvatarAsc = 'ENS_AVATAR_ASC',
  EnsAvatarCheckedAsc = 'ENS_AVATAR_CHECKED_ASC',
  EnsAvatarCheckedDesc = 'ENS_AVATAR_CHECKED_DESC',
  EnsAvatarDesc = 'ENS_AVATAR_DESC',
  EnsNameAsc = 'ENS_NAME_ASC',
  EnsNameCheckedAsc = 'ENS_NAME_CHECKED_ASC',
  EnsNameCheckedDesc = 'ENS_NAME_CHECKED_DESC',
  EnsNameDesc = 'ENS_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsPublicAsc = 'IS_PUBLIC_ASC',
  IsPublicDesc = 'IS_PUBLIC_DESC',
  IsSessionAsc = 'IS_SESSION_ASC',
  IsSessionDesc = 'IS_SESSION_DESC',
  LensProfilesByAddressCountAsc = 'LENS_PROFILES_BY_ADDRESS__COUNT_ASC',
  LensProfilesByAddressCountDesc = 'LENS_PROFILES_BY_ADDRESS__COUNT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NftsCollectorsByAddressIdCountAsc = 'NFTS_COLLECTORS_BY_ADDRESS_ID__COUNT_ASC',
  NftsCollectorsByAddressIdCountDesc = 'NFTS_COLLECTORS_BY_ADDRESS_ID__COUNT_DESC',
  NftTransfersByFromCountAsc = 'NFT_TRANSFERS_BY_FROM__COUNT_ASC',
  NftTransfersByFromCountDesc = 'NFT_TRANSFERS_BY_FROM__COUNT_DESC',
  NftTransfersByToCountAsc = 'NFT_TRANSFERS_BY_TO__COUNT_ASC',
  NftTransfersByToCountDesc = 'NFT_TRANSFERS_BY_TO__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirEventsByFromAddressCountAsc = 'RESERVOIR_EVENTS_BY_FROM_ADDRESS__COUNT_ASC',
  ReservoirEventsByFromAddressCountDesc = 'RESERVOIR_EVENTS_BY_FROM_ADDRESS__COUNT_DESC',
  ReservoirEventsByToAddressCountAsc = 'RESERVOIR_EVENTS_BY_TO_ADDRESS__COUNT_ASC',
  ReservoirEventsByToAddressCountDesc = 'RESERVOIR_EVENTS_BY_TO_ADDRESS__COUNT_DESC',
  ReservoirOrdersByMakerCountAsc = 'RESERVOIR_ORDERS_BY_MAKER__COUNT_ASC',
  ReservoirOrdersByMakerCountDesc = 'RESERVOIR_ORDERS_BY_MAKER__COUNT_DESC',
  ReservoirOrdersByTakerCountAsc = 'RESERVOIR_ORDERS_BY_TAKER__COUNT_ASC',
  ReservoirOrdersByTakerCountDesc = 'RESERVOIR_ORDERS_BY_TAKER__COUNT_DESC',
  UserByUserIdAvatarIpfshashAsc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_ASC',
  UserByUserIdAvatarIpfshashDesc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_DESC',
  UserByUserIdAvatarUrlAsc = 'USER_BY_USER_ID__AVATAR_URL_ASC',
  UserByUserIdAvatarUrlDesc = 'USER_BY_USER_ID__AVATAR_URL_DESC',
  UserByUserIdCustomThemeAsc = 'USER_BY_USER_ID__CUSTOM_THEME_ASC',
  UserByUserIdCustomThemeDesc = 'USER_BY_USER_ID__CUSTOM_THEME_DESC',
  UserByUserIdDescriptionAsc = 'USER_BY_USER_ID__DESCRIPTION_ASC',
  UserByUserIdDescriptionDesc = 'USER_BY_USER_ID__DESCRIPTION_DESC',
  UserByUserIdIdAsc = 'USER_BY_USER_ID__ID_ASC',
  UserByUserIdIdDesc = 'USER_BY_USER_ID__ID_DESC',
  UserByUserIdNameAsc = 'USER_BY_USER_ID__NAME_ASC',
  UserByUserIdNameDesc = 'USER_BY_USER_ID__NAME_DESC',
  UserByUserIdPredefinedThemeNameAsc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_ASC',
  UserByUserIdPredefinedThemeNameDesc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Artist = Node & {
  __typename?: 'Artist';
  /** Reads and enables pagination through a set of `ArtistEvent`. */
  artistEventsByArtistId: ArtistEventsConnection;
  /** Reads and enables pagination through a set of `ArtistProfile`. */
  artistProfilesByArtistId: ArtistProfilesConnection;
  /** Reads and enables pagination through a set of `ArtistsNft`. */
  artistsNftsByArtistId: ArtistsNftsConnection;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  customTheme?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  predefinedThemeName?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ProcessedTrack`. */
  processedTracksByArtistId: ProcessedTracksConnection;
  /** Reads and enables pagination through a set of `ProcessedTrack`. */
  processedTracksBySupportingArtist: ProcessedTracksConnection;
  slug?: Maybe<Scalars['String']['output']>;
  /** Reads a single `User` that is related to this `Artist`. */
  userByUserId?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type ArtistArtistEventsByArtistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistEventCondition>;
  filter?: InputMaybe<ArtistEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistEventsOrderBy>>;
};


export type ArtistArtistProfilesByArtistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistProfileCondition>;
  filter?: InputMaybe<ArtistProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistProfilesOrderBy>>;
};


export type ArtistArtistsNftsByArtistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistsNftCondition>;
  filter?: InputMaybe<ArtistsNftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsNftsOrderBy>>;
};


export type ArtistProcessedTracksByArtistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProcessedTrackCondition>;
  filter?: InputMaybe<ProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProcessedTracksOrderBy>>;
};


export type ArtistProcessedTracksBySupportingArtistArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProcessedTrackCondition>;
  filter?: InputMaybe<ProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProcessedTracksOrderBy>>;
};

/** A condition to be used against `Artist` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ArtistCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `customTheme` field. */
  customTheme?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `predefinedThemeName` field. */
  predefinedThemeName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistEvent = Node & {
  __typename?: 'ArtistEvent';
  /** Reads a single `Artist` that is related to this `ArtistEvent`. */
  artistByArtistId?: Maybe<Artist>;
  artistId: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `ReservoirEvent` that is related to this `ArtistEvent`. */
  reservoirEventByEventId?: Maybe<ReservoirEvent>;
};

/**
 * A condition to be used against `ArtistEvent` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ArtistEventCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ArtistEvent` object types. All fields are combined with a logical ‘and.’ */
export type ArtistEventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ArtistEventFilter>>;
  /** Filter by the object’s `artistByArtistId` relation. */
  artistByArtistId?: InputMaybe<ArtistFilter>;
  /** A related `artistByArtistId` exists. */
  artistByArtistIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ArtistEventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ArtistEventFilter>>;
  /** Filter by the object’s `reservoirEventByEventId` relation. */
  reservoirEventByEventId?: InputMaybe<ReservoirEventFilter>;
  /** A related `reservoirEventByEventId` exists. */
  reservoirEventByEventIdExists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `ArtistEvent` values. */
export type ArtistEventsConnection = {
  __typename?: 'ArtistEventsConnection';
  /** A list of edges which contains the `ArtistEvent` and cursor to aid in pagination. */
  edges: Array<ArtistEventsEdge>;
  /** A list of `ArtistEvent` objects. */
  nodes: Array<Maybe<ArtistEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ArtistEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ArtistEvent` edge in the connection. */
export type ArtistEventsEdge = {
  __typename?: 'ArtistEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ArtistEvent` at the end of the edge. */
  node?: Maybe<ArtistEvent>;
};

/** Methods to use when ordering `ArtistEvent`. */
export enum ArtistEventsOrderBy {
  ArtistByArtistIdAvatarUrlAsc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_ASC',
  ArtistByArtistIdAvatarUrlDesc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_DESC',
  ArtistByArtistIdCreatedAtBlockNumberAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ArtistByArtistIdCreatedAtBlockNumberDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ArtistByArtistIdCreatedAtTimeAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_ASC',
  ArtistByArtistIdCreatedAtTimeDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_DESC',
  ArtistByArtistIdCustomThemeAsc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_ASC',
  ArtistByArtistIdCustomThemeDesc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_DESC',
  ArtistByArtistIdDescriptionAsc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_ASC',
  ArtistByArtistIdDescriptionDesc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_DESC',
  ArtistByArtistIdIdAsc = 'ARTIST_BY_ARTIST_ID__ID_ASC',
  ArtistByArtistIdIdDesc = 'ARTIST_BY_ARTIST_ID__ID_DESC',
  ArtistByArtistIdNameAsc = 'ARTIST_BY_ARTIST_ID__NAME_ASC',
  ArtistByArtistIdNameDesc = 'ARTIST_BY_ARTIST_ID__NAME_DESC',
  ArtistByArtistIdPredefinedThemeNameAsc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_ASC',
  ArtistByArtistIdPredefinedThemeNameDesc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_DESC',
  ArtistByArtistIdSlugAsc = 'ARTIST_BY_ARTIST_ID__SLUG_ASC',
  ArtistByArtistIdSlugDesc = 'ARTIST_BY_ARTIST_ID__SLUG_DESC',
  ArtistByArtistIdUserIdAsc = 'ARTIST_BY_ARTIST_ID__USER_ID_ASC',
  ArtistByArtistIdUserIdDesc = 'ARTIST_BY_ARTIST_ID__USER_ID_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirEventByEventIdAmountAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_ASC',
  ReservoirEventByEventIdAmountDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_DESC',
  ReservoirEventByEventIdBlockHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_ASC',
  ReservoirEventByEventIdBlockHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_DESC',
  ReservoirEventByEventIdCreatedAtAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_ASC',
  ReservoirEventByEventIdCreatedAtDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_DESC',
  ReservoirEventByEventIdEventTimestampAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_ASC',
  ReservoirEventByEventIdEventTimestampDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_DESC',
  ReservoirEventByEventIdFromAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_ASC',
  ReservoirEventByEventIdFromAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_DESC',
  ReservoirEventByEventIdFromAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_ASC',
  ReservoirEventByEventIdFromAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_DESC',
  ReservoirEventByEventIdFromNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_ASC',
  ReservoirEventByEventIdFromNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_DESC',
  ReservoirEventByEventIdHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_ASC',
  ReservoirEventByEventIdHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_DESC',
  ReservoirEventByEventIdIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_ASC',
  ReservoirEventByEventIdIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_DESC',
  ReservoirEventByEventIdMetadataAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_ASC',
  ReservoirEventByEventIdMetadataDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_DESC',
  ReservoirEventByEventIdNftFactoryIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_ASC',
  ReservoirEventByEventIdNftFactoryIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_DESC',
  ReservoirEventByEventIdOrderIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_ASC',
  ReservoirEventByEventIdOrderIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_DESC',
  ReservoirEventByEventIdPriceAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_ASC',
  ReservoirEventByEventIdPriceDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_DESC',
  ReservoirEventByEventIdTokenIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_ASC',
  ReservoirEventByEventIdTokenIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_DESC',
  ReservoirEventByEventIdToAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_ASC',
  ReservoirEventByEventIdToAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_DESC',
  ReservoirEventByEventIdToAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_ASC',
  ReservoirEventByEventIdToAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_DESC',
  ReservoirEventByEventIdToNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_ASC',
  ReservoirEventByEventIdToNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_DESC',
  ReservoirEventByEventIdTypeAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_ASC',
  ReservoirEventByEventIdTypeDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_DESC'
}

/** A filter to be used against `Artist` object types. All fields are combined with a logical ‘and.’ */
export type ArtistFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ArtistFilter>>;
  /** Filter by the object’s `artistEventsByArtistId` relation. */
  artistEventsByArtistId?: InputMaybe<ArtistToManyArtistEventFilter>;
  /** Some related `artistEventsByArtistId` exist. */
  artistEventsByArtistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistProfilesByArtistId` relation. */
  artistProfilesByArtistId?: InputMaybe<ArtistToManyArtistProfileFilter>;
  /** Some related `artistProfilesByArtistId` exist. */
  artistProfilesByArtistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistsNftsByArtistId` relation. */
  artistsNftsByArtistId?: InputMaybe<ArtistToManyArtistsNftFilter>;
  /** Some related `artistsNftsByArtistId` exist. */
  artistsNftsByArtistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `customTheme` field. */
  customTheme?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ArtistFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ArtistFilter>>;
  /** Filter by the object’s `predefinedThemeName` field. */
  predefinedThemeName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `processedTracksByArtistId` relation. */
  processedTracksByArtistId?: InputMaybe<ArtistToManyProcessedTrackFilter>;
  /** Some related `processedTracksByArtistId` exist. */
  processedTracksByArtistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTracksBySupportingArtist` relation. */
  processedTracksBySupportingArtist?: InputMaybe<ArtistToManyProcessedTrackFilter>;
  /** Some related `processedTracksBySupportingArtist` exist. */
  processedTracksBySupportingArtistExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userByUserId` relation. */
  userByUserId?: InputMaybe<UserFilter>;
  /** A related `userByUserId` exists. */
  userByUserIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

export type ArtistProfile = Node & {
  __typename?: 'ArtistProfile';
  /** Reads a single `Artist` that is related to this `ArtistProfile`. */
  artistByArtistId?: Maybe<Artist>;
  artistId: Scalars['String']['output'];
  avatarIpfsHash?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `ArtistProfile`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId: Scalars['String']['output'];
  platformInternalId?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `ArtistProfile` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ArtistProfileCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `avatarIpfsHash` field. */
  avatarIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ArtistProfile` object types. All fields are combined with a logical ‘and.’ */
export type ArtistProfileFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ArtistProfileFilter>>;
  /** Filter by the object’s `artistByArtistId` relation. */
  artistByArtistId?: InputMaybe<ArtistFilter>;
  /** A related `artistByArtistId` exists. */
  artistByArtistIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `avatarIpfsHash` field. */
  avatarIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ArtistProfileFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ArtistProfileFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<StringFilter>;
};

/** A connection to a list of `ArtistProfile` values. */
export type ArtistProfilesConnection = {
  __typename?: 'ArtistProfilesConnection';
  /** A list of edges which contains the `ArtistProfile` and cursor to aid in pagination. */
  edges: Array<ArtistProfilesEdge>;
  /** A list of `ArtistProfile` objects. */
  nodes: Array<Maybe<ArtistProfile>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ArtistProfile` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ArtistProfile` edge in the connection. */
export type ArtistProfilesEdge = {
  __typename?: 'ArtistProfilesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ArtistProfile` at the end of the edge. */
  node?: Maybe<ArtistProfile>;
};

/** Methods to use when ordering `ArtistProfile`. */
export enum ArtistProfilesOrderBy {
  ArtistByArtistIdAvatarUrlAsc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_ASC',
  ArtistByArtistIdAvatarUrlDesc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_DESC',
  ArtistByArtistIdCreatedAtBlockNumberAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ArtistByArtistIdCreatedAtBlockNumberDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ArtistByArtistIdCreatedAtTimeAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_ASC',
  ArtistByArtistIdCreatedAtTimeDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_DESC',
  ArtistByArtistIdCustomThemeAsc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_ASC',
  ArtistByArtistIdCustomThemeDesc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_DESC',
  ArtistByArtistIdDescriptionAsc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_ASC',
  ArtistByArtistIdDescriptionDesc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_DESC',
  ArtistByArtistIdIdAsc = 'ARTIST_BY_ARTIST_ID__ID_ASC',
  ArtistByArtistIdIdDesc = 'ARTIST_BY_ARTIST_ID__ID_DESC',
  ArtistByArtistIdNameAsc = 'ARTIST_BY_ARTIST_ID__NAME_ASC',
  ArtistByArtistIdNameDesc = 'ARTIST_BY_ARTIST_ID__NAME_DESC',
  ArtistByArtistIdPredefinedThemeNameAsc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_ASC',
  ArtistByArtistIdPredefinedThemeNameDesc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_DESC',
  ArtistByArtistIdSlugAsc = 'ARTIST_BY_ARTIST_ID__SLUG_ASC',
  ArtistByArtistIdSlugDesc = 'ARTIST_BY_ARTIST_ID__SLUG_DESC',
  ArtistByArtistIdUserIdAsc = 'ARTIST_BY_ARTIST_ID__USER_ID_ASC',
  ArtistByArtistIdUserIdDesc = 'ARTIST_BY_ARTIST_ID__USER_ID_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  AvatarIpfshashAsc = 'AVATAR_IPFSHASH_ASC',
  AvatarIpfshashDesc = 'AVATAR_IPFSHASH_DESC',
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PlatformInternalIdAsc = 'PLATFORM_INTERNAL_ID_ASC',
  PlatformInternalIdDesc = 'PLATFORM_INTERNAL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  WebsiteUrlAsc = 'WEBSITE_URL_ASC',
  WebsiteUrlDesc = 'WEBSITE_URL_DESC'
}

/** A filter to be used against many `ArtistEvent` object types. All fields are combined with a logical ‘and.’ */
export type ArtistToManyArtistEventFilter = {
  /** Every related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistEventFilter>;
  /** No related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistEventFilter>;
  /** Some related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistEventFilter>;
};

/** A filter to be used against many `ArtistProfile` object types. All fields are combined with a logical ‘and.’ */
export type ArtistToManyArtistProfileFilter = {
  /** Every related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistProfileFilter>;
  /** No related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistProfileFilter>;
  /** Some related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistProfileFilter>;
};

/** A filter to be used against many `ArtistsNft` object types. All fields are combined with a logical ‘and.’ */
export type ArtistToManyArtistsNftFilter = {
  /** Every related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistsNftFilter>;
  /** No related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistsNftFilter>;
  /** Some related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistsNftFilter>;
};

/** A filter to be used against many `ProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type ArtistToManyProcessedTrackFilter = {
  /** Every related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProcessedTrackFilter>;
  /** No related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProcessedTrackFilter>;
  /** Some related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProcessedTrackFilter>;
};

/** A connection to a list of `Artist` values. */
export type ArtistsConnection = {
  __typename?: 'ArtistsConnection';
  /** A list of edges which contains the `Artist` and cursor to aid in pagination. */
  edges: Array<ArtistsEdge>;
  /** A list of `Artist` objects. */
  nodes: Array<Maybe<Artist>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Artist` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Artist` edge in the connection. */
export type ArtistsEdge = {
  __typename?: 'ArtistsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Artist` at the end of the edge. */
  node?: Maybe<Artist>;
};

export type ArtistsNft = Node & {
  __typename?: 'ArtistsNft';
  /** Reads a single `Artist` that is related to this `ArtistsNft`. */
  artistByArtistId?: Maybe<Artist>;
  artistId: Scalars['String']['output'];
  /** Reads a single `Nft` that is related to this `ArtistsNft`. */
  nftByNftId?: Maybe<Nft>;
  nftId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `ArtistsNft` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ArtistsNftCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftId` field. */
  nftId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ArtistsNft` object types. All fields are combined with a logical ‘and.’ */
export type ArtistsNftFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ArtistsNftFilter>>;
  /** Filter by the object’s `artistByArtistId` relation. */
  artistByArtistId?: InputMaybe<ArtistFilter>;
  /** A related `artistByArtistId` exists. */
  artistByArtistIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftByNftId` relation. */
  nftByNftId?: InputMaybe<NftFilter>;
  /** A related `nftByNftId` exists. */
  nftByNftIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftId` field. */
  nftId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ArtistsNftFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ArtistsNftFilter>>;
};

/** A connection to a list of `ArtistsNft` values. */
export type ArtistsNftsConnection = {
  __typename?: 'ArtistsNftsConnection';
  /** A list of edges which contains the `ArtistsNft` and cursor to aid in pagination. */
  edges: Array<ArtistsNftsEdge>;
  /** A list of `ArtistsNft` objects. */
  nodes: Array<Maybe<ArtistsNft>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ArtistsNft` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ArtistsNft` edge in the connection. */
export type ArtistsNftsEdge = {
  __typename?: 'ArtistsNftsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ArtistsNft` at the end of the edge. */
  node?: Maybe<ArtistsNft>;
};

/** Methods to use when ordering `ArtistsNft`. */
export enum ArtistsNftsOrderBy {
  ArtistByArtistIdAvatarUrlAsc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_ASC',
  ArtistByArtistIdAvatarUrlDesc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_DESC',
  ArtistByArtistIdCreatedAtBlockNumberAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ArtistByArtistIdCreatedAtBlockNumberDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ArtistByArtistIdCreatedAtTimeAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_ASC',
  ArtistByArtistIdCreatedAtTimeDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_DESC',
  ArtistByArtistIdCustomThemeAsc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_ASC',
  ArtistByArtistIdCustomThemeDesc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_DESC',
  ArtistByArtistIdDescriptionAsc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_ASC',
  ArtistByArtistIdDescriptionDesc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_DESC',
  ArtistByArtistIdIdAsc = 'ARTIST_BY_ARTIST_ID__ID_ASC',
  ArtistByArtistIdIdDesc = 'ARTIST_BY_ARTIST_ID__ID_DESC',
  ArtistByArtistIdNameAsc = 'ARTIST_BY_ARTIST_ID__NAME_ASC',
  ArtistByArtistIdNameDesc = 'ARTIST_BY_ARTIST_ID__NAME_DESC',
  ArtistByArtistIdPredefinedThemeNameAsc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_ASC',
  ArtistByArtistIdPredefinedThemeNameDesc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_DESC',
  ArtistByArtistIdSlugAsc = 'ARTIST_BY_ARTIST_ID__SLUG_ASC',
  ArtistByArtistIdSlugDesc = 'ARTIST_BY_ARTIST_ID__SLUG_DESC',
  ArtistByArtistIdUserIdAsc = 'ARTIST_BY_ARTIST_ID__USER_ID_ASC',
  ArtistByArtistIdUserIdDesc = 'ARTIST_BY_ARTIST_ID__USER_ID_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  Natural = 'NATURAL',
  NftByNftIdApprovedAsc = 'NFT_BY_NFT_ID__APPROVED_ASC',
  NftByNftIdApprovedDesc = 'NFT_BY_NFT_ID__APPROVED_DESC',
  NftByNftIdBurnedAsc = 'NFT_BY_NFT_ID__BURNED_ASC',
  NftByNftIdBurnedDesc = 'NFT_BY_NFT_ID__BURNED_DESC',
  NftByNftIdChainIdAsc = 'NFT_BY_NFT_ID__CHAIN_ID_ASC',
  NftByNftIdChainIdDesc = 'NFT_BY_NFT_ID__CHAIN_ID_DESC',
  NftByNftIdContractAddressAsc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_ASC',
  NftByNftIdContractAddressDesc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_DESC',
  NftByNftIdCreatedAtBlockNumberAsc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  NftByNftIdCreatedAtBlockNumberDesc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  NftByNftIdCreatedAtTimeAsc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_ASC',
  NftByNftIdCreatedAtTimeDesc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_DESC',
  NftByNftIdIdAsc = 'NFT_BY_NFT_ID__ID_ASC',
  NftByNftIdIdDesc = 'NFT_BY_NFT_ID__ID_DESC',
  NftByNftIdMetadataAsc = 'NFT_BY_NFT_ID__METADATA_ASC',
  NftByNftIdMetadataDesc = 'NFT_BY_NFT_ID__METADATA_DESC',
  NftByNftIdMetadataIpfshashAsc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_ASC',
  NftByNftIdMetadataIpfshashDesc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_DESC',
  NftByNftIdMimeTypeAsc = 'NFT_BY_NFT_ID__MIME_TYPE_ASC',
  NftByNftIdMimeTypeDesc = 'NFT_BY_NFT_ID__MIME_TYPE_DESC',
  NftByNftIdNftFactoryIdAsc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_ASC',
  NftByNftIdNftFactoryIdDesc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_DESC',
  NftByNftIdPlatformIdAsc = 'NFT_BY_NFT_ID__PLATFORM_ID_ASC',
  NftByNftIdPlatformIdDesc = 'NFT_BY_NFT_ID__PLATFORM_ID_DESC',
  NftByNftIdPublicReleaseTimeAsc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_ASC',
  NftByNftIdPublicReleaseTimeDesc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_DESC',
  NftByNftIdTokenIdAsc = 'NFT_BY_NFT_ID__TOKEN_ID_ASC',
  NftByNftIdTokenIdDesc = 'NFT_BY_NFT_ID__TOKEN_ID_DESC',
  NftByNftIdTokenMetadataUriAsc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_ASC',
  NftByNftIdTokenMetadataUriDesc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_DESC',
  NftByNftIdTokenUriAsc = 'NFT_BY_NFT_ID__TOKEN_URI_ASC',
  NftByNftIdTokenUriDesc = 'NFT_BY_NFT_ID__TOKEN_URI_DESC',
  NftIdAsc = 'NFT_ID_ASC',
  NftIdDesc = 'NFT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `Artist`. */
export enum ArtistsOrderBy {
  ArtistsNftsByArtistIdCountAsc = 'ARTISTS_NFTS_BY_ARTIST_ID__COUNT_ASC',
  ArtistsNftsByArtistIdCountDesc = 'ARTISTS_NFTS_BY_ARTIST_ID__COUNT_DESC',
  ArtistEventsByArtistIdCountAsc = 'ARTIST_EVENTS_BY_ARTIST_ID__COUNT_ASC',
  ArtistEventsByArtistIdCountDesc = 'ARTIST_EVENTS_BY_ARTIST_ID__COUNT_DESC',
  ArtistProfilesByArtistIdCountAsc = 'ARTIST_PROFILES_BY_ARTIST_ID__COUNT_ASC',
  ArtistProfilesByArtistIdCountDesc = 'ARTIST_PROFILES_BY_ARTIST_ID__COUNT_DESC',
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  CustomThemeAsc = 'CUSTOM_THEME_ASC',
  CustomThemeDesc = 'CUSTOM_THEME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PredefinedThemeNameAsc = 'PREDEFINED_THEME_NAME_ASC',
  PredefinedThemeNameDesc = 'PREDEFINED_THEME_NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTracksByArtistIdCountAsc = 'PROCESSED_TRACKS_BY_ARTIST_ID__COUNT_ASC',
  ProcessedTracksByArtistIdCountDesc = 'PROCESSED_TRACKS_BY_ARTIST_ID__COUNT_DESC',
  ProcessedTracksBySupportingArtistCountAsc = 'PROCESSED_TRACKS_BY_SUPPORTING_ARTIST__COUNT_ASC',
  ProcessedTracksBySupportingArtistCountDesc = 'PROCESSED_TRACKS_BY_SUPPORTING_ARTIST__COUNT_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  UserByUserIdAvatarIpfshashAsc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_ASC',
  UserByUserIdAvatarIpfshashDesc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_DESC',
  UserByUserIdAvatarUrlAsc = 'USER_BY_USER_ID__AVATAR_URL_ASC',
  UserByUserIdAvatarUrlDesc = 'USER_BY_USER_ID__AVATAR_URL_DESC',
  UserByUserIdCustomThemeAsc = 'USER_BY_USER_ID__CUSTOM_THEME_ASC',
  UserByUserIdCustomThemeDesc = 'USER_BY_USER_ID__CUSTOM_THEME_DESC',
  UserByUserIdDescriptionAsc = 'USER_BY_USER_ID__DESCRIPTION_ASC',
  UserByUserIdDescriptionDesc = 'USER_BY_USER_ID__DESCRIPTION_DESC',
  UserByUserIdIdAsc = 'USER_BY_USER_ID__ID_ASC',
  UserByUserIdIdDesc = 'USER_BY_USER_ID__ID_DESC',
  UserByUserIdNameAsc = 'USER_BY_USER_ID__NAME_ASC',
  UserByUserIdNameDesc = 'USER_BY_USER_ID__NAME_DESC',
  UserByUserIdPredefinedThemeNameAsc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_ASC',
  UserByUserIdPredefinedThemeNameDesc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Block = Node & {
  __typename?: 'Block';
  blockNumber: Scalars['String']['output'];
  chainId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['Datetime']['output']>;
};

/** A condition to be used against `Block` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BlockCondition = {
  /** Checks for equality with the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against `Block` object types. All fields are combined with a logical ‘and.’ */
export type BlockFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BlockFilter>>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<StringFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BlockFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BlockFilter>>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Block` values. */
export type BlocksConnection = {
  __typename?: 'BlocksConnection';
  /** A list of edges which contains the `Block` and cursor to aid in pagination. */
  edges: Array<BlocksEdge>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Block` edge in the connection. */
export type BlocksEdge = {
  __typename?: 'BlocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};

/** Methods to use when ordering `Block`. */
export enum BlocksOrderBy {
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CollectionSet = Node & {
  __typename?: 'CollectionSet';
  chainId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `NftFactoriesCollectionSet`. */
  nftFactoriesCollectionSetsByCollectionSetId: NftFactoriesCollectionSetsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};


export type CollectionSetNftFactoriesCollectionSetsByCollectionSetIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesCollectionSetCondition>;
  filter?: InputMaybe<NftFactoriesCollectionSetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesCollectionSetsOrderBy>>;
};

/**
 * A condition to be used against `CollectionSet` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CollectionSetCondition = {
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `CollectionSet` object types. All fields are combined with a logical ‘and.’ */
export type CollectionSetFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CollectionSetFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `nftFactoriesCollectionSetsByCollectionSetId` relation. */
  nftFactoriesCollectionSetsByCollectionSetId?: InputMaybe<CollectionSetToManyNftFactoriesCollectionSetFilter>;
  /** Some related `nftFactoriesCollectionSetsByCollectionSetId` exist. */
  nftFactoriesCollectionSetsByCollectionSetIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<CollectionSetFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CollectionSetFilter>>;
};

/** A filter to be used against many `NftFactoriesCollectionSet` object types. All fields are combined with a logical ‘and.’ */
export type CollectionSetToManyNftFactoriesCollectionSetFilter = {
  /** Every related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoriesCollectionSetFilter>;
  /** No related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoriesCollectionSetFilter>;
  /** Some related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoriesCollectionSetFilter>;
};

/** A connection to a list of `CollectionSet` values. */
export type CollectionSetsConnection = {
  __typename?: 'CollectionSetsConnection';
  /** A list of edges which contains the `CollectionSet` and cursor to aid in pagination. */
  edges: Array<CollectionSetsEdge>;
  /** A list of `CollectionSet` objects. */
  nodes: Array<Maybe<CollectionSet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CollectionSet` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CollectionSet` edge in the connection. */
export type CollectionSetsEdge = {
  __typename?: 'CollectionSetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CollectionSet` at the end of the edge. */
  node?: Maybe<CollectionSet>;
};

/** Methods to use when ordering `CollectionSet`. */
export enum CollectionSetsOrderBy {
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NftFactoriesCollectionSetsByCollectionSetIdCountAsc = 'NFT_FACTORIES_COLLECTION_SETS_BY_COLLECTION_SET_ID__COUNT_ASC',
  NftFactoriesCollectionSetsByCollectionSetIdCountDesc = 'NFT_FACTORIES_COLLECTION_SETS_BY_COLLECTION_SET_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CrdtState = Node & {
  __typename?: 'CrdtState';
  column: Scalars['String']['output'];
  entityId: Scalars['String']['output'];
  lastTimestamp?: Maybe<Scalars['Datetime']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  source?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `CrdtState` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CrdtStateCondition = {
  /** Checks for equality with the object’s `column` field. */
  column?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `entityId` field. */
  entityId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastTimestamp` field. */
  lastTimestamp?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `source` field. */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `table` field. */
  table?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `CrdtState` object types. All fields are combined with a logical ‘and.’ */
export type CrdtStateFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CrdtStateFilter>>;
  /** Filter by the object’s `column` field. */
  column?: InputMaybe<StringFilter>;
  /** Filter by the object’s `entityId` field. */
  entityId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastTimestamp` field. */
  lastTimestamp?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CrdtStateFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CrdtStateFilter>>;
  /** Filter by the object’s `source` field. */
  source?: InputMaybe<StringFilter>;
  /** Filter by the object’s `table` field. */
  table?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<StringFilter>;
};

/** A connection to a list of `CrdtState` values. */
export type CrdtStatesConnection = {
  __typename?: 'CrdtStatesConnection';
  /** A list of edges which contains the `CrdtState` and cursor to aid in pagination. */
  edges: Array<CrdtStatesEdge>;
  /** A list of `CrdtState` objects. */
  nodes: Array<Maybe<CrdtState>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CrdtState` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CrdtState` edge in the connection. */
export type CrdtStatesEdge = {
  __typename?: 'CrdtStatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CrdtState` at the end of the edge. */
  node?: Maybe<CrdtState>;
};

/** Methods to use when ordering `CrdtState`. */
export enum CrdtStatesOrderBy {
  ColumnAsc = 'COLUMN_ASC',
  ColumnDesc = 'COLUMN_DESC',
  EntityIdAsc = 'ENTITY_ID_ASC',
  EntityIdDesc = 'ENTITY_ID_DESC',
  LastTimestampAsc = 'LAST_TIMESTAMP_ASC',
  LastTimestampDesc = 'LAST_TIMESTAMP_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TableAsc = 'TABLE_ASC',
  TableDesc = 'TABLE_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type ExternalLinksUser = Node & {
  __typename?: 'ExternalLinksUser';
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** Reads a single `User` that is related to this `ExternalLinksUser`. */
  userByUserId?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `ExternalLinksUser` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ExternalLinksUserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ExternalLinksUser` object types. All fields are combined with a logical ‘and.’ */
export type ExternalLinksUserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ExternalLinksUserFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ExternalLinksUserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ExternalLinksUserFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userByUserId` relation. */
  userByUserId?: InputMaybe<UserFilter>;
  /** A related `userByUserId` exists. */
  userByUserIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `ExternalLinksUser` values. */
export type ExternalLinksUsersConnection = {
  __typename?: 'ExternalLinksUsersConnection';
  /** A list of edges which contains the `ExternalLinksUser` and cursor to aid in pagination. */
  edges: Array<ExternalLinksUsersEdge>;
  /** A list of `ExternalLinksUser` objects. */
  nodes: Array<Maybe<ExternalLinksUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ExternalLinksUser` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ExternalLinksUser` edge in the connection. */
export type ExternalLinksUsersEdge = {
  __typename?: 'ExternalLinksUsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ExternalLinksUser` at the end of the edge. */
  node?: Maybe<ExternalLinksUser>;
};

/** Methods to use when ordering `ExternalLinksUser`. */
export enum ExternalLinksUsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  UserByUserIdAvatarIpfshashAsc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_ASC',
  UserByUserIdAvatarIpfshashDesc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_DESC',
  UserByUserIdAvatarUrlAsc = 'USER_BY_USER_ID__AVATAR_URL_ASC',
  UserByUserIdAvatarUrlDesc = 'USER_BY_USER_ID__AVATAR_URL_DESC',
  UserByUserIdCustomThemeAsc = 'USER_BY_USER_ID__CUSTOM_THEME_ASC',
  UserByUserIdCustomThemeDesc = 'USER_BY_USER_ID__CUSTOM_THEME_DESC',
  UserByUserIdDescriptionAsc = 'USER_BY_USER_ID__DESCRIPTION_ASC',
  UserByUserIdDescriptionDesc = 'USER_BY_USER_ID__DESCRIPTION_DESC',
  UserByUserIdIdAsc = 'USER_BY_USER_ID__ID_ASC',
  UserByUserIdIdDesc = 'USER_BY_USER_ID__ID_DESC',
  UserByUserIdNameAsc = 'USER_BY_USER_ID__NAME_ASC',
  UserByUserIdNameDesc = 'USER_BY_USER_ID__NAME_DESC',
  UserByUserIdPredefinedThemeNameAsc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_ASC',
  UserByUserIdPredefinedThemeNameDesc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type FeedItem = Node & {
  __typename?: 'FeedItem';
  entityId?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  userAction?: Maybe<Scalars['String']['output']>;
  /** Reads a single `User` that is related to this `FeedItem`. */
  userByUserId?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `FeedItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FeedItemCondition = {
  /** Checks for equality with the object’s `entityId` field. */
  entityId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `entityType` field. */
  entityType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userAction` field. */
  userAction?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `FeedItem` object types. All fields are combined with a logical ‘and.’ */
export type FeedItemFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FeedItemFilter>>;
  /** Filter by the object’s `entityId` field. */
  entityId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `entityType` field. */
  entityType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FeedItemFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FeedItemFilter>>;
  /** Filter by the object’s `userAction` field. */
  userAction?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userByUserId` relation. */
  userByUserId?: InputMaybe<UserFilter>;
  /** A related `userByUserId` exists. */
  userByUserIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `FeedItem` values. */
export type FeedItemsConnection = {
  __typename?: 'FeedItemsConnection';
  /** A list of edges which contains the `FeedItem` and cursor to aid in pagination. */
  edges: Array<FeedItemsEdge>;
  /** A list of `FeedItem` objects. */
  nodes: Array<Maybe<FeedItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FeedItem` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `FeedItem` edge in the connection. */
export type FeedItemsEdge = {
  __typename?: 'FeedItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `FeedItem` at the end of the edge. */
  node?: Maybe<FeedItem>;
};

/** Methods to use when ordering `FeedItem`. */
export enum FeedItemsOrderBy {
  EntityIdAsc = 'ENTITY_ID_ASC',
  EntityIdDesc = 'ENTITY_ID_DESC',
  EntityTypeAsc = 'ENTITY_TYPE_ASC',
  EntityTypeDesc = 'ENTITY_TYPE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserActionAsc = 'USER_ACTION_ASC',
  UserActionDesc = 'USER_ACTION_DESC',
  UserByUserIdAvatarIpfshashAsc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_ASC',
  UserByUserIdAvatarIpfshashDesc = 'USER_BY_USER_ID__AVATAR_IPFSHASH_DESC',
  UserByUserIdAvatarUrlAsc = 'USER_BY_USER_ID__AVATAR_URL_ASC',
  UserByUserIdAvatarUrlDesc = 'USER_BY_USER_ID__AVATAR_URL_DESC',
  UserByUserIdCustomThemeAsc = 'USER_BY_USER_ID__CUSTOM_THEME_ASC',
  UserByUserIdCustomThemeDesc = 'USER_BY_USER_ID__CUSTOM_THEME_DESC',
  UserByUserIdDescriptionAsc = 'USER_BY_USER_ID__DESCRIPTION_ASC',
  UserByUserIdDescriptionDesc = 'USER_BY_USER_ID__DESCRIPTION_DESC',
  UserByUserIdIdAsc = 'USER_BY_USER_ID__ID_ASC',
  UserByUserIdIdDesc = 'USER_BY_USER_ID__ID_DESC',
  UserByUserIdNameAsc = 'USER_BY_USER_ID__NAME_ASC',
  UserByUserIdNameDesc = 'USER_BY_USER_ID__NAME_DESC',
  UserByUserIdPredefinedThemeNameAsc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_ASC',
  UserByUserIdPredefinedThemeNameDesc = 'USER_BY_USER_ID__PREDEFINED_THEME_NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type GetUserCollectionType = {
  __typename?: 'GetUserCollectionType';
  count?: Maybe<Scalars['Int']['output']>;
  maxPurchaseTime?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `ProcessedTrack` that is related to this `GetUserCollectionType`. */
  processedTrackByProcessedTrackId?: Maybe<ProcessedTrack>;
  processedTrackId?: Maybe<Scalars['String']['output']>;
};

/** A filter to be used against `GetUserCollectionType` object types. All fields are combined with a logical ‘and.’ */
export type GetUserCollectionTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GetUserCollectionTypeFilter>>;
  /** Filter by the object’s `count` field. */
  count?: InputMaybe<IntFilter>;
  /** Filter by the object’s `maxPurchaseTime` field. */
  maxPurchaseTime?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GetUserCollectionTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GetUserCollectionTypeFilter>>;
  /** Filter by the object’s `processedTrackByProcessedTrackId` relation. */
  processedTrackByProcessedTrackId?: InputMaybe<ProcessedTrackFilter>;
  /** A related `processedTrackByProcessedTrackId` exists. */
  processedTrackByProcessedTrackIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `GetUserCollectionType` values. */
export type GetUserCollectionTypesConnection = {
  __typename?: 'GetUserCollectionTypesConnection';
  /** A list of edges which contains the `GetUserCollectionType` and cursor to aid in pagination. */
  edges: Array<GetUserCollectionTypesEdge>;
  /** A list of `GetUserCollectionType` objects. */
  nodes: Array<Maybe<GetUserCollectionType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GetUserCollectionType` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GetUserCollectionType` edge in the connection. */
export type GetUserCollectionTypesEdge = {
  __typename?: 'GetUserCollectionTypesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GetUserCollectionType` at the end of the edge. */
  node?: Maybe<GetUserCollectionType>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IpfsFile = Node & {
  __typename?: 'IpfsFile';
  cid: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  isAudio?: Maybe<Scalars['Boolean']['output']>;
  isImage?: Maybe<Scalars['Boolean']['output']>;
  isVideo?: Maybe<Scalars['Boolean']['output']>;
  lastRetry?: Maybe<Scalars['Datetime']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  numberOfRetries?: Maybe<Scalars['Int']['output']>;
};

/**
 * A condition to be used against `IpfsFile` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type IpfsFileCondition = {
  /** Checks for equality with the object’s `cid` field. */
  cid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `error` field. */
  error?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isAudio` field. */
  isAudio?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `isImage` field. */
  isImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `isVideo` field. */
  isVideo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `lastRetry` field. */
  lastRetry?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `mimeType` field. */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `numberOfRetries` field. */
  numberOfRetries?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `IpfsFile` object types. All fields are combined with a logical ‘and.’ */
export type IpfsFileFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IpfsFileFilter>>;
  /** Filter by the object’s `cid` field. */
  cid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `error` field. */
  error?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isAudio` field. */
  isAudio?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isImage` field. */
  isImage?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isVideo` field. */
  isVideo?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `lastRetry` field. */
  lastRetry?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `mimeType` field. */
  mimeType?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IpfsFileFilter>;
  /** Filter by the object’s `numberOfRetries` field. */
  numberOfRetries?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IpfsFileFilter>>;
};

/** A connection to a list of `IpfsFile` values. */
export type IpfsFilesConnection = {
  __typename?: 'IpfsFilesConnection';
  /** A list of edges which contains the `IpfsFile` and cursor to aid in pagination. */
  edges: Array<IpfsFilesEdge>;
  /** A list of `IpfsFile` objects. */
  nodes: Array<Maybe<IpfsFile>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `IpfsFile` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `IpfsFile` edge in the connection. */
export type IpfsFilesEdge = {
  __typename?: 'IpfsFilesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `IpfsFile` at the end of the edge. */
  node?: Maybe<IpfsFile>;
};

/** Methods to use when ordering `IpfsFile`. */
export enum IpfsFilesOrderBy {
  CidAsc = 'CID_ASC',
  CidDesc = 'CID_DESC',
  ErrorAsc = 'ERROR_ASC',
  ErrorDesc = 'ERROR_DESC',
  IsAudioAsc = 'IS_AUDIO_ASC',
  IsAudioDesc = 'IS_AUDIO_DESC',
  IsImageAsc = 'IS_IMAGE_ASC',
  IsImageDesc = 'IS_IMAGE_DESC',
  IsVideoAsc = 'IS_VIDEO_ASC',
  IsVideoDesc = 'IS_VIDEO_DESC',
  LastRetryAsc = 'LAST_RETRY_ASC',
  LastRetryDesc = 'LAST_RETRY_DESC',
  MimeTypeAsc = 'MIME_TYPE_ASC',
  MimeTypeDesc = 'MIME_TYPE_DESC',
  Natural = 'NATURAL',
  NumberOfRetriesAsc = 'NUMBER_OF_RETRIES_ASC',
  NumberOfRetriesDesc = 'NUMBER_OF_RETRIES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type IpfsFilesUrl = Node & {
  __typename?: 'IpfsFilesUrl';
  cid?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  lastRetry?: Maybe<Scalars['Datetime']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  numberOfRetries?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

/**
 * A condition to be used against `IpfsFilesUrl` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type IpfsFilesUrlCondition = {
  /** Checks for equality with the object’s `cid` field. */
  cid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `error` field. */
  error?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastRetry` field. */
  lastRetry?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `numberOfRetries` field. */
  numberOfRetries?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `IpfsFilesUrl` object types. All fields are combined with a logical ‘and.’ */
export type IpfsFilesUrlFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IpfsFilesUrlFilter>>;
  /** Filter by the object’s `cid` field. */
  cid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `error` field. */
  error?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastRetry` field. */
  lastRetry?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IpfsFilesUrlFilter>;
  /** Filter by the object’s `numberOfRetries` field. */
  numberOfRetries?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IpfsFilesUrlFilter>>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** A connection to a list of `IpfsFilesUrl` values. */
export type IpfsFilesUrlsConnection = {
  __typename?: 'IpfsFilesUrlsConnection';
  /** A list of edges which contains the `IpfsFilesUrl` and cursor to aid in pagination. */
  edges: Array<IpfsFilesUrlsEdge>;
  /** A list of `IpfsFilesUrl` objects. */
  nodes: Array<Maybe<IpfsFilesUrl>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `IpfsFilesUrl` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `IpfsFilesUrl` edge in the connection. */
export type IpfsFilesUrlsEdge = {
  __typename?: 'IpfsFilesUrlsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `IpfsFilesUrl` at the end of the edge. */
  node?: Maybe<IpfsFilesUrl>;
};

/** Methods to use when ordering `IpfsFilesUrl`. */
export enum IpfsFilesUrlsOrderBy {
  CidAsc = 'CID_ASC',
  CidDesc = 'CID_DESC',
  ErrorAsc = 'ERROR_ASC',
  ErrorDesc = 'ERROR_DESC',
  LastRetryAsc = 'LAST_RETRY_ASC',
  LastRetryDesc = 'LAST_RETRY_DESC',
  Natural = 'NATURAL',
  NumberOfRetriesAsc = 'NUMBER_OF_RETRIES_ASC',
  NumberOfRetriesDesc = 'NUMBER_OF_RETRIES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export type IpfsPin = Node & {
  __typename?: 'IpfsPin';
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  requestId?: Maybe<Scalars['String']['output']>;
};

/** A condition to be used against `IpfsPin` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type IpfsPinCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `requestId` field. */
  requestId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `IpfsPin` object types. All fields are combined with a logical ‘and.’ */
export type IpfsPinFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IpfsPinFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IpfsPinFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IpfsPinFilter>>;
  /** Filter by the object’s `requestId` field. */
  requestId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `IpfsPin` values. */
export type IpfsPinsConnection = {
  __typename?: 'IpfsPinsConnection';
  /** A list of edges which contains the `IpfsPin` and cursor to aid in pagination. */
  edges: Array<IpfsPinsEdge>;
  /** A list of `IpfsPin` objects. */
  nodes: Array<Maybe<IpfsPin>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `IpfsPin` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `IpfsPin` edge in the connection. */
export type IpfsPinsEdge = {
  __typename?: 'IpfsPinsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `IpfsPin` at the end of the edge. */
  node?: Maybe<IpfsPin>;
};

/** Methods to use when ordering `IpfsPin`. */
export enum IpfsPinsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RequestIdAsc = 'REQUEST_ID_ASC',
  RequestIdDesc = 'REQUEST_ID_DESC'
}

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type LensProfile = Node & {
  __typename?: 'LensProfile';
  address?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Address` that is related to this `LensProfile`. */
  addressByAddress?: Maybe<Address>;
  avatar?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  profileId: Scalars['String']['output'];
};

/**
 * A condition to be used against `LensProfile` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LensProfileCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `avatar` field. */
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `handle` field. */
  handle?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `LensProfile` object types. All fields are combined with a logical ‘and.’ */
export type LensProfileFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Filter by the object’s `addressByAddress` relation. */
  addressByAddress?: InputMaybe<AddressFilter>;
  /** A related `addressByAddress` exists. */
  addressByAddressExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LensProfileFilter>>;
  /** Filter by the object’s `avatar` field. */
  avatar?: InputMaybe<StringFilter>;
  /** Filter by the object’s `handle` field. */
  handle?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LensProfileFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LensProfileFilter>>;
  /** Filter by the object’s `profileId` field. */
  profileId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `LensProfile` values. */
export type LensProfilesConnection = {
  __typename?: 'LensProfilesConnection';
  /** A list of edges which contains the `LensProfile` and cursor to aid in pagination. */
  edges: Array<LensProfilesEdge>;
  /** A list of `LensProfile` objects. */
  nodes: Array<Maybe<LensProfile>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LensProfile` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `LensProfile` edge in the connection. */
export type LensProfilesEdge = {
  __typename?: 'LensProfilesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `LensProfile` at the end of the edge. */
  node?: Maybe<LensProfile>;
};

/** Methods to use when ordering `LensProfile`. */
export enum LensProfilesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressByAddressAvatarUrlAsc = 'ADDRESS_BY_ADDRESS__AVATAR_URL_ASC',
  AddressByAddressAvatarUrlDesc = 'ADDRESS_BY_ADDRESS__AVATAR_URL_DESC',
  AddressByAddressEnsAvatarAsc = 'ADDRESS_BY_ADDRESS__ENS_AVATAR_ASC',
  AddressByAddressEnsAvatarCheckedAsc = 'ADDRESS_BY_ADDRESS__ENS_AVATAR_CHECKED_ASC',
  AddressByAddressEnsAvatarCheckedDesc = 'ADDRESS_BY_ADDRESS__ENS_AVATAR_CHECKED_DESC',
  AddressByAddressEnsAvatarDesc = 'ADDRESS_BY_ADDRESS__ENS_AVATAR_DESC',
  AddressByAddressEnsNameAsc = 'ADDRESS_BY_ADDRESS__ENS_NAME_ASC',
  AddressByAddressEnsNameCheckedAsc = 'ADDRESS_BY_ADDRESS__ENS_NAME_CHECKED_ASC',
  AddressByAddressEnsNameCheckedDesc = 'ADDRESS_BY_ADDRESS__ENS_NAME_CHECKED_DESC',
  AddressByAddressEnsNameDesc = 'ADDRESS_BY_ADDRESS__ENS_NAME_DESC',
  AddressByAddressIdAsc = 'ADDRESS_BY_ADDRESS__ID_ASC',
  AddressByAddressIdDesc = 'ADDRESS_BY_ADDRESS__ID_DESC',
  AddressByAddressIsPublicAsc = 'ADDRESS_BY_ADDRESS__IS_PUBLIC_ASC',
  AddressByAddressIsPublicDesc = 'ADDRESS_BY_ADDRESS__IS_PUBLIC_DESC',
  AddressByAddressIsSessionAsc = 'ADDRESS_BY_ADDRESS__IS_SESSION_ASC',
  AddressByAddressIsSessionDesc = 'ADDRESS_BY_ADDRESS__IS_SESSION_DESC',
  AddressByAddressNameAsc = 'ADDRESS_BY_ADDRESS__NAME_ASC',
  AddressByAddressNameDesc = 'ADDRESS_BY_ADDRESS__NAME_DESC',
  AddressByAddressUserIdAsc = 'ADDRESS_BY_ADDRESS__USER_ID_ASC',
  AddressByAddressUserIdDesc = 'ADDRESS_BY_ADDRESS__USER_ID_DESC',
  AddressDesc = 'ADDRESS_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  HandleAsc = 'HANDLE_ASC',
  HandleDesc = 'HANDLE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC'
}

export type Mempool = Node & {
  __typename?: 'Mempool';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  operation?: Maybe<Scalars['String']['output']>;
  originalPayload?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  signer?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
};

/** A condition to be used against `Mempool` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MempoolCondition = {
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `operation` field. */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `originalPayload` field. */
  originalPayload?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `signature` field. */
  signature?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `signer` field. */
  signer?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `source` field. */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `table` field. */
  table?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against `Mempool` object types. All fields are combined with a logical ‘and.’ */
export type MempoolFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MempoolFilter>>;
  /** Filter by the object’s `data` field. */
  data?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MempoolFilter>;
  /** Filter by the object’s `operation` field. */
  operation?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MempoolFilter>>;
  /** Filter by the object’s `originalPayload` field. */
  originalPayload?: InputMaybe<StringFilter>;
  /** Filter by the object’s `signature` field. */
  signature?: InputMaybe<StringFilter>;
  /** Filter by the object’s `signer` field. */
  signer?: InputMaybe<StringFilter>;
  /** Filter by the object’s `source` field. */
  source?: InputMaybe<StringFilter>;
  /** Filter by the object’s `table` field. */
  table?: InputMaybe<StringFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Mempool` values. */
export type MempoolsConnection = {
  __typename?: 'MempoolsConnection';
  /** A list of edges which contains the `Mempool` and cursor to aid in pagination. */
  edges: Array<MempoolsEdge>;
  /** A list of `Mempool` objects. */
  nodes: Array<Maybe<Mempool>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Mempool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Mempool` edge in the connection. */
export type MempoolsEdge = {
  __typename?: 'MempoolsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Mempool` at the end of the edge. */
  node?: Maybe<Mempool>;
};

/** Methods to use when ordering `Mempool`. */
export enum MempoolsOrderBy {
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OperationAsc = 'OPERATION_ASC',
  OperationDesc = 'OPERATION_DESC',
  OriginalPayloadAsc = 'ORIGINAL_PAYLOAD_ASC',
  OriginalPayloadDesc = 'ORIGINAL_PAYLOAD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SignatureAsc = 'SIGNATURE_ASC',
  SignatureDesc = 'SIGNATURE_DESC',
  SignerAsc = 'SIGNER_ASC',
  SignerDesc = 'SIGNER_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TableAsc = 'TABLE_ASC',
  TableDesc = 'TABLE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

/** A connection to a list of `MetaFactory` values. */
export type MetaFactoriesConnection = {
  __typename?: 'MetaFactoriesConnection';
  /** A list of edges which contains the `MetaFactory` and cursor to aid in pagination. */
  edges: Array<MetaFactoriesEdge>;
  /** A list of `MetaFactory` objects. */
  nodes: Array<Maybe<MetaFactory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MetaFactory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MetaFactory` edge in the connection. */
export type MetaFactoriesEdge = {
  __typename?: 'MetaFactoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MetaFactory` at the end of the edge. */
  node?: Maybe<MetaFactory>;
};

/** Methods to use when ordering `MetaFactory`. */
export enum MetaFactoriesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AutoApproveAsc = 'AUTO_APPROVE_ASC',
  AutoApproveDesc = 'AUTO_APPROVE_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  ContractTypeAsc = 'CONTRACT_TYPE_ASC',
  ContractTypeDesc = 'CONTRACT_TYPE_DESC',
  GapAsc = 'GAP_ASC',
  GapDesc = 'GAP_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MintingProtocolAsc = 'MINTING_PROTOCOL_ASC',
  MintingProtocolDesc = 'MINTING_PROTOCOL_DESC',
  Natural = 'NATURAL',
  NftFactoriesByMetaFactoryIdCountAsc = 'NFT_FACTORIES_BY_META_FACTORY_ID__COUNT_ASC',
  NftFactoriesByMetaFactoryIdCountDesc = 'NFT_FACTORIES_BY_META_FACTORY_ID__COUNT_DESC',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PreviewCapableAsc = 'PREVIEW_CAPABLE_ASC',
  PreviewCapableDesc = 'PREVIEW_CAPABLE_DESC',
  PreviewEnabledAsc = 'PREVIEW_ENABLED_ASC',
  PreviewEnabledDesc = 'PREVIEW_ENABLED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StandardAsc = 'STANDARD_ASC',
  StandardDesc = 'STANDARD_DESC',
  StartingBlockAsc = 'STARTING_BLOCK_ASC',
  StartingBlockDesc = 'STARTING_BLOCK_DESC',
  TypeMetadataAsc = 'TYPE_METADATA_ASC',
  TypeMetadataDesc = 'TYPE_METADATA_DESC'
}

export type MetaFactory = Node & {
  __typename?: 'MetaFactory';
  address?: Maybe<Scalars['String']['output']>;
  autoApprove?: Maybe<Scalars['Boolean']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  contractType?: Maybe<Scalars['String']['output']>;
  gap?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  mintingProtocol?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftFactory`. */
  nftFactoriesByMetaFactoryId: NftFactoriesConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `MetaFactory`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId?: Maybe<Scalars['String']['output']>;
  previewCapable?: Maybe<Scalars['Boolean']['output']>;
  previewEnabled?: Maybe<Scalars['Boolean']['output']>;
  standard?: Maybe<Scalars['String']['output']>;
  startingBlock?: Maybe<Scalars['String']['output']>;
  typeMetadata?: Maybe<Scalars['JSON']['output']>;
};


export type MetaFactoryNftFactoriesByMetaFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoryCondition>;
  filter?: InputMaybe<NftFactoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesOrderBy>>;
};

/**
 * A condition to be used against `MetaFactory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MetaFactoryCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `autoApprove` field. */
  autoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `contractType` field. */
  contractType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `gap` field. */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `mintingProtocol` field. */
  mintingProtocol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `previewCapable` field. */
  previewCapable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `previewEnabled` field. */
  previewEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `standard` field. */
  standard?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startingBlock` field. */
  startingBlock?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `typeMetadata` field. */
  typeMetadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** A filter to be used against `MetaFactory` object types. All fields are combined with a logical ‘and.’ */
export type MetaFactoryFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MetaFactoryFilter>>;
  /** Filter by the object’s `autoApprove` field. */
  autoApprove?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `contractType` field. */
  contractType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `gap` field. */
  gap?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mintingProtocol` field. */
  mintingProtocol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftFactoriesByMetaFactoryId` relation. */
  nftFactoriesByMetaFactoryId?: InputMaybe<MetaFactoryToManyNftFactoryFilter>;
  /** Some related `nftFactoriesByMetaFactoryId` exist. */
  nftFactoriesByMetaFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<MetaFactoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MetaFactoryFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `previewCapable` field. */
  previewCapable?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `previewEnabled` field. */
  previewEnabled?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `standard` field. */
  standard?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startingBlock` field. */
  startingBlock?: InputMaybe<StringFilter>;
  /** Filter by the object’s `typeMetadata` field. */
  typeMetadata?: InputMaybe<JsonFilter>;
};

/** A filter to be used against many `NftFactory` object types. All fields are combined with a logical ‘and.’ */
export type MetaFactoryToManyNftFactoryFilter = {
  /** Every related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoryFilter>;
  /** No related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoryFilter>;
  /** Some related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoryFilter>;
};

export type Nft = Node & {
  __typename?: 'Nft';
  approved?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `ArtistsNft`. */
  artistsNftsByNftId: ArtistsNftsConnection;
  burned?: Maybe<Scalars['Boolean']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadataIpfsHash?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftEvent`. */
  nftEventsByNftId: NftEventsConnection;
  /** Reads a single `NftFactory` that is related to this `Nft`. */
  nftFactoryByNftFactoryId?: Maybe<NftFactory>;
  nftFactoryId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  nftTransfersByNftId: NftTransfersConnection;
  /** Reads and enables pagination through a set of `NftsCollector`. */
  nftsCollectorsByNftId: NftsCollectorsConnection;
  /** Reads and enables pagination through a set of `NftsProcessedTrack`. */
  nftsProcessedTracksByNftId: NftsProcessedTracksConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `Nft`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId?: Maybe<Scalars['String']['output']>;
  publicReleaseTime?: Maybe<Scalars['Datetime']['output']>;
  tokenId?: Maybe<Scalars['String']['output']>;
  tokenMetadataUri?: Maybe<Scalars['String']['output']>;
  tokenUri?: Maybe<Scalars['String']['output']>;
};


export type NftArtistsNftsByNftIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistsNftCondition>;
  filter?: InputMaybe<ArtistsNftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsNftsOrderBy>>;
};


export type NftNftEventsByNftIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftEventCondition>;
  filter?: InputMaybe<NftEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftEventsOrderBy>>;
};


export type NftNftTransfersByNftIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftTransferCondition>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftTransfersOrderBy>>;
};


export type NftNftsCollectorsByNftIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsCollectorCondition>;
  filter?: InputMaybe<NftsCollectorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsCollectorsOrderBy>>;
};


export type NftNftsProcessedTracksByNftIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsProcessedTrackCondition>;
  filter?: InputMaybe<NftsProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsProcessedTracksOrderBy>>;
};

/** A condition to be used against `Nft` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NftCondition = {
  /** Checks for equality with the object’s `approved` field. */
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `burned` field. */
  burned?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `metadataIpfsHash` field. */
  metadataIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `mimeType` field. */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `publicReleaseTime` field. */
  publicReleaseTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `tokenId` field. */
  tokenId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenMetadataUri` field. */
  tokenMetadataUri?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenUri` field. */
  tokenUri?: InputMaybe<Scalars['String']['input']>;
};

export type NftEvent = Node & {
  __typename?: 'NftEvent';
  eventId: Scalars['String']['output'];
  /** Reads a single `Nft` that is related to this `NftEvent`. */
  nftByNftId?: Maybe<Nft>;
  nftId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `ReservoirEvent` that is related to this `NftEvent`. */
  reservoirEventByEventId?: Maybe<ReservoirEvent>;
};

/**
 * A condition to be used against `NftEvent` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NftEventCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftId` field. */
  nftId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftEvent` object types. All fields are combined with a logical ‘and.’ */
export type NftEventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftEventFilter>>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftByNftId` relation. */
  nftByNftId?: InputMaybe<NftFilter>;
  /** A related `nftByNftId` exists. */
  nftByNftIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftId` field. */
  nftId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftEventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftEventFilter>>;
  /** Filter by the object’s `reservoirEventByEventId` relation. */
  reservoirEventByEventId?: InputMaybe<ReservoirEventFilter>;
  /** A related `reservoirEventByEventId` exists. */
  reservoirEventByEventIdExists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `NftEvent` values. */
export type NftEventsConnection = {
  __typename?: 'NftEventsConnection';
  /** A list of edges which contains the `NftEvent` and cursor to aid in pagination. */
  edges: Array<NftEventsEdge>;
  /** A list of `NftEvent` objects. */
  nodes: Array<Maybe<NftEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftEvent` edge in the connection. */
export type NftEventsEdge = {
  __typename?: 'NftEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftEvent` at the end of the edge. */
  node?: Maybe<NftEvent>;
};

/** Methods to use when ordering `NftEvent`. */
export enum NftEventsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  NftByNftIdApprovedAsc = 'NFT_BY_NFT_ID__APPROVED_ASC',
  NftByNftIdApprovedDesc = 'NFT_BY_NFT_ID__APPROVED_DESC',
  NftByNftIdBurnedAsc = 'NFT_BY_NFT_ID__BURNED_ASC',
  NftByNftIdBurnedDesc = 'NFT_BY_NFT_ID__BURNED_DESC',
  NftByNftIdChainIdAsc = 'NFT_BY_NFT_ID__CHAIN_ID_ASC',
  NftByNftIdChainIdDesc = 'NFT_BY_NFT_ID__CHAIN_ID_DESC',
  NftByNftIdContractAddressAsc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_ASC',
  NftByNftIdContractAddressDesc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_DESC',
  NftByNftIdCreatedAtBlockNumberAsc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  NftByNftIdCreatedAtBlockNumberDesc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  NftByNftIdCreatedAtTimeAsc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_ASC',
  NftByNftIdCreatedAtTimeDesc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_DESC',
  NftByNftIdIdAsc = 'NFT_BY_NFT_ID__ID_ASC',
  NftByNftIdIdDesc = 'NFT_BY_NFT_ID__ID_DESC',
  NftByNftIdMetadataAsc = 'NFT_BY_NFT_ID__METADATA_ASC',
  NftByNftIdMetadataDesc = 'NFT_BY_NFT_ID__METADATA_DESC',
  NftByNftIdMetadataIpfshashAsc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_ASC',
  NftByNftIdMetadataIpfshashDesc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_DESC',
  NftByNftIdMimeTypeAsc = 'NFT_BY_NFT_ID__MIME_TYPE_ASC',
  NftByNftIdMimeTypeDesc = 'NFT_BY_NFT_ID__MIME_TYPE_DESC',
  NftByNftIdNftFactoryIdAsc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_ASC',
  NftByNftIdNftFactoryIdDesc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_DESC',
  NftByNftIdPlatformIdAsc = 'NFT_BY_NFT_ID__PLATFORM_ID_ASC',
  NftByNftIdPlatformIdDesc = 'NFT_BY_NFT_ID__PLATFORM_ID_DESC',
  NftByNftIdPublicReleaseTimeAsc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_ASC',
  NftByNftIdPublicReleaseTimeDesc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_DESC',
  NftByNftIdTokenIdAsc = 'NFT_BY_NFT_ID__TOKEN_ID_ASC',
  NftByNftIdTokenIdDesc = 'NFT_BY_NFT_ID__TOKEN_ID_DESC',
  NftByNftIdTokenMetadataUriAsc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_ASC',
  NftByNftIdTokenMetadataUriDesc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_DESC',
  NftByNftIdTokenUriAsc = 'NFT_BY_NFT_ID__TOKEN_URI_ASC',
  NftByNftIdTokenUriDesc = 'NFT_BY_NFT_ID__TOKEN_URI_DESC',
  NftIdAsc = 'NFT_ID_ASC',
  NftIdDesc = 'NFT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirEventByEventIdAmountAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_ASC',
  ReservoirEventByEventIdAmountDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_DESC',
  ReservoirEventByEventIdBlockHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_ASC',
  ReservoirEventByEventIdBlockHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_DESC',
  ReservoirEventByEventIdCreatedAtAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_ASC',
  ReservoirEventByEventIdCreatedAtDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_DESC',
  ReservoirEventByEventIdEventTimestampAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_ASC',
  ReservoirEventByEventIdEventTimestampDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_DESC',
  ReservoirEventByEventIdFromAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_ASC',
  ReservoirEventByEventIdFromAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_DESC',
  ReservoirEventByEventIdFromAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_ASC',
  ReservoirEventByEventIdFromAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_DESC',
  ReservoirEventByEventIdFromNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_ASC',
  ReservoirEventByEventIdFromNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_DESC',
  ReservoirEventByEventIdHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_ASC',
  ReservoirEventByEventIdHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_DESC',
  ReservoirEventByEventIdIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_ASC',
  ReservoirEventByEventIdIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_DESC',
  ReservoirEventByEventIdMetadataAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_ASC',
  ReservoirEventByEventIdMetadataDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_DESC',
  ReservoirEventByEventIdNftFactoryIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_ASC',
  ReservoirEventByEventIdNftFactoryIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_DESC',
  ReservoirEventByEventIdOrderIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_ASC',
  ReservoirEventByEventIdOrderIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_DESC',
  ReservoirEventByEventIdPriceAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_ASC',
  ReservoirEventByEventIdPriceDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_DESC',
  ReservoirEventByEventIdTokenIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_ASC',
  ReservoirEventByEventIdTokenIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_DESC',
  ReservoirEventByEventIdToAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_ASC',
  ReservoirEventByEventIdToAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_DESC',
  ReservoirEventByEventIdToAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_ASC',
  ReservoirEventByEventIdToAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_DESC',
  ReservoirEventByEventIdToNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_ASC',
  ReservoirEventByEventIdToNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_DESC',
  ReservoirEventByEventIdTypeAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_ASC',
  ReservoirEventByEventIdTypeDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_DESC'
}

export type NftFactoriesCollectionSet = Node & {
  __typename?: 'NftFactoriesCollectionSet';
  /** Reads a single `CollectionSet` that is related to this `NftFactoriesCollectionSet`. */
  collectionSetByCollectionSetId?: Maybe<CollectionSet>;
  collectionSetId: Scalars['Int']['output'];
  /** Reads a single `NftFactory` that is related to this `NftFactoriesCollectionSet`. */
  nftFactoryByNftFactoryId?: Maybe<NftFactory>;
  nftFactoryId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `NftFactoriesCollectionSet` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type NftFactoriesCollectionSetCondition = {
  /** Checks for equality with the object’s `collectionSetId` field. */
  collectionSetId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftFactoriesCollectionSet` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoriesCollectionSetFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftFactoriesCollectionSetFilter>>;
  /** Filter by the object’s `collectionSetByCollectionSetId` relation. */
  collectionSetByCollectionSetId?: InputMaybe<CollectionSetFilter>;
  /** A related `collectionSetByCollectionSetId` exists. */
  collectionSetByCollectionSetIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `collectionSetId` field. */
  collectionSetId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `nftFactoryByNftFactoryId` relation. */
  nftFactoryByNftFactoryId?: InputMaybe<NftFactoryFilter>;
  /** A related `nftFactoryByNftFactoryId` exists. */
  nftFactoryByNftFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftFactoriesCollectionSetFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftFactoriesCollectionSetFilter>>;
};

/** A connection to a list of `NftFactoriesCollectionSet` values. */
export type NftFactoriesCollectionSetsConnection = {
  __typename?: 'NftFactoriesCollectionSetsConnection';
  /** A list of edges which contains the `NftFactoriesCollectionSet` and cursor to aid in pagination. */
  edges: Array<NftFactoriesCollectionSetsEdge>;
  /** A list of `NftFactoriesCollectionSet` objects. */
  nodes: Array<Maybe<NftFactoriesCollectionSet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftFactoriesCollectionSet` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftFactoriesCollectionSet` edge in the connection. */
export type NftFactoriesCollectionSetsEdge = {
  __typename?: 'NftFactoriesCollectionSetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftFactoriesCollectionSet` at the end of the edge. */
  node?: Maybe<NftFactoriesCollectionSet>;
};

/** Methods to use when ordering `NftFactoriesCollectionSet`. */
export enum NftFactoriesCollectionSetsOrderBy {
  CollectionSetByCollectionSetIdChainIdAsc = 'COLLECTION_SET_BY_COLLECTION_SET_ID__CHAIN_ID_ASC',
  CollectionSetByCollectionSetIdChainIdDesc = 'COLLECTION_SET_BY_COLLECTION_SET_ID__CHAIN_ID_DESC',
  CollectionSetByCollectionSetIdIdAsc = 'COLLECTION_SET_BY_COLLECTION_SET_ID__ID_ASC',
  CollectionSetByCollectionSetIdIdDesc = 'COLLECTION_SET_BY_COLLECTION_SET_ID__ID_DESC',
  CollectionSetIdAsc = 'COLLECTION_SET_ID_ASC',
  CollectionSetIdDesc = 'COLLECTION_SET_ID_DESC',
  Natural = 'NATURAL',
  NftFactoryByNftFactoryIdAddressAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_ASC',
  NftFactoryByNftFactoryIdAddressDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_DESC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_ASC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_DESC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_ASC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_DESC',
  NftFactoryByNftFactoryIdApprovedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_ASC',
  NftFactoryByNftFactoryIdApprovedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_DESC',
  NftFactoryByNftFactoryIdAutoApproveAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_ASC',
  NftFactoryByNftFactoryIdAutoApproveDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_DESC',
  NftFactoryByNftFactoryIdChainIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_ASC',
  NftFactoryByNftFactoryIdChainIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_DESC',
  NftFactoryByNftFactoryIdContractTypeAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_ASC',
  NftFactoryByNftFactoryIdContractTypeDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_DESC',
  NftFactoryByNftFactoryIdIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_ASC',
  NftFactoryByNftFactoryIdIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_DESC',
  NftFactoryByNftFactoryIdMetaFactoryIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_ASC',
  NftFactoryByNftFactoryIdMetaFactoryIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_DESC',
  NftFactoryByNftFactoryIdMintingProtocolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_ASC',
  NftFactoryByNftFactoryIdMintingProtocolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_DESC',
  NftFactoryByNftFactoryIdNameAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_ASC',
  NftFactoryByNftFactoryIdNameDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_DESC',
  NftFactoryByNftFactoryIdPlatformIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_ASC',
  NftFactoryByNftFactoryIdPlatformIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_DESC',
  NftFactoryByNftFactoryIdPreviewCapableAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  NftFactoryByNftFactoryIdPreviewCapableDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  NftFactoryByNftFactoryIdPreviewEnabledAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_ASC',
  NftFactoryByNftFactoryIdPreviewEnabledDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_DESC',
  NftFactoryByNftFactoryIdStandardAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_ASC',
  NftFactoryByNftFactoryIdStandardDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_DESC',
  NftFactoryByNftFactoryIdStartingBlockAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_ASC',
  NftFactoryByNftFactoryIdStartingBlockDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_DESC',
  NftFactoryByNftFactoryIdSymbolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_ASC',
  NftFactoryByNftFactoryIdSymbolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_DESC',
  NftFactoryByNftFactoryIdTypeMetadataAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_ASC',
  NftFactoryByNftFactoryIdTypeMetadataDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_DESC',
  NftFactoryIdAsc = 'NFT_FACTORY_ID_ASC',
  NftFactoryIdDesc = 'NFT_FACTORY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `NftFactory` values. */
export type NftFactoriesConnection = {
  __typename?: 'NftFactoriesConnection';
  /** A list of edges which contains the `NftFactory` and cursor to aid in pagination. */
  edges: Array<NftFactoriesEdge>;
  /** A list of `NftFactory` objects. */
  nodes: Array<Maybe<NftFactory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftFactory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftFactory` edge in the connection. */
export type NftFactoriesEdge = {
  __typename?: 'NftFactoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftFactory` at the end of the edge. */
  node?: Maybe<NftFactory>;
};

/** Methods to use when ordering `NftFactory`. */
export enum NftFactoriesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  ApprovalCheckAlgorithmAsc = 'APPROVAL_CHECK_ALGORITHM_ASC',
  ApprovalCheckAlgorithmDesc = 'APPROVAL_CHECK_ALGORITHM_DESC',
  ApprovalCheckCompletedAsc = 'APPROVAL_CHECK_COMPLETED_ASC',
  ApprovalCheckCompletedDesc = 'APPROVAL_CHECK_COMPLETED_DESC',
  ApprovedAsc = 'APPROVED_ASC',
  ApprovedDesc = 'APPROVED_DESC',
  AutoApproveAsc = 'AUTO_APPROVE_ASC',
  AutoApproveDesc = 'AUTO_APPROVE_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  ContractTypeAsc = 'CONTRACT_TYPE_ASC',
  ContractTypeDesc = 'CONTRACT_TYPE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetaFactoryByMetaFactoryIdAddressAsc = 'META_FACTORY_BY_META_FACTORY_ID__ADDRESS_ASC',
  MetaFactoryByMetaFactoryIdAddressDesc = 'META_FACTORY_BY_META_FACTORY_ID__ADDRESS_DESC',
  MetaFactoryByMetaFactoryIdAutoApproveAsc = 'META_FACTORY_BY_META_FACTORY_ID__AUTO_APPROVE_ASC',
  MetaFactoryByMetaFactoryIdAutoApproveDesc = 'META_FACTORY_BY_META_FACTORY_ID__AUTO_APPROVE_DESC',
  MetaFactoryByMetaFactoryIdChainIdAsc = 'META_FACTORY_BY_META_FACTORY_ID__CHAIN_ID_ASC',
  MetaFactoryByMetaFactoryIdChainIdDesc = 'META_FACTORY_BY_META_FACTORY_ID__CHAIN_ID_DESC',
  MetaFactoryByMetaFactoryIdContractTypeAsc = 'META_FACTORY_BY_META_FACTORY_ID__CONTRACT_TYPE_ASC',
  MetaFactoryByMetaFactoryIdContractTypeDesc = 'META_FACTORY_BY_META_FACTORY_ID__CONTRACT_TYPE_DESC',
  MetaFactoryByMetaFactoryIdGapAsc = 'META_FACTORY_BY_META_FACTORY_ID__GAP_ASC',
  MetaFactoryByMetaFactoryIdGapDesc = 'META_FACTORY_BY_META_FACTORY_ID__GAP_DESC',
  MetaFactoryByMetaFactoryIdIdAsc = 'META_FACTORY_BY_META_FACTORY_ID__ID_ASC',
  MetaFactoryByMetaFactoryIdIdDesc = 'META_FACTORY_BY_META_FACTORY_ID__ID_DESC',
  MetaFactoryByMetaFactoryIdMintingProtocolAsc = 'META_FACTORY_BY_META_FACTORY_ID__MINTING_PROTOCOL_ASC',
  MetaFactoryByMetaFactoryIdMintingProtocolDesc = 'META_FACTORY_BY_META_FACTORY_ID__MINTING_PROTOCOL_DESC',
  MetaFactoryByMetaFactoryIdPlatformIdAsc = 'META_FACTORY_BY_META_FACTORY_ID__PLATFORM_ID_ASC',
  MetaFactoryByMetaFactoryIdPlatformIdDesc = 'META_FACTORY_BY_META_FACTORY_ID__PLATFORM_ID_DESC',
  MetaFactoryByMetaFactoryIdPreviewCapableAsc = 'META_FACTORY_BY_META_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  MetaFactoryByMetaFactoryIdPreviewCapableDesc = 'META_FACTORY_BY_META_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  MetaFactoryByMetaFactoryIdPreviewEnabledAsc = 'META_FACTORY_BY_META_FACTORY_ID__PREVIEW_ENABLED_ASC',
  MetaFactoryByMetaFactoryIdPreviewEnabledDesc = 'META_FACTORY_BY_META_FACTORY_ID__PREVIEW_ENABLED_DESC',
  MetaFactoryByMetaFactoryIdStandardAsc = 'META_FACTORY_BY_META_FACTORY_ID__STANDARD_ASC',
  MetaFactoryByMetaFactoryIdStandardDesc = 'META_FACTORY_BY_META_FACTORY_ID__STANDARD_DESC',
  MetaFactoryByMetaFactoryIdStartingBlockAsc = 'META_FACTORY_BY_META_FACTORY_ID__STARTING_BLOCK_ASC',
  MetaFactoryByMetaFactoryIdStartingBlockDesc = 'META_FACTORY_BY_META_FACTORY_ID__STARTING_BLOCK_DESC',
  MetaFactoryByMetaFactoryIdTypeMetadataAsc = 'META_FACTORY_BY_META_FACTORY_ID__TYPE_METADATA_ASC',
  MetaFactoryByMetaFactoryIdTypeMetadataDesc = 'META_FACTORY_BY_META_FACTORY_ID__TYPE_METADATA_DESC',
  MetaFactoryIdAsc = 'META_FACTORY_ID_ASC',
  MetaFactoryIdDesc = 'META_FACTORY_ID_DESC',
  MintingProtocolAsc = 'MINTING_PROTOCOL_ASC',
  MintingProtocolDesc = 'MINTING_PROTOCOL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NftsByNftFactoryIdCountAsc = 'NFTS_BY_NFT_FACTORY_ID__COUNT_ASC',
  NftsByNftFactoryIdCountDesc = 'NFTS_BY_NFT_FACTORY_ID__COUNT_DESC',
  NftFactoriesCollectionSetsByNftFactoryIdCountAsc = 'NFT_FACTORIES_COLLECTION_SETS_BY_NFT_FACTORY_ID__COUNT_ASC',
  NftFactoriesCollectionSetsByNftFactoryIdCountDesc = 'NFT_FACTORIES_COLLECTION_SETS_BY_NFT_FACTORY_ID__COUNT_DESC',
  NftFactoriesProcessedTracksByNftFactoryIdCountAsc = 'NFT_FACTORIES_PROCESSED_TRACKS_BY_NFT_FACTORY_ID__COUNT_ASC',
  NftFactoriesProcessedTracksByNftFactoryIdCountDesc = 'NFT_FACTORIES_PROCESSED_TRACKS_BY_NFT_FACTORY_ID__COUNT_DESC',
  NftTransfersByNftFactoryIdCountAsc = 'NFT_TRANSFERS_BY_NFT_FACTORY_ID__COUNT_ASC',
  NftTransfersByNftFactoryIdCountDesc = 'NFT_TRANSFERS_BY_NFT_FACTORY_ID__COUNT_DESC',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PreviewCapableAsc = 'PREVIEW_CAPABLE_ASC',
  PreviewCapableDesc = 'PREVIEW_CAPABLE_DESC',
  PreviewEnabledAsc = 'PREVIEW_ENABLED_ASC',
  PreviewEnabledDesc = 'PREVIEW_ENABLED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirEventsByNftFactoryIdCountAsc = 'RESERVOIR_EVENTS_BY_NFT_FACTORY_ID__COUNT_ASC',
  ReservoirEventsByNftFactoryIdCountDesc = 'RESERVOIR_EVENTS_BY_NFT_FACTORY_ID__COUNT_DESC',
  StandardAsc = 'STANDARD_ASC',
  StandardDesc = 'STANDARD_DESC',
  StartingBlockAsc = 'STARTING_BLOCK_ASC',
  StartingBlockDesc = 'STARTING_BLOCK_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  TypeMetadataAsc = 'TYPE_METADATA_ASC',
  TypeMetadataDesc = 'TYPE_METADATA_DESC'
}

export type NftFactoriesProcessedTrack = Node & {
  __typename?: 'NftFactoriesProcessedTrack';
  /** Reads a single `NftFactory` that is related to this `NftFactoriesProcessedTrack`. */
  nftFactoryByNftFactoryId?: Maybe<NftFactory>;
  nftFactoryId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `ProcessedTrack` that is related to this `NftFactoriesProcessedTrack`. */
  processedTrackByProcessedTrackId?: Maybe<ProcessedTrack>;
  processedTrackId: Scalars['String']['output'];
};

/**
 * A condition to be used against `NftFactoriesProcessedTrack` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type NftFactoriesProcessedTrackCondition = {
  /** Checks for equality with the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftFactoriesProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoriesProcessedTrackFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftFactoriesProcessedTrackFilter>>;
  /** Filter by the object’s `nftFactoryByNftFactoryId` relation. */
  nftFactoryByNftFactoryId?: InputMaybe<NftFactoryFilter>;
  /** A related `nftFactoryByNftFactoryId` exists. */
  nftFactoryByNftFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftFactoriesProcessedTrackFilter>>;
  /** Filter by the object’s `processedTrackByProcessedTrackId` relation. */
  processedTrackByProcessedTrackId?: InputMaybe<ProcessedTrackFilter>;
  /** A related `processedTrackByProcessedTrackId` exists. */
  processedTrackByProcessedTrackIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `NftFactoriesProcessedTrack` values. */
export type NftFactoriesProcessedTracksConnection = {
  __typename?: 'NftFactoriesProcessedTracksConnection';
  /** A list of edges which contains the `NftFactoriesProcessedTrack` and cursor to aid in pagination. */
  edges: Array<NftFactoriesProcessedTracksEdge>;
  /** A list of `NftFactoriesProcessedTrack` objects. */
  nodes: Array<Maybe<NftFactoriesProcessedTrack>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftFactoriesProcessedTrack` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftFactoriesProcessedTrack` edge in the connection. */
export type NftFactoriesProcessedTracksEdge = {
  __typename?: 'NftFactoriesProcessedTracksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftFactoriesProcessedTrack` at the end of the edge. */
  node?: Maybe<NftFactoriesProcessedTrack>;
};

/** Methods to use when ordering `NftFactoriesProcessedTrack`. */
export enum NftFactoriesProcessedTracksOrderBy {
  Natural = 'NATURAL',
  NftFactoryByNftFactoryIdAddressAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_ASC',
  NftFactoryByNftFactoryIdAddressDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_DESC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_ASC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_DESC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_ASC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_DESC',
  NftFactoryByNftFactoryIdApprovedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_ASC',
  NftFactoryByNftFactoryIdApprovedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_DESC',
  NftFactoryByNftFactoryIdAutoApproveAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_ASC',
  NftFactoryByNftFactoryIdAutoApproveDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_DESC',
  NftFactoryByNftFactoryIdChainIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_ASC',
  NftFactoryByNftFactoryIdChainIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_DESC',
  NftFactoryByNftFactoryIdContractTypeAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_ASC',
  NftFactoryByNftFactoryIdContractTypeDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_DESC',
  NftFactoryByNftFactoryIdIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_ASC',
  NftFactoryByNftFactoryIdIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_DESC',
  NftFactoryByNftFactoryIdMetaFactoryIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_ASC',
  NftFactoryByNftFactoryIdMetaFactoryIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_DESC',
  NftFactoryByNftFactoryIdMintingProtocolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_ASC',
  NftFactoryByNftFactoryIdMintingProtocolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_DESC',
  NftFactoryByNftFactoryIdNameAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_ASC',
  NftFactoryByNftFactoryIdNameDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_DESC',
  NftFactoryByNftFactoryIdPlatformIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_ASC',
  NftFactoryByNftFactoryIdPlatformIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_DESC',
  NftFactoryByNftFactoryIdPreviewCapableAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  NftFactoryByNftFactoryIdPreviewCapableDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  NftFactoryByNftFactoryIdPreviewEnabledAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_ASC',
  NftFactoryByNftFactoryIdPreviewEnabledDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_DESC',
  NftFactoryByNftFactoryIdStandardAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_ASC',
  NftFactoryByNftFactoryIdStandardDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_DESC',
  NftFactoryByNftFactoryIdStartingBlockAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_ASC',
  NftFactoryByNftFactoryIdStartingBlockDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_DESC',
  NftFactoryByNftFactoryIdSymbolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_ASC',
  NftFactoryByNftFactoryIdSymbolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_DESC',
  NftFactoryByNftFactoryIdTypeMetadataAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_ASC',
  NftFactoryByNftFactoryIdTypeMetadataDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_DESC',
  NftFactoryIdAsc = 'NFT_FACTORY_ID_ASC',
  NftFactoryIdDesc = 'NFT_FACTORY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTrackByProcessedTrackIdArtistIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_ASC',
  ProcessedTrackByProcessedTrackIdArtistIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_DESC',
  ProcessedTrackByProcessedTrackIdDescriptionAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_ASC',
  ProcessedTrackByProcessedTrackIdDescriptionDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_DESC',
  ProcessedTrackByProcessedTrackIdIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_ASC',
  ProcessedTrackByProcessedTrackIdIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_DESC',
  ProcessedTrackByProcessedTrackIdPlatformIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_DESC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_DESC',
  ProcessedTrackByProcessedTrackIdSlugAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_ASC',
  ProcessedTrackByProcessedTrackIdSlugDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_DESC',
  ProcessedTrackByProcessedTrackIdSupportingArtistAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_ASC',
  ProcessedTrackByProcessedTrackIdSupportingArtistDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_DESC',
  ProcessedTrackByProcessedTrackIdTitleAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_ASC',
  ProcessedTrackByProcessedTrackIdTitleDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_DESC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_ASC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_DESC',
  ProcessedTrackIdAsc = 'PROCESSED_TRACK_ID_ASC',
  ProcessedTrackIdDesc = 'PROCESSED_TRACK_ID_DESC'
}

export type NftFactory = Node & {
  __typename?: 'NftFactory';
  address?: Maybe<Scalars['String']['output']>;
  approvalCheckAlgorithm?: Maybe<Scalars['String']['output']>;
  approvalCheckCompleted?: Maybe<Scalars['Boolean']['output']>;
  approved?: Maybe<Scalars['Boolean']['output']>;
  autoApprove?: Maybe<Scalars['Boolean']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  contractType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Reads a single `MetaFactory` that is related to this `NftFactory`. */
  metaFactoryByMetaFactoryId?: Maybe<MetaFactory>;
  metaFactoryId?: Maybe<Scalars['String']['output']>;
  mintingProtocol?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftFactoriesCollectionSet`. */
  nftFactoriesCollectionSetsByNftFactoryId: NftFactoriesCollectionSetsConnection;
  /** Reads and enables pagination through a set of `NftFactoriesProcessedTrack`. */
  nftFactoriesProcessedTracksByNftFactoryId: NftFactoriesProcessedTracksConnection;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  nftTransfersByNftFactoryId: NftTransfersConnection;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByNftFactoryId: NftsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `NftFactory`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId?: Maybe<Scalars['String']['output']>;
  previewCapable?: Maybe<Scalars['Boolean']['output']>;
  previewEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Reads and enables pagination through a set of `ReservoirEvent`. */
  reservoirEventsByNftFactoryId: ReservoirEventsConnection;
  standard?: Maybe<Scalars['String']['output']>;
  startingBlock?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  typeMetadata?: Maybe<Scalars['JSON']['output']>;
};


export type NftFactoryNftFactoriesCollectionSetsByNftFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesCollectionSetCondition>;
  filter?: InputMaybe<NftFactoriesCollectionSetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesCollectionSetsOrderBy>>;
};


export type NftFactoryNftFactoriesProcessedTracksByNftFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesProcessedTrackCondition>;
  filter?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesProcessedTracksOrderBy>>;
};


export type NftFactoryNftTransfersByNftFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftTransferCondition>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftTransfersOrderBy>>;
};


export type NftFactoryNftsByNftFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftCondition>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};


export type NftFactoryReservoirEventsByNftFactoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirEventCondition>;
  filter?: InputMaybe<ReservoirEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirEventsOrderBy>>;
};

/**
 * A condition to be used against `NftFactory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NftFactoryCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `approvalCheckAlgorithm` field. */
  approvalCheckAlgorithm?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `approvalCheckCompleted` field. */
  approvalCheckCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `approved` field. */
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `autoApprove` field. */
  autoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `contractType` field. */
  contractType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `metaFactoryId` field. */
  metaFactoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `mintingProtocol` field. */
  mintingProtocol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `previewCapable` field. */
  previewCapable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `previewEnabled` field. */
  previewEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `standard` field. */
  standard?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `startingBlock` field. */
  startingBlock?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `symbol` field. */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `typeMetadata` field. */
  typeMetadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** A filter to be used against `NftFactory` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftFactoryFilter>>;
  /** Filter by the object’s `approvalCheckAlgorithm` field. */
  approvalCheckAlgorithm?: InputMaybe<StringFilter>;
  /** Filter by the object’s `approvalCheckCompleted` field. */
  approvalCheckCompleted?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `approved` field. */
  approved?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `autoApprove` field. */
  autoApprove?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `contractType` field. */
  contractType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metaFactoryByMetaFactoryId` relation. */
  metaFactoryByMetaFactoryId?: InputMaybe<MetaFactoryFilter>;
  /** A related `metaFactoryByMetaFactoryId` exists. */
  metaFactoryByMetaFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `metaFactoryId` field. */
  metaFactoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mintingProtocol` field. */
  mintingProtocol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftFactoriesCollectionSetsByNftFactoryId` relation. */
  nftFactoriesCollectionSetsByNftFactoryId?: InputMaybe<NftFactoryToManyNftFactoriesCollectionSetFilter>;
  /** Some related `nftFactoriesCollectionSetsByNftFactoryId` exist. */
  nftFactoriesCollectionSetsByNftFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoriesProcessedTracksByNftFactoryId` relation. */
  nftFactoriesProcessedTracksByNftFactoryId?: InputMaybe<NftFactoryToManyNftFactoriesProcessedTrackFilter>;
  /** Some related `nftFactoriesProcessedTracksByNftFactoryId` exist. */
  nftFactoriesProcessedTracksByNftFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftTransfersByNftFactoryId` relation. */
  nftTransfersByNftFactoryId?: InputMaybe<NftFactoryToManyNftTransferFilter>;
  /** Some related `nftTransfersByNftFactoryId` exist. */
  nftTransfersByNftFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsByNftFactoryId` relation. */
  nftsByNftFactoryId?: InputMaybe<NftFactoryToManyNftFilter>;
  /** Some related `nftsByNftFactoryId` exist. */
  nftsByNftFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<NftFactoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftFactoryFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `previewCapable` field. */
  previewCapable?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `previewEnabled` field. */
  previewEnabled?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `reservoirEventsByNftFactoryId` relation. */
  reservoirEventsByNftFactoryId?: InputMaybe<NftFactoryToManyReservoirEventFilter>;
  /** Some related `reservoirEventsByNftFactoryId` exist. */
  reservoirEventsByNftFactoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `standard` field. */
  standard?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startingBlock` field. */
  startingBlock?: InputMaybe<StringFilter>;
  /** Filter by the object’s `symbol` field. */
  symbol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `typeMetadata` field. */
  typeMetadata?: InputMaybe<JsonFilter>;
};

/** A filter to be used against many `NftFactoriesCollectionSet` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryToManyNftFactoriesCollectionSetFilter = {
  /** Every related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoriesCollectionSetFilter>;
  /** No related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoriesCollectionSetFilter>;
  /** Some related `NftFactoriesCollectionSet` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoriesCollectionSetFilter>;
};

/** A filter to be used against many `NftFactoriesProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryToManyNftFactoriesProcessedTrackFilter = {
  /** Every related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  /** No related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  /** Some related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoriesProcessedTrackFilter>;
};

/** A filter to be used against many `Nft` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryToManyNftFilter = {
  /** Every related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFilter>;
  /** No related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFilter>;
  /** Some related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFilter>;
};

/** A filter to be used against many `NftTransfer` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryToManyNftTransferFilter = {
  /** Every related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftTransferFilter>;
  /** No related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftTransferFilter>;
  /** Some related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftTransferFilter>;
};

/** A filter to be used against many `ReservoirEvent` object types. All fields are combined with a logical ‘and.’ */
export type NftFactoryToManyReservoirEventFilter = {
  /** Every related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReservoirEventFilter>;
  /** No related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReservoirEventFilter>;
  /** Some related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReservoirEventFilter>;
};

/** A filter to be used against `Nft` object types. All fields are combined with a logical ‘and.’ */
export type NftFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftFilter>>;
  /** Filter by the object’s `approved` field. */
  approved?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `artistsNftsByNftId` relation. */
  artistsNftsByNftId?: InputMaybe<NftToManyArtistsNftFilter>;
  /** Some related `artistsNftsByNftId` exist. */
  artistsNftsByNftIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `burned` field. */
  burned?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `metadataIpfsHash` field. */
  metadataIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mimeType` field. */
  mimeType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftEventsByNftId` relation. */
  nftEventsByNftId?: InputMaybe<NftToManyNftEventFilter>;
  /** Some related `nftEventsByNftId` exist. */
  nftEventsByNftIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryByNftFactoryId` relation. */
  nftFactoryByNftFactoryId?: InputMaybe<NftFactoryFilter>;
  /** A related `nftFactoryByNftFactoryId` exists. */
  nftFactoryByNftFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftTransfersByNftId` relation. */
  nftTransfersByNftId?: InputMaybe<NftToManyNftTransferFilter>;
  /** Some related `nftTransfersByNftId` exist. */
  nftTransfersByNftIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsCollectorsByNftId` relation. */
  nftsCollectorsByNftId?: InputMaybe<NftToManyNftsCollectorFilter>;
  /** Some related `nftsCollectorsByNftId` exist. */
  nftsCollectorsByNftIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsProcessedTracksByNftId` relation. */
  nftsProcessedTracksByNftId?: InputMaybe<NftToManyNftsProcessedTrackFilter>;
  /** Some related `nftsProcessedTracksByNftId` exist. */
  nftsProcessedTracksByNftIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<NftFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `publicReleaseTime` field. */
  publicReleaseTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `tokenId` field. */
  tokenId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenMetadataUri` field. */
  tokenMetadataUri?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenUri` field. */
  tokenUri?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `ArtistsNft` object types. All fields are combined with a logical ‘and.’ */
export type NftToManyArtistsNftFilter = {
  /** Every related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistsNftFilter>;
  /** No related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistsNftFilter>;
  /** Some related `ArtistsNft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistsNftFilter>;
};

/** A filter to be used against many `NftEvent` object types. All fields are combined with a logical ‘and.’ */
export type NftToManyNftEventFilter = {
  /** Every related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftEventFilter>;
  /** No related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftEventFilter>;
  /** Some related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftEventFilter>;
};

/** A filter to be used against many `NftTransfer` object types. All fields are combined with a logical ‘and.’ */
export type NftToManyNftTransferFilter = {
  /** Every related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftTransferFilter>;
  /** No related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftTransferFilter>;
  /** Some related `NftTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftTransferFilter>;
};

/** A filter to be used against many `NftsCollector` object types. All fields are combined with a logical ‘and.’ */
export type NftToManyNftsCollectorFilter = {
  /** Every related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftsCollectorFilter>;
  /** No related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftsCollectorFilter>;
  /** Some related `NftsCollector` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftsCollectorFilter>;
};

/** A filter to be used against many `NftsProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type NftToManyNftsProcessedTrackFilter = {
  /** Every related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftsProcessedTrackFilter>;
  /** No related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftsProcessedTrackFilter>;
  /** Some related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftsProcessedTrackFilter>;
};

export type NftTransfer = Node & {
  __typename?: 'NftTransfer';
  /** Reads a single `Address` that is related to this `NftTransfer`. */
  addressByFrom?: Maybe<Address>;
  /** Reads a single `Address` that is related to this `NftTransfer`. */
  addressByTo?: Maybe<Address>;
  chainId?: Maybe<Scalars['String']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Reads a single `Nft` that is related to this `NftTransfer`. */
  nftByNftId?: Maybe<Nft>;
  /** Reads a single `NftFactory` that is related to this `NftTransfer`. */
  nftFactoryByNftFactoryId?: Maybe<NftFactory>;
  nftFactoryId?: Maybe<Scalars['String']['output']>;
  nftId?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  to?: Maybe<Scalars['String']['output']>;
  tokenId: Scalars['String']['output'];
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `NftTransfer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NftTransferCondition = {
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `from` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftId` field. */
  nftId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `to` field. */
  to?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenId` field. */
  tokenId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftTransfer` object types. All fields are combined with a logical ‘and.’ */
export type NftTransferFilter = {
  /** Filter by the object’s `addressByFrom` relation. */
  addressByFrom?: InputMaybe<AddressFilter>;
  /** A related `addressByFrom` exists. */
  addressByFromExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `addressByTo` relation. */
  addressByTo?: InputMaybe<AddressFilter>;
  /** A related `addressByTo` exists. */
  addressByToExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftTransferFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `from` field. */
  from?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftByNftId` relation. */
  nftByNftId?: InputMaybe<NftFilter>;
  /** A related `nftByNftId` exists. */
  nftByNftIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryByNftFactoryId` relation. */
  nftFactoryByNftFactoryId?: InputMaybe<NftFactoryFilter>;
  /** A related `nftFactoryByNftFactoryId` exists. */
  nftFactoryByNftFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftId` field. */
  nftId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftTransferFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftTransferFilter>>;
  /** Filter by the object’s `to` field. */
  to?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenId` field. */
  tokenId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<StringFilter>;
};

/** A connection to a list of `NftTransfer` values. */
export type NftTransfersConnection = {
  __typename?: 'NftTransfersConnection';
  /** A list of edges which contains the `NftTransfer` and cursor to aid in pagination. */
  edges: Array<NftTransfersEdge>;
  /** A list of `NftTransfer` objects. */
  nodes: Array<Maybe<NftTransfer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftTransfer` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftTransfer` edge in the connection. */
export type NftTransfersEdge = {
  __typename?: 'NftTransfersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftTransfer` at the end of the edge. */
  node?: Maybe<NftTransfer>;
};

/** Methods to use when ordering `NftTransfer`. */
export enum NftTransfersOrderBy {
  AddressByFromAvatarUrlAsc = 'ADDRESS_BY_FROM__AVATAR_URL_ASC',
  AddressByFromAvatarUrlDesc = 'ADDRESS_BY_FROM__AVATAR_URL_DESC',
  AddressByFromEnsAvatarAsc = 'ADDRESS_BY_FROM__ENS_AVATAR_ASC',
  AddressByFromEnsAvatarCheckedAsc = 'ADDRESS_BY_FROM__ENS_AVATAR_CHECKED_ASC',
  AddressByFromEnsAvatarCheckedDesc = 'ADDRESS_BY_FROM__ENS_AVATAR_CHECKED_DESC',
  AddressByFromEnsAvatarDesc = 'ADDRESS_BY_FROM__ENS_AVATAR_DESC',
  AddressByFromEnsNameAsc = 'ADDRESS_BY_FROM__ENS_NAME_ASC',
  AddressByFromEnsNameCheckedAsc = 'ADDRESS_BY_FROM__ENS_NAME_CHECKED_ASC',
  AddressByFromEnsNameCheckedDesc = 'ADDRESS_BY_FROM__ENS_NAME_CHECKED_DESC',
  AddressByFromEnsNameDesc = 'ADDRESS_BY_FROM__ENS_NAME_DESC',
  AddressByFromIdAsc = 'ADDRESS_BY_FROM__ID_ASC',
  AddressByFromIdDesc = 'ADDRESS_BY_FROM__ID_DESC',
  AddressByFromIsPublicAsc = 'ADDRESS_BY_FROM__IS_PUBLIC_ASC',
  AddressByFromIsPublicDesc = 'ADDRESS_BY_FROM__IS_PUBLIC_DESC',
  AddressByFromIsSessionAsc = 'ADDRESS_BY_FROM__IS_SESSION_ASC',
  AddressByFromIsSessionDesc = 'ADDRESS_BY_FROM__IS_SESSION_DESC',
  AddressByFromNameAsc = 'ADDRESS_BY_FROM__NAME_ASC',
  AddressByFromNameDesc = 'ADDRESS_BY_FROM__NAME_DESC',
  AddressByFromUserIdAsc = 'ADDRESS_BY_FROM__USER_ID_ASC',
  AddressByFromUserIdDesc = 'ADDRESS_BY_FROM__USER_ID_DESC',
  AddressByToAvatarUrlAsc = 'ADDRESS_BY_TO__AVATAR_URL_ASC',
  AddressByToAvatarUrlDesc = 'ADDRESS_BY_TO__AVATAR_URL_DESC',
  AddressByToEnsAvatarAsc = 'ADDRESS_BY_TO__ENS_AVATAR_ASC',
  AddressByToEnsAvatarCheckedAsc = 'ADDRESS_BY_TO__ENS_AVATAR_CHECKED_ASC',
  AddressByToEnsAvatarCheckedDesc = 'ADDRESS_BY_TO__ENS_AVATAR_CHECKED_DESC',
  AddressByToEnsAvatarDesc = 'ADDRESS_BY_TO__ENS_AVATAR_DESC',
  AddressByToEnsNameAsc = 'ADDRESS_BY_TO__ENS_NAME_ASC',
  AddressByToEnsNameCheckedAsc = 'ADDRESS_BY_TO__ENS_NAME_CHECKED_ASC',
  AddressByToEnsNameCheckedDesc = 'ADDRESS_BY_TO__ENS_NAME_CHECKED_DESC',
  AddressByToEnsNameDesc = 'ADDRESS_BY_TO__ENS_NAME_DESC',
  AddressByToIdAsc = 'ADDRESS_BY_TO__ID_ASC',
  AddressByToIdDesc = 'ADDRESS_BY_TO__ID_DESC',
  AddressByToIsPublicAsc = 'ADDRESS_BY_TO__IS_PUBLIC_ASC',
  AddressByToIsPublicDesc = 'ADDRESS_BY_TO__IS_PUBLIC_DESC',
  AddressByToIsSessionAsc = 'ADDRESS_BY_TO__IS_SESSION_ASC',
  AddressByToIsSessionDesc = 'ADDRESS_BY_TO__IS_SESSION_DESC',
  AddressByToNameAsc = 'ADDRESS_BY_TO__NAME_ASC',
  AddressByToNameDesc = 'ADDRESS_BY_TO__NAME_DESC',
  AddressByToUserIdAsc = 'ADDRESS_BY_TO__USER_ID_ASC',
  AddressByToUserIdDesc = 'ADDRESS_BY_TO__USER_ID_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  ContractAddressAsc = 'CONTRACT_ADDRESS_ASC',
  ContractAddressDesc = 'CONTRACT_ADDRESS_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  FromAsc = 'FROM_ASC',
  FromDesc = 'FROM_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NftByNftIdApprovedAsc = 'NFT_BY_NFT_ID__APPROVED_ASC',
  NftByNftIdApprovedDesc = 'NFT_BY_NFT_ID__APPROVED_DESC',
  NftByNftIdBurnedAsc = 'NFT_BY_NFT_ID__BURNED_ASC',
  NftByNftIdBurnedDesc = 'NFT_BY_NFT_ID__BURNED_DESC',
  NftByNftIdChainIdAsc = 'NFT_BY_NFT_ID__CHAIN_ID_ASC',
  NftByNftIdChainIdDesc = 'NFT_BY_NFT_ID__CHAIN_ID_DESC',
  NftByNftIdContractAddressAsc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_ASC',
  NftByNftIdContractAddressDesc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_DESC',
  NftByNftIdCreatedAtBlockNumberAsc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  NftByNftIdCreatedAtBlockNumberDesc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  NftByNftIdCreatedAtTimeAsc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_ASC',
  NftByNftIdCreatedAtTimeDesc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_DESC',
  NftByNftIdIdAsc = 'NFT_BY_NFT_ID__ID_ASC',
  NftByNftIdIdDesc = 'NFT_BY_NFT_ID__ID_DESC',
  NftByNftIdMetadataAsc = 'NFT_BY_NFT_ID__METADATA_ASC',
  NftByNftIdMetadataDesc = 'NFT_BY_NFT_ID__METADATA_DESC',
  NftByNftIdMetadataIpfshashAsc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_ASC',
  NftByNftIdMetadataIpfshashDesc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_DESC',
  NftByNftIdMimeTypeAsc = 'NFT_BY_NFT_ID__MIME_TYPE_ASC',
  NftByNftIdMimeTypeDesc = 'NFT_BY_NFT_ID__MIME_TYPE_DESC',
  NftByNftIdNftFactoryIdAsc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_ASC',
  NftByNftIdNftFactoryIdDesc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_DESC',
  NftByNftIdPlatformIdAsc = 'NFT_BY_NFT_ID__PLATFORM_ID_ASC',
  NftByNftIdPlatformIdDesc = 'NFT_BY_NFT_ID__PLATFORM_ID_DESC',
  NftByNftIdPublicReleaseTimeAsc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_ASC',
  NftByNftIdPublicReleaseTimeDesc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_DESC',
  NftByNftIdTokenIdAsc = 'NFT_BY_NFT_ID__TOKEN_ID_ASC',
  NftByNftIdTokenIdDesc = 'NFT_BY_NFT_ID__TOKEN_ID_DESC',
  NftByNftIdTokenMetadataUriAsc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_ASC',
  NftByNftIdTokenMetadataUriDesc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_DESC',
  NftByNftIdTokenUriAsc = 'NFT_BY_NFT_ID__TOKEN_URI_ASC',
  NftByNftIdTokenUriDesc = 'NFT_BY_NFT_ID__TOKEN_URI_DESC',
  NftFactoryByNftFactoryIdAddressAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_ASC',
  NftFactoryByNftFactoryIdAddressDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_DESC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_ASC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_DESC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_ASC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_DESC',
  NftFactoryByNftFactoryIdApprovedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_ASC',
  NftFactoryByNftFactoryIdApprovedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_DESC',
  NftFactoryByNftFactoryIdAutoApproveAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_ASC',
  NftFactoryByNftFactoryIdAutoApproveDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_DESC',
  NftFactoryByNftFactoryIdChainIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_ASC',
  NftFactoryByNftFactoryIdChainIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_DESC',
  NftFactoryByNftFactoryIdContractTypeAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_ASC',
  NftFactoryByNftFactoryIdContractTypeDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_DESC',
  NftFactoryByNftFactoryIdIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_ASC',
  NftFactoryByNftFactoryIdIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_DESC',
  NftFactoryByNftFactoryIdMetaFactoryIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_ASC',
  NftFactoryByNftFactoryIdMetaFactoryIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_DESC',
  NftFactoryByNftFactoryIdMintingProtocolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_ASC',
  NftFactoryByNftFactoryIdMintingProtocolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_DESC',
  NftFactoryByNftFactoryIdNameAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_ASC',
  NftFactoryByNftFactoryIdNameDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_DESC',
  NftFactoryByNftFactoryIdPlatformIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_ASC',
  NftFactoryByNftFactoryIdPlatformIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_DESC',
  NftFactoryByNftFactoryIdPreviewCapableAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  NftFactoryByNftFactoryIdPreviewCapableDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  NftFactoryByNftFactoryIdPreviewEnabledAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_ASC',
  NftFactoryByNftFactoryIdPreviewEnabledDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_DESC',
  NftFactoryByNftFactoryIdStandardAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_ASC',
  NftFactoryByNftFactoryIdStandardDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_DESC',
  NftFactoryByNftFactoryIdStartingBlockAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_ASC',
  NftFactoryByNftFactoryIdStartingBlockDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_DESC',
  NftFactoryByNftFactoryIdSymbolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_ASC',
  NftFactoryByNftFactoryIdSymbolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_DESC',
  NftFactoryByNftFactoryIdTypeMetadataAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_ASC',
  NftFactoryByNftFactoryIdTypeMetadataDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_DESC',
  NftFactoryIdAsc = 'NFT_FACTORY_ID_ASC',
  NftFactoryIdDesc = 'NFT_FACTORY_ID_DESC',
  NftIdAsc = 'NFT_ID_ASC',
  NftIdDesc = 'NFT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  ToAsc = 'TO_ASC',
  ToDesc = 'TO_DESC',
  TransactionHashAsc = 'TRANSACTION_HASH_ASC',
  TransactionHashDesc = 'TRANSACTION_HASH_DESC'
}

export type NftsCollector = Node & {
  __typename?: 'NftsCollector';
  /** Reads a single `Address` that is related to this `NftsCollector`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['String']['output'];
  amount?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Nft` that is related to this `NftsCollector`. */
  nftByNftId?: Maybe<Nft>;
  nftId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `NftsCollector` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NftsCollectorCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `nftId` field. */
  nftId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftsCollector` object types. All fields are combined with a logical ‘and.’ */
export type NftsCollectorFilter = {
  /** Filter by the object’s `addressByAddressId` relation. */
  addressByAddressId?: InputMaybe<AddressFilter>;
  /** A related `addressByAddressId` exists. */
  addressByAddressIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `addressId` field. */
  addressId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftsCollectorFilter>>;
  /** Filter by the object’s `nftByNftId` relation. */
  nftByNftId?: InputMaybe<NftFilter>;
  /** A related `nftByNftId` exists. */
  nftByNftIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftId` field. */
  nftId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftsCollectorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftsCollectorFilter>>;
};

/** A connection to a list of `NftsCollector` values. */
export type NftsCollectorsConnection = {
  __typename?: 'NftsCollectorsConnection';
  /** A list of edges which contains the `NftsCollector` and cursor to aid in pagination. */
  edges: Array<NftsCollectorsEdge>;
  /** A list of `NftsCollector` objects. */
  nodes: Array<Maybe<NftsCollector>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftsCollector` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftsCollector` edge in the connection. */
export type NftsCollectorsEdge = {
  __typename?: 'NftsCollectorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftsCollector` at the end of the edge. */
  node?: Maybe<NftsCollector>;
};

/** Methods to use when ordering `NftsCollector`. */
export enum NftsCollectorsOrderBy {
  AddressByAddressIdAvatarUrlAsc = 'ADDRESS_BY_ADDRESS_ID__AVATAR_URL_ASC',
  AddressByAddressIdAvatarUrlDesc = 'ADDRESS_BY_ADDRESS_ID__AVATAR_URL_DESC',
  AddressByAddressIdEnsAvatarAsc = 'ADDRESS_BY_ADDRESS_ID__ENS_AVATAR_ASC',
  AddressByAddressIdEnsAvatarCheckedAsc = 'ADDRESS_BY_ADDRESS_ID__ENS_AVATAR_CHECKED_ASC',
  AddressByAddressIdEnsAvatarCheckedDesc = 'ADDRESS_BY_ADDRESS_ID__ENS_AVATAR_CHECKED_DESC',
  AddressByAddressIdEnsAvatarDesc = 'ADDRESS_BY_ADDRESS_ID__ENS_AVATAR_DESC',
  AddressByAddressIdEnsNameAsc = 'ADDRESS_BY_ADDRESS_ID__ENS_NAME_ASC',
  AddressByAddressIdEnsNameCheckedAsc = 'ADDRESS_BY_ADDRESS_ID__ENS_NAME_CHECKED_ASC',
  AddressByAddressIdEnsNameCheckedDesc = 'ADDRESS_BY_ADDRESS_ID__ENS_NAME_CHECKED_DESC',
  AddressByAddressIdEnsNameDesc = 'ADDRESS_BY_ADDRESS_ID__ENS_NAME_DESC',
  AddressByAddressIdIdAsc = 'ADDRESS_BY_ADDRESS_ID__ID_ASC',
  AddressByAddressIdIdDesc = 'ADDRESS_BY_ADDRESS_ID__ID_DESC',
  AddressByAddressIdIsPublicAsc = 'ADDRESS_BY_ADDRESS_ID__IS_PUBLIC_ASC',
  AddressByAddressIdIsPublicDesc = 'ADDRESS_BY_ADDRESS_ID__IS_PUBLIC_DESC',
  AddressByAddressIdIsSessionAsc = 'ADDRESS_BY_ADDRESS_ID__IS_SESSION_ASC',
  AddressByAddressIdIsSessionDesc = 'ADDRESS_BY_ADDRESS_ID__IS_SESSION_DESC',
  AddressByAddressIdNameAsc = 'ADDRESS_BY_ADDRESS_ID__NAME_ASC',
  AddressByAddressIdNameDesc = 'ADDRESS_BY_ADDRESS_ID__NAME_DESC',
  AddressByAddressIdUserIdAsc = 'ADDRESS_BY_ADDRESS_ID__USER_ID_ASC',
  AddressByAddressIdUserIdDesc = 'ADDRESS_BY_ADDRESS_ID__USER_ID_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  Natural = 'NATURAL',
  NftByNftIdApprovedAsc = 'NFT_BY_NFT_ID__APPROVED_ASC',
  NftByNftIdApprovedDesc = 'NFT_BY_NFT_ID__APPROVED_DESC',
  NftByNftIdBurnedAsc = 'NFT_BY_NFT_ID__BURNED_ASC',
  NftByNftIdBurnedDesc = 'NFT_BY_NFT_ID__BURNED_DESC',
  NftByNftIdChainIdAsc = 'NFT_BY_NFT_ID__CHAIN_ID_ASC',
  NftByNftIdChainIdDesc = 'NFT_BY_NFT_ID__CHAIN_ID_DESC',
  NftByNftIdContractAddressAsc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_ASC',
  NftByNftIdContractAddressDesc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_DESC',
  NftByNftIdCreatedAtBlockNumberAsc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  NftByNftIdCreatedAtBlockNumberDesc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  NftByNftIdCreatedAtTimeAsc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_ASC',
  NftByNftIdCreatedAtTimeDesc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_DESC',
  NftByNftIdIdAsc = 'NFT_BY_NFT_ID__ID_ASC',
  NftByNftIdIdDesc = 'NFT_BY_NFT_ID__ID_DESC',
  NftByNftIdMetadataAsc = 'NFT_BY_NFT_ID__METADATA_ASC',
  NftByNftIdMetadataDesc = 'NFT_BY_NFT_ID__METADATA_DESC',
  NftByNftIdMetadataIpfshashAsc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_ASC',
  NftByNftIdMetadataIpfshashDesc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_DESC',
  NftByNftIdMimeTypeAsc = 'NFT_BY_NFT_ID__MIME_TYPE_ASC',
  NftByNftIdMimeTypeDesc = 'NFT_BY_NFT_ID__MIME_TYPE_DESC',
  NftByNftIdNftFactoryIdAsc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_ASC',
  NftByNftIdNftFactoryIdDesc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_DESC',
  NftByNftIdPlatformIdAsc = 'NFT_BY_NFT_ID__PLATFORM_ID_ASC',
  NftByNftIdPlatformIdDesc = 'NFT_BY_NFT_ID__PLATFORM_ID_DESC',
  NftByNftIdPublicReleaseTimeAsc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_ASC',
  NftByNftIdPublicReleaseTimeDesc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_DESC',
  NftByNftIdTokenIdAsc = 'NFT_BY_NFT_ID__TOKEN_ID_ASC',
  NftByNftIdTokenIdDesc = 'NFT_BY_NFT_ID__TOKEN_ID_DESC',
  NftByNftIdTokenMetadataUriAsc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_ASC',
  NftByNftIdTokenMetadataUriDesc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_DESC',
  NftByNftIdTokenUriAsc = 'NFT_BY_NFT_ID__TOKEN_URI_ASC',
  NftByNftIdTokenUriDesc = 'NFT_BY_NFT_ID__TOKEN_URI_DESC',
  NftIdAsc = 'NFT_ID_ASC',
  NftIdDesc = 'NFT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Nft` values. */
export type NftsConnection = {
  __typename?: 'NftsConnection';
  /** A list of edges which contains the `Nft` and cursor to aid in pagination. */
  edges: Array<NftsEdge>;
  /** A list of `Nft` objects. */
  nodes: Array<Maybe<Nft>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Nft` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Nft` edge in the connection. */
export type NftsEdge = {
  __typename?: 'NftsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Nft` at the end of the edge. */
  node?: Maybe<Nft>;
};

/** Methods to use when ordering `Nft`. */
export enum NftsOrderBy {
  ApprovedAsc = 'APPROVED_ASC',
  ApprovedDesc = 'APPROVED_DESC',
  ArtistsNftsByNftIdCountAsc = 'ARTISTS_NFTS_BY_NFT_ID__COUNT_ASC',
  ArtistsNftsByNftIdCountDesc = 'ARTISTS_NFTS_BY_NFT_ID__COUNT_DESC',
  BurnedAsc = 'BURNED_ASC',
  BurnedDesc = 'BURNED_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  ContractAddressAsc = 'CONTRACT_ADDRESS_ASC',
  ContractAddressDesc = 'CONTRACT_ADDRESS_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  MetadataIpfshashAsc = 'METADATA_IPFSHASH_ASC',
  MetadataIpfshashDesc = 'METADATA_IPFSHASH_DESC',
  MimeTypeAsc = 'MIME_TYPE_ASC',
  MimeTypeDesc = 'MIME_TYPE_DESC',
  Natural = 'NATURAL',
  NftsCollectorsByNftIdCountAsc = 'NFTS_COLLECTORS_BY_NFT_ID__COUNT_ASC',
  NftsCollectorsByNftIdCountDesc = 'NFTS_COLLECTORS_BY_NFT_ID__COUNT_DESC',
  NftsProcessedTracksByNftIdCountAsc = 'NFTS_PROCESSED_TRACKS_BY_NFT_ID__COUNT_ASC',
  NftsProcessedTracksByNftIdCountDesc = 'NFTS_PROCESSED_TRACKS_BY_NFT_ID__COUNT_DESC',
  NftEventsByNftIdCountAsc = 'NFT_EVENTS_BY_NFT_ID__COUNT_ASC',
  NftEventsByNftIdCountDesc = 'NFT_EVENTS_BY_NFT_ID__COUNT_DESC',
  NftFactoryByNftFactoryIdAddressAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_ASC',
  NftFactoryByNftFactoryIdAddressDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_DESC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_ASC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_DESC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_ASC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_DESC',
  NftFactoryByNftFactoryIdApprovedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_ASC',
  NftFactoryByNftFactoryIdApprovedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_DESC',
  NftFactoryByNftFactoryIdAutoApproveAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_ASC',
  NftFactoryByNftFactoryIdAutoApproveDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_DESC',
  NftFactoryByNftFactoryIdChainIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_ASC',
  NftFactoryByNftFactoryIdChainIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_DESC',
  NftFactoryByNftFactoryIdContractTypeAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_ASC',
  NftFactoryByNftFactoryIdContractTypeDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_DESC',
  NftFactoryByNftFactoryIdIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_ASC',
  NftFactoryByNftFactoryIdIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_DESC',
  NftFactoryByNftFactoryIdMetaFactoryIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_ASC',
  NftFactoryByNftFactoryIdMetaFactoryIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_DESC',
  NftFactoryByNftFactoryIdMintingProtocolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_ASC',
  NftFactoryByNftFactoryIdMintingProtocolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_DESC',
  NftFactoryByNftFactoryIdNameAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_ASC',
  NftFactoryByNftFactoryIdNameDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_DESC',
  NftFactoryByNftFactoryIdPlatformIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_ASC',
  NftFactoryByNftFactoryIdPlatformIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_DESC',
  NftFactoryByNftFactoryIdPreviewCapableAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  NftFactoryByNftFactoryIdPreviewCapableDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  NftFactoryByNftFactoryIdPreviewEnabledAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_ASC',
  NftFactoryByNftFactoryIdPreviewEnabledDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_DESC',
  NftFactoryByNftFactoryIdStandardAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_ASC',
  NftFactoryByNftFactoryIdStandardDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_DESC',
  NftFactoryByNftFactoryIdStartingBlockAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_ASC',
  NftFactoryByNftFactoryIdStartingBlockDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_DESC',
  NftFactoryByNftFactoryIdSymbolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_ASC',
  NftFactoryByNftFactoryIdSymbolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_DESC',
  NftFactoryByNftFactoryIdTypeMetadataAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_ASC',
  NftFactoryByNftFactoryIdTypeMetadataDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_DESC',
  NftFactoryIdAsc = 'NFT_FACTORY_ID_ASC',
  NftFactoryIdDesc = 'NFT_FACTORY_ID_DESC',
  NftTransfersByNftIdCountAsc = 'NFT_TRANSFERS_BY_NFT_ID__COUNT_ASC',
  NftTransfersByNftIdCountDesc = 'NFT_TRANSFERS_BY_NFT_ID__COUNT_DESC',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublicReleaseTimeAsc = 'PUBLIC_RELEASE_TIME_ASC',
  PublicReleaseTimeDesc = 'PUBLIC_RELEASE_TIME_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  TokenMetadataUriAsc = 'TOKEN_METADATA_URI_ASC',
  TokenMetadataUriDesc = 'TOKEN_METADATA_URI_DESC',
  TokenUriAsc = 'TOKEN_URI_ASC',
  TokenUriDesc = 'TOKEN_URI_DESC'
}

export type NftsProcessedTrack = Node & {
  __typename?: 'NftsProcessedTrack';
  artistId?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lossyArtworkIpfsHash?: Maybe<Scalars['String']['output']>;
  lossyArtworkMimeType?: Maybe<Scalars['String']['output']>;
  lossyArtworkUrl?: Maybe<Scalars['String']['output']>;
  lossyAudioIpfsHash?: Maybe<Scalars['String']['output']>;
  lossyAudioMimeType?: Maybe<Scalars['String']['output']>;
  lossyAudioUrl?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Nft` that is related to this `NftsProcessedTrack`. */
  nftByNftId?: Maybe<Nft>;
  nftId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  platformId?: Maybe<Scalars['String']['output']>;
  platformInternalId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `ProcessedTrack` that is related to this `NftsProcessedTrack`. */
  processedTrackByProcessedTrackId?: Maybe<ProcessedTrack>;
  processedTrackId: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  supportingArtist?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `NftsProcessedTrack` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NftsProcessedTrackCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkIpfsHash` field. */
  lossyArtworkIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkMimeType` field. */
  lossyArtworkMimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkUrl` field. */
  lossyArtworkUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioIpfsHash` field. */
  lossyAudioIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioMimeType` field. */
  lossyAudioMimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioUrl` field. */
  lossyAudioUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nftId` field. */
  nftId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `supportingArtist` field. */
  supportingArtist?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `NftsProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type NftsProcessedTrackFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftsProcessedTrackFilter>>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkIpfsHash` field. */
  lossyArtworkIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkMimeType` field. */
  lossyArtworkMimeType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkUrl` field. */
  lossyArtworkUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioIpfsHash` field. */
  lossyAudioIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioMimeType` field. */
  lossyAudioMimeType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioUrl` field. */
  lossyAudioUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftByNftId` relation. */
  nftByNftId?: InputMaybe<NftFilter>;
  /** A related `nftByNftId` exists. */
  nftByNftIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftId` field. */
  nftId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftsProcessedTrackFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftsProcessedTrackFilter>>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `processedTrackByProcessedTrackId` relation. */
  processedTrackByProcessedTrackId?: InputMaybe<ProcessedTrackFilter>;
  /** A related `processedTrackByProcessedTrackId` exists. */
  processedTrackByProcessedTrackIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `supportingArtist` field. */
  supportingArtist?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<StringFilter>;
};

/** A connection to a list of `NftsProcessedTrack` values. */
export type NftsProcessedTracksConnection = {
  __typename?: 'NftsProcessedTracksConnection';
  /** A list of edges which contains the `NftsProcessedTrack` and cursor to aid in pagination. */
  edges: Array<NftsProcessedTracksEdge>;
  /** A list of `NftsProcessedTrack` objects. */
  nodes: Array<Maybe<NftsProcessedTrack>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftsProcessedTrack` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `NftsProcessedTrack` edge in the connection. */
export type NftsProcessedTracksEdge = {
  __typename?: 'NftsProcessedTracksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `NftsProcessedTrack` at the end of the edge. */
  node?: Maybe<NftsProcessedTrack>;
};

/** Methods to use when ordering `NftsProcessedTrack`. */
export enum NftsProcessedTracksOrderBy {
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LossyArtworkIpfshashAsc = 'LOSSY_ARTWORK_IPFSHASH_ASC',
  LossyArtworkIpfshashDesc = 'LOSSY_ARTWORK_IPFSHASH_DESC',
  LossyArtworkMimeTypeAsc = 'LOSSY_ARTWORK_MIME_TYPE_ASC',
  LossyArtworkMimeTypeDesc = 'LOSSY_ARTWORK_MIME_TYPE_DESC',
  LossyArtworkUrlAsc = 'LOSSY_ARTWORK_URL_ASC',
  LossyArtworkUrlDesc = 'LOSSY_ARTWORK_URL_DESC',
  LossyAudioIpfshashAsc = 'LOSSY_AUDIO_IPFSHASH_ASC',
  LossyAudioIpfshashDesc = 'LOSSY_AUDIO_IPFSHASH_DESC',
  LossyAudioMimeTypeAsc = 'LOSSY_AUDIO_MIME_TYPE_ASC',
  LossyAudioMimeTypeDesc = 'LOSSY_AUDIO_MIME_TYPE_DESC',
  LossyAudioUrlAsc = 'LOSSY_AUDIO_URL_ASC',
  LossyAudioUrlDesc = 'LOSSY_AUDIO_URL_DESC',
  Natural = 'NATURAL',
  NftByNftIdApprovedAsc = 'NFT_BY_NFT_ID__APPROVED_ASC',
  NftByNftIdApprovedDesc = 'NFT_BY_NFT_ID__APPROVED_DESC',
  NftByNftIdBurnedAsc = 'NFT_BY_NFT_ID__BURNED_ASC',
  NftByNftIdBurnedDesc = 'NFT_BY_NFT_ID__BURNED_DESC',
  NftByNftIdChainIdAsc = 'NFT_BY_NFT_ID__CHAIN_ID_ASC',
  NftByNftIdChainIdDesc = 'NFT_BY_NFT_ID__CHAIN_ID_DESC',
  NftByNftIdContractAddressAsc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_ASC',
  NftByNftIdContractAddressDesc = 'NFT_BY_NFT_ID__CONTRACT_ADDRESS_DESC',
  NftByNftIdCreatedAtBlockNumberAsc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  NftByNftIdCreatedAtBlockNumberDesc = 'NFT_BY_NFT_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  NftByNftIdCreatedAtTimeAsc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_ASC',
  NftByNftIdCreatedAtTimeDesc = 'NFT_BY_NFT_ID__CREATED_AT_TIME_DESC',
  NftByNftIdIdAsc = 'NFT_BY_NFT_ID__ID_ASC',
  NftByNftIdIdDesc = 'NFT_BY_NFT_ID__ID_DESC',
  NftByNftIdMetadataAsc = 'NFT_BY_NFT_ID__METADATA_ASC',
  NftByNftIdMetadataDesc = 'NFT_BY_NFT_ID__METADATA_DESC',
  NftByNftIdMetadataIpfshashAsc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_ASC',
  NftByNftIdMetadataIpfshashDesc = 'NFT_BY_NFT_ID__METADATA_IPFSHASH_DESC',
  NftByNftIdMimeTypeAsc = 'NFT_BY_NFT_ID__MIME_TYPE_ASC',
  NftByNftIdMimeTypeDesc = 'NFT_BY_NFT_ID__MIME_TYPE_DESC',
  NftByNftIdNftFactoryIdAsc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_ASC',
  NftByNftIdNftFactoryIdDesc = 'NFT_BY_NFT_ID__NFT_FACTORY_ID_DESC',
  NftByNftIdPlatformIdAsc = 'NFT_BY_NFT_ID__PLATFORM_ID_ASC',
  NftByNftIdPlatformIdDesc = 'NFT_BY_NFT_ID__PLATFORM_ID_DESC',
  NftByNftIdPublicReleaseTimeAsc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_ASC',
  NftByNftIdPublicReleaseTimeDesc = 'NFT_BY_NFT_ID__PUBLIC_RELEASE_TIME_DESC',
  NftByNftIdTokenIdAsc = 'NFT_BY_NFT_ID__TOKEN_ID_ASC',
  NftByNftIdTokenIdDesc = 'NFT_BY_NFT_ID__TOKEN_ID_DESC',
  NftByNftIdTokenMetadataUriAsc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_ASC',
  NftByNftIdTokenMetadataUriDesc = 'NFT_BY_NFT_ID__TOKEN_METADATA_URI_DESC',
  NftByNftIdTokenUriAsc = 'NFT_BY_NFT_ID__TOKEN_URI_ASC',
  NftByNftIdTokenUriDesc = 'NFT_BY_NFT_ID__TOKEN_URI_DESC',
  NftIdAsc = 'NFT_ID_ASC',
  NftIdDesc = 'NFT_ID_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PlatformInternalIdAsc = 'PLATFORM_INTERNAL_ID_ASC',
  PlatformInternalIdDesc = 'PLATFORM_INTERNAL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTrackByProcessedTrackIdArtistIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_ASC',
  ProcessedTrackByProcessedTrackIdArtistIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_DESC',
  ProcessedTrackByProcessedTrackIdDescriptionAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_ASC',
  ProcessedTrackByProcessedTrackIdDescriptionDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_DESC',
  ProcessedTrackByProcessedTrackIdIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_ASC',
  ProcessedTrackByProcessedTrackIdIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_DESC',
  ProcessedTrackByProcessedTrackIdPlatformIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_DESC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_DESC',
  ProcessedTrackByProcessedTrackIdSlugAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_ASC',
  ProcessedTrackByProcessedTrackIdSlugDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_DESC',
  ProcessedTrackByProcessedTrackIdSupportingArtistAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_ASC',
  ProcessedTrackByProcessedTrackIdSupportingArtistDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_DESC',
  ProcessedTrackByProcessedTrackIdTitleAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_ASC',
  ProcessedTrackByProcessedTrackIdTitleDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_DESC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_ASC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_DESC',
  ProcessedTrackIdAsc = 'PROCESSED_TRACK_ID_ASC',
  ProcessedTrackIdDesc = 'PROCESSED_TRACK_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  SupportingArtistAsc = 'SUPPORTING_ARTIST_ASC',
  SupportingArtistDesc = 'SUPPORTING_ARTIST_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  WebsiteUrlAsc = 'WEBSITE_URL_ASC',
  WebsiteUrlDesc = 'WEBSITE_URL_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Platform = Node & {
  __typename?: 'Platform';
  /** Reads and enables pagination through a set of `ArtistProfile`. */
  artistProfilesByPlatformId: ArtistProfilesConnection;
  id: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `MetaFactory`. */
  metaFactoriesByPlatformId: MetaFactoriesConnection;
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftFactory`. */
  nftFactoriesByPlatformId: NftFactoriesConnection;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByPlatformId: NftsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `PlatformEvent`. */
  platformEventsByPlatformId: PlatformEventsConnection;
  /** Reads and enables pagination through a set of `ProcessedTrack`. */
  processedTracksByPlatformId: ProcessedTracksConnection;
  type?: Maybe<Scalars['String']['output']>;
};


export type PlatformArtistProfilesByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistProfileCondition>;
  filter?: InputMaybe<ArtistProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistProfilesOrderBy>>;
};


export type PlatformMetaFactoriesByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetaFactoryCondition>;
  filter?: InputMaybe<MetaFactoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetaFactoriesOrderBy>>;
};


export type PlatformNftFactoriesByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoryCondition>;
  filter?: InputMaybe<NftFactoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesOrderBy>>;
};


export type PlatformNftsByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftCondition>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};


export type PlatformPlatformEventsByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlatformEventCondition>;
  filter?: InputMaybe<PlatformEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlatformEventsOrderBy>>;
};


export type PlatformProcessedTracksByPlatformIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProcessedTrackCondition>;
  filter?: InputMaybe<ProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProcessedTracksOrderBy>>;
};

/**
 * A condition to be used against `Platform` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PlatformCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PlatformEvent = Node & {
  __typename?: 'PlatformEvent';
  eventId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `PlatformEvent`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId: Scalars['String']['output'];
  /** Reads a single `ReservoirEvent` that is related to this `PlatformEvent`. */
  reservoirEventByEventId?: Maybe<ReservoirEvent>;
};

/**
 * A condition to be used against `PlatformEvent` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PlatformEventCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `PlatformEvent` object types. All fields are combined with a logical ‘and.’ */
export type PlatformEventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PlatformEventFilter>>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PlatformEventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PlatformEventFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reservoirEventByEventId` relation. */
  reservoirEventByEventId?: InputMaybe<ReservoirEventFilter>;
  /** A related `reservoirEventByEventId` exists. */
  reservoirEventByEventIdExists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `PlatformEvent` values. */
export type PlatformEventsConnection = {
  __typename?: 'PlatformEventsConnection';
  /** A list of edges which contains the `PlatformEvent` and cursor to aid in pagination. */
  edges: Array<PlatformEventsEdge>;
  /** A list of `PlatformEvent` objects. */
  nodes: Array<Maybe<PlatformEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PlatformEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PlatformEvent` edge in the connection. */
export type PlatformEventsEdge = {
  __typename?: 'PlatformEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PlatformEvent` at the end of the edge. */
  node?: Maybe<PlatformEvent>;
};

/** Methods to use when ordering `PlatformEvent`. */
export enum PlatformEventsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirEventByEventIdAmountAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_ASC',
  ReservoirEventByEventIdAmountDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_DESC',
  ReservoirEventByEventIdBlockHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_ASC',
  ReservoirEventByEventIdBlockHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_DESC',
  ReservoirEventByEventIdCreatedAtAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_ASC',
  ReservoirEventByEventIdCreatedAtDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_DESC',
  ReservoirEventByEventIdEventTimestampAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_ASC',
  ReservoirEventByEventIdEventTimestampDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_DESC',
  ReservoirEventByEventIdFromAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_ASC',
  ReservoirEventByEventIdFromAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_DESC',
  ReservoirEventByEventIdFromAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_ASC',
  ReservoirEventByEventIdFromAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_DESC',
  ReservoirEventByEventIdFromNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_ASC',
  ReservoirEventByEventIdFromNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_DESC',
  ReservoirEventByEventIdHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_ASC',
  ReservoirEventByEventIdHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_DESC',
  ReservoirEventByEventIdIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_ASC',
  ReservoirEventByEventIdIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_DESC',
  ReservoirEventByEventIdMetadataAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_ASC',
  ReservoirEventByEventIdMetadataDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_DESC',
  ReservoirEventByEventIdNftFactoryIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_ASC',
  ReservoirEventByEventIdNftFactoryIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_DESC',
  ReservoirEventByEventIdOrderIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_ASC',
  ReservoirEventByEventIdOrderIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_DESC',
  ReservoirEventByEventIdPriceAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_ASC',
  ReservoirEventByEventIdPriceDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_DESC',
  ReservoirEventByEventIdTokenIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_ASC',
  ReservoirEventByEventIdTokenIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_DESC',
  ReservoirEventByEventIdToAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_ASC',
  ReservoirEventByEventIdToAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_DESC',
  ReservoirEventByEventIdToAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_ASC',
  ReservoirEventByEventIdToAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_DESC',
  ReservoirEventByEventIdToNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_ASC',
  ReservoirEventByEventIdToNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_DESC',
  ReservoirEventByEventIdTypeAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_ASC',
  ReservoirEventByEventIdTypeDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_DESC'
}

/** A filter to be used against `Platform` object types. All fields are combined with a logical ‘and.’ */
export type PlatformFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PlatformFilter>>;
  /** Filter by the object’s `artistProfilesByPlatformId` relation. */
  artistProfilesByPlatformId?: InputMaybe<PlatformToManyArtistProfileFilter>;
  /** Some related `artistProfilesByPlatformId` exist. */
  artistProfilesByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metaFactoriesByPlatformId` relation. */
  metaFactoriesByPlatformId?: InputMaybe<PlatformToManyMetaFactoryFilter>;
  /** Some related `metaFactoriesByPlatformId` exist. */
  metaFactoriesByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftFactoriesByPlatformId` relation. */
  nftFactoriesByPlatformId?: InputMaybe<PlatformToManyNftFactoryFilter>;
  /** Some related `nftFactoriesByPlatformId` exist. */
  nftFactoriesByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsByPlatformId` relation. */
  nftsByPlatformId?: InputMaybe<PlatformToManyNftFilter>;
  /** Some related `nftsByPlatformId` exist. */
  nftsByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<PlatformFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PlatformFilter>>;
  /** Filter by the object’s `platformEventsByPlatformId` relation. */
  platformEventsByPlatformId?: InputMaybe<PlatformToManyPlatformEventFilter>;
  /** Some related `platformEventsByPlatformId` exist. */
  platformEventsByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTracksByPlatformId` relation. */
  processedTracksByPlatformId?: InputMaybe<PlatformToManyProcessedTrackFilter>;
  /** Some related `processedTracksByPlatformId` exist. */
  processedTracksByPlatformIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `ArtistProfile` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyArtistProfileFilter = {
  /** Every related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistProfileFilter>;
  /** No related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistProfileFilter>;
  /** Some related `ArtistProfile` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistProfileFilter>;
};

/** A filter to be used against many `MetaFactory` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyMetaFactoryFilter = {
  /** Every related `MetaFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MetaFactoryFilter>;
  /** No related `MetaFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MetaFactoryFilter>;
  /** Some related `MetaFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MetaFactoryFilter>;
};

/** A filter to be used against many `NftFactory` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyNftFactoryFilter = {
  /** Every related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoryFilter>;
  /** No related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoryFilter>;
  /** Some related `NftFactory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoryFilter>;
};

/** A filter to be used against many `Nft` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyNftFilter = {
  /** Every related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFilter>;
  /** No related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFilter>;
  /** Some related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFilter>;
};

/** A filter to be used against many `PlatformEvent` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyPlatformEventFilter = {
  /** Every related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PlatformEventFilter>;
  /** No related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PlatformEventFilter>;
  /** Some related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PlatformEventFilter>;
};

/** A filter to be used against many `ProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type PlatformToManyProcessedTrackFilter = {
  /** Every related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProcessedTrackFilter>;
  /** No related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProcessedTrackFilter>;
  /** Some related `ProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProcessedTrackFilter>;
};

/** A connection to a list of `Platform` values. */
export type PlatformsConnection = {
  __typename?: 'PlatformsConnection';
  /** A list of edges which contains the `Platform` and cursor to aid in pagination. */
  edges: Array<PlatformsEdge>;
  /** A list of `Platform` objects. */
  nodes: Array<Maybe<Platform>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Platform` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Platform` edge in the connection. */
export type PlatformsEdge = {
  __typename?: 'PlatformsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Platform` at the end of the edge. */
  node?: Maybe<Platform>;
};

/** Methods to use when ordering `Platform`. */
export enum PlatformsOrderBy {
  ArtistProfilesByPlatformIdCountAsc = 'ARTIST_PROFILES_BY_PLATFORM_ID__COUNT_ASC',
  ArtistProfilesByPlatformIdCountDesc = 'ARTIST_PROFILES_BY_PLATFORM_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetaFactoriesByPlatformIdCountAsc = 'META_FACTORIES_BY_PLATFORM_ID__COUNT_ASC',
  MetaFactoriesByPlatformIdCountDesc = 'META_FACTORIES_BY_PLATFORM_ID__COUNT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NftsByPlatformIdCountAsc = 'NFTS_BY_PLATFORM_ID__COUNT_ASC',
  NftsByPlatformIdCountDesc = 'NFTS_BY_PLATFORM_ID__COUNT_DESC',
  NftFactoriesByPlatformIdCountAsc = 'NFT_FACTORIES_BY_PLATFORM_ID__COUNT_ASC',
  NftFactoriesByPlatformIdCountDesc = 'NFT_FACTORIES_BY_PLATFORM_ID__COUNT_DESC',
  PlatformEventsByPlatformIdCountAsc = 'PLATFORM_EVENTS_BY_PLATFORM_ID__COUNT_ASC',
  PlatformEventsByPlatformIdCountDesc = 'PLATFORM_EVENTS_BY_PLATFORM_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTracksByPlatformIdCountAsc = 'PROCESSED_TRACKS_BY_PLATFORM_ID__COUNT_ASC',
  ProcessedTracksByPlatformIdCountDesc = 'PROCESSED_TRACKS_BY_PLATFORM_ID__COUNT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type ProcessedTrack = Node & {
  __typename?: 'ProcessedTrack';
  /** Reads a single `Artist` that is related to this `ProcessedTrack`. */
  artistByArtistId?: Maybe<Artist>;
  /** Reads a single `Artist` that is related to this `ProcessedTrack`. */
  artistBySupportingArtist?: Maybe<Artist>;
  artistId?: Maybe<Scalars['String']['output']>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  createdAtTime?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lossyArtworkIpfsHash?: Maybe<Scalars['String']['output']>;
  lossyArtworkMimeType?: Maybe<Scalars['String']['output']>;
  lossyArtworkUrl?: Maybe<Scalars['String']['output']>;
  lossyAudioIpfsHash?: Maybe<Scalars['String']['output']>;
  lossyAudioMimeType?: Maybe<Scalars['String']['output']>;
  lossyAudioUrl?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `NftFactoriesProcessedTrack`. */
  nftFactoriesProcessedTracksByProcessedTrackId: NftFactoriesProcessedTracksConnection;
  /** Reads and enables pagination through a set of `NftsProcessedTrack`. */
  nftsProcessedTracksByProcessedTrackId: NftsProcessedTracksConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` that is related to this `ProcessedTrack`. */
  platformByPlatformId?: Maybe<Platform>;
  platformId?: Maybe<Scalars['String']['output']>;
  platformInternalId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  supportingArtist?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `TrackEvent`. */
  trackEventsByTrackId: TrackEventsConnection;
  /** Reads and enables pagination through a set of `TrackPhase`. */
  trackPhasesByProcessedTrackId: TrackPhasesConnection;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};


export type ProcessedTrackNftFactoriesProcessedTracksByProcessedTrackIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesProcessedTrackCondition>;
  filter?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesProcessedTracksOrderBy>>;
};


export type ProcessedTrackNftsProcessedTracksByProcessedTrackIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsProcessedTrackCondition>;
  filter?: InputMaybe<NftsProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsProcessedTracksOrderBy>>;
};


export type ProcessedTrackTrackEventsByTrackIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TrackEventCondition>;
  filter?: InputMaybe<TrackEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackEventsOrderBy>>;
};


export type ProcessedTrackTrackPhasesByProcessedTrackIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TrackPhaseCondition>;
  filter?: InputMaybe<TrackPhaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackPhasesOrderBy>>;
};

/**
 * A condition to be used against `ProcessedTrack` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProcessedTrackCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkIpfsHash` field. */
  lossyArtworkIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkMimeType` field. */
  lossyArtworkMimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyArtworkUrl` field. */
  lossyArtworkUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioIpfsHash` field. */
  lossyAudioIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioMimeType` field. */
  lossyAudioMimeType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lossyAudioUrl` field. */
  lossyAudioUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformId` field. */
  platformId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `supportingArtist` field. */
  supportingArtist?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProcessedTrackFilter>>;
  /** Filter by the object’s `artistByArtistId` relation. */
  artistByArtistId?: InputMaybe<ArtistFilter>;
  /** A related `artistByArtistId` exists. */
  artistByArtistIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistBySupportingArtist` relation. */
  artistBySupportingArtist?: InputMaybe<ArtistFilter>;
  /** A related `artistBySupportingArtist` exists. */
  artistBySupportingArtistExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAtBlockNumber` field. */
  createdAtBlockNumber?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `createdAtTime` field. */
  createdAtTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `getUserCollectionTypesByProcessedTrackId` relation. */
  getUserCollectionTypesByProcessedTrackId?: InputMaybe<ProcessedTrackToManyGetUserCollectionTypeFilter>;
  /** Some related `getUserCollectionTypesByProcessedTrackId` exist. */
  getUserCollectionTypesByProcessedTrackIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkIpfsHash` field. */
  lossyArtworkIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkMimeType` field. */
  lossyArtworkMimeType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyArtworkUrl` field. */
  lossyArtworkUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioIpfsHash` field. */
  lossyAudioIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioMimeType` field. */
  lossyAudioMimeType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lossyAudioUrl` field. */
  lossyAudioUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftFactoriesProcessedTracksByProcessedTrackId` relation. */
  nftFactoriesProcessedTracksByProcessedTrackId?: InputMaybe<ProcessedTrackToManyNftFactoriesProcessedTrackFilter>;
  /** Some related `nftFactoriesProcessedTracksByProcessedTrackId` exist. */
  nftFactoriesProcessedTracksByProcessedTrackIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftsProcessedTracksByProcessedTrackId` relation. */
  nftsProcessedTracksByProcessedTrackId?: InputMaybe<ProcessedTrackToManyNftsProcessedTrackFilter>;
  /** Some related `nftsProcessedTracksByProcessedTrackId` exist. */
  nftsProcessedTracksByProcessedTrackIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<ProcessedTrackFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProcessedTrackFilter>>;
  /** Filter by the object’s `platformByPlatformId` relation. */
  platformByPlatformId?: InputMaybe<PlatformFilter>;
  /** A related `platformByPlatformId` exists. */
  platformByPlatformIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `platformId` field. */
  platformId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `platformInternalId` field. */
  platformInternalId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `supportingArtist` field. */
  supportingArtist?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `trackEventsByTrackId` relation. */
  trackEventsByTrackId?: InputMaybe<ProcessedTrackToManyTrackEventFilter>;
  /** Some related `trackEventsByTrackId` exist. */
  trackEventsByTrackIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `trackPhasesByProcessedTrackId` relation. */
  trackPhasesByProcessedTrackId?: InputMaybe<ProcessedTrackToManyTrackPhaseFilter>;
  /** Some related `trackPhasesByProcessedTrackId` exist. */
  trackPhasesByProcessedTrackIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `websiteUrl` field. */
  websiteUrl?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `GetUserCollectionType` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackToManyGetUserCollectionTypeFilter = {
  /** Every related `GetUserCollectionType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<GetUserCollectionTypeFilter>;
  /** No related `GetUserCollectionType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<GetUserCollectionTypeFilter>;
  /** Some related `GetUserCollectionType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<GetUserCollectionTypeFilter>;
};

/** A filter to be used against many `NftFactoriesProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackToManyNftFactoriesProcessedTrackFilter = {
  /** Every related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  /** No related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  /** Some related `NftFactoriesProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFactoriesProcessedTrackFilter>;
};

/** A filter to be used against many `NftsProcessedTrack` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackToManyNftsProcessedTrackFilter = {
  /** Every related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftsProcessedTrackFilter>;
  /** No related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftsProcessedTrackFilter>;
  /** Some related `NftsProcessedTrack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftsProcessedTrackFilter>;
};

/** A filter to be used against many `TrackEvent` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackToManyTrackEventFilter = {
  /** Every related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TrackEventFilter>;
  /** No related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TrackEventFilter>;
  /** Some related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TrackEventFilter>;
};

/** A filter to be used against many `TrackPhase` object types. All fields are combined with a logical ‘and.’ */
export type ProcessedTrackToManyTrackPhaseFilter = {
  /** Every related `TrackPhase` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TrackPhaseFilter>;
  /** No related `TrackPhase` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TrackPhaseFilter>;
  /** Some related `TrackPhase` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TrackPhaseFilter>;
};

/** A connection to a list of `ProcessedTrack` values. */
export type ProcessedTracksConnection = {
  __typename?: 'ProcessedTracksConnection';
  /** A list of edges which contains the `ProcessedTrack` and cursor to aid in pagination. */
  edges: Array<ProcessedTracksEdge>;
  /** A list of `ProcessedTrack` objects. */
  nodes: Array<Maybe<ProcessedTrack>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ProcessedTrack` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ProcessedTrack` edge in the connection. */
export type ProcessedTracksEdge = {
  __typename?: 'ProcessedTracksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ProcessedTrack` at the end of the edge. */
  node?: Maybe<ProcessedTrack>;
};

/** Methods to use when ordering `ProcessedTrack`. */
export enum ProcessedTracksOrderBy {
  ArtistByArtistIdAvatarUrlAsc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_ASC',
  ArtistByArtistIdAvatarUrlDesc = 'ARTIST_BY_ARTIST_ID__AVATAR_URL_DESC',
  ArtistByArtistIdCreatedAtBlockNumberAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ArtistByArtistIdCreatedAtBlockNumberDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ArtistByArtistIdCreatedAtTimeAsc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_ASC',
  ArtistByArtistIdCreatedAtTimeDesc = 'ARTIST_BY_ARTIST_ID__CREATED_AT_TIME_DESC',
  ArtistByArtistIdCustomThemeAsc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_ASC',
  ArtistByArtistIdCustomThemeDesc = 'ARTIST_BY_ARTIST_ID__CUSTOM_THEME_DESC',
  ArtistByArtistIdDescriptionAsc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_ASC',
  ArtistByArtistIdDescriptionDesc = 'ARTIST_BY_ARTIST_ID__DESCRIPTION_DESC',
  ArtistByArtistIdIdAsc = 'ARTIST_BY_ARTIST_ID__ID_ASC',
  ArtistByArtistIdIdDesc = 'ARTIST_BY_ARTIST_ID__ID_DESC',
  ArtistByArtistIdNameAsc = 'ARTIST_BY_ARTIST_ID__NAME_ASC',
  ArtistByArtistIdNameDesc = 'ARTIST_BY_ARTIST_ID__NAME_DESC',
  ArtistByArtistIdPredefinedThemeNameAsc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_ASC',
  ArtistByArtistIdPredefinedThemeNameDesc = 'ARTIST_BY_ARTIST_ID__PREDEFINED_THEME_NAME_DESC',
  ArtistByArtistIdSlugAsc = 'ARTIST_BY_ARTIST_ID__SLUG_ASC',
  ArtistByArtistIdSlugDesc = 'ARTIST_BY_ARTIST_ID__SLUG_DESC',
  ArtistByArtistIdUserIdAsc = 'ARTIST_BY_ARTIST_ID__USER_ID_ASC',
  ArtistByArtistIdUserIdDesc = 'ARTIST_BY_ARTIST_ID__USER_ID_DESC',
  ArtistBySupportingArtistAvatarUrlAsc = 'ARTIST_BY_SUPPORTING_ARTIST__AVATAR_URL_ASC',
  ArtistBySupportingArtistAvatarUrlDesc = 'ARTIST_BY_SUPPORTING_ARTIST__AVATAR_URL_DESC',
  ArtistBySupportingArtistCreatedAtBlockNumberAsc = 'ARTIST_BY_SUPPORTING_ARTIST__CREATED_AT_BLOCK_NUMBER_ASC',
  ArtistBySupportingArtistCreatedAtBlockNumberDesc = 'ARTIST_BY_SUPPORTING_ARTIST__CREATED_AT_BLOCK_NUMBER_DESC',
  ArtistBySupportingArtistCreatedAtTimeAsc = 'ARTIST_BY_SUPPORTING_ARTIST__CREATED_AT_TIME_ASC',
  ArtistBySupportingArtistCreatedAtTimeDesc = 'ARTIST_BY_SUPPORTING_ARTIST__CREATED_AT_TIME_DESC',
  ArtistBySupportingArtistCustomThemeAsc = 'ARTIST_BY_SUPPORTING_ARTIST__CUSTOM_THEME_ASC',
  ArtistBySupportingArtistCustomThemeDesc = 'ARTIST_BY_SUPPORTING_ARTIST__CUSTOM_THEME_DESC',
  ArtistBySupportingArtistDescriptionAsc = 'ARTIST_BY_SUPPORTING_ARTIST__DESCRIPTION_ASC',
  ArtistBySupportingArtistDescriptionDesc = 'ARTIST_BY_SUPPORTING_ARTIST__DESCRIPTION_DESC',
  ArtistBySupportingArtistIdAsc = 'ARTIST_BY_SUPPORTING_ARTIST__ID_ASC',
  ArtistBySupportingArtistIdDesc = 'ARTIST_BY_SUPPORTING_ARTIST__ID_DESC',
  ArtistBySupportingArtistNameAsc = 'ARTIST_BY_SUPPORTING_ARTIST__NAME_ASC',
  ArtistBySupportingArtistNameDesc = 'ARTIST_BY_SUPPORTING_ARTIST__NAME_DESC',
  ArtistBySupportingArtistPredefinedThemeNameAsc = 'ARTIST_BY_SUPPORTING_ARTIST__PREDEFINED_THEME_NAME_ASC',
  ArtistBySupportingArtistPredefinedThemeNameDesc = 'ARTIST_BY_SUPPORTING_ARTIST__PREDEFINED_THEME_NAME_DESC',
  ArtistBySupportingArtistSlugAsc = 'ARTIST_BY_SUPPORTING_ARTIST__SLUG_ASC',
  ArtistBySupportingArtistSlugDesc = 'ARTIST_BY_SUPPORTING_ARTIST__SLUG_DESC',
  ArtistBySupportingArtistUserIdAsc = 'ARTIST_BY_SUPPORTING_ARTIST__USER_ID_ASC',
  ArtistBySupportingArtistUserIdDesc = 'ARTIST_BY_SUPPORTING_ARTIST__USER_ID_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  CreatedAtBlockNumberAsc = 'CREATED_AT_BLOCK_NUMBER_ASC',
  CreatedAtBlockNumberDesc = 'CREATED_AT_BLOCK_NUMBER_DESC',
  CreatedAtTimeAsc = 'CREATED_AT_TIME_ASC',
  CreatedAtTimeDesc = 'CREATED_AT_TIME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  GetUserCollectionTypesByProcessedTrackIdCountAsc = 'GET_USER_COLLECTION_TYPES_BY_PROCESSED_TRACK_ID__COUNT_ASC',
  GetUserCollectionTypesByProcessedTrackIdCountDesc = 'GET_USER_COLLECTION_TYPES_BY_PROCESSED_TRACK_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LossyArtworkIpfshashAsc = 'LOSSY_ARTWORK_IPFSHASH_ASC',
  LossyArtworkIpfshashDesc = 'LOSSY_ARTWORK_IPFSHASH_DESC',
  LossyArtworkMimeTypeAsc = 'LOSSY_ARTWORK_MIME_TYPE_ASC',
  LossyArtworkMimeTypeDesc = 'LOSSY_ARTWORK_MIME_TYPE_DESC',
  LossyArtworkUrlAsc = 'LOSSY_ARTWORK_URL_ASC',
  LossyArtworkUrlDesc = 'LOSSY_ARTWORK_URL_DESC',
  LossyAudioIpfshashAsc = 'LOSSY_AUDIO_IPFSHASH_ASC',
  LossyAudioIpfshashDesc = 'LOSSY_AUDIO_IPFSHASH_DESC',
  LossyAudioMimeTypeAsc = 'LOSSY_AUDIO_MIME_TYPE_ASC',
  LossyAudioMimeTypeDesc = 'LOSSY_AUDIO_MIME_TYPE_DESC',
  LossyAudioUrlAsc = 'LOSSY_AUDIO_URL_ASC',
  LossyAudioUrlDesc = 'LOSSY_AUDIO_URL_DESC',
  Natural = 'NATURAL',
  NftsProcessedTracksByProcessedTrackIdCountAsc = 'NFTS_PROCESSED_TRACKS_BY_PROCESSED_TRACK_ID__COUNT_ASC',
  NftsProcessedTracksByProcessedTrackIdCountDesc = 'NFTS_PROCESSED_TRACKS_BY_PROCESSED_TRACK_ID__COUNT_DESC',
  NftFactoriesProcessedTracksByProcessedTrackIdCountAsc = 'NFT_FACTORIES_PROCESSED_TRACKS_BY_PROCESSED_TRACK_ID__COUNT_ASC',
  NftFactoriesProcessedTracksByProcessedTrackIdCountDesc = 'NFT_FACTORIES_PROCESSED_TRACKS_BY_PROCESSED_TRACK_ID__COUNT_DESC',
  PlatformByPlatformIdIdAsc = 'PLATFORM_BY_PLATFORM_ID__ID_ASC',
  PlatformByPlatformIdIdDesc = 'PLATFORM_BY_PLATFORM_ID__ID_DESC',
  PlatformByPlatformIdNameAsc = 'PLATFORM_BY_PLATFORM_ID__NAME_ASC',
  PlatformByPlatformIdNameDesc = 'PLATFORM_BY_PLATFORM_ID__NAME_DESC',
  PlatformByPlatformIdTypeAsc = 'PLATFORM_BY_PLATFORM_ID__TYPE_ASC',
  PlatformByPlatformIdTypeDesc = 'PLATFORM_BY_PLATFORM_ID__TYPE_DESC',
  PlatformIdAsc = 'PLATFORM_ID_ASC',
  PlatformIdDesc = 'PLATFORM_ID_DESC',
  PlatformInternalIdAsc = 'PLATFORM_INTERNAL_ID_ASC',
  PlatformInternalIdDesc = 'PLATFORM_INTERNAL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  SupportingArtistAsc = 'SUPPORTING_ARTIST_ASC',
  SupportingArtistDesc = 'SUPPORTING_ARTIST_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TrackEventsByTrackIdCountAsc = 'TRACK_EVENTS_BY_TRACK_ID__COUNT_ASC',
  TrackEventsByTrackIdCountDesc = 'TRACK_EVENTS_BY_TRACK_ID__COUNT_DESC',
  TrackPhasesByProcessedTrackIdCountAsc = 'TRACK_PHASES_BY_PROCESSED_TRACK_ID__COUNT_ASC',
  TrackPhasesByProcessedTrackIdCountDesc = 'TRACK_PHASES_BY_PROCESSED_TRACK_ID__COUNT_DESC',
  WebsiteUrlAsc = 'WEBSITE_URL_ASC',
  WebsiteUrlDesc = 'WEBSITE_URL_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  addressById?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `ArtistEvent`. */
  allArtistEvents?: Maybe<ArtistEventsConnection>;
  /** Reads and enables pagination through a set of `ArtistProfile`. */
  allArtistProfiles?: Maybe<ArtistProfilesConnection>;
  /** Reads and enables pagination through a set of `Artist`. */
  allArtists?: Maybe<ArtistsConnection>;
  /** Reads and enables pagination through a set of `ArtistsNft`. */
  allArtistsNfts?: Maybe<ArtistsNftsConnection>;
  /** Reads and enables pagination through a set of `Block`. */
  allBlocks?: Maybe<BlocksConnection>;
  /** Reads and enables pagination through a set of `CollectionSet`. */
  allCollectionSets?: Maybe<CollectionSetsConnection>;
  /** Reads and enables pagination through a set of `CrdtState`. */
  allCrdtStates?: Maybe<CrdtStatesConnection>;
  /** Reads and enables pagination through a set of `ExternalLinksUser`. */
  allExternalLinksUsers?: Maybe<ExternalLinksUsersConnection>;
  /** Reads and enables pagination through a set of `FeedItem`. */
  allFeedItems?: Maybe<FeedItemsConnection>;
  /** Reads and enables pagination through a set of `IpfsFile`. */
  allIpfsFiles?: Maybe<IpfsFilesConnection>;
  /** Reads and enables pagination through a set of `IpfsFilesUrl`. */
  allIpfsFilesUrls?: Maybe<IpfsFilesUrlsConnection>;
  /** Reads and enables pagination through a set of `IpfsPin`. */
  allIpfsPins?: Maybe<IpfsPinsConnection>;
  /** Reads and enables pagination through a set of `LensProfile`. */
  allLensProfiles?: Maybe<LensProfilesConnection>;
  /** Reads and enables pagination through a set of `Mempool`. */
  allMempools?: Maybe<MempoolsConnection>;
  /** Reads and enables pagination through a set of `MetaFactory`. */
  allMetaFactories?: Maybe<MetaFactoriesConnection>;
  /** Reads and enables pagination through a set of `NftEvent`. */
  allNftEvents?: Maybe<NftEventsConnection>;
  /** Reads and enables pagination through a set of `NftFactory`. */
  allNftFactories?: Maybe<NftFactoriesConnection>;
  /** Reads and enables pagination through a set of `NftFactoriesCollectionSet`. */
  allNftFactoriesCollectionSets?: Maybe<NftFactoriesCollectionSetsConnection>;
  /** Reads and enables pagination through a set of `NftFactoriesProcessedTrack`. */
  allNftFactoriesProcessedTracks?: Maybe<NftFactoriesProcessedTracksConnection>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  allNftTransfers?: Maybe<NftTransfersConnection>;
  /** Reads and enables pagination through a set of `Nft`. */
  allNfts?: Maybe<NftsConnection>;
  /** Reads and enables pagination through a set of `NftsCollector`. */
  allNftsCollectors?: Maybe<NftsCollectorsConnection>;
  /** Reads and enables pagination through a set of `NftsProcessedTrack`. */
  allNftsProcessedTracks?: Maybe<NftsProcessedTracksConnection>;
  /** Reads and enables pagination through a set of `PlatformEvent`. */
  allPlatformEvents?: Maybe<PlatformEventsConnection>;
  /** Reads and enables pagination through a set of `Platform`. */
  allPlatforms?: Maybe<PlatformsConnection>;
  /** Reads and enables pagination through a set of `ProcessedTrack`. */
  allProcessedTracks?: Maybe<ProcessedTracksConnection>;
  /** Reads and enables pagination through a set of `ReservoirEvent`. */
  allReservoirEvents?: Maybe<ReservoirEventsConnection>;
  /** Reads and enables pagination through a set of `ReservoirOrder`. */
  allReservoirOrders?: Maybe<ReservoirOrdersConnection>;
  /** Reads and enables pagination through a set of `Seed`. */
  allSeeds?: Maybe<SeedsConnection>;
  /** Reads and enables pagination through a set of `TrackEvent`. */
  allTrackEvents?: Maybe<TrackEventsConnection>;
  /** Reads and enables pagination through a set of `TrackPhase`. */
  allTrackPhases?: Maybe<TrackPhasesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Artist` using its globally unique `ID`. */
  artist?: Maybe<Artist>;
  artistById?: Maybe<Artist>;
  /** Reads a single `ArtistEvent` using its globally unique `ID`. */
  artistEvent?: Maybe<ArtistEvent>;
  artistEventByArtistIdAndEventId?: Maybe<ArtistEvent>;
  /** Reads a single `ArtistProfile` using its globally unique `ID`. */
  artistProfile?: Maybe<ArtistProfile>;
  artistProfileByArtistIdAndPlatformId?: Maybe<ArtistProfile>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  artistTransfers?: Maybe<NftTransfersConnection>;
  /** Reads a single `ArtistsNft` using its globally unique `ID`. */
  artistsNft?: Maybe<ArtistsNft>;
  artistsNftByArtistIdAndNftId?: Maybe<ArtistsNft>;
  /** Reads a single `Block` using its globally unique `ID`. */
  block?: Maybe<Block>;
  blockByBlockNumberAndChainId?: Maybe<Block>;
  /** Reads a single `CollectionSet` using its globally unique `ID`. */
  collectionSet?: Maybe<CollectionSet>;
  collectionSetById?: Maybe<CollectionSet>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  collectorTransfers?: Maybe<NftTransfersConnection>;
  /** Reads a single `CrdtState` using its globally unique `ID`. */
  crdtState?: Maybe<CrdtState>;
  crdtStateByTableAndColumnAndEntityId?: Maybe<CrdtState>;
  /** Reads a single `ExternalLinksUser` using its globally unique `ID`. */
  externalLinksUser?: Maybe<ExternalLinksUser>;
  externalLinksUserById?: Maybe<ExternalLinksUser>;
  /** Reads a single `FeedItem` using its globally unique `ID`. */
  feedItem?: Maybe<FeedItem>;
  feedItemById?: Maybe<FeedItem>;
  /** Reads a single `IpfsFile` using its globally unique `ID`. */
  ipfsFile?: Maybe<IpfsFile>;
  ipfsFileByCid?: Maybe<IpfsFile>;
  /** Reads a single `IpfsFilesUrl` using its globally unique `ID`. */
  ipfsFilesUrl?: Maybe<IpfsFilesUrl>;
  ipfsFilesUrlByUrl?: Maybe<IpfsFilesUrl>;
  /** Reads a single `IpfsPin` using its globally unique `ID`. */
  ipfsPin?: Maybe<IpfsPin>;
  ipfsPinById?: Maybe<IpfsPin>;
  /** Reads a single `LensProfile` using its globally unique `ID`. */
  lensProfile?: Maybe<LensProfile>;
  lensProfileByProfileId?: Maybe<LensProfile>;
  /** Reads a single `Mempool` using its globally unique `ID`. */
  mempool?: Maybe<Mempool>;
  mempoolById?: Maybe<Mempool>;
  /** Reads a single `MetaFactory` using its globally unique `ID`. */
  metaFactory?: Maybe<MetaFactory>;
  metaFactoryById?: Maybe<MetaFactory>;
  /** Reads a single `Nft` using its globally unique `ID`. */
  nft?: Maybe<Nft>;
  nftById?: Maybe<Nft>;
  /** Reads a single `NftEvent` using its globally unique `ID`. */
  nftEvent?: Maybe<NftEvent>;
  nftEventByNftIdAndEventId?: Maybe<NftEvent>;
  /** Reads a single `NftFactoriesCollectionSet` using its globally unique `ID`. */
  nftFactoriesCollectionSet?: Maybe<NftFactoriesCollectionSet>;
  nftFactoriesCollectionSetByCollectionSetIdAndNftFactoryId?: Maybe<NftFactoriesCollectionSet>;
  /** Reads a single `NftFactoriesProcessedTrack` using its globally unique `ID`. */
  nftFactoriesProcessedTrack?: Maybe<NftFactoriesProcessedTrack>;
  nftFactoriesProcessedTrackByProcessedTrackIdAndNftFactoryId?: Maybe<NftFactoriesProcessedTrack>;
  /** Reads a single `NftFactory` using its globally unique `ID`. */
  nftFactory?: Maybe<NftFactory>;
  nftFactoryById?: Maybe<NftFactory>;
  /** Reads a single `NftTransfer` using its globally unique `ID`. */
  nftTransfer?: Maybe<NftTransfer>;
  nftTransferByIdAndTokenId?: Maybe<NftTransfer>;
  /** Reads a single `NftsCollector` using its globally unique `ID`. */
  nftsCollector?: Maybe<NftsCollector>;
  nftsCollectorByAddressIdAndNftId?: Maybe<NftsCollector>;
  /** Reads a single `NftsProcessedTrack` using its globally unique `ID`. */
  nftsProcessedTrack?: Maybe<NftsProcessedTrack>;
  nftsProcessedTrackByNftIdAndProcessedTrackId?: Maybe<NftsProcessedTrack>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Platform` using its globally unique `ID`. */
  platform?: Maybe<Platform>;
  platformById?: Maybe<Platform>;
  /** Reads a single `PlatformEvent` using its globally unique `ID`. */
  platformEvent?: Maybe<PlatformEvent>;
  platformEventByPlatformIdAndEventId?: Maybe<PlatformEvent>;
  /** Reads a single `ProcessedTrack` using its globally unique `ID`. */
  processedTrack?: Maybe<ProcessedTrack>;
  processedTrackById?: Maybe<ProcessedTrack>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `ReservoirEvent` using its globally unique `ID`. */
  reservoirEvent?: Maybe<ReservoirEvent>;
  reservoirEventById?: Maybe<ReservoirEvent>;
  /** Reads a single `ReservoirOrder` using its globally unique `ID`. */
  reservoirOrder?: Maybe<ReservoirOrder>;
  reservoirOrderById?: Maybe<ReservoirOrder>;
  /** Reads and enables pagination through a set of `User`. */
  searchUsers?: Maybe<UsersConnection>;
  /** Reads a single `Seed` using its globally unique `ID`. */
  seed?: Maybe<Seed>;
  seedById?: Maybe<Seed>;
  /** Reads a single `TrackEvent` using its globally unique `ID`. */
  trackEvent?: Maybe<TrackEvent>;
  trackEventByTrackIdAndEventId?: Maybe<TrackEvent>;
  /** Reads a single `TrackPhase` using its globally unique `ID`. */
  trackPhase?: Maybe<TrackPhase>;
  trackPhaseById?: Maybe<TrackPhase>;
  /** Reads and enables pagination through a set of `NftTransfer`. */
  trackTransfers?: Maybe<NftTransfersConnection>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
  /** Reads and enables pagination through a set of `GetUserCollectionType`. */
  userCollection?: Maybe<GetUserCollectionTypesConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistEventCondition>;
  filter?: InputMaybe<ArtistEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistProfilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistProfileCondition>;
  filter?: InputMaybe<ArtistProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistProfilesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistCondition>;
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistsNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistsNftCondition>;
  filter?: InputMaybe<ArtistsNftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsNftsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBlocksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BlockCondition>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCollectionSetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CollectionSetCondition>;
  filter?: InputMaybe<CollectionSetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CollectionSetsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCrdtStatesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CrdtStateCondition>;
  filter?: InputMaybe<CrdtStateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CrdtStatesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllExternalLinksUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalLinksUserCondition>;
  filter?: InputMaybe<ExternalLinksUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalLinksUsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFeedItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeedItemCondition>;
  filter?: InputMaybe<FeedItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllIpfsFilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<IpfsFileCondition>;
  filter?: InputMaybe<IpfsFileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IpfsFilesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllIpfsFilesUrlsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<IpfsFilesUrlCondition>;
  filter?: InputMaybe<IpfsFilesUrlFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IpfsFilesUrlsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllIpfsPinsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<IpfsPinCondition>;
  filter?: InputMaybe<IpfsPinFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IpfsPinsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLensProfilesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<LensProfileCondition>;
  filter?: InputMaybe<LensProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LensProfilesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMempoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MempoolCondition>;
  filter?: InputMaybe<MempoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MempoolsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMetaFactoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetaFactoryCondition>;
  filter?: InputMaybe<MetaFactoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetaFactoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftEventCondition>;
  filter?: InputMaybe<NftEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftFactoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoryCondition>;
  filter?: InputMaybe<NftFactoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftFactoriesCollectionSetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesCollectionSetCondition>;
  filter?: InputMaybe<NftFactoriesCollectionSetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesCollectionSetsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftFactoriesProcessedTracksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftFactoriesProcessedTrackCondition>;
  filter?: InputMaybe<NftFactoriesProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftFactoriesProcessedTracksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftTransferCondition>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftTransfersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftCondition>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftsCollectorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsCollectorCondition>;
  filter?: InputMaybe<NftsCollectorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsCollectorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNftsProcessedTracksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftsProcessedTrackCondition>;
  filter?: InputMaybe<NftsProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftsProcessedTracksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPlatformEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlatformEventCondition>;
  filter?: InputMaybe<PlatformEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlatformEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPlatformsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlatformCondition>;
  filter?: InputMaybe<PlatformFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlatformsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllProcessedTracksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProcessedTrackCondition>;
  filter?: InputMaybe<ProcessedTrackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProcessedTracksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllReservoirEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirEventCondition>;
  filter?: InputMaybe<ReservoirEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllReservoirOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirOrderCondition>;
  filter?: InputMaybe<ReservoirOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirOrdersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSeedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SeedCondition>;
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SeedsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTrackEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TrackEventCondition>;
  filter?: InputMaybe<TrackEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTrackPhasesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TrackPhaseCondition>;
  filter?: InputMaybe<TrackPhaseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackPhasesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistEventArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistEventByArtistIdAndEventIdArgs = {
  artistId: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistProfileArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistProfileByArtistIdAndPlatformIdArgs = {
  artistId: Scalars['String']['input'];
  platformId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  artistid?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistsNftArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistsNftByArtistIdAndNftIdArgs = {
  artistId: Scalars['String']['input'];
  nftId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBlockArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBlockByBlockNumberAndChainIdArgs = {
  blockNumber: Scalars['String']['input'];
  chainId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectionSetArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectionSetByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectorTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCrdtStateArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCrdtStateByTableAndColumnAndEntityIdArgs = {
  column: Scalars['String']['input'];
  entityId: Scalars['String']['input'];
  table: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryExternalLinksUserArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryExternalLinksUserByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedItemArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedItemByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsFileArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsFileByCidArgs = {
  cid: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsFilesUrlArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsFilesUrlByUrlArgs = {
  url: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsPinArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIpfsPinByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLensProfileArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLensProfileByProfileIdArgs = {
  profileId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMempoolArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMempoolByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetaFactoryArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetaFactoryByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftEventArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftEventByNftIdAndEventIdArgs = {
  eventId: Scalars['String']['input'];
  nftId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoriesCollectionSetArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoriesCollectionSetByCollectionSetIdAndNftFactoryIdArgs = {
  collectionSetId: Scalars['Int']['input'];
  nftFactoryId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoriesProcessedTrackArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoriesProcessedTrackByProcessedTrackIdAndNftFactoryIdArgs = {
  nftFactoryId: Scalars['String']['input'];
  processedTrackId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoryArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftFactoryByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftTransferArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftTransferByIdAndTokenIdArgs = {
  id: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftsCollectorArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftsCollectorByAddressIdAndNftIdArgs = {
  addressId: Scalars['String']['input'];
  nftId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftsProcessedTrackArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftsProcessedTrackByNftIdAndProcessedTrackIdArgs = {
  nftId: Scalars['String']['input'];
  processedTrackId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlatformArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlatformByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlatformEventArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlatformEventByPlatformIdAndEventIdArgs = {
  eventId: Scalars['String']['input'];
  platformId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProcessedTrackArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProcessedTrackByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservoirEventArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservoirEventByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservoirOrderArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryReservoirOrderByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySeedArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySeedByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackEventArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackEventByTrackIdAndEventIdArgs = {
  eventId: Scalars['String']['input'];
  trackId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackPhaseArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackPhaseByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NftTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  trackid?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserCollectionArgs = {
  _userid?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GetUserCollectionTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**     @primaryKey "id" */
export type ReservoirEvent = Node & {
  __typename?: 'ReservoirEvent';
  /** Reads a single `Address` that is related to this `ReservoirEvent`. */
  addressByFromAddress?: Maybe<Address>;
  /** Reads a single `Address` that is related to this `ReservoirEvent`. */
  addressByToAddress?: Maybe<Address>;
  amount?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ArtistEvent`. */
  artistEventsByEventId: ArtistEventsConnection;
  blockHash?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  eventTimestamp?: Maybe<Scalars['Int']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  fromAvatarUrl?: Maybe<Scalars['String']['output']>;
  fromName?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** Reads and enables pagination through a set of `NftEvent`. */
  nftEventsByEventId: NftEventsConnection;
  /** Reads a single `NftFactory` that is related to this `ReservoirEvent`. */
  nftFactoryByNftFactoryId?: Maybe<NftFactory>;
  nftFactoryId?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `PlatformEvent`. */
  platformEventsByEventId: PlatformEventsConnection;
  price?: Maybe<Scalars['String']['output']>;
  /** Reads a single `ReservoirOrder` that is related to this `ReservoirEvent`. */
  reservoirOrderByOrderId?: Maybe<ReservoirOrder>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toAvatarUrl?: Maybe<Scalars['String']['output']>;
  toName?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `TrackEvent`. */
  trackEventsByEventId: TrackEventsConnection;
  type?: Maybe<Scalars['String']['output']>;
};


/**     @primaryKey "id" */
export type ReservoirEventArtistEventsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistEventCondition>;
  filter?: InputMaybe<ArtistEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistEventsOrderBy>>;
};


/**     @primaryKey "id" */
export type ReservoirEventNftEventsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NftEventCondition>;
  filter?: InputMaybe<NftEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftEventsOrderBy>>;
};


/**     @primaryKey "id" */
export type ReservoirEventPlatformEventsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlatformEventCondition>;
  filter?: InputMaybe<PlatformEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlatformEventsOrderBy>>;
};


/**     @primaryKey "id" */
export type ReservoirEventTrackEventsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TrackEventCondition>;
  filter?: InputMaybe<TrackEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackEventsOrderBy>>;
};

/**
 * A condition to be used against `ReservoirEvent` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ReservoirEventCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `blockHash` field. */
  blockHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `eventTimestamp` field. */
  eventTimestamp?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `fromAddress` field. */
  fromAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fromAvatarUrl` field. */
  fromAvatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fromName` field. */
  fromName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `orderId` field. */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `toAddress` field. */
  toAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `toAvatarUrl` field. */
  toAvatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `toName` field. */
  toName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenId` field. */
  tokenId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ReservoirEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirEventFilter = {
  /** Filter by the object’s `addressByFromAddress` relation. */
  addressByFromAddress?: InputMaybe<AddressFilter>;
  /** A related `addressByFromAddress` exists. */
  addressByFromAddressExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `addressByToAddress` relation. */
  addressByToAddress?: InputMaybe<AddressFilter>;
  /** A related `addressByToAddress` exists. */
  addressByToAddressExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ReservoirEventFilter>>;
  /** Filter by the object’s `artistEventsByEventId` relation. */
  artistEventsByEventId?: InputMaybe<ReservoirEventToManyArtistEventFilter>;
  /** Some related `artistEventsByEventId` exist. */
  artistEventsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `blockHash` field. */
  blockHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `eventTimestamp` field. */
  eventTimestamp?: InputMaybe<IntFilter>;
  /** Filter by the object’s `fromAddress` field. */
  fromAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fromAvatarUrl` field. */
  fromAvatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fromName` field. */
  fromName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `nftEventsByEventId` relation. */
  nftEventsByEventId?: InputMaybe<ReservoirEventToManyNftEventFilter>;
  /** Some related `nftEventsByEventId` exist. */
  nftEventsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryByNftFactoryId` relation. */
  nftFactoryByNftFactoryId?: InputMaybe<NftFactoryFilter>;
  /** A related `nftFactoryByNftFactoryId` exists. */
  nftFactoryByNftFactoryIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `nftFactoryId` field. */
  nftFactoryId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ReservoirEventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ReservoirEventFilter>>;
  /** Filter by the object’s `orderId` field. */
  orderId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `platformEventsByEventId` relation. */
  platformEventsByEventId?: InputMaybe<ReservoirEventToManyPlatformEventFilter>;
  /** Some related `platformEventsByEventId` exist. */
  platformEventsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `price` field. */
  price?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reservoirOrderByOrderId` relation. */
  reservoirOrderByOrderId?: InputMaybe<ReservoirOrderFilter>;
  /** A related `reservoirOrderByOrderId` exists. */
  reservoirOrderByOrderIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `toAddress` field. */
  toAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `toAvatarUrl` field. */
  toAvatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `toName` field. */
  toName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenId` field. */
  tokenId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `trackEventsByEventId` relation. */
  trackEventsByEventId?: InputMaybe<ReservoirEventToManyTrackEventFilter>;
  /** Some related `trackEventsByEventId` exist. */
  trackEventsByEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `ArtistEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirEventToManyArtistEventFilter = {
  /** Every related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistEventFilter>;
  /** No related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistEventFilter>;
  /** Some related `ArtistEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistEventFilter>;
};

/** A filter to be used against many `NftEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirEventToManyNftEventFilter = {
  /** Every related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftEventFilter>;
  /** No related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftEventFilter>;
  /** Some related `NftEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftEventFilter>;
};

/** A filter to be used against many `PlatformEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirEventToManyPlatformEventFilter = {
  /** Every related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PlatformEventFilter>;
  /** No related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PlatformEventFilter>;
  /** Some related `PlatformEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PlatformEventFilter>;
};

/** A filter to be used against many `TrackEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirEventToManyTrackEventFilter = {
  /** Every related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TrackEventFilter>;
  /** No related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TrackEventFilter>;
  /** Some related `TrackEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TrackEventFilter>;
};

/** A connection to a list of `ReservoirEvent` values. */
export type ReservoirEventsConnection = {
  __typename?: 'ReservoirEventsConnection';
  /** A list of edges which contains the `ReservoirEvent` and cursor to aid in pagination. */
  edges: Array<ReservoirEventsEdge>;
  /** A list of `ReservoirEvent` objects. */
  nodes: Array<Maybe<ReservoirEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ReservoirEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ReservoirEvent` edge in the connection. */
export type ReservoirEventsEdge = {
  __typename?: 'ReservoirEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ReservoirEvent` at the end of the edge. */
  node?: Maybe<ReservoirEvent>;
};

/** Methods to use when ordering `ReservoirEvent`. */
export enum ReservoirEventsOrderBy {
  AddressByFromAddressAvatarUrlAsc = 'ADDRESS_BY_FROM_ADDRESS__AVATAR_URL_ASC',
  AddressByFromAddressAvatarUrlDesc = 'ADDRESS_BY_FROM_ADDRESS__AVATAR_URL_DESC',
  AddressByFromAddressEnsAvatarAsc = 'ADDRESS_BY_FROM_ADDRESS__ENS_AVATAR_ASC',
  AddressByFromAddressEnsAvatarCheckedAsc = 'ADDRESS_BY_FROM_ADDRESS__ENS_AVATAR_CHECKED_ASC',
  AddressByFromAddressEnsAvatarCheckedDesc = 'ADDRESS_BY_FROM_ADDRESS__ENS_AVATAR_CHECKED_DESC',
  AddressByFromAddressEnsAvatarDesc = 'ADDRESS_BY_FROM_ADDRESS__ENS_AVATAR_DESC',
  AddressByFromAddressEnsNameAsc = 'ADDRESS_BY_FROM_ADDRESS__ENS_NAME_ASC',
  AddressByFromAddressEnsNameCheckedAsc = 'ADDRESS_BY_FROM_ADDRESS__ENS_NAME_CHECKED_ASC',
  AddressByFromAddressEnsNameCheckedDesc = 'ADDRESS_BY_FROM_ADDRESS__ENS_NAME_CHECKED_DESC',
  AddressByFromAddressEnsNameDesc = 'ADDRESS_BY_FROM_ADDRESS__ENS_NAME_DESC',
  AddressByFromAddressIdAsc = 'ADDRESS_BY_FROM_ADDRESS__ID_ASC',
  AddressByFromAddressIdDesc = 'ADDRESS_BY_FROM_ADDRESS__ID_DESC',
  AddressByFromAddressIsPublicAsc = 'ADDRESS_BY_FROM_ADDRESS__IS_PUBLIC_ASC',
  AddressByFromAddressIsPublicDesc = 'ADDRESS_BY_FROM_ADDRESS__IS_PUBLIC_DESC',
  AddressByFromAddressIsSessionAsc = 'ADDRESS_BY_FROM_ADDRESS__IS_SESSION_ASC',
  AddressByFromAddressIsSessionDesc = 'ADDRESS_BY_FROM_ADDRESS__IS_SESSION_DESC',
  AddressByFromAddressNameAsc = 'ADDRESS_BY_FROM_ADDRESS__NAME_ASC',
  AddressByFromAddressNameDesc = 'ADDRESS_BY_FROM_ADDRESS__NAME_DESC',
  AddressByFromAddressUserIdAsc = 'ADDRESS_BY_FROM_ADDRESS__USER_ID_ASC',
  AddressByFromAddressUserIdDesc = 'ADDRESS_BY_FROM_ADDRESS__USER_ID_DESC',
  AddressByToAddressAvatarUrlAsc = 'ADDRESS_BY_TO_ADDRESS__AVATAR_URL_ASC',
  AddressByToAddressAvatarUrlDesc = 'ADDRESS_BY_TO_ADDRESS__AVATAR_URL_DESC',
  AddressByToAddressEnsAvatarAsc = 'ADDRESS_BY_TO_ADDRESS__ENS_AVATAR_ASC',
  AddressByToAddressEnsAvatarCheckedAsc = 'ADDRESS_BY_TO_ADDRESS__ENS_AVATAR_CHECKED_ASC',
  AddressByToAddressEnsAvatarCheckedDesc = 'ADDRESS_BY_TO_ADDRESS__ENS_AVATAR_CHECKED_DESC',
  AddressByToAddressEnsAvatarDesc = 'ADDRESS_BY_TO_ADDRESS__ENS_AVATAR_DESC',
  AddressByToAddressEnsNameAsc = 'ADDRESS_BY_TO_ADDRESS__ENS_NAME_ASC',
  AddressByToAddressEnsNameCheckedAsc = 'ADDRESS_BY_TO_ADDRESS__ENS_NAME_CHECKED_ASC',
  AddressByToAddressEnsNameCheckedDesc = 'ADDRESS_BY_TO_ADDRESS__ENS_NAME_CHECKED_DESC',
  AddressByToAddressEnsNameDesc = 'ADDRESS_BY_TO_ADDRESS__ENS_NAME_DESC',
  AddressByToAddressIdAsc = 'ADDRESS_BY_TO_ADDRESS__ID_ASC',
  AddressByToAddressIdDesc = 'ADDRESS_BY_TO_ADDRESS__ID_DESC',
  AddressByToAddressIsPublicAsc = 'ADDRESS_BY_TO_ADDRESS__IS_PUBLIC_ASC',
  AddressByToAddressIsPublicDesc = 'ADDRESS_BY_TO_ADDRESS__IS_PUBLIC_DESC',
  AddressByToAddressIsSessionAsc = 'ADDRESS_BY_TO_ADDRESS__IS_SESSION_ASC',
  AddressByToAddressIsSessionDesc = 'ADDRESS_BY_TO_ADDRESS__IS_SESSION_DESC',
  AddressByToAddressNameAsc = 'ADDRESS_BY_TO_ADDRESS__NAME_ASC',
  AddressByToAddressNameDesc = 'ADDRESS_BY_TO_ADDRESS__NAME_DESC',
  AddressByToAddressUserIdAsc = 'ADDRESS_BY_TO_ADDRESS__USER_ID_ASC',
  AddressByToAddressUserIdDesc = 'ADDRESS_BY_TO_ADDRESS__USER_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ArtistEventsByEventIdCountAsc = 'ARTIST_EVENTS_BY_EVENT_ID__COUNT_ASC',
  ArtistEventsByEventIdCountDesc = 'ARTIST_EVENTS_BY_EVENT_ID__COUNT_DESC',
  BlockHashAsc = 'BLOCK_HASH_ASC',
  BlockHashDesc = 'BLOCK_HASH_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventTimestampAsc = 'EVENT_TIMESTAMP_ASC',
  EventTimestampDesc = 'EVENT_TIMESTAMP_DESC',
  FromAddressAsc = 'FROM_ADDRESS_ASC',
  FromAddressDesc = 'FROM_ADDRESS_DESC',
  FromAvatarUrlAsc = 'FROM_AVATAR_URL_ASC',
  FromAvatarUrlDesc = 'FROM_AVATAR_URL_DESC',
  FromNameAsc = 'FROM_NAME_ASC',
  FromNameDesc = 'FROM_NAME_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  Natural = 'NATURAL',
  NftEventsByEventIdCountAsc = 'NFT_EVENTS_BY_EVENT_ID__COUNT_ASC',
  NftEventsByEventIdCountDesc = 'NFT_EVENTS_BY_EVENT_ID__COUNT_DESC',
  NftFactoryByNftFactoryIdAddressAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_ASC',
  NftFactoryByNftFactoryIdAddressDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ADDRESS_DESC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_ASC',
  NftFactoryByNftFactoryIdApprovalCheckAlgorithmDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_ALGORITHM_DESC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_ASC',
  NftFactoryByNftFactoryIdApprovalCheckCompletedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVAL_CHECK_COMPLETED_DESC',
  NftFactoryByNftFactoryIdApprovedAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_ASC',
  NftFactoryByNftFactoryIdApprovedDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__APPROVED_DESC',
  NftFactoryByNftFactoryIdAutoApproveAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_ASC',
  NftFactoryByNftFactoryIdAutoApproveDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__AUTO_APPROVE_DESC',
  NftFactoryByNftFactoryIdChainIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_ASC',
  NftFactoryByNftFactoryIdChainIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CHAIN_ID_DESC',
  NftFactoryByNftFactoryIdContractTypeAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_ASC',
  NftFactoryByNftFactoryIdContractTypeDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__CONTRACT_TYPE_DESC',
  NftFactoryByNftFactoryIdIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_ASC',
  NftFactoryByNftFactoryIdIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__ID_DESC',
  NftFactoryByNftFactoryIdMetaFactoryIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_ASC',
  NftFactoryByNftFactoryIdMetaFactoryIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__META_FACTORY_ID_DESC',
  NftFactoryByNftFactoryIdMintingProtocolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_ASC',
  NftFactoryByNftFactoryIdMintingProtocolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__MINTING_PROTOCOL_DESC',
  NftFactoryByNftFactoryIdNameAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_ASC',
  NftFactoryByNftFactoryIdNameDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__NAME_DESC',
  NftFactoryByNftFactoryIdPlatformIdAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_ASC',
  NftFactoryByNftFactoryIdPlatformIdDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PLATFORM_ID_DESC',
  NftFactoryByNftFactoryIdPreviewCapableAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_ASC',
  NftFactoryByNftFactoryIdPreviewCapableDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_CAPABLE_DESC',
  NftFactoryByNftFactoryIdPreviewEnabledAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_ASC',
  NftFactoryByNftFactoryIdPreviewEnabledDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__PREVIEW_ENABLED_DESC',
  NftFactoryByNftFactoryIdStandardAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_ASC',
  NftFactoryByNftFactoryIdStandardDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STANDARD_DESC',
  NftFactoryByNftFactoryIdStartingBlockAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_ASC',
  NftFactoryByNftFactoryIdStartingBlockDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__STARTING_BLOCK_DESC',
  NftFactoryByNftFactoryIdSymbolAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_ASC',
  NftFactoryByNftFactoryIdSymbolDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__SYMBOL_DESC',
  NftFactoryByNftFactoryIdTypeMetadataAsc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_ASC',
  NftFactoryByNftFactoryIdTypeMetadataDesc = 'NFT_FACTORY_BY_NFT_FACTORY_ID__TYPE_METADATA_DESC',
  NftFactoryIdAsc = 'NFT_FACTORY_ID_ASC',
  NftFactoryIdDesc = 'NFT_FACTORY_ID_DESC',
  OrderIdAsc = 'ORDER_ID_ASC',
  OrderIdDesc = 'ORDER_ID_DESC',
  PlatformEventsByEventIdCountAsc = 'PLATFORM_EVENTS_BY_EVENT_ID__COUNT_ASC',
  PlatformEventsByEventIdCountDesc = 'PLATFORM_EVENTS_BY_EVENT_ID__COUNT_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReservoirOrderByOrderIdCreatedAtAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__CREATED_AT_ASC',
  ReservoirOrderByOrderIdCreatedAtDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__CREATED_AT_DESC',
  ReservoirOrderByOrderIdCurrencyAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_ASC',
  ReservoirOrderByOrderIdCurrencyDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_DESC',
  ReservoirOrderByOrderIdCurrencyPriceAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_PRICE_ASC',
  ReservoirOrderByOrderIdCurrencyPriceDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_PRICE_DESC',
  ReservoirOrderByOrderIdCurrencyValueAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_VALUE_ASC',
  ReservoirOrderByOrderIdCurrencyValueDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__CURRENCY_VALUE_DESC',
  ReservoirOrderByOrderIdExpirationAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__EXPIRATION_ASC',
  ReservoirOrderByOrderIdExpirationDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__EXPIRATION_DESC',
  ReservoirOrderByOrderIdFeeBpsAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__FEE_BPS_ASC',
  ReservoirOrderByOrderIdFeeBpsDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__FEE_BPS_DESC',
  ReservoirOrderByOrderIdFeeBreakdownAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__FEE_BREAKDOWN_ASC',
  ReservoirOrderByOrderIdFeeBreakdownDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__FEE_BREAKDOWN_DESC',
  ReservoirOrderByOrderIdIdAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__ID_ASC',
  ReservoirOrderByOrderIdIdDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__ID_DESC',
  ReservoirOrderByOrderIdKindAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__KIND_ASC',
  ReservoirOrderByOrderIdKindDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__KIND_DESC',
  ReservoirOrderByOrderIdMakerAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__MAKER_ASC',
  ReservoirOrderByOrderIdMakerDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__MAKER_DESC',
  ReservoirOrderByOrderIdPriceAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__PRICE_ASC',
  ReservoirOrderByOrderIdPriceDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__PRICE_DESC',
  ReservoirOrderByOrderIdRawDataAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__RAW_DATA_ASC',
  ReservoirOrderByOrderIdRawDataDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__RAW_DATA_DESC',
  ReservoirOrderByOrderIdSideAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__SIDE_ASC',
  ReservoirOrderByOrderIdSideDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__SIDE_DESC',
  ReservoirOrderByOrderIdTakerAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__TAKER_ASC',
  ReservoirOrderByOrderIdTakerDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__TAKER_DESC',
  ReservoirOrderByOrderIdUpdatedAtAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__UPDATED_AT_ASC',
  ReservoirOrderByOrderIdUpdatedAtDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__UPDATED_AT_DESC',
  ReservoirOrderByOrderIdValidFromAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALID_FROM_ASC',
  ReservoirOrderByOrderIdValidFromDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALID_FROM_DESC',
  ReservoirOrderByOrderIdValidUntilAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALID_UNTIL_ASC',
  ReservoirOrderByOrderIdValidUntilDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALID_UNTIL_DESC',
  ReservoirOrderByOrderIdValueAsc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALUE_ASC',
  ReservoirOrderByOrderIdValueDesc = 'RESERVOIR_ORDER_BY_ORDER_ID__VALUE_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  ToAddressAsc = 'TO_ADDRESS_ASC',
  ToAddressDesc = 'TO_ADDRESS_DESC',
  ToAvatarUrlAsc = 'TO_AVATAR_URL_ASC',
  ToAvatarUrlDesc = 'TO_AVATAR_URL_DESC',
  ToNameAsc = 'TO_NAME_ASC',
  ToNameDesc = 'TO_NAME_DESC',
  TrackEventsByEventIdCountAsc = 'TRACK_EVENTS_BY_EVENT_ID__COUNT_ASC',
  TrackEventsByEventIdCountDesc = 'TRACK_EVENTS_BY_EVENT_ID__COUNT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type ReservoirOrder = Node & {
  __typename?: 'ReservoirOrder';
  /** Reads a single `Address` that is related to this `ReservoirOrder`. */
  addressByMaker?: Maybe<Address>;
  /** Reads a single `Address` that is related to this `ReservoirOrder`. */
  addressByTaker?: Maybe<Address>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  currencyPrice?: Maybe<Scalars['String']['output']>;
  currencyValue?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['Datetime']['output']>;
  feeBps?: Maybe<Scalars['Int']['output']>;
  feeBreakdown?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  maker?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  rawData?: Maybe<Scalars['JSON']['output']>;
  /** Reads and enables pagination through a set of `ReservoirEvent`. */
  reservoirEventsByOrderId: ReservoirEventsConnection;
  side?: Maybe<Scalars['String']['output']>;
  taker?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  validFrom?: Maybe<Scalars['Datetime']['output']>;
  validUntil?: Maybe<Scalars['Datetime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


export type ReservoirOrderReservoirEventsByOrderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ReservoirEventCondition>;
  filter?: InputMaybe<ReservoirEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservoirEventsOrderBy>>;
};

/**
 * A condition to be used against `ReservoirOrder` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ReservoirOrderCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `currency` field. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `currencyPrice` field. */
  currencyPrice?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `currencyValue` field. */
  currencyValue?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `expiration` field. */
  expiration?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `feeBps` field. */
  feeBps?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `feeBreakdown` field. */
  feeBreakdown?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `kind` field. */
  kind?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `maker` field. */
  maker?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rawData` field. */
  rawData?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `side` field. */
  side?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `taker` field. */
  taker?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `validFrom` field. */
  validFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `validUntil` field. */
  validUntil?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ReservoirOrder` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirOrderFilter = {
  /** Filter by the object’s `addressByMaker` relation. */
  addressByMaker?: InputMaybe<AddressFilter>;
  /** A related `addressByMaker` exists. */
  addressByMakerExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `addressByTaker` relation. */
  addressByTaker?: InputMaybe<AddressFilter>;
  /** A related `addressByTaker` exists. */
  addressByTakerExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ReservoirOrderFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `currency` field. */
  currency?: InputMaybe<StringFilter>;
  /** Filter by the object’s `currencyPrice` field. */
  currencyPrice?: InputMaybe<StringFilter>;
  /** Filter by the object’s `currencyValue` field. */
  currencyValue?: InputMaybe<StringFilter>;
  /** Filter by the object’s `expiration` field. */
  expiration?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `feeBps` field. */
  feeBps?: InputMaybe<IntFilter>;
  /** Filter by the object’s `feeBreakdown` field. */
  feeBreakdown?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `kind` field. */
  kind?: InputMaybe<StringFilter>;
  /** Filter by the object’s `maker` field. */
  maker?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ReservoirOrderFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ReservoirOrderFilter>>;
  /** Filter by the object’s `price` field. */
  price?: InputMaybe<StringFilter>;
  /** Filter by the object’s `rawData` field. */
  rawData?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `reservoirEventsByOrderId` relation. */
  reservoirEventsByOrderId?: InputMaybe<ReservoirOrderToManyReservoirEventFilter>;
  /** Some related `reservoirEventsByOrderId` exist. */
  reservoirEventsByOrderIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `side` field. */
  side?: InputMaybe<StringFilter>;
  /** Filter by the object’s `taker` field. */
  taker?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `validFrom` field. */
  validFrom?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `validUntil` field. */
  validUntil?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `ReservoirEvent` object types. All fields are combined with a logical ‘and.’ */
export type ReservoirOrderToManyReservoirEventFilter = {
  /** Every related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ReservoirEventFilter>;
  /** No related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ReservoirEventFilter>;
  /** Some related `ReservoirEvent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ReservoirEventFilter>;
};

/** A connection to a list of `ReservoirOrder` values. */
export type ReservoirOrdersConnection = {
  __typename?: 'ReservoirOrdersConnection';
  /** A list of edges which contains the `ReservoirOrder` and cursor to aid in pagination. */
  edges: Array<ReservoirOrdersEdge>;
  /** A list of `ReservoirOrder` objects. */
  nodes: Array<Maybe<ReservoirOrder>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ReservoirOrder` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ReservoirOrder` edge in the connection. */
export type ReservoirOrdersEdge = {
  __typename?: 'ReservoirOrdersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ReservoirOrder` at the end of the edge. */
  node?: Maybe<ReservoirOrder>;
};

/** Methods to use when ordering `ReservoirOrder`. */
export enum ReservoirOrdersOrderBy {
  AddressByMakerAvatarUrlAsc = 'ADDRESS_BY_MAKER__AVATAR_URL_ASC',
  AddressByMakerAvatarUrlDesc = 'ADDRESS_BY_MAKER__AVATAR_URL_DESC',
  AddressByMakerEnsAvatarAsc = 'ADDRESS_BY_MAKER__ENS_AVATAR_ASC',
  AddressByMakerEnsAvatarCheckedAsc = 'ADDRESS_BY_MAKER__ENS_AVATAR_CHECKED_ASC',
  AddressByMakerEnsAvatarCheckedDesc = 'ADDRESS_BY_MAKER__ENS_AVATAR_CHECKED_DESC',
  AddressByMakerEnsAvatarDesc = 'ADDRESS_BY_MAKER__ENS_AVATAR_DESC',
  AddressByMakerEnsNameAsc = 'ADDRESS_BY_MAKER__ENS_NAME_ASC',
  AddressByMakerEnsNameCheckedAsc = 'ADDRESS_BY_MAKER__ENS_NAME_CHECKED_ASC',
  AddressByMakerEnsNameCheckedDesc = 'ADDRESS_BY_MAKER__ENS_NAME_CHECKED_DESC',
  AddressByMakerEnsNameDesc = 'ADDRESS_BY_MAKER__ENS_NAME_DESC',
  AddressByMakerIdAsc = 'ADDRESS_BY_MAKER__ID_ASC',
  AddressByMakerIdDesc = 'ADDRESS_BY_MAKER__ID_DESC',
  AddressByMakerIsPublicAsc = 'ADDRESS_BY_MAKER__IS_PUBLIC_ASC',
  AddressByMakerIsPublicDesc = 'ADDRESS_BY_MAKER__IS_PUBLIC_DESC',
  AddressByMakerIsSessionAsc = 'ADDRESS_BY_MAKER__IS_SESSION_ASC',
  AddressByMakerIsSessionDesc = 'ADDRESS_BY_MAKER__IS_SESSION_DESC',
  AddressByMakerNameAsc = 'ADDRESS_BY_MAKER__NAME_ASC',
  AddressByMakerNameDesc = 'ADDRESS_BY_MAKER__NAME_DESC',
  AddressByMakerUserIdAsc = 'ADDRESS_BY_MAKER__USER_ID_ASC',
  AddressByMakerUserIdDesc = 'ADDRESS_BY_MAKER__USER_ID_DESC',
  AddressByTakerAvatarUrlAsc = 'ADDRESS_BY_TAKER__AVATAR_URL_ASC',
  AddressByTakerAvatarUrlDesc = 'ADDRESS_BY_TAKER__AVATAR_URL_DESC',
  AddressByTakerEnsAvatarAsc = 'ADDRESS_BY_TAKER__ENS_AVATAR_ASC',
  AddressByTakerEnsAvatarCheckedAsc = 'ADDRESS_BY_TAKER__ENS_AVATAR_CHECKED_ASC',
  AddressByTakerEnsAvatarCheckedDesc = 'ADDRESS_BY_TAKER__ENS_AVATAR_CHECKED_DESC',
  AddressByTakerEnsAvatarDesc = 'ADDRESS_BY_TAKER__ENS_AVATAR_DESC',
  AddressByTakerEnsNameAsc = 'ADDRESS_BY_TAKER__ENS_NAME_ASC',
  AddressByTakerEnsNameCheckedAsc = 'ADDRESS_BY_TAKER__ENS_NAME_CHECKED_ASC',
  AddressByTakerEnsNameCheckedDesc = 'ADDRESS_BY_TAKER__ENS_NAME_CHECKED_DESC',
  AddressByTakerEnsNameDesc = 'ADDRESS_BY_TAKER__ENS_NAME_DESC',
  AddressByTakerIdAsc = 'ADDRESS_BY_TAKER__ID_ASC',
  AddressByTakerIdDesc = 'ADDRESS_BY_TAKER__ID_DESC',
  AddressByTakerIsPublicAsc = 'ADDRESS_BY_TAKER__IS_PUBLIC_ASC',
  AddressByTakerIsPublicDesc = 'ADDRESS_BY_TAKER__IS_PUBLIC_DESC',
  AddressByTakerIsSessionAsc = 'ADDRESS_BY_TAKER__IS_SESSION_ASC',
  AddressByTakerIsSessionDesc = 'ADDRESS_BY_TAKER__IS_SESSION_DESC',
  AddressByTakerNameAsc = 'ADDRESS_BY_TAKER__NAME_ASC',
  AddressByTakerNameDesc = 'ADDRESS_BY_TAKER__NAME_DESC',
  AddressByTakerUserIdAsc = 'ADDRESS_BY_TAKER__USER_ID_ASC',
  AddressByTakerUserIdDesc = 'ADDRESS_BY_TAKER__USER_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  CurrencyPriceAsc = 'CURRENCY_PRICE_ASC',
  CurrencyPriceDesc = 'CURRENCY_PRICE_DESC',
  CurrencyValueAsc = 'CURRENCY_VALUE_ASC',
  CurrencyValueDesc = 'CURRENCY_VALUE_DESC',
  ExpirationAsc = 'EXPIRATION_ASC',
  ExpirationDesc = 'EXPIRATION_DESC',
  FeeBpsAsc = 'FEE_BPS_ASC',
  FeeBpsDesc = 'FEE_BPS_DESC',
  FeeBreakdownAsc = 'FEE_BREAKDOWN_ASC',
  FeeBreakdownDesc = 'FEE_BREAKDOWN_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KindAsc = 'KIND_ASC',
  KindDesc = 'KIND_DESC',
  MakerAsc = 'MAKER_ASC',
  MakerDesc = 'MAKER_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RawDataAsc = 'RAW_DATA_ASC',
  RawDataDesc = 'RAW_DATA_DESC',
  ReservoirEventsByOrderIdCountAsc = 'RESERVOIR_EVENTS_BY_ORDER_ID__COUNT_ASC',
  ReservoirEventsByOrderIdCountDesc = 'RESERVOIR_EVENTS_BY_ORDER_ID__COUNT_DESC',
  SideAsc = 'SIDE_ASC',
  SideDesc = 'SIDE_DESC',
  TakerAsc = 'TAKER_ASC',
  TakerDesc = 'TAKER_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ValidFromAsc = 'VALID_FROM_ASC',
  ValidFromDesc = 'VALID_FROM_DESC',
  ValidUntilAsc = 'VALID_UNTIL_ASC',
  ValidUntilDesc = 'VALID_UNTIL_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type Seed = Node & {
  __typename?: 'Seed';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  operation?: Maybe<Scalars['String']['output']>;
  originalPayload?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  signer?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
};

/** A condition to be used against `Seed` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SeedCondition = {
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `operation` field. */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `originalPayload` field. */
  originalPayload?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `signature` field. */
  signature?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `signer` field. */
  signer?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `source` field. */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `table` field. */
  table?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against `Seed` object types. All fields are combined with a logical ‘and.’ */
export type SeedFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SeedFilter>>;
  /** Filter by the object’s `data` field. */
  data?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SeedFilter>;
  /** Filter by the object’s `operation` field. */
  operation?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SeedFilter>>;
  /** Filter by the object’s `originalPayload` field. */
  originalPayload?: InputMaybe<StringFilter>;
  /** Filter by the object’s `signature` field. */
  signature?: InputMaybe<StringFilter>;
  /** Filter by the object’s `signer` field. */
  signer?: InputMaybe<StringFilter>;
  /** Filter by the object’s `source` field. */
  source?: InputMaybe<StringFilter>;
  /** Filter by the object’s `table` field. */
  table?: InputMaybe<StringFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Seed` values. */
export type SeedsConnection = {
  __typename?: 'SeedsConnection';
  /** A list of edges which contains the `Seed` and cursor to aid in pagination. */
  edges: Array<SeedsEdge>;
  /** A list of `Seed` objects. */
  nodes: Array<Maybe<Seed>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Seed` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Seed` edge in the connection. */
export type SeedsEdge = {
  __typename?: 'SeedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Seed` at the end of the edge. */
  node?: Maybe<Seed>;
};

/** Methods to use when ordering `Seed`. */
export enum SeedsOrderBy {
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OperationAsc = 'OPERATION_ASC',
  OperationDesc = 'OPERATION_DESC',
  OriginalPayloadAsc = 'ORIGINAL_PAYLOAD_ASC',
  OriginalPayloadDesc = 'ORIGINAL_PAYLOAD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SignatureAsc = 'SIGNATURE_ASC',
  SignatureDesc = 'SIGNATURE_DESC',
  SignerAsc = 'SIGNER_ASC',
  SignerDesc = 'SIGNER_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TableAsc = 'TABLE_ASC',
  TableDesc = 'TABLE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

export type TrackEvent = Node & {
  __typename?: 'TrackEvent';
  eventId: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `ProcessedTrack` that is related to this `TrackEvent`. */
  processedTrackByTrackId?: Maybe<ProcessedTrack>;
  /** Reads a single `ReservoirEvent` that is related to this `TrackEvent`. */
  reservoirEventByEventId?: Maybe<ReservoirEvent>;
  trackId: Scalars['String']['output'];
};

/**
 * A condition to be used against `TrackEvent` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TrackEventCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `trackId` field. */
  trackId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `TrackEvent` object types. All fields are combined with a logical ‘and.’ */
export type TrackEventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TrackEventFilter>>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TrackEventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TrackEventFilter>>;
  /** Filter by the object’s `processedTrackByTrackId` relation. */
  processedTrackByTrackId?: InputMaybe<ProcessedTrackFilter>;
  /** A related `processedTrackByTrackId` exists. */
  processedTrackByTrackIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `reservoirEventByEventId` relation. */
  reservoirEventByEventId?: InputMaybe<ReservoirEventFilter>;
  /** A related `reservoirEventByEventId` exists. */
  reservoirEventByEventIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `trackId` field. */
  trackId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `TrackEvent` values. */
export type TrackEventsConnection = {
  __typename?: 'TrackEventsConnection';
  /** A list of edges which contains the `TrackEvent` and cursor to aid in pagination. */
  edges: Array<TrackEventsEdge>;
  /** A list of `TrackEvent` objects. */
  nodes: Array<Maybe<TrackEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TrackEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `TrackEvent` edge in the connection. */
export type TrackEventsEdge = {
  __typename?: 'TrackEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TrackEvent` at the end of the edge. */
  node?: Maybe<TrackEvent>;
};

/** Methods to use when ordering `TrackEvent`. */
export enum TrackEventsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTrackByTrackIdArtistIdAsc = 'PROCESSED_TRACK_BY_TRACK_ID__ARTIST_ID_ASC',
  ProcessedTrackByTrackIdArtistIdDesc = 'PROCESSED_TRACK_BY_TRACK_ID__ARTIST_ID_DESC',
  ProcessedTrackByTrackIdCreatedAtBlockNumberAsc = 'PROCESSED_TRACK_BY_TRACK_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ProcessedTrackByTrackIdCreatedAtBlockNumberDesc = 'PROCESSED_TRACK_BY_TRACK_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ProcessedTrackByTrackIdCreatedAtTimeAsc = 'PROCESSED_TRACK_BY_TRACK_ID__CREATED_AT_TIME_ASC',
  ProcessedTrackByTrackIdCreatedAtTimeDesc = 'PROCESSED_TRACK_BY_TRACK_ID__CREATED_AT_TIME_DESC',
  ProcessedTrackByTrackIdDescriptionAsc = 'PROCESSED_TRACK_BY_TRACK_ID__DESCRIPTION_ASC',
  ProcessedTrackByTrackIdDescriptionDesc = 'PROCESSED_TRACK_BY_TRACK_ID__DESCRIPTION_DESC',
  ProcessedTrackByTrackIdIdAsc = 'PROCESSED_TRACK_BY_TRACK_ID__ID_ASC',
  ProcessedTrackByTrackIdIdDesc = 'PROCESSED_TRACK_BY_TRACK_ID__ID_DESC',
  ProcessedTrackByTrackIdLossyArtworkIpfshashAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_ASC',
  ProcessedTrackByTrackIdLossyArtworkIpfshashDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_DESC',
  ProcessedTrackByTrackIdLossyArtworkMimeTypeAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_ASC',
  ProcessedTrackByTrackIdLossyArtworkMimeTypeDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_DESC',
  ProcessedTrackByTrackIdLossyArtworkUrlAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_URL_ASC',
  ProcessedTrackByTrackIdLossyArtworkUrlDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_ARTWORK_URL_DESC',
  ProcessedTrackByTrackIdLossyAudioIpfshashAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_IPFSHASH_ASC',
  ProcessedTrackByTrackIdLossyAudioIpfshashDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_IPFSHASH_DESC',
  ProcessedTrackByTrackIdLossyAudioMimeTypeAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_ASC',
  ProcessedTrackByTrackIdLossyAudioMimeTypeDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_DESC',
  ProcessedTrackByTrackIdLossyAudioUrlAsc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_URL_ASC',
  ProcessedTrackByTrackIdLossyAudioUrlDesc = 'PROCESSED_TRACK_BY_TRACK_ID__LOSSY_AUDIO_URL_DESC',
  ProcessedTrackByTrackIdPlatformIdAsc = 'PROCESSED_TRACK_BY_TRACK_ID__PLATFORM_ID_ASC',
  ProcessedTrackByTrackIdPlatformIdDesc = 'PROCESSED_TRACK_BY_TRACK_ID__PLATFORM_ID_DESC',
  ProcessedTrackByTrackIdPlatformInternalIdAsc = 'PROCESSED_TRACK_BY_TRACK_ID__PLATFORM_INTERNAL_ID_ASC',
  ProcessedTrackByTrackIdPlatformInternalIdDesc = 'PROCESSED_TRACK_BY_TRACK_ID__PLATFORM_INTERNAL_ID_DESC',
  ProcessedTrackByTrackIdSlugAsc = 'PROCESSED_TRACK_BY_TRACK_ID__SLUG_ASC',
  ProcessedTrackByTrackIdSlugDesc = 'PROCESSED_TRACK_BY_TRACK_ID__SLUG_DESC',
  ProcessedTrackByTrackIdSupportingArtistAsc = 'PROCESSED_TRACK_BY_TRACK_ID__SUPPORTING_ARTIST_ASC',
  ProcessedTrackByTrackIdSupportingArtistDesc = 'PROCESSED_TRACK_BY_TRACK_ID__SUPPORTING_ARTIST_DESC',
  ProcessedTrackByTrackIdTitleAsc = 'PROCESSED_TRACK_BY_TRACK_ID__TITLE_ASC',
  ProcessedTrackByTrackIdTitleDesc = 'PROCESSED_TRACK_BY_TRACK_ID__TITLE_DESC',
  ProcessedTrackByTrackIdWebsiteUrlAsc = 'PROCESSED_TRACK_BY_TRACK_ID__WEBSITE_URL_ASC',
  ProcessedTrackByTrackIdWebsiteUrlDesc = 'PROCESSED_TRACK_BY_TRACK_ID__WEBSITE_URL_DESC',
  ReservoirEventByEventIdAmountAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_ASC',
  ReservoirEventByEventIdAmountDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__AMOUNT_DESC',
  ReservoirEventByEventIdBlockHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_ASC',
  ReservoirEventByEventIdBlockHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__BLOCK_HASH_DESC',
  ReservoirEventByEventIdCreatedAtAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_ASC',
  ReservoirEventByEventIdCreatedAtDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__CREATED_AT_DESC',
  ReservoirEventByEventIdEventTimestampAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_ASC',
  ReservoirEventByEventIdEventTimestampDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__EVENT_TIMESTAMP_DESC',
  ReservoirEventByEventIdFromAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_ASC',
  ReservoirEventByEventIdFromAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_ADDRESS_DESC',
  ReservoirEventByEventIdFromAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_ASC',
  ReservoirEventByEventIdFromAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_AVATAR_URL_DESC',
  ReservoirEventByEventIdFromNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_ASC',
  ReservoirEventByEventIdFromNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__FROM_NAME_DESC',
  ReservoirEventByEventIdHashAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_ASC',
  ReservoirEventByEventIdHashDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__HASH_DESC',
  ReservoirEventByEventIdIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_ASC',
  ReservoirEventByEventIdIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ID_DESC',
  ReservoirEventByEventIdMetadataAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_ASC',
  ReservoirEventByEventIdMetadataDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__METADATA_DESC',
  ReservoirEventByEventIdNftFactoryIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_ASC',
  ReservoirEventByEventIdNftFactoryIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__NFT_FACTORY_ID_DESC',
  ReservoirEventByEventIdOrderIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_ASC',
  ReservoirEventByEventIdOrderIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__ORDER_ID_DESC',
  ReservoirEventByEventIdPriceAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_ASC',
  ReservoirEventByEventIdPriceDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__PRICE_DESC',
  ReservoirEventByEventIdTokenIdAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_ASC',
  ReservoirEventByEventIdTokenIdDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TOKEN_ID_DESC',
  ReservoirEventByEventIdToAddressAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_ASC',
  ReservoirEventByEventIdToAddressDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_ADDRESS_DESC',
  ReservoirEventByEventIdToAvatarUrlAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_ASC',
  ReservoirEventByEventIdToAvatarUrlDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_AVATAR_URL_DESC',
  ReservoirEventByEventIdToNameAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_ASC',
  ReservoirEventByEventIdToNameDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TO_NAME_DESC',
  ReservoirEventByEventIdTypeAsc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_ASC',
  ReservoirEventByEventIdTypeDesc = 'RESERVOIR_EVENT_BY_EVENT_ID__TYPE_DESC',
  TrackIdAsc = 'TRACK_ID_ASC',
  TrackIdDesc = 'TRACK_ID_DESC'
}

export type TrackPhase = Node & {
  __typename?: 'TrackPhase';
  access?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['JSON']['output']>;
  end?: Maybe<Scalars['Datetime']['output']>;
  fixedSupply?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  maxSupply?: Maybe<Scalars['String']['output']>;
  merkleRoot?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  /** Reads a single `ProcessedTrack` that is related to this `TrackPhase`. */
  processedTrackByProcessedTrackId?: Maybe<ProcessedTrack>;
  processedTrackId?: Maybe<Scalars['String']['output']>;
  reservePrice?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Datetime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `TrackPhase` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TrackPhaseCondition = {
  /** Checks for equality with the object’s `access` field. */
  access?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `currency` field. */
  currency?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `end` field. */
  end?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `fixedSupply` field. */
  fixedSupply?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `maxSupply` field. */
  maxSupply?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `merkleRoot` field. */
  merkleRoot?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reservePrice` field. */
  reservePrice?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `TrackPhase` object types. All fields are combined with a logical ‘and.’ */
export type TrackPhaseFilter = {
  /** Filter by the object’s `access` field. */
  access?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TrackPhaseFilter>>;
  /** Filter by the object’s `currency` field. */
  currency?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `end` field. */
  end?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `fixedSupply` field. */
  fixedSupply?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `maxSupply` field. */
  maxSupply?: InputMaybe<StringFilter>;
  /** Filter by the object’s `merkleRoot` field. */
  merkleRoot?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TrackPhaseFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TrackPhaseFilter>>;
  /** Filter by the object’s `price` field. */
  price?: InputMaybe<StringFilter>;
  /** Filter by the object’s `processedTrackByProcessedTrackId` relation. */
  processedTrackByProcessedTrackId?: InputMaybe<ProcessedTrackFilter>;
  /** A related `processedTrackByProcessedTrackId` exists. */
  processedTrackByProcessedTrackIdExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `processedTrackId` field. */
  processedTrackId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reservePrice` field. */
  reservePrice?: InputMaybe<StringFilter>;
  /** Filter by the object’s `start` field. */
  start?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** A connection to a list of `TrackPhase` values. */
export type TrackPhasesConnection = {
  __typename?: 'TrackPhasesConnection';
  /** A list of edges which contains the `TrackPhase` and cursor to aid in pagination. */
  edges: Array<TrackPhasesEdge>;
  /** A list of `TrackPhase` objects. */
  nodes: Array<Maybe<TrackPhase>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TrackPhase` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `TrackPhase` edge in the connection. */
export type TrackPhasesEdge = {
  __typename?: 'TrackPhasesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TrackPhase` at the end of the edge. */
  node?: Maybe<TrackPhase>;
};

/** Methods to use when ordering `TrackPhase`. */
export enum TrackPhasesOrderBy {
  AccessAsc = 'ACCESS_ASC',
  AccessDesc = 'ACCESS_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  EndAsc = 'END_ASC',
  EndDesc = 'END_DESC',
  FixedSupplyAsc = 'FIXED_SUPPLY_ASC',
  FixedSupplyDesc = 'FIXED_SUPPLY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxSupplyAsc = 'MAX_SUPPLY_ASC',
  MaxSupplyDesc = 'MAX_SUPPLY_DESC',
  MerkleRootAsc = 'MERKLE_ROOT_ASC',
  MerkleRootDesc = 'MERKLE_ROOT_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProcessedTrackByProcessedTrackIdArtistIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_ASC',
  ProcessedTrackByProcessedTrackIdArtistIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ARTIST_ID_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtBlockNumberDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_BLOCK_NUMBER_DESC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_ASC',
  ProcessedTrackByProcessedTrackIdCreatedAtTimeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__CREATED_AT_TIME_DESC',
  ProcessedTrackByProcessedTrackIdDescriptionAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_ASC',
  ProcessedTrackByProcessedTrackIdDescriptionDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__DESCRIPTION_DESC',
  ProcessedTrackByProcessedTrackIdIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_ASC',
  ProcessedTrackByProcessedTrackIdIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__ID_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyArtworkUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_ARTWORK_URL_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioIpfshashDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_IPFSHASH_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioMimeTypeDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_MIME_TYPE_DESC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_ASC',
  ProcessedTrackByProcessedTrackIdLossyAudioUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__LOSSY_AUDIO_URL_DESC',
  ProcessedTrackByProcessedTrackIdPlatformIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_ID_DESC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_ASC',
  ProcessedTrackByProcessedTrackIdPlatformInternalIdDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__PLATFORM_INTERNAL_ID_DESC',
  ProcessedTrackByProcessedTrackIdSlugAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_ASC',
  ProcessedTrackByProcessedTrackIdSlugDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SLUG_DESC',
  ProcessedTrackByProcessedTrackIdSupportingArtistAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_ASC',
  ProcessedTrackByProcessedTrackIdSupportingArtistDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__SUPPORTING_ARTIST_DESC',
  ProcessedTrackByProcessedTrackIdTitleAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_ASC',
  ProcessedTrackByProcessedTrackIdTitleDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__TITLE_DESC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlAsc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_ASC',
  ProcessedTrackByProcessedTrackIdWebsiteUrlDesc = 'PROCESSED_TRACK_BY_PROCESSED_TRACK_ID__WEBSITE_URL_DESC',
  ProcessedTrackIdAsc = 'PROCESSED_TRACK_ID_ASC',
  ProcessedTrackIdDesc = 'PROCESSED_TRACK_ID_DESC',
  ReservePriceAsc = 'RESERVE_PRICE_ASC',
  ReservePriceDesc = 'RESERVE_PRICE_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type User = Node & {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByUserId: AddressesConnection;
  /** Reads and enables pagination through a set of `Artist`. */
  artistsByUserId: ArtistsConnection;
  avatarIpfsHash?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  customTheme?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ExternalLinksUser`. */
  externalLinksUsersByUserId: ExternalLinksUsersConnection;
  /** Reads and enables pagination through a set of `FeedItem`. */
  feedItemsByUserId: FeedItemsConnection;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  predefinedThemeName?: Maybe<Scalars['String']['output']>;
};


export type UserAddressesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AddressCondition>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


export type UserArtistsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistCondition>;
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};


export type UserExternalLinksUsersByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalLinksUserCondition>;
  filter?: InputMaybe<ExternalLinksUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalLinksUsersOrderBy>>;
};


export type UserFeedItemsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeedItemCondition>;
  filter?: InputMaybe<FeedItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeedItemsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `avatarIpfsHash` field. */
  avatarIpfsHash?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `customTheme` field. */
  customTheme?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `predefinedThemeName` field. */
  predefinedThemeName?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `addressesByUserId` relation. */
  addressesByUserId?: InputMaybe<UserToManyAddressFilter>;
  /** Some related `addressesByUserId` exist. */
  addressesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `artistsByUserId` relation. */
  artistsByUserId?: InputMaybe<UserToManyArtistFilter>;
  /** Some related `artistsByUserId` exist. */
  artistsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `avatarIpfsHash` field. */
  avatarIpfsHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `customTheme` field. */
  customTheme?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `externalLinksUsersByUserId` relation. */
  externalLinksUsersByUserId?: InputMaybe<UserToManyExternalLinksUserFilter>;
  /** Some related `externalLinksUsersByUserId` exist. */
  externalLinksUsersByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `feedItemsByUserId` relation. */
  feedItemsByUserId?: InputMaybe<UserToManyFeedItemFilter>;
  /** Some related `feedItemsByUserId` exist. */
  feedItemsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `predefinedThemeName` field. */
  predefinedThemeName?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `Address` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAddressFilter = {
  /** Every related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AddressFilter>;
  /** No related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AddressFilter>;
  /** Some related `Address` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AddressFilter>;
};

/** A filter to be used against many `Artist` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyArtistFilter = {
  /** Every related `Artist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ArtistFilter>;
  /** No related `Artist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ArtistFilter>;
  /** Some related `Artist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ArtistFilter>;
};

/** A filter to be used against many `ExternalLinksUser` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyExternalLinksUserFilter = {
  /** Every related `ExternalLinksUser` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ExternalLinksUserFilter>;
  /** No related `ExternalLinksUser` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ExternalLinksUserFilter>;
  /** Some related `ExternalLinksUser` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ExternalLinksUserFilter>;
};

/** A filter to be used against many `FeedItem` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyFeedItemFilter = {
  /** Every related `FeedItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FeedItemFilter>;
  /** No related `FeedItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FeedItemFilter>;
  /** Some related `FeedItem` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FeedItemFilter>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  AddressesByUserIdCountAsc = 'ADDRESSES_BY_USER_ID__COUNT_ASC',
  AddressesByUserIdCountDesc = 'ADDRESSES_BY_USER_ID__COUNT_DESC',
  ArtistsByUserIdCountAsc = 'ARTISTS_BY_USER_ID__COUNT_ASC',
  ArtistsByUserIdCountDesc = 'ARTISTS_BY_USER_ID__COUNT_DESC',
  AvatarIpfshashAsc = 'AVATAR_IPFSHASH_ASC',
  AvatarIpfshashDesc = 'AVATAR_IPFSHASH_DESC',
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  CustomThemeAsc = 'CUSTOM_THEME_ASC',
  CustomThemeDesc = 'CUSTOM_THEME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ExternalLinksUsersByUserIdCountAsc = 'EXTERNAL_LINKS_USERS_BY_USER_ID__COUNT_ASC',
  ExternalLinksUsersByUserIdCountDesc = 'EXTERNAL_LINKS_USERS_BY_USER_ID__COUNT_DESC',
  FeedItemsByUserIdCountAsc = 'FEED_ITEMS_BY_USER_ID__COUNT_ASC',
  FeedItemsByUserIdCountDesc = 'FEED_ITEMS_BY_USER_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PredefinedThemeNameAsc = 'PREDEFINED_THEME_NAME_ASC',
  PredefinedThemeNameDesc = 'PREDEFINED_THEME_NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GetMyMusicQueryVariables = Exact<{
  owner?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMyMusicQuery = { __typename?: 'Query', allNfts?: { __typename?: 'NftsConnection', nodes: Array<{ __typename?: 'Nft', id: string, tokenId?: string | null, contractAddress?: string | null, tokenMetadataUri?: string | null, tokenUri?: string | null, metadata?: any | null } | null> } | null };


export const GetMyMusicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyMusic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"spinamp"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nftsCollectorsByNftId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"addressId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalToInsensitive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenMetadataUri"}},{"kind":"Field","name":{"kind":"Name","value":"tokenUri"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyMusicQuery, GetMyMusicQueryVariables>;