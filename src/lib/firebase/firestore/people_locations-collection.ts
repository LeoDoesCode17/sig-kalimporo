import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import { PeopleLocation } from "@/types/PeopleLocation";

const peopleRef = collection(firestore, "people_locations");

export const PeopleLocationService = {
  async getAll(): Promise<PeopleLocation[]> {
    const querySnapshot = await getDocs(peopleRef);
    return querySnapshot.docs.map((doc) => ({ 
      id: doc.id,
      name: doc.data().name,
      contact_number: doc.data().contact_number,
      location: doc.data().location,
      work_as: doc.data().work_as,
      hamlet: doc.data().hamlet
    }));
  }
}