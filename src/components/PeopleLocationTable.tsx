import { LeafletMapProps } from "@/types/LeafletMapProps";
import { useState } from "react";
import DeletePeopleLocationModal from "./DeletePeopleLocationModal";
import { PeopleLocation } from "@/types/PeopleLocation";
import UpdatePeopleLocationModal from "./UpdatePeopleLocationModal";

export default function PeopleLocationTable({
  people_locations,
  onDeleteSuccess,
  onUpdateSuccess,
}: LeafletMapProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState<PeopleLocation>(
    people_locations[0]
  );

  const handleShowDeleteModal = (person: PeopleLocation) => {
    console.log("Selected person for deletion: ", person);
    setSelectedPerson(person);
    setShowDeleteModal(true);
  };

  const handleShowUpdateModal = (person: PeopleLocation) => {
    console.log("Selected person for update: ", person);
    setSelectedPerson(person);
    setShowUpdateModal(true);
  };
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-fixed border border-gray-300 text-sm">
        <thead>
          <tr className="bg-white">
            <th className="border-r border-gray-300 px-4 py-3 text-left font-bold text-yellow-600">
              Nama
            </th>
            <th className="border-r border-gray-300 px-4 py-3 text-left font-bold text-yellow-600">
              Nomor Kontak
            </th>
            <th className="border-r border-gray-300 px-4 py-3 text-left font-bold text-yellow-600">
              Komoditas
            </th>
            <th className="border-r border-gray-300 px-4 py-3 text-left font-bold text-yellow-600">
              Dusun
            </th>
            <th className="px-4 py-3 text-left font-bold text-yellow-600">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {people_locations.map((person) => (
            <tr
              key={person.id}
              className="border-t border-gray-300 hover:bg-gray-50"
            >
              <td className="border-r border-gray-300 px-4 py-2 text-black">
                {person.name}
              </td>
              <td className="border-r border-gray-300 px-4 py-2 text-black">
                {person.contact_number}
              </td>
              <td className="border-r border-gray-300 px-4 py-2 text-black">
                {person.work_as}
              </td>
              <td className="border-r border-gray-300 px-4 py-2 text-black">
                {person.hamlet}
              </td>
              <td className="px-4 py-2 text-black">
                <button
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => handleShowUpdateModal(person)}
                >
                  Edit
                </button>
                <span className="mx-2">|</span>
                <button
                  className="text-red-600 hover:underline cursor-pointer"
                  onClick={() => handleShowDeleteModal(person)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeletePeopleLocationModal
        open={showDeleteModal}
        person={selectedPerson}
        onClose={() => setShowDeleteModal(false)}
        onDeleteSuccess={onDeleteSuccess}
      />
      <UpdatePeopleLocationModal 
        open={showUpdateModal}
        person={selectedPerson}
        onClose={() => setShowUpdateModal(false)}
        onUpdateSuccess={onUpdateSuccess}
      />
    </div>
  );
}
