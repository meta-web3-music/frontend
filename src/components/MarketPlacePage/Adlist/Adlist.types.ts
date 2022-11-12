import {
  GetAllAsks_asks,
} from "../../../graph-ql/queries/GET_ALL_ASKS/__generated__/GetAllAsks";

interface AdlistProp {
  onHandleModal: () => void;
  onRentClick: (advNft: GetAllAsks_asks) => void;
}

export type {AdlistProp}