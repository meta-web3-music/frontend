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

/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type Account = {
  __typename?: 'Account';
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  inflows: Array<Stream>;
  /**
   * Indicates whether the address/account is a super app.
   *
   */
  isSuperApp: Scalars['Boolean']['output'];
  outflows: Array<Stream>;
  publishedIndexes: Array<Index>;
  receivedTransferEvents: Array<TransferEvent>;
  sentTransferEvents: Array<TransferEvent>;
  subscriptions: Array<IndexSubscription>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountAccountTokenSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountInflowsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountOutflowsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountPublishedIndexesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Index_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountReceivedTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountSentTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountSubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexSubscription_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountTokenDowngradedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with Superfluid contracts.
 *
 */
export type AccountTokenUpgradedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};

/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshot = {
  __typename?: 'AccountTokenSnapshot';
  account: Account;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  /**
   * The count of active incoming streams to this account.
   *
   */
  activeIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * Balance of `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  balanceUntilUpdatedAt: Scalars['BigInt']['output'];
  flowOperators: Array<FlowOperator>;
  /**
   * ID composed of: accountID-tokenID
   *
   */
  id: Scalars['ID']['output'];
  /**
   * The count of closed incoming streams by `account`.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account`.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * isLiquidationEstimateOptimistic, If `totalSubscriptionsWithUnits > 0`, it is true.
   * "Optimistic" can be thought of as conservative as it refers to the earliest time the user may be liquidated as they may receive ongoing distributions which aren't tracked by the subgraph.
   *
   */
  isLiquidationEstimateOptimistic: Scalars['Boolean']['output'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  token: Token;
  /**
   * The total amount of `token` streamed into this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedInUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed from this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedOutUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` streamed through this `account` until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The total amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * Counts all currently (as of updatedAt) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt']['output'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalNetFlowRate: Scalars['BigInt']['output'];
  /**
   * The count of currently open streams for an account, both incoming and outgoing.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams by `account`, both incoming and outgoing.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The current (as of updatedAt) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotAccountTokenSnapshotLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.
 *
 */
export type AccountTokenSnapshotFlowOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlowOperator_Filter>;
};

/**
 * AccountTokenSnapshotLog: Historical entries of `AccountTokenSnapshot` updates.
 *
 */
export type AccountTokenSnapshotLog = {
  __typename?: 'AccountTokenSnapshotLog';
  account: Account;
  accountTokenSnapshot: AccountTokenSnapshot;
  /**
   * The count of active incoming streams to this account.
   *
   */
  activeIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The count of active outgoing streams from this account.
   *
   */
  activeOutgoingStreamCount: Scalars['Int']['output'];
  /**
   * Balance of `account` as of `timestamp`/`block`.
   *
   */
  balance: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**
   * The count of closed incoming streams by `account`.
   *
   */
  inactiveIncomingStreamCount: Scalars['Int']['output'];
  /**
   * The count of closed outgoing streams by `account`.
   *
   */
  inactiveOutgoingStreamCount: Scalars['Int']['output'];
  logIndex: Scalars['BigInt']['output'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` streamed into this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedIn: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until the `timestamp`/`block`.
   *
   */
  totalAmountStreamedOut: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) amount of `token` this `account` has transferred out until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt']['output'];
  /**
   * Counts all currently (as of timestamp) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total (as of timestamp) deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt']['output'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block`.
   * This can be obtained by: `totalInflowRate - totalOutflowRate`
   *
   */
  totalNetFlowRate: Scalars['BigInt']['output'];
  /**
   * The current (as of timestamp) number of open streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The current (as of timestamp) count of closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The current (as of timestamp) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
  triggeredByEventName: Scalars['String']['output'];
};

export type AccountTokenSnapshotLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_Filter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshotLog_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOut?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccountTokenSnapshotLog_OrderBy {
  Account = 'account',
  AccountTokenSnapshot = 'accountTokenSnapshot',
  AccountTokenSnapshotActiveIncomingStreamCount = 'accountTokenSnapshot__activeIncomingStreamCount',
  AccountTokenSnapshotActiveOutgoingStreamCount = 'accountTokenSnapshot__activeOutgoingStreamCount',
  AccountTokenSnapshotBalanceUntilUpdatedAt = 'accountTokenSnapshot__balanceUntilUpdatedAt',
  AccountTokenSnapshotId = 'accountTokenSnapshot__id',
  AccountTokenSnapshotInactiveIncomingStreamCount = 'accountTokenSnapshot__inactiveIncomingStreamCount',
  AccountTokenSnapshotInactiveOutgoingStreamCount = 'accountTokenSnapshot__inactiveOutgoingStreamCount',
  AccountTokenSnapshotIsLiquidationEstimateOptimistic = 'accountTokenSnapshot__isLiquidationEstimateOptimistic',
  AccountTokenSnapshotMaybeCriticalAtTimestamp = 'accountTokenSnapshot__maybeCriticalAtTimestamp',
  AccountTokenSnapshotTotalAmountStreamedInUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountStreamedOutUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountStreamedUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountTransferredUntilUpdatedAt = 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt',
  AccountTokenSnapshotTotalApprovedSubscriptions = 'accountTokenSnapshot__totalApprovedSubscriptions',
  AccountTokenSnapshotTotalDeposit = 'accountTokenSnapshot__totalDeposit',
  AccountTokenSnapshotTotalInflowRate = 'accountTokenSnapshot__totalInflowRate',
  AccountTokenSnapshotTotalNetFlowRate = 'accountTokenSnapshot__totalNetFlowRate',
  AccountTokenSnapshotTotalNumberOfActiveStreams = 'accountTokenSnapshot__totalNumberOfActiveStreams',
  AccountTokenSnapshotTotalNumberOfClosedStreams = 'accountTokenSnapshot__totalNumberOfClosedStreams',
  AccountTokenSnapshotTotalOutflowRate = 'accountTokenSnapshot__totalOutflowRate',
  AccountTokenSnapshotTotalSubscriptionsWithUnits = 'accountTokenSnapshot__totalSubscriptionsWithUnits',
  AccountTokenSnapshotUpdatedAtBlockNumber = 'accountTokenSnapshot__updatedAtBlockNumber',
  AccountTokenSnapshotUpdatedAtTimestamp = 'accountTokenSnapshot__updatedAtTimestamp',
  AccountCreatedAtBlockNumber = 'account__createdAtBlockNumber',
  AccountCreatedAtTimestamp = 'account__createdAtTimestamp',
  AccountId = 'account__id',
  AccountIsSuperApp = 'account__isSuperApp',
  AccountUpdatedAtBlockNumber = 'account__updatedAtBlockNumber',
  AccountUpdatedAtTimestamp = 'account__updatedAtTimestamp',
  ActiveIncomingStreamCount = 'activeIncomingStreamCount',
  ActiveOutgoingStreamCount = 'activeOutgoingStreamCount',
  Balance = 'balance',
  BlockNumber = 'blockNumber',
  Id = 'id',
  InactiveIncomingStreamCount = 'inactiveIncomingStreamCount',
  InactiveOutgoingStreamCount = 'inactiveOutgoingStreamCount',
  LogIndex = 'logIndex',
  MaybeCriticalAtTimestamp = 'maybeCriticalAtTimestamp',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountStreamed = 'totalAmountStreamed',
  TotalAmountStreamedIn = 'totalAmountStreamedIn',
  TotalAmountStreamedOut = 'totalAmountStreamedOut',
  TotalAmountTransferred = 'totalAmountTransferred',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalInflowRate = 'totalInflowRate',
  TotalNetFlowRate = 'totalNetFlowRate',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TransactionHash = 'transactionHash',
  TriggeredByEventName = 'triggeredByEventName'
}

export type AccountTokenSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshotLogs_?: InputMaybe<AccountTokenSnapshotLog_Filter>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_Filter>>>;
  balanceUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  balanceUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperators_?: InputMaybe<FlowOperator_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  inactiveIncomingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveIncomingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveIncomingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  inactiveOutgoingStreamCount_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not?: InputMaybe<Scalars['Int']['input']>;
  inactiveOutgoingStreamCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isLiquidationEstimateOptimistic?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidationEstimateOptimistic_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isLiquidationEstimateOptimistic_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLiquidationEstimateOptimistic_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountTokenSnapshot_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountStreamedInUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedInUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedInUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountTokenSnapshot_OrderBy {
  Account = 'account',
  AccountTokenSnapshotLogs = 'accountTokenSnapshotLogs',
  AccountCreatedAtBlockNumber = 'account__createdAtBlockNumber',
  AccountCreatedAtTimestamp = 'account__createdAtTimestamp',
  AccountId = 'account__id',
  AccountIsSuperApp = 'account__isSuperApp',
  AccountUpdatedAtBlockNumber = 'account__updatedAtBlockNumber',
  AccountUpdatedAtTimestamp = 'account__updatedAtTimestamp',
  ActiveIncomingStreamCount = 'activeIncomingStreamCount',
  ActiveOutgoingStreamCount = 'activeOutgoingStreamCount',
  BalanceUntilUpdatedAt = 'balanceUntilUpdatedAt',
  FlowOperators = 'flowOperators',
  Id = 'id',
  InactiveIncomingStreamCount = 'inactiveIncomingStreamCount',
  InactiveOutgoingStreamCount = 'inactiveOutgoingStreamCount',
  IsLiquidationEstimateOptimistic = 'isLiquidationEstimateOptimistic',
  MaybeCriticalAtTimestamp = 'maybeCriticalAtTimestamp',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountStreamedInUntilUpdatedAt = 'totalAmountStreamedInUntilUpdatedAt',
  TotalAmountStreamedOutUntilUpdatedAt = 'totalAmountStreamedOutUntilUpdatedAt',
  TotalAmountStreamedUntilUpdatedAt = 'totalAmountStreamedUntilUpdatedAt',
  TotalAmountTransferredUntilUpdatedAt = 'totalAmountTransferredUntilUpdatedAt',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalInflowRate = 'totalInflowRate',
  TotalNetFlowRate = 'totalNetFlowRate',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountTokenSnapshots_?: InputMaybe<AccountTokenSnapshot_Filter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  inflows_?: InputMaybe<Stream_Filter>;
  isSuperApp?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperApp_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSuperApp_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperApp_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  outflows_?: InputMaybe<Stream_Filter>;
  publishedIndexes_?: InputMaybe<Index_Filter>;
  receivedTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  sentTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  tokenDowngradedEvents_?: InputMaybe<TokenDowngradedEvent_Filter>;
  tokenUpgradedEvents_?: InputMaybe<TokenUpgradedEvent_Filter>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Account_OrderBy {
  AccountTokenSnapshots = 'accountTokenSnapshots',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  Inflows = 'inflows',
  IsSuperApp = 'isSuperApp',
  Outflows = 'outflows',
  PublishedIndexes = 'publishedIndexes',
  ReceivedTransferEvents = 'receivedTransferEvents',
  SentTransferEvents = 'sentTransferEvents',
  Subscriptions = 'subscriptions',
  TokenDowngradedEvents = 'tokenDowngradedEvents',
  TokenUpgradedEvents = 'tokenUpgradedEvents',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type AgreementClassRegisteredEvent = Event & {
  __typename?: 'AgreementClassRegisteredEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  agreementType: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  code: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AgreementClassRegisteredEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassRegisteredEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AgreementClassRegisteredEvent_OrderBy {
  Addresses = 'addresses',
  AgreementType = 'agreementType',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type AgreementClassUpdatedEvent = Event & {
  __typename?: 'AgreementClassUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  agreementType: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  code: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AgreementClassUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementType_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AgreementClassUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AgreementClassUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  AgreementType = 'agreementType',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * NOTE: This event was deprecated since the introduction of the 3Ps system.
 * Replaced by: `AgreementLiquidatedV2Event`
 * See: https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#patricians-plebs-and-pirates-3ps for more details on the 3Ps system.
 * See: https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol#L425 for more details on the events.
 *
 */
export type AgreementLiquidatedByEvent = Event & {
  __typename?: 'AgreementLiquidatedByEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = liquidatorAccount (executor of liquidation)
   * addresses[2] = penaltyAccount (the sender of the flow/stream)
   * addresses[3] = bondAccount (the address receiving the reward - the reward account for the token, pre 3Ps)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  agreementClass: Scalars['Bytes']['output'];
  agreementId: Scalars['Bytes']['output'];
  bailoutAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  bondAccount: Scalars['Bytes']['output'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidatorAccount: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  penaltyAccount: Scalars['Bytes']['output'];
  rewardAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AgreementLiquidatedByEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_Filter>>>;
  bailoutAmount?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bailoutAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  bailoutAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondAccount?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bondAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedByEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  penaltyAccount?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  penaltyAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  penaltyAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AgreementLiquidatedByEvent_OrderBy {
  Addresses = 'addresses',
  AgreementClass = 'agreementClass',
  AgreementId = 'agreementId',
  BailoutAmount = 'bailoutAmount',
  BlockNumber = 'blockNumber',
  BondAccount = 'bondAccount',
  Deposit = 'deposit',
  FlowRateAtLiquidation = 'flowRateAtLiquidation',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LiquidatorAccount = 'liquidatorAccount',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  PenaltyAccount = 'penaltyAccount',
  RewardAmount = 'rewardAmount',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type AgreementLiquidatedV2Event = Event & {
  __typename?: 'AgreementLiquidatedV2Event';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `liquidatorAccount` (executor of liquidation)
   * addresses[2] = `targetAccount` (the sender of the flow/stream)
   * addresses[3] = `rewardAmountReceiver` (the address receiving the reward) addresses
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  agreementClass: Scalars['Bytes']['output'];
  agreementId: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The full deposit amount of the stream that was liquidated.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * The flow rate of the stream at the time of liquidation.
   *
   */
  flowRateAtLiquidation: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidationType: Scalars['Int']['output'];
  liquidatorAccount: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * TO BE DEPRECATED in v2 endpoint - use rewardAmountReceiver instead
   *
   */
  rewardAccount: Scalars['Bytes']['output'];
  rewardAmount: Scalars['BigInt']['output'];
  rewardAmountReceiver: Scalars['Bytes']['output'];
  targetAccount: Scalars['Bytes']['output'];
  targetAccountBalanceDelta: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type AgreementLiquidatedV2Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementClass_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  agreementId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAtLiquidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAtLiquidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationType?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_gt?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_gte?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  liquidationType_lt?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_lte?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_not?: InputMaybe<Scalars['Int']['input']>;
  liquidationType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidatorAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AgreementLiquidatedV2Event_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAccount?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmountReceiver?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmountReceiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAmountReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAccount?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccountBalanceDelta?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAccountBalanceDelta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetAccountBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetAccount_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_gt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_gte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAccount_lt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_lte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_not?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAccount_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AgreementLiquidatedV2Event_OrderBy {
  Addresses = 'addresses',
  AgreementClass = 'agreementClass',
  AgreementId = 'agreementId',
  BlockNumber = 'blockNumber',
  Deposit = 'deposit',
  FlowRateAtLiquidation = 'flowRateAtLiquidation',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LiquidationType = 'liquidationType',
  LiquidatorAccount = 'liquidatorAccount',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  RewardAccount = 'rewardAccount',
  RewardAmount = 'rewardAmount',
  RewardAmountReceiver = 'rewardAmountReceiver',
  TargetAccount = 'targetAccount',
  TargetAccountBalanceDelta = 'targetAccountBalanceDelta',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type AppRegisteredEvent = Event & {
  __typename?: 'AppRegisteredEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  app: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AppRegisteredEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_Filter>>>;
  app?: InputMaybe<Scalars['Bytes']['input']>;
  app_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_gt?: InputMaybe<Scalars['Bytes']['input']>;
  app_gte?: InputMaybe<Scalars['Bytes']['input']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_lt?: InputMaybe<Scalars['Bytes']['input']>;
  app_lte?: InputMaybe<Scalars['Bytes']['input']>;
  app_not?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AppRegisteredEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AppRegisteredEvent_OrderBy {
  Addresses = 'addresses',
  App = 'app',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BondIncreasedEvent = Event & {
  __typename?: 'BondIncreasedEvent';
  /**
   * The additional amount added to the bond by the current Patrician In Charge (PIC).
   *
   */
  additionalBond: Scalars['BigInt']['output'];
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BondIncreasedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  additionalBond?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_not?: InputMaybe<Scalars['BigInt']['input']>;
  additionalBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BondIncreasedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BondIncreasedEvent_OrderBy {
  AdditionalBond = 'additionalBond',
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type BurnedEvent = Event & {
  __typename?: 'BurnedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  operator: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BurnedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BurnedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BurnedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BurnedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  From = 'from',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type CfAv1LiquidationPeriodChangedEvent = Event & {
  __typename?: 'CFAv1LiquidationPeriodChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  liquidationPeriod: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CfAv1LiquidationPeriodChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CfAv1LiquidationPeriodChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LiquidationPeriod = 'liquidationPeriod',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type ConfigChangedEvent = Event & {
  __typename?: 'ConfigChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  key: Scalars['Bytes']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

export type ConfigChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  key?: InputMaybe<Scalars['Bytes']['input']>;
  key_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_gt?: InputMaybe<Scalars['Bytes']['input']>;
  key_gte?: InputMaybe<Scalars['Bytes']['input']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  key_lt?: InputMaybe<Scalars['Bytes']['input']>;
  key_lte?: InputMaybe<Scalars['Bytes']['input']>;
  key_not?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ConfigChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ConfigChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  Key = 'key',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type CustomSuperTokenCreatedEvent = Event & {
  __typename?: 'CustomSuperTokenCreatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CustomSuperTokenCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<CustomSuperTokenCreatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CustomSuperTokenCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * Event: An interface which is shared by all event entities and contains basic transaction data.
 *
 */
export type Event = {
  /**
   * Contains the addresses for accounts that were "impacted" by the event.
   * This typically involves accounts which experienced a state change as a result of the transaction which emitted this event.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  /**
   * The block number which the event was logged in.
   *
   */
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The gas price of the transaction that the event was logged in.
   *
   */
  gasPrice: Scalars['BigInt']['output'];
  /**
   * The gas used for this transaction.
   *
   */
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The id of the event entity.
   *
   */
  id: Scalars['ID']['output'];
  /**
   * The index of the event, e.g. first event emitted would have `logIndex` of 0.
   *
   */
  logIndex: Scalars['BigInt']['output'];
  /**
   * The name of the event - is a 1-to-1 match with the name in our smart contracts.
   *
   */
  name: Scalars['String']['output'];
  /**
   * A number used internally to sort the order of transactions.
   * The formula: `blockNumber * ORDER_MULTIPLIER + logIndex`
   * where: ORDER_MULTIPLIER = 10000
   *
   */
  order: Scalars['BigInt']['output'];
  /**
   * The block timestamp which the event was logged in.
   *
   */
  timestamp: Scalars['BigInt']['output'];
  /**
   * The transaction hash of the transaction that the event was logged in.
   *
   */
  transactionHash: Scalars['Bytes']['output'];
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Event_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type ExitRateChangedEvent = Event & {
  __typename?: 'ExitRateChangedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The flowrate at which the bond is streamed back to the Patrician In Charge.
   *
   */
  exitRate: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken).
   *
   */
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ExitRateChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ExitRateChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ExitRateChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  ExitRate = 'exitRate',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperator = {
  __typename?: 'FlowOperator';
  accountTokenSnapshot: AccountTokenSnapshot;
  /**
   * The transfer allowance granted to the `flowOperator` by the `sender`.
   *
   */
  allowance: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  flowOperator: Scalars['Bytes']['output'];
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  /**
   * The flow rate allowance granted to the `flowOperator` by the `sender`. This can be reset if the `sender` updates the `flowOperator` flow rate allowance.
   *
   */
  flowRateAllowanceGranted: Scalars['BigInt']['output'];
  /**
   * The remaining flow rate allowance the `flowOperator` has.
   * This will go down every time when the `flowOperator` uses the allowance, that is, if they increase flowRate for `sender` or create a new flow on behalf of `sender`.
   * It can only be reset if the `sender` updates the flow rate allowance.
   * NOTE: this value will NOT go down if max flow rate allowance is set.
   *
   */
  flowRateAllowanceRemaining: Scalars['BigInt']['output'];
  /**
   * ID composed of: flowOperator-token-sender
   *
   */
  id: Scalars['ID']['output'];
  /**
   * The permissions granted to the `flowOperator`.
   * Bitmask representation:
   * Delete | Update | Create
   * | D | U | C |
   * | 0 | 0 | 0 |
   *
   */
  permissions: Scalars['Int']['output'];
  sender: Account;
  token: Token;
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperatorFlowOperatorUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};

export type FlowOperatorUpdatedEvent = Event & {
  __typename?: 'FlowOperatorUpdatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = sender
   * addresses[2] = `flowOperator`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  flowOperator: FlowOperator;
  flowRateAllowance: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int']['output'];
  sender: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FlowOperatorUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperator?: InputMaybe<Scalars['String']['input']>;
  flowOperator_?: InputMaybe<FlowOperator_Filter>;
  flowOperator_contains?: InputMaybe<Scalars['String']['input']>;
  flowOperator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_ends_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['String']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['String']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  flowOperator_lt?: InputMaybe<Scalars['String']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  flowOperator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowOperator_starts_with?: InputMaybe<Scalars['String']['input']>;
  flowOperator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  flowRateAllowance?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<FlowOperatorUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  permissions?: InputMaybe<Scalars['Int']['input']>;
  permissions_gt?: InputMaybe<Scalars['Int']['input']>;
  permissions_gte?: InputMaybe<Scalars['Int']['input']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_lt?: InputMaybe<Scalars['Int']['input']>;
  permissions_lte?: InputMaybe<Scalars['Int']['input']>;
  permissions_not?: InputMaybe<Scalars['Int']['input']>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FlowOperatorUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  FlowOperator = 'flowOperator',
  FlowOperatorAllowance = 'flowOperator__allowance',
  FlowOperatorCreatedAtBlockNumber = 'flowOperator__createdAtBlockNumber',
  FlowOperatorCreatedAtTimestamp = 'flowOperator__createdAtTimestamp',
  FlowOperatorFlowOperator = 'flowOperator__flowOperator',
  FlowOperatorFlowRateAllowanceGranted = 'flowOperator__flowRateAllowanceGranted',
  FlowOperatorFlowRateAllowanceRemaining = 'flowOperator__flowRateAllowanceRemaining',
  FlowOperatorId = 'flowOperator__id',
  FlowOperatorPermissions = 'flowOperator__permissions',
  FlowOperatorUpdatedAtBlockNumber = 'flowOperator__updatedAtBlockNumber',
  FlowOperatorUpdatedAtTimestamp = 'flowOperator__updatedAtTimestamp',
  FlowRateAllowance = 'flowRateAllowance',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Permissions = 'permissions',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type FlowOperator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowance?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allowance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_not?: InputMaybe<Scalars['BigInt']['input']>;
  allowance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FlowOperator_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperatorUpdatedEvents_?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowRateAllowanceGranted?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceGranted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceGranted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceRemaining?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRateAllowanceRemaining_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRateAllowanceRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FlowOperator_Filter>>>;
  permissions?: InputMaybe<Scalars['Int']['input']>;
  permissions_gt?: InputMaybe<Scalars['Int']['input']>;
  permissions_gte?: InputMaybe<Scalars['Int']['input']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_lt?: InputMaybe<Scalars['Int']['input']>;
  permissions_lte?: InputMaybe<Scalars['Int']['input']>;
  permissions_not?: InputMaybe<Scalars['Int']['input']>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum FlowOperator_OrderBy {
  AccountTokenSnapshot = 'accountTokenSnapshot',
  AccountTokenSnapshotActiveIncomingStreamCount = 'accountTokenSnapshot__activeIncomingStreamCount',
  AccountTokenSnapshotActiveOutgoingStreamCount = 'accountTokenSnapshot__activeOutgoingStreamCount',
  AccountTokenSnapshotBalanceUntilUpdatedAt = 'accountTokenSnapshot__balanceUntilUpdatedAt',
  AccountTokenSnapshotId = 'accountTokenSnapshot__id',
  AccountTokenSnapshotInactiveIncomingStreamCount = 'accountTokenSnapshot__inactiveIncomingStreamCount',
  AccountTokenSnapshotInactiveOutgoingStreamCount = 'accountTokenSnapshot__inactiveOutgoingStreamCount',
  AccountTokenSnapshotIsLiquidationEstimateOptimistic = 'accountTokenSnapshot__isLiquidationEstimateOptimistic',
  AccountTokenSnapshotMaybeCriticalAtTimestamp = 'accountTokenSnapshot__maybeCriticalAtTimestamp',
  AccountTokenSnapshotTotalAmountStreamedInUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedInUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountStreamedOutUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedOutUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountStreamedUntilUpdatedAt = 'accountTokenSnapshot__totalAmountStreamedUntilUpdatedAt',
  AccountTokenSnapshotTotalAmountTransferredUntilUpdatedAt = 'accountTokenSnapshot__totalAmountTransferredUntilUpdatedAt',
  AccountTokenSnapshotTotalApprovedSubscriptions = 'accountTokenSnapshot__totalApprovedSubscriptions',
  AccountTokenSnapshotTotalDeposit = 'accountTokenSnapshot__totalDeposit',
  AccountTokenSnapshotTotalInflowRate = 'accountTokenSnapshot__totalInflowRate',
  AccountTokenSnapshotTotalNetFlowRate = 'accountTokenSnapshot__totalNetFlowRate',
  AccountTokenSnapshotTotalNumberOfActiveStreams = 'accountTokenSnapshot__totalNumberOfActiveStreams',
  AccountTokenSnapshotTotalNumberOfClosedStreams = 'accountTokenSnapshot__totalNumberOfClosedStreams',
  AccountTokenSnapshotTotalOutflowRate = 'accountTokenSnapshot__totalOutflowRate',
  AccountTokenSnapshotTotalSubscriptionsWithUnits = 'accountTokenSnapshot__totalSubscriptionsWithUnits',
  AccountTokenSnapshotUpdatedAtBlockNumber = 'accountTokenSnapshot__updatedAtBlockNumber',
  AccountTokenSnapshotUpdatedAtTimestamp = 'accountTokenSnapshot__updatedAtTimestamp',
  Allowance = 'allowance',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  FlowOperator = 'flowOperator',
  FlowOperatorUpdatedEvents = 'flowOperatorUpdatedEvents',
  FlowRateAllowanceGranted = 'flowRateAllowanceGranted',
  FlowRateAllowanceRemaining = 'flowRateAllowanceRemaining',
  Id = 'id',
  Permissions = 'permissions',
  Sender = 'sender',
  SenderCreatedAtBlockNumber = 'sender__createdAtBlockNumber',
  SenderCreatedAtTimestamp = 'sender__createdAtTimestamp',
  SenderId = 'sender__id',
  SenderIsSuperApp = 'sender__isSuperApp',
  SenderUpdatedAtBlockNumber = 'sender__updatedAtBlockNumber',
  SenderUpdatedAtTimestamp = 'sender__updatedAtTimestamp',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

/**
 * FlowUpdated: An `Event` entity that is emitted
 * when a flow is created, updated, or deleted.
 *
 */
export type FlowUpdatedEvent = Event & {
  __typename?: 'FlowUpdatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (supertoken)
   * addresses[1] = `sender`
   * addresses[2] = `receiver`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The deposit amount put up for the creation of the flow.
   *
   */
  deposit: Scalars['BigInt']['output'];
  /**
   * The address that is executing the flow update transaction.
   * This will be the zero address until the flowOperator feature is live.
   *
   */
  flowOperator: Scalars['Bytes']['output'];
  /**
   * The flow rate per second.
   *
   */
  flowRate: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /**
   * The previous flow rate, the absolute (positive) value.
   *
   */
  oldFlowRate: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the flow receiver.
   *
   */
  receiver: Scalars['Bytes']['output'];
  /**
   * The address of the flow sender.
   *
   */
  sender: Scalars['Bytes']['output'];
  /**
   * The stream entity which is being modified.
   *
   */
  stream: Stream;
  timestamp: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken) being streamed.
   *
   */
  token: Scalars['Bytes']['output'];
  /**
   * The total amount streamed until the timestamp
   * for the Stream entity linked to this event.
   *
   */
  totalAmountStreamedUntilTimestamp: Scalars['BigInt']['output'];
  /**
   * The total (global/account level) flow rate of `receiver` for `token` as of this event.
   *
   */
  totalReceiverFlowRate: Scalars['BigInt']['output'];
  /**
   * The total (global/account level) flow rate of `sender` for `token` as of this event.
   *
   */
  totalSenderFlowRate: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  /**
   * The "type" of the `FlowUpdated` event.
   * 0 = create
   * 1 = update
   * 2 = terminate
   *
   */
  type: Scalars['Int']['output'];
  /**
   * Arbitrary bytes (additional data) passed upon flow creation.
   *
   */
  userData: Scalars['Bytes']['output'];
};

export type FlowUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowOperator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FlowUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  totalAmountStreamedUntilTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReceiverFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReceiverFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceiverFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSenderFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSenderFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSenderFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FlowUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Deposit = 'deposit',
  FlowOperator = 'flowOperator',
  FlowRate = 'flowRate',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  OldFlowRate = 'oldFlowRate',
  Order = 'order',
  Receiver = 'receiver',
  Sender = 'sender',
  Stream = 'stream',
  StreamCreatedAtBlockNumber = 'stream__createdAtBlockNumber',
  StreamCreatedAtTimestamp = 'stream__createdAtTimestamp',
  StreamCurrentFlowRate = 'stream__currentFlowRate',
  StreamDeposit = 'stream__deposit',
  StreamId = 'stream__id',
  StreamStreamedUntilUpdatedAt = 'stream__streamedUntilUpdatedAt',
  StreamUpdatedAtBlockNumber = 'stream__updatedAtBlockNumber',
  StreamUpdatedAtTimestamp = 'stream__updatedAtTimestamp',
  StreamUserData = 'stream__userData',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalAmountStreamedUntilTimestamp = 'totalAmountStreamedUntilTimestamp',
  TotalReceiverFlowRate = 'totalReceiverFlowRate',
  TotalSenderFlowRate = 'totalSenderFlowRate',
  TransactionHash = 'transactionHash',
  Type = 'type',
  UserData = 'userData'
}

export type GovernanceReplacedEvent = Event & {
  __typename?: 'GovernanceReplacedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  newGovernance: Scalars['Bytes']['output'];
  oldGovernance: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GovernanceReplacedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceReplacedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum GovernanceReplacedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewGovernance = 'newGovernance',
  OldGovernance = 'oldGovernance',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * Index: An Index higher order entity.
 *
 */
export type Index = {
  __typename?: 'Index';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  /**
   * ID composed of: publisherAddress-tokenAddress-indexId
   *
   */
  id: Scalars['ID']['output'];
  /**
   * IndexCreated event, there will only be one.
   *
   */
  indexCreatedEvent: IndexCreatedEvent;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  /**
   * NOTE: indexId is not the same as the id of the `Index` entity.
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexValue: Scalars['BigInt']['output'];
  publisher: Account;
  /**
   * The subscriptions of the index, it will include approved, unapproved
   * and deleted subscriptions.
   *
   */
  subscriptions: Array<IndexSubscription>;
  token: Token;
  /**
   * The total amount distributed from this `Index`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The number of subscriptions which have units allocated to them on the `Index`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * The sum of `totalUnitsPending` and `totalUnitsApproved`.
   *
   */
  totalUnits: Scalars['BigInt']['output'];
  /**
   * The number of units allocated by the `Index` that are approved.
   * This refers to the current (as of updatedAt) `totalUnitsApproved`-not all that has ever been approved.
   *
   */
  totalUnitsApproved: Scalars['BigInt']['output'];
  /**
   * The number of units allocated by the `Index` that are pending.
   * This refers to the current (as of updatedAt) `totalUnitsPending`-not all that has ever been pending.
   *
   */
  totalUnitsPending: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexDistributionClaimedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexSubscribedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnitsUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnsubscribedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexSubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndexSubscription_Filter>;
};

export type IndexCreatedEvent = Event & {
  __typename?: 'IndexCreatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type IndexCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<IndexCreatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type IndexDistributionClaimedEvent = Event & {
  __typename?: 'IndexDistributionClaimedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type IndexDistributionClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<IndexDistributionClaimedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexDistributionClaimedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type IndexSubscribedEvent = Event & {
  __typename?: 'IndexSubscribedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type IndexSubscribedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscribedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexSubscribedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscription = {
  __typename?: 'IndexSubscription';
  /**
   * A boolean indicating whether the `IndexSubscription` is approved.
   * Approved subscriptions don't require `subscriber` to claim tokens that are distributed from the publisher.
   *
   */
  approved: Scalars['Boolean']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  /**
   * ID composed of: subscriberAddress-publisherAddress-tokenAddress-IndexId
   *
   */
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * The previous index value - used to calculate `totalAmountReceivedUntilUpdatedAt` field as of the `index.updatedAtTimestamp`.
   * The formula to get this value is:
   * `IndexSubscription.totalAmountReceivedUntilUpdatedAt + ((index.newIndexValue - indexSubscription.indexValueUntilUpdatedAt) * indexSubscription.units)`.
   *
   */
  indexValueUntilUpdatedAt: Scalars['BigInt']['output'];
  subscriber: Account;
  /**
   * IndexSubscription approved events on the subscription.
   *
   */
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  /**
   * The total amount of tokens you've received via IDA until
   * `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * If `units` is `0`, it indicates that the subscription is "deleted" and `subscriber` is no longer subscribed to `index`.
   *
   */
  units: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionApprovedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionDistributionClaimedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionRevokedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.
 *
 */
export type IndexSubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};

export type IndexSubscription_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexSubscription_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexValueUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValueUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexValueUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<IndexSubscription_Filter>>>;
  subscriber?: InputMaybe<Scalars['String']['input']>;
  subscriber_?: InputMaybe<Account_Filter>;
  subscriber_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_gt?: InputMaybe<Scalars['String']['input']>;
  subscriber_gte?: InputMaybe<Scalars['String']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['String']['input']>;
  subscriber_lte?: InputMaybe<Scalars['String']['input']>;
  subscriber_not?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriptionApprovedEvents_?: InputMaybe<SubscriptionApprovedEvent_Filter>;
  subscriptionDistributionClaimedEvents_?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
  subscriptionRevokedEvents_?: InputMaybe<SubscriptionRevokedEvent_Filter>;
  subscriptionUnitsUpdatedEvents_?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum IndexSubscription_OrderBy {
  Approved = 'approved',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  Index = 'index',
  IndexValueUntilUpdatedAt = 'indexValueUntilUpdatedAt',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  Subscriber = 'subscriber',
  SubscriberCreatedAtBlockNumber = 'subscriber__createdAtBlockNumber',
  SubscriberCreatedAtTimestamp = 'subscriber__createdAtTimestamp',
  SubscriberId = 'subscriber__id',
  SubscriberIsSuperApp = 'subscriber__isSuperApp',
  SubscriberUpdatedAtBlockNumber = 'subscriber__updatedAtBlockNumber',
  SubscriberUpdatedAtTimestamp = 'subscriber__updatedAtTimestamp',
  SubscriptionApprovedEvents = 'subscriptionApprovedEvents',
  SubscriptionDistributionClaimedEvents = 'subscriptionDistributionClaimedEvents',
  SubscriptionRevokedEvents = 'subscriptionRevokedEvents',
  SubscriptionUnitsUpdatedEvents = 'subscriptionUnitsUpdatedEvents',
  TotalAmountReceivedUntilUpdatedAt = 'totalAmountReceivedUntilUpdatedAt',
  Units = 'units',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type IndexUnitsUpdatedEvent = Event & {
  __typename?: 'IndexUnitsUpdatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  oldUnits: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  units: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
};

export type IndexUnitsUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldUnits?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<IndexUnitsUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexUnitsUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  OldUnits = 'oldUnits',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Units = 'units',
  UserData = 'userData'
}

export type IndexUnsubscribedEvent = Event & {
  __typename?: 'IndexUnsubscribedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type IndexUnsubscribedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<IndexUnsubscribedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexUnsubscribedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type IndexUpdatedEvent = Event & {
  __typename?: 'IndexUpdatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Index;
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  newIndexValue: Scalars['BigInt']['output'];
  oldIndexValue: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  totalUnitsApproved: Scalars['BigInt']['output'];
  totalUnitsPending: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type IndexUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['String']['input']>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']['input']>;
  index_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_not?: InputMaybe<Scalars['String']['input']>;
  index_not_contains?: InputMaybe<Scalars['String']['input']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  index_starts_with?: InputMaybe<Scalars['String']['input']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newIndexValue?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newIndexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  newIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldIndexValue?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldIndexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<IndexUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum IndexUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  IndexCreatedAtBlockNumber = 'index__createdAtBlockNumber',
  IndexCreatedAtTimestamp = 'index__createdAtTimestamp',
  IndexId = 'index__id',
  IndexIndexId = 'index__indexId',
  IndexIndexValue = 'index__indexValue',
  IndexTotalAmountDistributedUntilUpdatedAt = 'index__totalAmountDistributedUntilUpdatedAt',
  IndexTotalSubscriptionsWithUnits = 'index__totalSubscriptionsWithUnits',
  IndexTotalUnits = 'index__totalUnits',
  IndexTotalUnitsApproved = 'index__totalUnitsApproved',
  IndexTotalUnitsPending = 'index__totalUnitsPending',
  IndexUpdatedAtBlockNumber = 'index__updatedAtBlockNumber',
  IndexUpdatedAtTimestamp = 'index__updatedAtTimestamp',
  LogIndex = 'logIndex',
  Name = 'name',
  NewIndexValue = 'newIndexValue',
  OldIndexValue = 'oldIndexValue',
  Order = 'order',
  Publisher = 'publisher',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalUnitsApproved = 'totalUnitsApproved',
  TotalUnitsPending = 'totalUnitsPending',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type Index_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Index_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexCreatedEvent?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_?: InputMaybe<IndexCreatedEvent_Filter>;
  indexCreatedEvent_contains?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_gt?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_gte?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexCreatedEvent_lt?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_lte?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexCreatedEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexCreatedEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexDistributionClaimedEvents_?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSubscribedEvents_?: InputMaybe<IndexSubscribedEvent_Filter>;
  indexUnitsUpdatedEvents_?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
  indexUnsubscribedEvents_?: InputMaybe<IndexUnsubscribedEvent_Filter>;
  indexUpdatedEvents_?: InputMaybe<IndexUpdatedEvent_Filter>;
  indexValue?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Index_Filter>>>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  publisher_?: InputMaybe<Account_Filter>;
  publisher_contains?: InputMaybe<Scalars['String']['input']>;
  publisher_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_ends_with?: InputMaybe<Scalars['String']['input']>;
  publisher_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_gt?: InputMaybe<Scalars['String']['input']>;
  publisher_gte?: InputMaybe<Scalars['String']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher_lt?: InputMaybe<Scalars['String']['input']>;
  publisher_lte?: InputMaybe<Scalars['String']['input']>;
  publisher_not?: InputMaybe<Scalars['String']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['String']['input']>;
  publisher_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publisher_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publisher_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publisher_starts_with?: InputMaybe<Scalars['String']['input']>;
  publisher_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Index_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  IndexCreatedEvent = 'indexCreatedEvent',
  IndexCreatedEventBlockNumber = 'indexCreatedEvent__blockNumber',
  IndexCreatedEventGasPrice = 'indexCreatedEvent__gasPrice',
  IndexCreatedEventGasUsed = 'indexCreatedEvent__gasUsed',
  IndexCreatedEventId = 'indexCreatedEvent__id',
  IndexCreatedEventIndexId = 'indexCreatedEvent__indexId',
  IndexCreatedEventLogIndex = 'indexCreatedEvent__logIndex',
  IndexCreatedEventName = 'indexCreatedEvent__name',
  IndexCreatedEventOrder = 'indexCreatedEvent__order',
  IndexCreatedEventPublisher = 'indexCreatedEvent__publisher',
  IndexCreatedEventTimestamp = 'indexCreatedEvent__timestamp',
  IndexCreatedEventToken = 'indexCreatedEvent__token',
  IndexCreatedEventTransactionHash = 'indexCreatedEvent__transactionHash',
  IndexCreatedEventUserData = 'indexCreatedEvent__userData',
  IndexDistributionClaimedEvents = 'indexDistributionClaimedEvents',
  IndexId = 'indexId',
  IndexSubscribedEvents = 'indexSubscribedEvents',
  IndexUnitsUpdatedEvents = 'indexUnitsUpdatedEvents',
  IndexUnsubscribedEvents = 'indexUnsubscribedEvents',
  IndexUpdatedEvents = 'indexUpdatedEvents',
  IndexValue = 'indexValue',
  Publisher = 'publisher',
  PublisherCreatedAtBlockNumber = 'publisher__createdAtBlockNumber',
  PublisherCreatedAtTimestamp = 'publisher__createdAtTimestamp',
  PublisherId = 'publisher__id',
  PublisherIsSuperApp = 'publisher__isSuperApp',
  PublisherUpdatedAtBlockNumber = 'publisher__updatedAtBlockNumber',
  PublisherUpdatedAtTimestamp = 'publisher__updatedAtTimestamp',
  Subscriptions = 'subscriptions',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountDistributedUntilUpdatedAt = 'totalAmountDistributedUntilUpdatedAt',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalUnits = 'totalUnits',
  TotalUnitsApproved = 'totalUnitsApproved',
  TotalUnitsPending = 'totalUnitsPending',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type JailEvent = Event & {
  __typename?: 'JailEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  app: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  reason: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type JailEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<JailEvent_Filter>>>;
  app?: InputMaybe<Scalars['Bytes']['input']>;
  app_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_gt?: InputMaybe<Scalars['Bytes']['input']>;
  app_gte?: InputMaybe<Scalars['Bytes']['input']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  app_lt?: InputMaybe<Scalars['Bytes']['input']>;
  app_lte?: InputMaybe<Scalars['Bytes']['input']>;
  app_not?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<JailEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason?: InputMaybe<Scalars['BigInt']['input']>;
  reason_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reason_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reason_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reason_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reason_not?: InputMaybe<Scalars['BigInt']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum JailEvent_OrderBy {
  Addresses = 'addresses',
  App = 'app',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Reason = 'reason',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type MintedEvent = Event & {
  __typename?: 'MintedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  operator: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MintedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MintedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MintedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MintedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type NewPicEvent = Event & {
  __typename?: 'NewPICEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `pic` (new Patrician In Charge)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The bond the new PIC staked in order to claim the position.
   *
   */
  bond: Scalars['BigInt']['output'];
  /**
   * The flowrate at which the bond is streamed back to the PIC.
   *
   */
  exitRate: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The address of the new Patrician In Charge (PIC).
   *
   */
  pic: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  /**
   * The address of the `token` (supertoken) the PIC is posting a bond for.
   *
   */
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NewPicEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<NewPicEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bond?: InputMaybe<Scalars['BigInt']['input']>;
  bond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bond_not?: InputMaybe<Scalars['BigInt']['input']>;
  bond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<NewPicEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pic?: InputMaybe<Scalars['Bytes']['input']>;
  pic_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pic_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pic_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pic_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pic_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pic_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pic_not?: InputMaybe<Scalars['Bytes']['input']>;
  pic_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pic_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NewPicEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Bond = 'bond',
  ExitRate = 'exitRate',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Pic = 'pic',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PppConfigurationChangedEvent = Event & {
  __typename?: 'PPPConfigurationChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  liquidationPeriod: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  patricianPeriod: Scalars['BigInt']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PppConfigurationChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PppConfigurationChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PppConfigurationChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PppConfigurationChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LiquidationPeriod = 'liquidationPeriod',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  PatricianPeriod = 'patricianPeriod',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accounts: Array<Account>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  flowOperators: Array<FlowOperator>;
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  index?: Maybe<Index>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexes: Array<Index>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  newPICEvent?: Maybe<NewPicEvent>;
  newPICEvents: Array<NewPicEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  resolverEntries: Array<ResolverEntry>;
  resolverEntry?: Maybe<ResolverEntry>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  stream?: Maybe<Stream>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  streams: Array<Stream>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  token?: Maybe<Token>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  tokenStatistics: Array<TokenStatistic>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokens: Array<Token>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


export type QueryAccountTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAgreementClassRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
};


export type QueryAgreementClassUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
};


export type QueryAgreementLiquidatedByEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedByEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
};


export type QueryAgreementLiquidatedV2EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedV2EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
};


export type QueryAppRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
};


export type QueryBondIncreasedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondIncreasedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondIncreasedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondIncreasedEvent_Filter>;
};


export type QueryBurnedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnedEvent_Filter>;
};


export type QueryCfav1LiquidationPeriodChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCfav1LiquidationPeriodChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
};


export type QueryConfigChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryConfigChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
};


export type QueryCustomSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCustomSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryExitRateChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryExitRateChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ExitRateChangedEvent_Filter>;
};


export type QueryFlowOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};


export type QueryFlowOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperator_Filter>;
};


export type QueryFlowUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


export type QueryGovernanceReplacedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceReplacedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
};


export type QueryIndexArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
};


export type QueryIndexDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


export type QueryIndexSubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


export type QueryIndexSubscriptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscriptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscription_Filter>;
};


export type QueryIndexUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


export type QueryIndexUnsubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnsubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


export type QueryIndexUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


export type QueryIndexesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Index_Filter>;
};


export type QueryJailEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJailEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JailEvent_Filter>;
};


export type QueryMintedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintedEvent_Filter>;
};


export type QueryNewPicEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewPicEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewPicEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewPicEvent_Filter>;
};


export type QueryPppconfigurationChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPppconfigurationChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
};


export type QueryResolverEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolverEntry_Filter>;
};


