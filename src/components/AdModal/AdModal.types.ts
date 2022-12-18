import { AdModalFormValues } from "./AdModalForm/AdModalForm.types";

interface AdModalProps {
  onCancelModal: () => void;
  onHandleAdForm: (value: AdModalFormValues) => void;
  isVisible: boolean;
  isCreatingAd: boolean;
}

export type { AdModalProps }