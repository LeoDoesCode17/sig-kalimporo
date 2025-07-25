import { PeopleLocation } from "./PeopleLocation";

export interface UpdatePeopleModalProps {
  open: boolean;
  person: PeopleLocation;
  onClose: () => void;
  onUpdateSuccess?: () => Promise<void>;
}
