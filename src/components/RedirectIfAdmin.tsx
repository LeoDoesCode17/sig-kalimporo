"use client"
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectIfAdmin() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      const isAdminRoute = pathname.startsWith("/admin");
      if (firebaseUser && !isAdminRoute) {
        router.replace("/admin/dashboard");
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  return null; // this compnonent does not render anything
}