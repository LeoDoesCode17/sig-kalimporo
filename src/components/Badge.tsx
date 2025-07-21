import { BadgeProps } from "@/types/BadgeProps";
export default function Badge({ label }: BadgeProps) {
  const color = label.toLowerCase() === "petani"
    ? "bg-green-600"
    : label.toLowerCase() === "peternak"
    ? "bg-blue-600"
    : "bg-yellow-600";

  return (
    <span
      className={`ml-2 inline-block px-2 py-0.5 text-xs text-white font-medium rounded ${color}`}
    >
      {label}
    </span>
  );
}