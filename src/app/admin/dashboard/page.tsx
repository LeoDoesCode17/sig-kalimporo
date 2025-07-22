"use client";
import { PeopleLocationService } from "@/lib/firebase/firestore/people_locations-collection";
import { PeopleLocation } from "@/types/PeopleLocation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PeopleLocationTable from "@/components/PeopleLocationTable";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

export default function Home() {
  const [people, setPeople] = useState<PeopleLocation[]>([]);

  useEffect(() => {
    PeopleLocationService.getAll().then(setPeople);
  }, []);

  return (
    <div className="p-5 bg-white text-black pt-15 px-6">
      <header className="text-center space-y-4 mb-5">
        <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
          Dashboard Admin
        </h1>
        <h2 className="text-lg md:text-xl text-black">
          Peta Interaktif Pertanian dan Peternakan Desa Kalimporo
        </h2>
      </header>
      <div className="relative z-0 h-[80vh]">
        <LeafletMap people_locations={people} />
      </div>
      <div className="pt-25">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
            Data Tabel
          </h1>
          <button
            className="bg-[#A29A69] hover:bg-[#8a835c] text-white font-semibold py-2 px-4 rounded"
          >
            + Tambah Data
          </button>
        </div>
        <PeopleLocationTable people_locations={people} />
      </div>
    </div>
  );
}
