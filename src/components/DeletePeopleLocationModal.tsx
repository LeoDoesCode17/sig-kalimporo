import { useState } from "react";
import { PeopleLocationService } from "@/lib/firebase/firestore/people_locations-collection";
import { DeletePeopleModalProps } from "@/types/DeletePeopleModalProps";

export default function DeletePeopleLocationModal({ open, person, onClose, onDeleteSuccess }: DeletePeopleModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      console.log(`Deleting location with ID: ${person.id}`);
      await PeopleLocationService.softDelete(person.id); // ensure this is awaited
      if (onDeleteSuccess) {
        onDeleteSuccess(); // Call the success handler if provided
      }
      onClose();
    } catch (error) {
      console.error("Error deleting location:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black rounded-lg w-full max-w-md p-6 border border-gray-300 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-[#A29A69]">Hapus Data</h2>
        <p>Apakah Anda yakin ingin menghapus data {person.name} - {person.hamlet}?</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
            disabled={isDeleting}
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`py-2 px-4 rounded font-semibold text-white ${
              isDeleting
                ? "bg-red-400 cursor-not-allowed opacity-70"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {isDeleting ? "Menghapus..." : "Hapus"}
          </button>
        </div>
      </div>
    </div>
  );
}
