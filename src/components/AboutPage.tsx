"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-img.jpg')", // Replace with your image path
        }}
      />

      {/* Page Content */}
      <section className="relative z-10 text-black px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12 bg-white/70 p-8 rounded-xl shadow-md">
          {/* Main Title */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
              Panduan Penggunaan Sistem Informasi Geografis Desa Kalimporo
            </h1>
            <h2 className="text-lg md:text-xl text-black">
              Cara Memaksimalkan Pengalaman Anda Menjelajahi Peta Potensi Desa Kami
            </h2>
          </header>

          {/* Opening Paragraph */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">Selamat datang</h3>
            <p className="text-black leading-relaxed">
              Website Sistem Informasi Geografis (SIG) Desa Kalimporo dirancang untuk kemudahan Anda dalam mengakses informasi potensi desa kami. Ikuti panduan singkat di bawah ini untuk memulai penjelajahan Anda!
            </p>
          </section>

          {/* Why is this important? */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">Mengapa Ini Penting?</h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong className="text-black">Menjelajahi Potensi di Peta:</strong> Anda akan melihat titik-titik ikon tersebar di seluruh peta wilayah Desa Kalimporo.
              </li>
              <li>
                <strong className="text-black">Melihat Informasi Detail (Pop-up):</strong> Cukup klik pada salah satu titik ikon di peta.
              </li>
            </ul>
          </section>

          {/* What can you find? */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">Apa yang Bisa Anda Temukan?</h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong className="text-black">Peta Interaktif:</strong> Jelajahi peta Desa Kalimporo yang menampilkan titik-titik lokasi petani, peternak, dan pelaku UMKM.
              </li>
              <li>
                <strong className="text-black">Informasi Detail:</strong> Klik pada setiap titik di peta untuk melihat detail seperti nama, jenis komoditas, alamat, dan kontak yang bisa dihubungi.
              </li>
              <li>
                <strong className="text-black">Pencarian Mudah:</strong> Gunakan fitur filter untuk menemukan potensi berdasarkan dusun atau jenis usaha (pertanian, peternakan, UMKM).
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
