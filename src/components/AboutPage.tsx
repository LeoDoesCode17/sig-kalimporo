"use client";
import React from "react";

export default function AboutPage() {
  return (
    // test
    <section className="relative bg-white text-black px-6 pt-25 overflow-hidden">
      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay to dim if needed */}
      {/* <div className="absolute inset-0 bg-white/40"></div> */}
      {/* Page Content */}
      <section className="relative z-10 text-black">
        <div className="max-w-5xl mx-auto space-y-12 bg-white/70 p-8 rounded-xl shadow-md">
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
              Tentang Sistem Informasi Geografis (SIG)
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-[#A29A69]">
              Desa Kalimporo
            </h1>
            <h2 className="text-lg md:text-xl text-black">
              Maksimalkan Pengalaman Anda Menjelajahi Peta Potensi Desa Kami
            </h2>
          </header>
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">
              Selamat datang
            </h3>
            <p className="text-black leading-relaxed">
              Sistem informasi ini adalah sebuah inisiatif digital untuk
              memetakan dan memperkenalkan potensi luar biasa di sektor
              pertanian, peternakan, dan Usaha Mikro, Kecil, dan Menengah (UMKM)
              yang ada di Desa Kalimporo, Kecamatan Bangkala, Kabupaten
              Jeneponto, Sulawesi Selatan.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">
              Latar Belakang dan Inspirasi
            </h3>
            <p className="text-black leading-relaxed">
              Desa Kalimporo secara turun-temurun dikenal sebagai komunitas
              agraris yang sangat bergantung pada pertanian dan peternakan,
              dengan tradisi pacuan kuda yang menjadi kebanggaan. Semangat
              gotong royong dan nilai-nilai luhur seperti sipakatau (saling
              menghormati) serta siri’ na pacce (harga diri dan empati) telah
              membentuk identitas kuat masyarakat kami.
            </p>
            <p className="text-black leading-relaxed">
              Mengingat potensi besar ini, kami melihat adanya kebutuhan untuk
              menjembatani informasi potensi desa dengan aksesibilitas yang
              lebih luas. SIG ini hadir sebagai solusi digital untuk
              memperkenalkan kekayaan desa kami kepada masyarakat luas,
              sekaligus memfasilitasi koneksi langsung antara produsen lokal dan
              calon pembeli atau pihak berkepentingan lainnya.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">
              Tujuan dan Visi SIG Desa Kalimporo
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong className="text-black">Mendukung Visi Desa:</strong>{" "}
                Secara aktif mewujudkan visi Mewujudkan Desa Kalimporo Sebagai
                Kawasan Agribisnis Menuju Desa Mandiri Pangan dengan
                mempromosikan produk-produk lokal.
              </li>
              <li>
                <strong className="text-black">
                  Meningkatkan Keterbukaan Informasi:
                </strong>
                Menjadi salah satu implementasi program Internet Desa untuk
                meningkatkan pelayanan publik dan keterbukaan informasi.
              </li>
              <li>
                <strong className="text-black">
                  Mendorong Program Desa Cerdas:{" "}
                </strong>{" "}
                Secara tidak langsung, kehadiran sistem informasi ini mendorong
                masyarakat untuk lebih melek teknologi dan memanfaatkan internet
                secara positif.
              </li>
              <li>
                <strong className="text-black">Promosi Ekonomi Lokal: </strong>{" "}
                Mempermudah pencarian dan identifikasi potensi-potensi
                pertanian, peternakan, dan UMKM, sehingga dapat meningkatkan
                penjualan produk lokal dan kesejahteraan masyarakat.
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">
              Dampak & Manfaat yang Diharapkan
            </h3>
            <p className="text-black leading-relaxed">
              Dengan adanya SIG ini, kami berharap:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong className="text-black">
                  Petani, Peternak, dan UMKM:
                </strong>{" "}
                Akan mendapatkan sorotan dan jangkauan pasar yang lebih luas,
                baik dari masyarakat desa sendiri maupun dari luar desa,
                sehingga berpotensi meningkatkan pendapatan.
              </li>
              <li>
                <strong className="text-black">Masyarakat Desa:</strong>
                Lebih mudah mengetahui dan mengakses produk-produk lokal dari
                tetangga atau dusun lain, memperkuat ekonomi sirkular desa.
              </li>
              <li>
                <strong className="text-black">Pendatang/Investor: </strong>{" "}
                Memperoleh gambaran jelas tentang potensi ekonomi desa, membuka
                peluang kerja sama atau investasi.
              </li>
              <li>
                <strong className="text-black">Pemerintah Desa: </strong>{" "}
                Memiliki data spasial yang terorganisir untuk perencanaan dan
                pengambilan keputusan terkait pengembangan sektor agraris.
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#A29A69]">
              Pengembang & Kolaborasi
            </h3>
            <p className="text-black leading-relaxed">
              SIG Desa Kalimporo ini adalah hasil kerja keras dan kolaborasi
              dari:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                Mahasiswa Kuliah Kerja Nyata Tematik Teknologi Tepat Guna
                Gelombang 114 Desa Kalimporo, Kecamatan Bangkala, Kabupaten
                Jeneponto
              </li>
              <li>Pemerintah Desa Kalimporo</li>
              <li>
                Seluruh elemen masyarakat Desa Kalimporo yang telah mendukung
                pengumpulan data dan implementasi
              </li>
            </ul>
          </section>
          <section className="space-y-4 text-center italic">
            Kami berkomitmen untuk terus mengembangkan dan memperbarui sistem
            ini demi kemajuan Desa Kalimporo. Mari bersama-sama memanfaatkan
            teknologi untuk melestarikan budaya dan meningkatkan kesejahteraan
            desa kita.
          </section>
        </div>
      </section>
    </section>
  );
}
