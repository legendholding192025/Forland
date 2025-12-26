import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const effra = localFont({
  src: "../public/fonts/Effra_Std_Rg.ttf",
  variable: "--font-effra",
  display: "swap",
});

const richmond = localFont({
  src: "../public/fonts/fonnts.com-Richmond-Text-Medium.otf",
  variable: "--font-richmond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORLAND UAE - Drive The Future, Drive Forland",
  description: "FORLAND UAE - Premium cargo trucks and commercial vehicles. Explore our range of products including FORLAND H7 and FORLAND L5. Book a test drive or request a quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${effra.variable} ${richmond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
