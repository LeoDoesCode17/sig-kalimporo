import { PeopleLocation } from "./PeopleLocation";

export interface DeletePeopleModalProps {
  open: boolean;
  person: PeopleLocation;
  onClose: () => void;
}