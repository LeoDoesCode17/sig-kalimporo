export interface UpdatePeopleModalProps {
  open: boolean;
  onClose: () => void;
  onUpdateSuccess?: () => Promise<void>;
}
