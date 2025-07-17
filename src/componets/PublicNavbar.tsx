"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicNavbar() {
  const pathName = usePathname();
  return (
    <nav className="bg-[#121619] shadow px-5 py-3">
      <div className="max-w-7xl mx-auto flex justify-between text-white">
        <Link
          href="https://www.kalimporo.com/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Image
            className="dark:invert"
            src="/logo_kalimporo_no_bg.png"
            alt="Logo Kalimporo"
            width={60}
            height={60}
          />
          <h1>Desa Kalimporo</h1>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/"
            className={
              pathName === "/"
                ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#262D33] transition font-semibold"
                : "flex items-center gap-3 px-4 py-2 rounded-md bg-[#121619] hover:bg-[#1C2226] transition font-semibold"
            }
          >
            <Image
              className="dark:invert"
              src={
                pathName === "/"
                  ? "/active_home_nav_item.png"
                  : "/not_active_home_nav_item.png"
              }
              alt="Logo Rumah"
              width={40}
              height={40}
            />
            <span>Beranda</span>
          </Link>
          <Link
            href="/"
            className={
              pathName === "/peta"
                ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#262D33] transition font-semibold"
                : "flex items-center gap-3 px-4 py-2 rounded-md bg-[#121619] hover:bg-[#1C2226] transition font-semibold"
            }
          >
            <Image
              className="dark:invert"
              src={
                pathName === "/peta"
                  ? "/active_map_nav_item.png"
                  : "/not_active_map_nav_item.png"
              }
              alt="Logo Kalimporo"
              width={40}
              height={40}
            />
            <span>Peta</span>
          </Link>
          <Link
            href="/#features"
            className={
              pathName === "/tentang"
                ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#262D33] transition font-semibold"
                : "flex items-center gap-3 px-4 py-2 rounded-md bg-[#121619] hover:bg-[#1C2226] transition font-semibold"
            }
          >
            <Image
              className="dark:invert"
              src={
                pathName === "/tentang"
                  ? "/active_about_nav_item.png"
                  : "/not_active_about_nav_item.png"
              }
              alt="Logo Kalimporo"
              width={40}
              height={40}
            />
            <span>Tentang</span>
          </Link>
          <Link
            href="/admin/login"
            className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#A29A69] hover:bg-[#918a60] transition font-semibold"
          >
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
}
