import Link from "next/link";

export default function PublicNavbar() {
  return (
    <nav className="bg-[#121619] shadow">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <div>
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/#features" className="mx-2">Features</Link>
          <Link href="/admin/login" className="mx-2">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
