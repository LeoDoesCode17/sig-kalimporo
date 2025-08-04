"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { LeafletMapProps } from "@/types/LeafletMapProps";
import Badge from "./Badge";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function LeafletMap({ people_locations }: LeafletMapProps) {
  const location: [number, number] = [-5.574667089244676, 119.58706112819605];

  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "0.5rem",
        backgroundColor: "transparent",
      }}
      className="leaflet-container-transparent"
    >
      <TileLayer
        attribution="Tiles &copy; Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={location}>
        <Popup>Center is here!</Popup>
      </Marker>
      {people_locations.map((person) => (
        <Marker
          key={person.id}
          position={[person.location.latitude, person.location.longitude]}
        >
          <Popup className="custom-popup">
            <div className="w-60 p-3 space-y-2 text-sm text-gray-800">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold text-gray-900">
                  {person.name}
                </h3>
                <Badge label={person.work_as} />
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">No. HP</span>
                  <span className="text-gray-900">{person.contact_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Dusun</span>
                  <span className="text-gray-900">{person.hamlet}</span>
                </div>
              </div>

              {/* Description */}
              {person.description && (
                <p className="text-xs text-gray-700 mt-2">
                  {person.description}
                </p>
              )}

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${person.contact_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 !text-white text-xs font-semibold px-4 py-2 rounded"
                >
                  Hubungi melalui WhatsApp
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
