import { MintMusicWAdFormValues } from "./MintForm/MintForm.types";

interface ModalProps {
  onHandleModal: () => void;
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isVisible: boolean;
  isMinting: boolean;
}

export type { ModalProps }