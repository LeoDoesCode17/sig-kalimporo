import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  GeoPoint,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
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
  async softDelete(id: string): Promise<void> {
    const personRef = doc(firestore, "people_locations", id);
    await updateDoc(personRef, { soft_deleted: true });
  },
  async create(
    name: string,
    contact_number: string,
    occupation_id: string,
    hamlet_id: string,
    longitude: number,
    latitude: number
  ): Promise<void> {
    const occupationRef = doc(firestore, "occupations", occupation_id);
    const hamletRef = doc(firestore, "hamlets", hamlet_id);
    const location = new GeoPoint(latitude, longitude);

    await addDoc(peopleRef, {
      name,
      contact_number,
      work_as: occupationRef,
      hamlet: hamletRef,
      location,
      soft_deleted: false,
    });
  },
  async update(
    id: string,
    name: string,
    contact_number: string,
    occupation_id: string,
    hamlet_id: string,
    longitude: number,
    latitude: number
  ): Promise<void> {
    const personRef = doc(firestore, "people_locations", id);
    const occupationRef = doc(firestore, "occupations", occupation_id);
    const hamletRef = doc(firestore, "hamlets", hamlet_id);
    const location = new GeoPoint(latitude, longitude);

    await updateDoc(personRef, {
      name,
      contact_number,
      work_as: occupationRef,
      hamlet: hamletRef,
      location,
    });
  },
};
