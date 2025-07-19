"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons
import type { NavItem } from "@/types/navItem";

export default function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      href: "",
      path: "/admin/login",
      label: "Logout",
      activeIcon: "/active_login_nav_item.png",
      inactiveIcon: "/not_active_login_nav_item.png",
    },
  ];

  return (
    <nav className="bg-[#121619] shadow px-5 py-3 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Site Name */}
        <Link
          href="https://www.kalimporo.com/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Image
            src="/logo_kalimporo_no_bg.png"
            alt="Logo Kalimporo"
            width={50}
            height={50}
          />
          <h1>Desa Kalimporo</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map(({ label, inactiveIcon }) => {
            return (
              <button
                key={label}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition font-semibold bg-[#121619] hover:bg-[#1C2226]`}
              >
                <Image
                  src={inactiveIcon}
                  alt={`Logo ${label}`}
                  width={30}
                  height={30}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-[#1C2226] transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-2 md:hidden">
          {navItems.map(({ label, inactiveIcon }) => {
            return (
              <button
                key={label}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition font-semibold bg-[#121619] hover:bg-[#1C2226]`}
              >
                <Image
                  src={inactiveIcon}
                  alt={`Logo ${label}`}
                  width={30}
                  height={30}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
