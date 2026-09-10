export const SITE = {
  name: "Edgard Vargas",
  email: "edgard@bridgestudio.com.mx",
  city: "Guadalajara",
  country: "México",
  org: "Bridge",
  url: "https://edgard-vargas-web.vercel.app",
} as const;

export const NAV = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#semblanza", label: "Semblanza" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#invitar", label: "Invitar" },
] as const;

export const MAIL = {
  hire: `mailto:${SITE.email}?subject=${encodeURIComponent("Trabajar con Bridge")}`,
  talk: `mailto:${SITE.email}?subject=${encodeURIComponent("Invitación a conferencia")}`,
} as const;
