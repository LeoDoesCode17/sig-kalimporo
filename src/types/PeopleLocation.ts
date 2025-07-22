import { GeoPoint } from "firebase/firestore";

export interface PeopleLocation {
  id: string;
  name: string;
  contact_number: string;
  location: GeoPoint;
  work_as: string;
  hamlet: string;
  soft_deleted: boolean;
}