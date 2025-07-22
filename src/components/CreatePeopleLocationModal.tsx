import { CreatePeopleModalProps } from "@/types/CreatePeopleModalProps";
import { useState } from "react";

export default function CreatePeopleLocationModal({
  open,
  onClose,
}: CreatePeopleModalProps) {
  const [form, setForm] = useState({
    name: "",
    contact_number: "",
    work_as: "",
    hamlet: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // TODO: submit data to Firebase here
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-lg w-full max-w-md p-6 border border-gray-300 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-[#A29A69]">Tambah Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            name="contact_number"
            value={form.contact_number}
            onChange={handleChange}
            placeholder="Nomor Kontak"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            name="work_as"
            value={form.work_as}
            onChange={handleChange}
            placeholder="Pekerjaan"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            name="hamlet"
            value={form.hamlet}
            onChange={handleChange}
            placeholder="Dusun"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#A29A69] text-white rounded hover:bg-[#8a835c]"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
