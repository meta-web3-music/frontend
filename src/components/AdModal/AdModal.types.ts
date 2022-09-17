import { AdModalFormValues } from "./AdModalForm/AdModalForm.types";

interface AdModalProps {
  onHandleModal: () => void;
  onHandleAdForm: (value: AdModalFormValues) => void;
  isVisible: boolean;
  isCreatingAd: boolean;
}

export type { AdModalProps }