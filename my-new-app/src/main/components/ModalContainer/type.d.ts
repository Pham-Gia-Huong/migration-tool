interface ModalContainerButton {
  onSave?: () => void;
  onClose?: () => void;
}
interface ModalContainerProps extends ModalContainerButton {
  isOpen: boolean;
}
