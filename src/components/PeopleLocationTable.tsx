import { LeafletMapProps } from "@/types/LeafletMapProps";

export default function PeopleLocationTable({
  people_locations,
}: LeafletMapProps) {
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
              <td className="border-r border-gray-300 px-4 py-2 text-black">{person.hamlet}</td>
              <td className="px-4 py-2 text-black">
                <button className="text-blue-600 hover:underline">
                  Edit
                </button>
                <span className="mx-2">|</span>
                <button className="text-red-600 hover:underline">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