export type QueryResolverEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
};


export type QueryRoleAdminChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
};


export type QueryRoleGrantedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
};


export type QueryRoleRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
};


export type QuerySentEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySentEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SentEvent_Filter>;
};


export type QuerySetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetEvent_Filter>;
};


export type QuerySfmetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySfmetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SfMeta_Filter>;
};


export type QueryStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamPeriod_Filter>;
};


export type QueryStreamRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamRevision_Filter>;
};


export type QueryStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type QuerySubscriptionApprovedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionApprovedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


export type QuerySubscriptionDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


export type QuerySubscriptionRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


export type QuerySubscriptionUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};


export type QuerySuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
};


export type QuerySuperTokenFactoryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenFactoryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
};


export type QuerySuperTokenLogicCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
};


export type QuerySuperTokenLogicUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
};


export type QuerySuperTokenMinimumDepositChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenMinimumDepositChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


export type QueryTokenGovernanceConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenGovernanceConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenGovernanceConfig_Filter>;
};


export type QueryTokenStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};


export type QueryTokenStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatistic_Filter>;
};


export type QueryTokenUpgradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenUpgradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type QueryTrustedForwarderChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTrustedForwarderChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
};

export type ResolverEntry = {
  __typename?: 'ResolverEntry';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  /**
   * ID: the keccak256 hash of the set name
   *
   */
  id: Scalars['ID']['output'];
  isListed: Scalars['Boolean']['output'];
  isToken: Scalars['Boolean']['output'];
  setEvents: Array<SetEvent>;
  targetAddress: Scalars['Bytes']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


export type ResolverEntrySetEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SetEvent_Filter>;
};

