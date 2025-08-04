"use client";
import { useEffect, useState } from "react";
import { HamletService } from "@/lib/firebase/firestore/hamlets-collection";
import { OccupationService } from "@/lib/firebase/firestore/occupations-collection";
import { PeopleLocationService } from "@/lib/firebase/firestore/people_locations-collection";
import { CreatePeopleModalProps } from "@/types/CreatePeopleModalProps";
import { Hamlet } from "@/types/Hamlet";
import { Occupation } from "@/types/Occupation";

export default function CreatePeopleLocationModal({
  open,
  onClose,
  onCreateSuccess,
}: CreatePeopleModalProps) {
  const [form, setForm] = useState({
    name: "",
    contact_number: "",
    work_as: "",
    hamlet: "",
    longitude: 0.0,
    latitude: 0.0,
    description: "",
  });

  const [hamlets, setHamlets] = useState<Hamlet[]>([]);
  const [occupations, setOccupations] = useState<Occupation[]>([]);
  const [loading, setLoading] = useState(false); // 👈 loading state

  useEffect(() => {
    HamletService.getAll().then(setHamlets);
    OccupationService.getAll().then(setOccupations);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // 👈 start loading
    try {
      await PeopleLocationService.create(
        form.name,
        form.contact_number,
        form.work_as,
        form.hamlet,
        form.longitude,
        form.latitude,
        form.description
      );
      if (onCreateSuccess) onCreateSuccess();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white text-black rounded-lg w-full max-w-md p-6 border border-gray-300 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-[#A29A69]">Tambah Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nama
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama petani/peternak/pelaku UMKM"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <label
            htmlFor="contact_number"
            className="block text-sm font-medium mb-1"
          >
            Nomor Telepon (dalam +62)
          </label>
          <input
            name="contact_number"
            value={form.contact_number}
            onChange={handleChange}
            placeholder="Masukkan nomor telepon petani/peternak/pelaku UMKM"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <label htmlFor="work_as" className="block text-sm font-medium mb-1">
            Bekerja Sebagai
          </label>
          <select
            name="work_as"
            value={form.work_as}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="" disabled>
              Pilih Pekerjaan
            </option>
            {occupations.map((occupation) => (
              <option key={occupation.id} value={occupation.id}>
                {occupation.name}
              </option>
            ))}
          </select>

          <label htmlFor="hamlet" className="block text-sm font-medium mb-1">
            Dusun
          </label>
          <select
            name="hamlet"
            value={form.hamlet}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="" disabled>
              Pilih Dusun
            </option>
            {hamlets.map((hamlet) => (
              <option key={hamlet.id} value={hamlet.id}>
                {hamlet.name}
              </option>
            ))}
          </select>
          <label htmlFor="longitude" className="block text-sm font-medium mb-1">
            Koordinat Longitude (contoh: 119.586127)
          </label>
          <input
            name="longitude"
            type="number"
            value={form.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <label htmlFor="latitude" className="block text-sm font-medium mb-1">
            Koordinat Latitude (contoh: -5.570137)
          </label>
          <input
            name="latitude"
            type="number"
            value={form.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Deskripsi
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChangeTextArea}
            placeholder="Masukkan deskripsi petani/peternak/pelaku UMKM"
            className="w-full border border-gray-300 rounded px-3 py-2 resize-y min-h-[100px]"
            required
          />
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              disabled={loading}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded text-white ${
                loading
                  ? "bg-[#A29A69]/50 cursor-not-allowed"
                  : "bg-[#A29A69] hover:bg-[#8a835c]"
              }`}
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
