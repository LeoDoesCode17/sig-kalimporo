import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
}