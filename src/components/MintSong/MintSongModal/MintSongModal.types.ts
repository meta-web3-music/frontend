interface ModalProps {
  onHandleModal: () => void;
  onHandleMintForm: (value: unknown) => void;
  isVisible: boolean;
  isMinting: boolean;
}

export type { ModalProps }