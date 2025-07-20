import { DocumentReference, GeoPoint } from "firebase/firestore";

export interface PeopleLocation {
  id: string;
  name: string;
  contact_number: string;
  location: GeoPoint;
  work_as: DocumentReference;
  hamlet: DocumentReference;
}