export type ResolverEntry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEntry_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isListed?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isToken?: InputMaybe<Scalars['Boolean']['input']>;
  isToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEntry_Filter>>>;
  setEvents_?: InputMaybe<SetEvent_Filter>;
  targetAddress?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ResolverEntry_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  IsListed = 'isListed',
  IsToken = 'isToken',
  SetEvents = 'setEvents',
  TargetAddress = 'targetAddress',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type RewardAddressChangedEvent = Event & {
  __typename?: 'RewardAddressChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  rewardAddress: Scalars['Bytes']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RewardAddressChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<RewardAddressChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardAddressChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  RewardAddress = 'rewardAddress',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleAdminChangedEvent = Event & {
  __typename?: 'RoleAdminChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  newAdminRole: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  previousAdminRole: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleAdminChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleAdminChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewAdminRole = 'newAdminRole',
  Order = 'order',
  PreviousAdminRole = 'previousAdminRole',
  Role = 'role',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleGrantedEvent = Event & {
  __typename?: 'RoleGrantedEvent';
  account: Scalars['Bytes']['output'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  role: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleGrantedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<RoleGrantedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleGrantedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Role = 'role',
  Sender = 'sender',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleRevokedEvent = Event & {
  __typename?: 'RoleRevokedEvent';
  account: Scalars['Bytes']['output'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  role: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleRevokedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<RoleRevokedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleRevokedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Role = 'role',
  Sender = 'sender',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SfMeta = {
  __typename?: 'SFMeta';
  blockNumber: Scalars['BigInt']['output'];
  /**
   * The branch the current deployment is coming from.
   *
   */
  branch: Scalars['String']['output'];
  /**
   * Whether the branch is feature/dev/v1.
   *
   */
  configuration: Scalars['String']['output'];
  /**
   * The id is the commit hash.
   *
   */
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type SfMeta_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SfMeta_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  branch?: InputMaybe<Scalars['String']['input']>;
  branch_contains?: InputMaybe<Scalars['String']['input']>;
  branch_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_ends_with?: InputMaybe<Scalars['String']['input']>;
  branch_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_gt?: InputMaybe<Scalars['String']['input']>;
  branch_gte?: InputMaybe<Scalars['String']['input']>;
  branch_in?: InputMaybe<Array<Scalars['String']['input']>>;
  branch_lt?: InputMaybe<Scalars['String']['input']>;
  branch_lte?: InputMaybe<Scalars['String']['input']>;
  branch_not?: InputMaybe<Scalars['String']['input']>;
  branch_not_contains?: InputMaybe<Scalars['String']['input']>;
  branch_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  branch_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  branch_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  branch_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  branch_starts_with?: InputMaybe<Scalars['String']['input']>;
  branch_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configuration_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_gt?: InputMaybe<Scalars['String']['input']>;
  configuration_gte?: InputMaybe<Scalars['String']['input']>;
  configuration_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_lt?: InputMaybe<Scalars['String']['input']>;
  configuration_lte?: InputMaybe<Scalars['String']['input']>;
  configuration_not?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SfMeta_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum SfMeta_OrderBy {
  BlockNumber = 'blockNumber',
  Branch = 'branch',
  Configuration = 'configuration',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type SentEvent = Event & {
  __typename?: 'SentEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `operator`
   * addresses[2] = `from`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  operator: Scalars['Bytes']['output'];
  operatorData: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SentEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SentEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SentEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SentEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  From = 'from',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SetEvent = Event & {
  __typename?: 'SetEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * Because the name property is indexed, the
   * returned value will be a keccak256 hash
   * of the string.
   *
   */
  hashedName: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  resolverEntry: ResolverEntry;
  target: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SetEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hashedName?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hashedName_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_not?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hashedName_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SetEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolverEntry?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_?: InputMaybe<ResolverEntry_Filter>;
  resolverEntry_contains?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_gt?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_gte?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolverEntry_lt?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_lte?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_contains?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolverEntry_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolverEntry_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['Bytes']['input']>;
  target_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  target_lt?: InputMaybe<Scalars['Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['Bytes']['input']>;
  target_not?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SetEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  HashedName = 'hashedName',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  ResolverEntry = 'resolverEntry',
  ResolverEntryCreatedAtBlockNumber = 'resolverEntry__createdAtBlockNumber',
  ResolverEntryCreatedAtTimestamp = 'resolverEntry__createdAtTimestamp',
  ResolverEntryId = 'resolverEntry__id',
  ResolverEntryIsListed = 'resolverEntry__isListed',
  ResolverEntryIsToken = 'resolverEntry__isToken',
  ResolverEntryTargetAddress = 'resolverEntry__targetAddress',
  ResolverEntryUpdatedAtBlockNumber = 'resolverEntry__updatedAtBlockNumber',
  ResolverEntryUpdatedAtTimestamp = 'resolverEntry__updatedAtTimestamp',
  Target = 'target',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type Stream = {
  __typename?: 'Stream';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  currentFlowRate: Scalars['BigInt']['output'];
  deposit: Scalars['BigInt']['output'];
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  /**
   * ID composed of: senderAddress-receiverAddress-tokenAddress-revisionIndex
   *
   */
  id: Scalars['ID']['output'];
  receiver: Account;
  sender: Account;
  streamPeriods: Array<StreamPeriod>;
  /**
   * The amount streamed until `updatedAtTimestamp`/`updatedAtBlock`.
   * The formula to get the current streamed amount is:
   * `streamedUntilUpdatedAt + ((currentTime in seconds) - updatedAtTimestamp) * currentFlowRate`.
   *
   */
  streamedUntilUpdatedAt: Scalars['BigInt']['output'];
  token: Token;
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
  /**
   * The `userData` stored on the Stream is the last `userData` that was set in a `FlowUpdatedEvent`,
   * for this particular stream. To see the historical `userData` for this stream, you can query the `flowUpdatedEvents` field.
   *
   */
  userData: Scalars['Bytes']['output'];
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamFlowUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is considered "dead".
 * The next stream you create with the same `sender` and `receiver` will create a new stream entity.
 * Therefore, multiple stream entities can be created between the same `sender` and `receiver`.
 *
 */
export type StreamStreamPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StreamPeriod_Filter>;
};

/**
 * StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.
 *
 */
export type StreamPeriod = {
  __typename?: 'StreamPeriod';
  deposit: Scalars['BigInt']['output'];
  flowRate: Scalars['BigInt']['output'];
  /**
   * ID composed of: streamId - periodRevisionIndex
   *
   */
  id: Scalars['ID']['output'];
  receiver: Account;
  sender: Account;
  startedAtBlockNumber: Scalars['BigInt']['output'];
  startedAtEvent: FlowUpdatedEvent;
  startedAtTimestamp: Scalars['BigInt']['output'];
  stoppedAtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  stoppedAtEvent?: Maybe<FlowUpdatedEvent>;
  /**
   * Following values are null until the StreamPeriod is terminated
   *
   */
  stoppedAtTimestamp?: Maybe<Scalars['BigInt']['output']>;
  stream: Stream;
  token: Token;
  totalAmountStreamed?: Maybe<Scalars['BigInt']['output']>;
};

export type StreamPeriod_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamPeriod_Filter>>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StreamPeriod_Filter>>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<Account_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtEvent?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  startedAtEvent_contains?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_gt?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_gte?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedAtEvent_lt?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_lte?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedAtEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtEvent?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  stoppedAtEvent_contains?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_gt?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_gte?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stoppedAtEvent_lt?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_lte?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stoppedAtEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  stoppedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stoppedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stoppedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  stoppedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum StreamPeriod_OrderBy {
  Deposit = 'deposit',
  FlowRate = 'flowRate',
  Id = 'id',
  Receiver = 'receiver',
  ReceiverCreatedAtBlockNumber = 'receiver__createdAtBlockNumber',
  ReceiverCreatedAtTimestamp = 'receiver__createdAtTimestamp',
  ReceiverId = 'receiver__id',
  ReceiverIsSuperApp = 'receiver__isSuperApp',
  ReceiverUpdatedAtBlockNumber = 'receiver__updatedAtBlockNumber',
  ReceiverUpdatedAtTimestamp = 'receiver__updatedAtTimestamp',
  Sender = 'sender',
  SenderCreatedAtBlockNumber = 'sender__createdAtBlockNumber',
  SenderCreatedAtTimestamp = 'sender__createdAtTimestamp',
  SenderId = 'sender__id',
  SenderIsSuperApp = 'sender__isSuperApp',
  SenderUpdatedAtBlockNumber = 'sender__updatedAtBlockNumber',
  SenderUpdatedAtTimestamp = 'sender__updatedAtTimestamp',
  StartedAtBlockNumber = 'startedAtBlockNumber',
  StartedAtEvent = 'startedAtEvent',
  StartedAtEventBlockNumber = 'startedAtEvent__blockNumber',
  StartedAtEventDeposit = 'startedAtEvent__deposit',
  StartedAtEventFlowOperator = 'startedAtEvent__flowOperator',
  StartedAtEventFlowRate = 'startedAtEvent__flowRate',
  StartedAtEventGasPrice = 'startedAtEvent__gasPrice',
  StartedAtEventGasUsed = 'startedAtEvent__gasUsed',
  StartedAtEventId = 'startedAtEvent__id',
  StartedAtEventLogIndex = 'startedAtEvent__logIndex',
  StartedAtEventName = 'startedAtEvent__name',
  StartedAtEventOldFlowRate = 'startedAtEvent__oldFlowRate',
  StartedAtEventOrder = 'startedAtEvent__order',
  StartedAtEventReceiver = 'startedAtEvent__receiver',
  StartedAtEventSender = 'startedAtEvent__sender',
  StartedAtEventTimestamp = 'startedAtEvent__timestamp',
  StartedAtEventToken = 'startedAtEvent__token',
  StartedAtEventTotalAmountStreamedUntilTimestamp = 'startedAtEvent__totalAmountStreamedUntilTimestamp',
  StartedAtEventTotalReceiverFlowRate = 'startedAtEvent__totalReceiverFlowRate',
  StartedAtEventTotalSenderFlowRate = 'startedAtEvent__totalSenderFlowRate',
  StartedAtEventTransactionHash = 'startedAtEvent__transactionHash',
  StartedAtEventType = 'startedAtEvent__type',
  StartedAtEventUserData = 'startedAtEvent__userData',
  StartedAtTimestamp = 'startedAtTimestamp',
  StoppedAtBlockNumber = 'stoppedAtBlockNumber',
  StoppedAtEvent = 'stoppedAtEvent',
  StoppedAtEventBlockNumber = 'stoppedAtEvent__blockNumber',
  StoppedAtEventDeposit = 'stoppedAtEvent__deposit',
  StoppedAtEventFlowOperator = 'stoppedAtEvent__flowOperator',
  StoppedAtEventFlowRate = 'stoppedAtEvent__flowRate',
  StoppedAtEventGasPrice = 'stoppedAtEvent__gasPrice',
  StoppedAtEventGasUsed = 'stoppedAtEvent__gasUsed',
  StoppedAtEventId = 'stoppedAtEvent__id',
  StoppedAtEventLogIndex = 'stoppedAtEvent__logIndex',
  StoppedAtEventName = 'stoppedAtEvent__name',
  StoppedAtEventOldFlowRate = 'stoppedAtEvent__oldFlowRate',
  StoppedAtEventOrder = 'stoppedAtEvent__order',
  StoppedAtEventReceiver = 'stoppedAtEvent__receiver',
  StoppedAtEventSender = 'stoppedAtEvent__sender',
  StoppedAtEventTimestamp = 'stoppedAtEvent__timestamp',
  StoppedAtEventToken = 'stoppedAtEvent__token',
  StoppedAtEventTotalAmountStreamedUntilTimestamp = 'stoppedAtEvent__totalAmountStreamedUntilTimestamp',
  StoppedAtEventTotalReceiverFlowRate = 'stoppedAtEvent__totalReceiverFlowRate',
  StoppedAtEventTotalSenderFlowRate = 'stoppedAtEvent__totalSenderFlowRate',
  StoppedAtEventTransactionHash = 'stoppedAtEvent__transactionHash',
  StoppedAtEventType = 'stoppedAtEvent__type',
  StoppedAtEventUserData = 'stoppedAtEvent__userData',
  StoppedAtTimestamp = 'stoppedAtTimestamp',
  Stream = 'stream',
  StreamCreatedAtBlockNumber = 'stream__createdAtBlockNumber',
  StreamCreatedAtTimestamp = 'stream__createdAtTimestamp',
  StreamCurrentFlowRate = 'stream__currentFlowRate',
  StreamDeposit = 'stream__deposit',
  StreamId = 'stream__id',
  StreamStreamedUntilUpdatedAt = 'stream__streamedUntilUpdatedAt',
  StreamUpdatedAtBlockNumber = 'stream__updatedAtBlockNumber',
  StreamUpdatedAtTimestamp = 'stream__updatedAtTimestamp',
  StreamUserData = 'stream__userData',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountStreamed = 'totalAmountStreamed'
}

export type StreamRevision = {
  __typename?: 'StreamRevision';
  /**
   * ID composed of: keccak256(abi.encode(sender,receiver))-tokenAddress
   *
   */
  id: Scalars['ID']['output'];
  /**
   * The "most recently alive" stream between a sender and receiver.
   * Note: The `revisionIndex` property may not be the same as the `revisionIndex` of `mostRecentStream`. Which means `mostRecentStream` has been closed and no new stream has been opened.
   *
   */
  mostRecentStream: Stream;
  periodRevisionIndex: Scalars['Int']['output'];
  revisionIndex: Scalars['Int']['output'];
};

export type StreamRevision_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StreamRevision_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mostRecentStream?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_?: InputMaybe<Stream_Filter>;
  mostRecentStream_contains?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_ends_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_gt?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_gte?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mostRecentStream_lt?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_lte?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_contains?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mostRecentStream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_starts_with?: InputMaybe<Scalars['String']['input']>;
  mostRecentStream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<StreamRevision_Filter>>>;
  periodRevisionIndex?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodRevisionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  periodRevisionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  revisionIndex?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  revisionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  revisionIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum StreamRevision_OrderBy {
  Id = 'id',
  MostRecentStream = 'mostRecentStream',
  MostRecentStreamCreatedAtBlockNumber = 'mostRecentStream__createdAtBlockNumber',
  MostRecentStreamCreatedAtTimestamp = 'mostRecentStream__createdAtTimestamp',
  MostRecentStreamCurrentFlowRate = 'mostRecentStream__currentFlowRate',
  MostRecentStreamDeposit = 'mostRecentStream__deposit',
  MostRecentStreamId = 'mostRecentStream__id',
  MostRecentStreamStreamedUntilUpdatedAt = 'mostRecentStream__streamedUntilUpdatedAt',
  MostRecentStreamUpdatedAtBlockNumber = 'mostRecentStream__updatedAtBlockNumber',
  MostRecentStreamUpdatedAtTimestamp = 'mostRecentStream__updatedAtTimestamp',
  MostRecentStreamUserData = 'mostRecentStream__userData',
  PeriodRevisionIndex = 'periodRevisionIndex',
  RevisionIndex = 'revisionIndex'
}

export type Stream_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFlowRate?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentFlowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  flowUpdatedEvents_?: InputMaybe<FlowUpdatedEvent_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<Account_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  streamPeriods_?: InputMaybe<StreamPeriod_Filter>;
  streamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  streamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  streamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Stream_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CurrentFlowRate = 'currentFlowRate',
  Deposit = 'deposit',
  FlowUpdatedEvents = 'flowUpdatedEvents',
  Id = 'id',
  Receiver = 'receiver',
  ReceiverCreatedAtBlockNumber = 'receiver__createdAtBlockNumber',
  ReceiverCreatedAtTimestamp = 'receiver__createdAtTimestamp',
  ReceiverId = 'receiver__id',
  ReceiverIsSuperApp = 'receiver__isSuperApp',
  ReceiverUpdatedAtBlockNumber = 'receiver__updatedAtBlockNumber',
  ReceiverUpdatedAtTimestamp = 'receiver__updatedAtTimestamp',
  Sender = 'sender',
  SenderCreatedAtBlockNumber = 'sender__createdAtBlockNumber',
  SenderCreatedAtTimestamp = 'sender__createdAtTimestamp',
  SenderId = 'sender__id',
  SenderIsSuperApp = 'sender__isSuperApp',
  SenderUpdatedAtBlockNumber = 'sender__updatedAtBlockNumber',
  SenderUpdatedAtTimestamp = 'sender__updatedAtTimestamp',
  StreamPeriods = 'streamPeriods',
  StreamedUntilUpdatedAt = 'streamedUntilUpdatedAt',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  UserData = 'userData'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accounts: Array<Account>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  bondIncreasedEvent?: Maybe<BondIncreasedEvent>;
  bondIncreasedEvents: Array<BondIncreasedEvent>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  exitRateChangedEvent?: Maybe<ExitRateChangedEvent>;
  exitRateChangedEvents: Array<ExitRateChangedEvent>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  flowOperators: Array<FlowOperator>;
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  index?: Maybe<Index>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexes: Array<Index>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  newPICEvent?: Maybe<NewPicEvent>;
  newPICEvents: Array<NewPicEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  resolverEntries: Array<ResolverEntry>;
  resolverEntry?: Maybe<ResolverEntry>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  stream?: Maybe<Stream>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  streams: Array<Stream>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  superTokenMinimumDepositChangedEvent?: Maybe<SuperTokenMinimumDepositChangedEvent>;
  superTokenMinimumDepositChangedEvents: Array<SuperTokenMinimumDepositChangedEvent>;
  token?: Maybe<Token>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenGovernanceConfig?: Maybe<TokenGovernanceConfig>;
  tokenGovernanceConfigs: Array<TokenGovernanceConfig>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  tokenStatistics: Array<TokenStatistic>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokens: Array<Token>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


export type SubscriptionAccountTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAgreementClassRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
};


export type SubscriptionAgreementClassUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
};


export type SubscriptionAgreementLiquidatedByEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedByEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
};


export type SubscriptionAgreementLiquidatedV2EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedV2EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
};


export type SubscriptionAppRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
};


export type SubscriptionBondIncreasedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondIncreasedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BondIncreasedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondIncreasedEvent_Filter>;
};


export type SubscriptionBurnedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnedEvent_Filter>;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
};


export type SubscriptionConfigChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionConfigChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
};


export type SubscriptionCustomSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCustomSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionExitRateChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionExitRateChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExitRateChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ExitRateChangedEvent_Filter>;
};


export type SubscriptionFlowOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};


