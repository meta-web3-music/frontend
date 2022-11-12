import { MintMusicAdFormValues } from "./MintForm/MintForm.types";

interface ModalProps {
  onHandleModal: () => void;
  onHandleMintForm: (value: MintMusicAdFormValues) => void;
  isVisible: boolean;
  isMinting: boolean;
}

export type { ModalProps }