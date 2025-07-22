// app/page.tsx or pages/index.tsx
"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { PeopleLocation } from "@/types/PeopleLocation";
import { PeopleLocationService } from "@/lib/firebase/firestore/people_locations-collection";

// Disable SSR for Leaflet component
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

export default function Home() {
    const [people, setPeople] = useState<PeopleLocation[]>([]);
  
    useEffect(() => {
      PeopleLocationService.getAll().then(setPeople);
    }, []);

  return (
    <div className="p-5 bg-white text-black">
      <h1 className="text-xl mb-4 font-semibold text-center">Persebaran Peternak dan Petani Desa Kalimporo</h1>
      <LeafletMap people_locations={people}/>
    </div>
  );
}
