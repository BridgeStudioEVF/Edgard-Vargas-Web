import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const title = "Edgard Vargas | Director General de Bridge";
const description =
  "Fundador de Bridge. La conversación sobre inteligencia artificial en medianas y grandes empresas de México.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  authors: [{ name: SITE.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/assets/EDV-WEB-OG_1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Edgard Vargas, Director General de Bridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/EDV-WEB-OG_1200x630.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Director General",
  description,
  worksFor: {
    "@type": "Organization",
    name: SITE.org,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressCountry: "MX",
  },
  email: SITE.email,
  url: SITE.url,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Guadalajara Lamar",
  },
  knowsAbout: [
    "Inteligencia artificial en la empresa",
    "Software",
    "Arquitectura de datos",
    "Marketing digital",
    "Tecnología en México",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-ink font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
