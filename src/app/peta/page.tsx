// app/page.tsx or pages/index.tsx
"use client";
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
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-img.jpg')", // Replace with your image path
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 p-5 pt-25 px-6 text-black">
        <header className="text-center space-y-4 mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
            Peta Potensi Desa Kalimporo
          </h1>
          <h2 className="text-lg md:text-xl text-black">
            Peta Interaktif Pertanian dan Peternakan Desa Kalimporo
          </h2>
        </header>

        <div className="relative z-10 h-[80vh]">
          <LeafletMap people_locations={people} />
        </div>
      </div>
    </div>
  );
}
