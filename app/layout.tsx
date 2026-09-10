import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { jsonLd } from "./lib/schema";
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

const title = `${SITE.name} | ${SITE.jobTitle}`;
const description = SITE.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.orgLegal,
  category: "Technology",
  keywords: [
    "Edgard Vargas",
    "Bridge",
    "Bridge Studio",
    "inteligencia artificial",
    "Guadalajara",
    "Director General",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_MX",
    type: "profile",
    firstName: SITE.givenName,
    lastName: SITE.familyName,
    images: [
      {
        url: SITE.og,
        width: 1200,
        height: 630,
        alt: `${SITE.name}, ${SITE.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SITE.og],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geist.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-ink font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