export type SubscriptionFlowOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperator_Filter>;
};


export type SubscriptionFlowUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


export type SubscriptionGovernanceReplacedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceReplacedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
};


export type SubscriptionIndexArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
};


export type SubscriptionIndexDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


export type SubscriptionIndexSubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


export type SubscriptionIndexSubscriptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscriptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscription_Filter>;
};


export type SubscriptionIndexUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


export type SubscriptionIndexUnsubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnsubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


export type SubscriptionIndexUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


export type SubscriptionIndexesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Index_Filter>;
};


export type SubscriptionJailEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJailEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JailEvent_Filter>;
};


export type SubscriptionMintedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintedEvent_Filter>;
};


export type SubscriptionNewPicEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewPicEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewPicEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewPicEvent_Filter>;
};


export type SubscriptionPppconfigurationChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPppconfigurationChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
};


export type SubscriptionResolverEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolverEntry_Filter>;
};


export type SubscriptionResolverEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
};


export type SubscriptionRoleAdminChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
};


export type SubscriptionRoleGrantedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
};


export type SubscriptionRoleRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
};


export type SubscriptionSentEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSentEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SentEvent_Filter>;
};


export type SubscriptionSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetEvent_Filter>;
};


export type SubscriptionSfmetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSfmetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SfMeta_Filter>;
};


