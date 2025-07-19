import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    // Store the token in cookies
    document.cookie = `__session=${token}; path=/; max-age=3600`; // set valid cookie for 1 hour
    return userCredential.user;
  }catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await auth.signOut();
    document.cookie = '__session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  } catch (error) {
    throw error;
  }
}