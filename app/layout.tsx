import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-source-serif",
  display: "swap",
});

const title = "Edgard Vargas | Director General de Bridge";
const description =
  "Software y marketing digital para empresas medianas. Guadalajara, México.";

export const metadata: Metadata = {
  metadataBase: new URL("https://edgardvargas.higgsfield.app"),
  title,
  description,
  authors: [{ name: "Edgard Vargas" }],
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
  name: "Edgard Vargas",
  jobTitle: "Director General",
  worksFor: {
    "@type": "Organization",
    name: "Bridge",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressCountry: "MX",
  },
  email: "edgard@bridgestudio.com.mx",
  url: "https://edgardvargas.higgsfield.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body className="bg-bone font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
