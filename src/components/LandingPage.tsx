"use client";
import React from "react";

export default function LandingPage() {
  return (
    <section className="relative bg-white text-black px-6 py-12 pt-25 overflow-hidden">
      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay to dim if needed */}
      {/* <div className="absolute inset-0 bg-white/40"></div> */}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-12 bg-white/70 p-8 rounded-xl shadow-md">
        {/* Main Title */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
            Sistem Informasi Geografis Potensi Kalimporo: Mengenal Lebih Dekat
            Desa Kami
          </h1>
          <h2 className="text-lg md:text-xl text-black">
            Peta Interaktif Pertanian dan Peternakan Desa Kalimporo
          </h2>
        </header>

        {/* Opening Paragraph */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#A29A69]">
            Selamat datang
          </h3>
          <p className="text-black leading-relaxed">
            Selamat datang di Peta Potensi Desa Kalimporo! Website ini adalah
            pintu gerbang digital Anda untuk menjelajahi kekayaan dan potensi
            Desa Kalimporo, Jeneponto, Sulawesi Selatan. Kami dengan bangga
            mempersembahkan informasi lengkap mengenai sektor pertanian,
            peternakan, dan Usaha Mikro, Kecil, dan Menengah (UMKM) yang menjadi
            tulang punggung perekonomian desa kami.
          </p>
        </section>

        {/* Why is this important? */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#A29A69]">
            Mengapa Ini Penting?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>
              <strong className="text-black">Meningkatkan Visibilitas:</strong>{" "}
              Memperkenalkan potensi-potensi lokal kami kepada masyarakat luas,
              baik warga desa maupun pengunjung dari luar.
            </li>
            <li>
              <strong className="text-black">Mendorong Ekonomi Lokal:</strong>{" "}
              Mempermudah Anda menemukan produk-produk unggulan Kalimporo dan
              terhubung langsung dengan para pelaku usaha.
            </li>
            <li>
              <strong className="text-black">Akses Informasi Mudah:</strong>{" "}
              Menyediakan informasi yang akurat dan berbasis lokasi untuk
              mendukung pengembangan desa menuju Kemandirian Pangan.
            </li>
          </ul>
        </section>

        {/* What can you find? */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#A29A69]">
            Apa yang Bisa Anda Temukan?
          </h3>
          <p className="text-black leading-relaxed">
            Sistem ini menyediakan peta interaktif wilayah Desa Kalimporo yang menampilkan titik-titik lokasi petani, peternak, dan pelaku UMKM. Pengguna dapat dengan mudah mengklik titik-titik tersebut untuk melihat informasi detail, serta menggunakan fitur filter berdasarkan dusun atau jenis usaha untuk pencarian yang lebih spesifik. Akses ke website ini juga dimudahkan melalui barcode yang tersebar di setiap dusun.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>
              <strong className="text-black">Peta Interaktif:</strong> Jelajahi
              peta Desa Kalimporo yang menampilkan titik-titik lokasi petani,
              peternak, dan pelaku UMKM.
            </li>
            <li>
              <strong className="text-black">Informasi Detail:</strong> Klik
              pada setiap titik di peta untuk melihat detail seperti nama, jenis
              komoditas, alamat, dan kontak yang bisa dihubungi.
            </li>
            <li>
              <strong className="text-black">Pencarian Mudah:</strong> Gunakan
              fitur filter untuk menemukan potensi berdasarkan dusun atau jenis
              usaha (pertanian, peternakan, UMKM).
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
