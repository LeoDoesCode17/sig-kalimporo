// components/LeafletMap.tsx
"use client"; // only for app directory structure

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { LeafletMapProps } from "@/types/LeafletMapProps";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function LeafletMap({ people_locations }: LeafletMapProps) {
  const location = [-5.574667089244676, 119.58706112819605];
  // const location = [-5.157923727440249, 119.41863216657083];
  console.log("People Locations in LeafletMap:", people_locations);
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ 
        height: "500px", 
        width: "100%", 
        borderRadius: "0.5rem",
      }}
    >
      <TileLayer
        attribution="Tiles &copy; Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={location}>
        <Popup>Center is here!</Popup>
      </Marker>
      {people_locations.map((person) => {
        return (
          <div key={person.id}>
            <Marker position={[person.location.latitude, person.location.longitude]}>
              <Popup>
                {/* must create badge */}
                <div className="text-center">
                  <h2 className="font-semibold">{person.name}</h2>
                  <p>Contact: {person.contact_number}</p>
                  <p>Work as: {person.work_as.id}</p>
                  <p>Hamlet: {person.hamlet.id}</p>
                </div>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
}
