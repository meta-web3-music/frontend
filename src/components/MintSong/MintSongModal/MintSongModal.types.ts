import { MintMusicWAdFormValues } from "./MintForm/MintForm.types";

interface ModalProps {
  onCloseModel: () => void;
  onHandleMintForm: (value: MintMusicWAdFormValues) => void;
  isVisible: boolean;
  isMinting: boolean;
}

export type { ModalProps }