export type SubscriptionStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamPeriod_Filter>;
};


export type SubscriptionStreamRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamRevision_Filter>;
};


export type SubscriptionStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type SubscriptionSubscriptionApprovedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionApprovedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


export type SubscriptionSubscriptionDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


export type SubscriptionSubscriptionRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


export type SubscriptionSubscriptionUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};


export type SubscriptionSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
};


export type SubscriptionSuperTokenFactoryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenFactoryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
};


export type SubscriptionSuperTokenLogicCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
};


export type SubscriptionSuperTokenLogicUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
};


export type SubscriptionSuperTokenMinimumDepositChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenMinimumDepositChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuperTokenMinimumDepositChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


export type SubscriptionTokenGovernanceConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenGovernanceConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenGovernanceConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenGovernanceConfig_Filter>;
};


export type SubscriptionTokenStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};


export type SubscriptionTokenStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatistic_Filter>;
};


export type SubscriptionTokenUpgradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenUpgradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type SubscriptionTrustedForwarderChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTrustedForwarderChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
};

export type SubscriptionApprovedEvent = Event & {
  __typename?: 'SubscriptionApprovedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type SubscriptionApprovedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionApprovedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SubscriptionApprovedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  SubscriptionApproved = 'subscription__approved',
  SubscriptionCreatedAtBlockNumber = 'subscription__createdAtBlockNumber',
  SubscriptionCreatedAtTimestamp = 'subscription__createdAtTimestamp',
  SubscriptionId = 'subscription__id',
  SubscriptionIndexValueUntilUpdatedAt = 'subscription__indexValueUntilUpdatedAt',
  SubscriptionTotalAmountReceivedUntilUpdatedAt = 'subscription__totalAmountReceivedUntilUpdatedAt',
  SubscriptionUnits = 'subscription__units',
  SubscriptionUpdatedAtBlockNumber = 'subscription__updatedAtBlockNumber',
  SubscriptionUpdatedAtTimestamp = 'subscription__updatedAtTimestamp',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type SubscriptionDistributionClaimedEvent = Event & {
  __typename?: 'SubscriptionDistributionClaimedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SubscriptionDistributionClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionDistributionClaimedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SubscriptionDistributionClaimedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  SubscriptionApproved = 'subscription__approved',
  SubscriptionCreatedAtBlockNumber = 'subscription__createdAtBlockNumber',
  SubscriptionCreatedAtTimestamp = 'subscription__createdAtTimestamp',
  SubscriptionId = 'subscription__id',
  SubscriptionIndexValueUntilUpdatedAt = 'subscription__indexValueUntilUpdatedAt',
  SubscriptionTotalAmountReceivedUntilUpdatedAt = 'subscription__totalAmountReceivedUntilUpdatedAt',
  SubscriptionUnits = 'subscription__units',
  SubscriptionUpdatedAtBlockNumber = 'subscription__updatedAtBlockNumber',
  SubscriptionUpdatedAtTimestamp = 'subscription__updatedAtTimestamp',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SubscriptionRevokedEvent = Event & {
  __typename?: 'SubscriptionRevokedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  userData: Scalars['Bytes']['output'];
};

export type SubscriptionRevokedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionRevokedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SubscriptionRevokedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  SubscriptionApproved = 'subscription__approved',
  SubscriptionCreatedAtBlockNumber = 'subscription__createdAtBlockNumber',
  SubscriptionCreatedAtTimestamp = 'subscription__createdAtTimestamp',
  SubscriptionId = 'subscription__id',
  SubscriptionIndexValueUntilUpdatedAt = 'subscription__indexValueUntilUpdatedAt',
  SubscriptionTotalAmountReceivedUntilUpdatedAt = 'subscription__totalAmountReceivedUntilUpdatedAt',
  SubscriptionUnits = 'subscription__units',
  SubscriptionUpdatedAtBlockNumber = 'subscription__updatedAtBlockNumber',
  SubscriptionUpdatedAtTimestamp = 'subscription__updatedAtTimestamp',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type SubscriptionUnitsUpdatedEvent = Event & {
  __typename?: 'SubscriptionUnitsUpdatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `publisher`
   * addresses[2] = `subscriber`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**
   * An arbitrary uint32 value used to allow a publisher to create multiple indexes for a specific `token`.
   *
   */
  indexId: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  oldUnits: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  /**
   * The creator of the `index`.
   *
   */
  publisher: Scalars['Bytes']['output'];
  /**
   * The account that is subscribed to `index`. A possible recipient of distributions from the `publisher`.
   * `subscriber` only receives tokens if they have been allocated units (can be thought of as shares).
   *
   */
  subscriber: Scalars['Bytes']['output'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  units: Scalars['BigInt']['output'];
  userData: Scalars['Bytes']['output'];
};

export type SubscriptionUnitsUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexId?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldUnits?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publisher?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publisher_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_gt?: InputMaybe<Scalars['String']['input']>;
  subscription_gte?: InputMaybe<Scalars['String']['input']>;
  subscription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_lt?: InputMaybe<Scalars['String']['input']>;
  subscription_lte?: InputMaybe<Scalars['String']['input']>;
  subscription_not?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  units?: InputMaybe<Scalars['BigInt']['input']>;
  units_gt?: InputMaybe<Scalars['BigInt']['input']>;
  units_gte?: InputMaybe<Scalars['BigInt']['input']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  units_lt?: InputMaybe<Scalars['BigInt']['input']>;
  units_lte?: InputMaybe<Scalars['BigInt']['input']>;
  units_not?: InputMaybe<Scalars['BigInt']['input']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userData?: InputMaybe<Scalars['Bytes']['input']>;
  userData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SubscriptionUnitsUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  OldUnits = 'oldUnits',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  SubscriptionApproved = 'subscription__approved',
  SubscriptionCreatedAtBlockNumber = 'subscription__createdAtBlockNumber',
  SubscriptionCreatedAtTimestamp = 'subscription__createdAtTimestamp',
  SubscriptionId = 'subscription__id',
  SubscriptionIndexValueUntilUpdatedAt = 'subscription__indexValueUntilUpdatedAt',
  SubscriptionTotalAmountReceivedUntilUpdatedAt = 'subscription__totalAmountReceivedUntilUpdatedAt',
  SubscriptionUnits = 'subscription__units',
  SubscriptionUpdatedAtBlockNumber = 'subscription__updatedAtBlockNumber',
  SubscriptionUpdatedAtTimestamp = 'subscription__updatedAtTimestamp',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Units = 'units',
  UserData = 'userData'
}

export type SuperTokenCreatedEvent = Event & {
  __typename?: 'SuperTokenCreatedEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SuperTokenCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenCreatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SuperTokenCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SuperTokenFactoryUpdatedEvent = Event & {
  __typename?: 'SuperTokenFactoryUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  newFactory: Scalars['Bytes']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SuperTokenFactoryUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newFactory?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newFactory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_not?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newFactory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SuperTokenFactoryUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewFactory = 'newFactory',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SuperTokenLogicCreatedEvent = Event & {
  __typename?: 'SuperTokenLogicCreatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenLogic: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SuperTokenLogicCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicCreatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenLogic?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenLogic_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenLogic_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SuperTokenLogicCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TokenLogic = 'tokenLogic',
  TransactionHash = 'transactionHash'
}

export type SuperTokenLogicUpdatedEvent = Event & {
  __typename?: 'SuperTokenLogicUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  code: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SuperTokenLogicUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  code?: InputMaybe<Scalars['Bytes']['input']>;
  code_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_gt?: InputMaybe<Scalars['Bytes']['input']>;
  code_gte?: InputMaybe<Scalars['Bytes']['input']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  code_lt?: InputMaybe<Scalars['Bytes']['input']>;
  code_lte?: InputMaybe<Scalars['Bytes']['input']>;
  code_not?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenLogicUpdatedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SuperTokenLogicUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SuperTokenMinimumDepositChangedEvent = Event & {
  __typename?: 'SuperTokenMinimumDepositChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  logIndex: Scalars['BigInt']['output'];
  minimumDeposit: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SuperTokenMinimumDepositChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SuperTokenMinimumDepositChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SuperTokenMinimumDepositChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LogIndex = 'logIndex',
  MinimumDeposit = 'minimumDeposit',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * Token: A higher order entity created for super tokens (and underlying tokens) that are "valid" (tokens that have Superfluid's host contract address set as the host).
 *
 */
export type Token = {
  __typename?: 'Token';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  decimals: Scalars['Int']['output'];
  governanceConfig?: Maybe<TokenGovernanceConfig>;
  /**
   * ID: the token address
   *
   */
  id: Scalars['ID']['output'];
  /**
   * A boolean indicating whether the token is a part of our resolver list.
   *
   */
  isListed: Scalars['Boolean']['output'];
  /**
   * A boolean indicating whether the token is a NativeAssetSuperToken.
   *
   */
  isNativeAssetSuperToken: Scalars['Boolean']['output'];
  isSuperToken: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  /**
   * The address of the underlying ERC20 token (zero address for non-ERC20WrapperSuperToken's)
   *
   */
  underlyingAddress: Scalars['Bytes']['output'];
  /**
   * The underlying ERC20 token for a ERC20WrapperSuperToken otherwise null.
   *
   */
  underlyingToken?: Maybe<Token>;
};

export type TokenDowngradedEvent = Event & {
  __typename?: 'TokenDowngradedEvent';
  account: Account;
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenDowngradedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TokenDowngradedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenDowngradedEvent_OrderBy {
  Account = 'account',
  AccountCreatedAtBlockNumber = 'account__createdAtBlockNumber',
  AccountCreatedAtTimestamp = 'account__createdAtTimestamp',
  AccountId = 'account__id',
  AccountIsSuperApp = 'account__isSuperApp',
  AccountUpdatedAtBlockNumber = 'account__updatedAtBlockNumber',
  AccountUpdatedAtTimestamp = 'account__updatedAtTimestamp',
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * TokenGovernanceConfig: A higher order entity that represents the governance configs for a token.
 * If `id` is `address(0)`, it will be used as the default config.
 *
 */
export type TokenGovernanceConfig = {
  __typename?: 'TokenGovernanceConfig';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  /**
   * id is the address of the SuperToken
   * NOTE: the zero address is reserved for the default config for all tokens with unset configs.
   *
   */
  id: Scalars['ID']['output'];
  /**
   * If true, `id` is `address(0)` and this is the default config for all tokens with unset configs.
   *
   */
  isDefault: Scalars['Boolean']['output'];
  /**
   * The (default or token-specific) liquidation period (buffer amount required for a token).
   * This field can be used to calculate the liquidation buffer (or deposit) amount for a token: `liquidationBufferAmount = liquidationPeriod * flowRate`.
   * Note that if `minimumDeposit` is set, the liquidation buffer amount will be the greater of the two values.
   *
   */
  liquidationPeriod?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The (default or token-specific) minimum deposit amount.
   *
   */
  minimumDeposit?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The (default or token-specific) patrician period, the patrician period is the window in which a patrician receives all rewards for a liquidation, no matter the liquidating account.
   *
   */
  patricianPeriod?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The (default or token-specific) address that receives liquidation rewards for a token prior to 3Ps and the TOGA address after 3Ps.
   *
   */
  rewardAddress?: Maybe<Scalars['Bytes']['output']>;
  /**
   * A reverse lookup to the token it is associated with and null if it is the default config.
   *
   */
  token?: Maybe<Token>;
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};

export type TokenGovernanceConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDefault_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenGovernanceConfig_Filter>>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenGovernanceConfig_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  IsDefault = 'isDefault',
  LiquidationPeriod = 'liquidationPeriod',
  MinimumDeposit = 'minimumDeposit',
  PatricianPeriod = 'patricianPeriod',
  RewardAddress = 'rewardAddress',
  Token = 'token',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatistic = {
  __typename?: 'TokenStatistic';
  /**
   * id: `token` (superToken) address
   *
   */
  id: Scalars['ID']['output'];
  token: Token;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  /**
   * The all-time total amount distributed until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * The all-time total amount transferred until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt']['output'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt']['output'];
  updatedAtBlockNumber: Scalars['BigInt']['output'];
  updatedAtTimestamp: Scalars['BigInt']['output'];
};


/**
 * TokenStatistic: An aggregate entity which contains aggregate data for `token`.
 *
 */
export type TokenStatisticTokenStatisticLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};

/**
 * TokenStatisticLog: Historical entries of `TokenStatistic` updates.
 *
 */
export type TokenStatisticLog = {
  __typename?: 'TokenStatisticLog';
  blockNumber: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  tokenStatistic: TokenStatistic;
  /**
   * The all-time total amount of `token` distributed until the `timestamp`/`block`.
   *
   */
  totalAmountDistributed: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` streamed (outflows) until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt']['output'];
  /**
   * The all-time total amount of `token` transferred until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt']['output'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int']['output'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt']['output'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int']['output'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int']['output'];
  /**
   * The count of closed streams for `token`.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int']['output'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int']['output'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt']['output'];
  /**
   * The number of subscriptions which have units allocated to them created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int']['output'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their tokens.
   *
   */
  totalSupply: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  triggeredByEventName: Scalars['String']['output'];
};

export type TokenStatisticLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatisticLog_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatisticLog_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_?: InputMaybe<TokenStatistic_Filter>;
  tokenStatistic_contains?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_gt?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_gte?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenStatistic_lt?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_lte?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenStatistic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenStatistic_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountDistributed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']['input']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TokenStatisticLog_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenStatistic = 'tokenStatistic',
  TokenStatisticId = 'tokenStatistic__id',
  TokenStatisticTotalAmountDistributedUntilUpdatedAt = 'tokenStatistic__totalAmountDistributedUntilUpdatedAt',
  TokenStatisticTotalAmountStreamedUntilUpdatedAt = 'tokenStatistic__totalAmountStreamedUntilUpdatedAt',
  TokenStatisticTotalAmountTransferredUntilUpdatedAt = 'tokenStatistic__totalAmountTransferredUntilUpdatedAt',
  TokenStatisticTotalApprovedSubscriptions = 'tokenStatistic__totalApprovedSubscriptions',
  TokenStatisticTotalDeposit = 'tokenStatistic__totalDeposit',
  TokenStatisticTotalNumberOfActiveIndexes = 'tokenStatistic__totalNumberOfActiveIndexes',
  TokenStatisticTotalNumberOfActiveStreams = 'tokenStatistic__totalNumberOfActiveStreams',
  TokenStatisticTotalNumberOfClosedStreams = 'tokenStatistic__totalNumberOfClosedStreams',
  TokenStatisticTotalNumberOfIndexes = 'tokenStatistic__totalNumberOfIndexes',
  TokenStatisticTotalOutflowRate = 'tokenStatistic__totalOutflowRate',
  TokenStatisticTotalSubscriptionsWithUnits = 'tokenStatistic__totalSubscriptionsWithUnits',
  TokenStatisticTotalSupply = 'tokenStatistic__totalSupply',
  TokenStatisticUpdatedAtBlockNumber = 'tokenStatistic__updatedAtBlockNumber',
  TokenStatisticUpdatedAtTimestamp = 'tokenStatistic__updatedAtTimestamp',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountDistributed = 'totalAmountDistributed',
  TotalAmountStreamed = 'totalAmountStreamed',
  TotalAmountTransferred = 'totalAmountTransferred',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalNumberOfActiveIndexes = 'totalNumberOfActiveIndexes',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalNumberOfIndexes = 'totalNumberOfIndexes',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalSupply = 'totalSupply',
  TransactionHash = 'transactionHash',
  TriggeredByEventName = 'triggeredByEventName'
}

export type TokenStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStatistic_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenStatistic_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenStatisticLogs_?: InputMaybe<TokenStatisticLog_Filter>;
  token_?: InputMaybe<Token_Filter>;
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
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']['input']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']['input']>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']['input']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenStatistic_OrderBy {
  Id = 'id',
  Token = 'token',
  TokenStatisticLogs = 'tokenStatisticLogs',
  TokenCreatedAtBlockNumber = 'token__createdAtBlockNumber',
  TokenCreatedAtTimestamp = 'token__createdAtTimestamp',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsListed = 'token__isListed',
  TokenIsNativeAssetSuperToken = 'token__isNativeAssetSuperToken',
  TokenIsSuperToken = 'token__isSuperToken',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenUnderlyingAddress = 'token__underlyingAddress',
  TotalAmountDistributedUntilUpdatedAt = 'totalAmountDistributedUntilUpdatedAt',
  TotalAmountStreamedUntilUpdatedAt = 'totalAmountStreamedUntilUpdatedAt',
  TotalAmountTransferredUntilUpdatedAt = 'totalAmountTransferredUntilUpdatedAt',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalNumberOfActiveIndexes = 'totalNumberOfActiveIndexes',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalNumberOfIndexes = 'totalNumberOfIndexes',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalSupply = 'totalSupply',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type TokenUpgradedEvent = Event & {
  __typename?: 'TokenUpgradedEvent';
  account: Account;
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `account`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenUpgradedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TokenUpgradedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenUpgradedEvent_OrderBy {
  Account = 'account',
  AccountCreatedAtBlockNumber = 'account__createdAtBlockNumber',
  AccountCreatedAtTimestamp = 'account__createdAtTimestamp',
  AccountId = 'account__id',
  AccountIsSuperApp = 'account__isSuperApp',
  AccountUpdatedAtBlockNumber = 'account__updatedAtBlockNumber',
  AccountUpdatedAtTimestamp = 'account__updatedAtTimestamp',
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  governanceConfig?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_?: InputMaybe<TokenGovernanceConfig_Filter>;
  governanceConfig_contains?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_ends_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_gt?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_gte?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governanceConfig_lt?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_lte?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_contains?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governanceConfig_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_starts_with?: InputMaybe<Scalars['String']['input']>;
  governanceConfig_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isListed?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isListed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNativeAssetSuperToken?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeAssetSuperToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNativeAssetSuperToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeAssetSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSuperToken?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSuperToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingToken?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_?: InputMaybe<Token_Filter>;
  underlyingToken_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingToken_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Token_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Decimals = 'decimals',
  GovernanceConfig = 'governanceConfig',
  GovernanceConfigCreatedAtBlockNumber = 'governanceConfig__createdAtBlockNumber',
  GovernanceConfigCreatedAtTimestamp = 'governanceConfig__createdAtTimestamp',
  GovernanceConfigId = 'governanceConfig__id',
  GovernanceConfigIsDefault = 'governanceConfig__isDefault',
  GovernanceConfigLiquidationPeriod = 'governanceConfig__liquidationPeriod',
  GovernanceConfigMinimumDeposit = 'governanceConfig__minimumDeposit',
  GovernanceConfigPatricianPeriod = 'governanceConfig__patricianPeriod',
  GovernanceConfigRewardAddress = 'governanceConfig__rewardAddress',
  GovernanceConfigUpdatedAtBlockNumber = 'governanceConfig__updatedAtBlockNumber',
  GovernanceConfigUpdatedAtTimestamp = 'governanceConfig__updatedAtTimestamp',
  Id = 'id',
  IsListed = 'isListed',
  IsNativeAssetSuperToken = 'isNativeAssetSuperToken',
  IsSuperToken = 'isSuperToken',
  Name = 'name',
  Symbol = 'symbol',
  UnderlyingAddress = 'underlyingAddress',
  UnderlyingToken = 'underlyingToken',
  UnderlyingTokenCreatedAtBlockNumber = 'underlyingToken__createdAtBlockNumber',
  UnderlyingTokenCreatedAtTimestamp = 'underlyingToken__createdAtTimestamp',
  UnderlyingTokenDecimals = 'underlyingToken__decimals',
  UnderlyingTokenId = 'underlyingToken__id',
  UnderlyingTokenIsListed = 'underlyingToken__isListed',
  UnderlyingTokenIsNativeAssetSuperToken = 'underlyingToken__isNativeAssetSuperToken',
  UnderlyingTokenIsSuperToken = 'underlyingToken__isSuperToken',
  UnderlyingTokenName = 'underlyingToken__name',
  UnderlyingTokenSymbol = 'underlyingToken__symbol',
  UnderlyingTokenUnderlyingAddress = 'underlyingToken__underlyingAddress'
}

export type TransferEvent = Event & {
  __typename?: 'TransferEvent';
  /**
   * Contains the addresses that were impacted by this event:
   * addresses[0] = `token` (superToken)
   * addresses[1] = `from`
   * addresses[2] = `to`
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  from: Account;
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

export type TransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TransferEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  From = 'from',
  FromCreatedAtBlockNumber = 'from__createdAtBlockNumber',
  FromCreatedAtTimestamp = 'from__createdAtTimestamp',
  FromId = 'from__id',
  FromIsSuperApp = 'from__isSuperApp',
  FromUpdatedAtBlockNumber = 'from__updatedAtBlockNumber',
  FromUpdatedAtTimestamp = 'from__updatedAtTimestamp',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  ToCreatedAtBlockNumber = 'to__createdAtBlockNumber',
  ToCreatedAtTimestamp = 'to__createdAtTimestamp',
  ToId = 'to__id',
  ToIsSuperApp = 'to__isSuperApp',
  ToUpdatedAtBlockNumber = 'to__updatedAtBlockNumber',
  ToUpdatedAtTimestamp = 'to__updatedAtTimestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type TrustedForwarderChangedEvent = Event & {
  __typename?: 'TrustedForwarderChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  enabled: Scalars['Boolean']['output'];
  forwarder: Scalars['Bytes']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes']['output'];
  host: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isKeySet: Scalars['Boolean']['output'];
  logIndex: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  order: Scalars['BigInt']['output'];
  superToken: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TrustedForwarderChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  forwarder?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  forwarder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_not?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  forwarder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governanceAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host?: InputMaybe<Scalars['Bytes']['input']>;
  host_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_gt?: InputMaybe<Scalars['Bytes']['input']>;
  host_gte?: InputMaybe<Scalars['Bytes']['input']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  host_lt?: InputMaybe<Scalars['Bytes']['input']>;
  host_lte?: InputMaybe<Scalars['Bytes']['input']>;
  host_not?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TrustedForwarderChangedEvent_Filter>>>;
  order?: InputMaybe<Scalars['BigInt']['input']>;
  order_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TrustedForwarderChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Enabled = 'enabled',
  Forwarder = 'forwarder',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
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

export type GetMyStreamsQueryVariables = Exact<{
  owner: Scalars['ID']['input'];
}>;


export type GetMyStreamsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', outflows: Array<{ __typename?: 'Stream', currentFlowRate: any, receiver: { __typename?: 'Account', id: string } }> } | null };


export const GetMyStreamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyStreams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"api"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"superfluid"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"outflows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"currentFlowRate_gt"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentFlowRate"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyStreamsQuery, GetMyStreamsQueryVariables>;