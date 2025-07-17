"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  path: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
};

export default function PublicNavbar() {
  const pathName = usePathname();

  const navItems: NavItem[] = [
    {
      href: "/",
      path: "/",
      label: "Beranda",
      activeIcon: "/active_home_nav_item.png",
      inactiveIcon: "/not_active_home_nav_item.png",
    },
    {
      href: "/peta",
      path: "/peta",
      label: "Peta",
      activeIcon: "/active_map_nav_item.png",
      inactiveIcon: "/not_active_map_nav_item.png",
    },
    {
      href: "/tentang",
      path: "/tentang",
      label: "Tentang",
      activeIcon: "/active_about_nav_item.png",
      inactiveIcon: "/not_active_about_nav_item.png",
    },
  ];

  return (
    <nav className="bg-[#121619] shadow px-5 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
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

        {/* Nav Items */}
        <div className="flex gap-4">
          {/* using map and destructuring */}
          {navItems.map(({ href, path, label, activeIcon, inactiveIcon }) => {
            const isActive = pathName === path;
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition font-semibold ${
                  isActive ? "bg-[#262D33]" : "bg-[#121619] hover:bg-[#1C2226]"
                }`}
              >
                <Image
                  className="dark:invert"
                  src={isActive ? activeIcon : inactiveIcon}
                  alt={`Logo ${label}`}
                  width={40}
                  height={40}
                />
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Admin Login */}
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
