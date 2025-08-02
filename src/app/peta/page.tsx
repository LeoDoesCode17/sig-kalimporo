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
    <section className="relative bg-white text-black px-6 py-12 pt-25 overflow-hidden">
      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
        aria-hidden="true"
      />
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
    </section>
  );
}
