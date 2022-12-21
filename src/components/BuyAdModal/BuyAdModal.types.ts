import { BuyAdFormValues } from "./BuyAdForm.types";

interface BuyAdModalProps {
  onCloseModal: () => void;
  onHandleAdForm: (value: BuyAdFormValues) => void;
  isVisible: boolean;
  isCreatingAd: boolean;
}

export type { BuyAdModalProps as AdModalProps }