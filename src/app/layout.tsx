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
  icons: {
    icon: "/favicon.ico", // ← points to /public/favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="69AN7fOMsIryLU1M43Gdf-fSMUCWteoe1J0KLzS9ofU"
        />
      </head>
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
