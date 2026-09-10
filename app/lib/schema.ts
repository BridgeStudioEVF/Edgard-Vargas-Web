import { FAQS, SITE } from "./site";

const personId = `${SITE.url}/#person`;
const orgId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;
const pageId = `${SITE.url}/#profile`;
const faqId = `${SITE.url}/#faq`;
const imageUrl = `${SITE.url}${SITE.image}`;
const ogUrl = `${SITE.url}${SITE.og}`;

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: SITE.url,
        name: `${SITE.name} | ${SITE.jobTitle}`,
        description: SITE.description,
        inLanguage: "es-MX",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogUrl,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "es-MX",
        publisher: { "@id": orgId },
        about: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE.name,
        givenName: SITE.givenName,
        familyName: SITE.familyName,
        jobTitle: SITE.jobTitle,
        description: SITE.description,
        url: SITE.url,
        email: SITE.email,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          caption: `${SITE.name}, ${SITE.jobTitle}`,
        },
        nationality: {
          "@type": "Country",
          name: SITE.country,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.countryCode,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidad Guadalajara Lamar",
        },
        worksFor: { "@id": orgId },
        mainEntityOfPage: { "@id": pageId },
        knowsAbout: [
          "Inteligencia artificial en la empresa",
          "Software",
          "Arquitectura de datos",
          "Marketing digital",
          "Tecnología en México",
        ],
        sameAs: [...SITE.sameAsPerson],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.org,
        legalName: SITE.orgLegal,
        url: SITE.orgUrl,
        email: SITE.orgEmail,
        telephone: SITE.orgPhone,
        foundingDate: SITE.founded,
        founder: { "@id": personId },
        employee: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zapopan",
          addressRegion: SITE.region,
          addressCountry: SITE.countryCode,
        },
        areaServed: ["MX", "US", "CA"],
        knowsAbout: [
          "Software",
          "Aplicaciones móviles",
          "Datos",
          "Marketing digital",
          "Inteligencia artificial",
        ],
        award: [
          "Premio Nacional en Innovación Tecnológica para la Promoción Turística, CONCANACO SERVYTUR e INADEM, 2013",
          "Best Mobile App Developer, 2025",
        ],
        sameAs: [...SITE.sameAsOrg],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        isPartOf: { "@id": pageId },
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
