import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import RedirectIfAdmin from "@/components/RedirectIfAdmin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIG Kalimporo",
  description: "Sistem Informasi Geografis Kalimporo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RedirectIfAdmin />
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
