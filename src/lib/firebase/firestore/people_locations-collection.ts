import {
  collection,
  DocumentReference,
  getDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { firestore } from "../config";
import { PeopleLocation } from "@/types/PeopleLocation";
import { Occupation } from "@/types/Occupation";
import { Hamlet } from "@/types/Hamlet";

const peopleRef = collection(firestore, "people_locations");

export const PeopleLocationService = {
  async getAll(): Promise<PeopleLocation[]> {
    const q = query(peopleRef, where("soft_deleted", "==", false));
    const querySnapshot = await getDocs(q);

    const peoplePromises = querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const occupation = await this.getOccupation(
        data.work_as as DocumentReference
      );
      const hamlet = await this.getHamlet(data.hamlet as DocumentReference);

      return {
        id: doc.id,
        name: data.name,
        contact_number: data.contact_number,
        location: data.location,
        work_as: occupation?.name ?? "Tidak diketahui",
        hamlet: hamlet?.name ?? "Tidak diketahui",
        soft_deleted: data.soft_deleted ?? false,
      };
    });
    return Promise.all(peoplePromises);
  },
  async getOccupation(work_as: DocumentReference): Promise<Occupation | null> {
    const occupationSnapshot = await getDoc(work_as);
    if (!occupationSnapshot.exists()) {
      return null;
    }
    return {
      id: occupationSnapshot.id,
      name: occupationSnapshot.data().name,
    };
  },
  async getHamlet(hamlet: DocumentReference): Promise<Hamlet | null> {
    const hamletSnapshot = await getDoc(hamlet);
    if (!hamletSnapshot.exists()) {
      return null;
    }
    return {
      id: hamletSnapshot.id,
      name: hamletSnapshot.data().name,
    };
  },
};
