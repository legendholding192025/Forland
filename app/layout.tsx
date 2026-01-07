import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";

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

export const metadata: Metadata = generateSEOMetadata({
  title: "Drive The Future, Drive Forland",
  description: "FORLAND UAE - Premium cargo trucks and commercial vehicles. Explore our range of products including FORLAND H7 and FORLAND L5. Book a test drive or request a quote today.",
  keywords: ["FORLAND", "FORLAND UAE", "commercial vehicles", "cargo trucks"],
});

const organizationStructuredData = generateStructuredData('Organization');
const websiteStructuredData = generateStructuredData('WebSite');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${effra.variable} ${richmond.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MKLYBF2131"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MKLYBF2131');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
