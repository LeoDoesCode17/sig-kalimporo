import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import { Occupation } from "@/types/Occupation";

const occupationRef = collection(firestore, "occupations");

export const OccupationService = {
  async getAll(): Promise<Occupation[]> {
    const querySnapshot = await getDocs(occupationRef);
    const occupationPromises = querySnapshot.docs.map(async (doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
      }
    });
    return Promise.all(occupationPromises);
  }
};
