"use client";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import AdminNavbar from "./AdminNavbar";
import PublicNavbar from "./PublicNavbar";

export default function NavbarWrapper() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubsribe();
  }, []);

  return user ? <AdminNavbar /> : <PublicNavbar />;
}