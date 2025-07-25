import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import { Hamlet } from "@/types/Hamlet";

const hamletRef = collection(firestore, "hamlets");

export const HamletService = {
  async getAll(): Promise<Hamlet[]> {
    const querySnapshot = await getDocs(hamletRef);
    const hamletPromises = querySnapshot.docs.map(async (doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
      };
    });
    return Promise.all(hamletPromises);
  }
};