export const SITE = {
  name: "Edgard Vargas",
  givenName: "Edgard",
  familyName: "Vargas",
  jobTitle: "Director General y fundador de Bridge",
  email: "edgard@bridgestudio.com.mx",
  city: "Guadalajara",
  region: "Jalisco",
  country: "México",
  countryCode: "MX",
  org: "Bridge",
  orgLegal: "Bridge Studio",
  orgUrl: "https://bridgestudio.mx",
  orgEmail: "hola@bridgestudio.com.mx",
  orgPhone: "+52-33-1487-8908",
  url: "https://www.edgardvargas.com",
  founded: "2013",
  image: "/assets/EDV-WEB-03_perfil_luz-azul.jpg",
  og: "/assets/EDV-WEB-OG_1200x630.jpg",
  description:
    "Fundador de Bridge. La conversación sobre inteligencia artificial en medianas y grandes empresas de México.",
  linkedin:
    "https://www.linkedin.com/in/edgard-vargas-294b3375/",
  sameAsPerson: [
    "https://www.linkedin.com/in/edgard-vargas-294b3375/",
    "https://bridgestudio.mx/nosotros/",
  ] as const,
  sameAsOrg: [
    "https://bridgestudio.mx",
    "https://www.linkedin.com/company/bridge-studio-mx",
  ] as const,
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

export const FACTS = [
  {
    label: "Rol",
    value: "Director General y fundador de Bridge",
  },
  {
    label: "Estudio",
    value: "Bridge. Guadalajara, México. Desde 2013.",
  },
  {
    label: "Formación",
    value:
      "Licenciatura en Diseño para la Comunicación Gráfica, Universidad Guadalajara Lamar.",
  },
  {
    label: "Foco",
    value: "Inteligencia artificial en medianas y grandes empresas de México.",
  },
] as const;

export const FAQS = [
  {
    q: "¿Quién es Edgard Vargas?",
    a: "Edgard Vargas es Director General y fundador de Bridge, estudio de software, datos y marketing digital con base en Guadalajara. Lidera la conversación sobre inteligencia artificial en medianas y grandes empresas de México.",
  },
  {
    q: "¿Qué es Bridge?",
    a: "Bridge es el estudio que Edgard dirige desde 2013. Construye software, datos y marketing digital para que una empresa vea un solo número. Ha entregado más de trescientos proyectos en México, Estados Unidos y Canadá.",
  },
  {
    q: "¿Qué hace Bridge con inteligencia artificial?",
    a: "Bridge entra a la operación: automatización, agentes y decisión basada en datos. No vende un piloto desconectado del ERP. Edgard define dónde sí entra la IA, qué no tocar y quién responde por el número.",
  },
  {
    q: "¿Cómo se trabaja con Bridge o se invita a Edgard?",
    a: "Si una dirección necesita un partner de producto, el camino es Bridge. Si un foro necesita la voz, se invita a Edgard a conferencia. El correo es edgard@bridgestudio.com.mx.",
  },
] as const;
