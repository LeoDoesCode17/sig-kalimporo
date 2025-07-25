export interface CreatePeopleModalProps {
  open: boolean;
  onClose: () => void;
  onCreateSuccess?: () => Promise<void>;
}