import { PeopleLocation } from "./PeopleLocation";

export interface LeafletMapProps {
  people_locations: PeopleLocation[];
  onDeleteSuccess?: () => Promise<void>;
}