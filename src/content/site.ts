// Single source of truth for company details. Items marked TODO need client confirmation.
export const site = {
  name: "Regan HD",
  tagline: "Heavy-duty brake shoes, rebuilt and shipped across Canada.",
  country: "Canada",
  // PLACEHOLDERS: 555-01xx numbers and .example domains are reserved for fiction. Replace with the client's real details.
  contact: {
    placeholder: true,
    phone: "1-800-555-0100",
    phoneHref: "tel:+18005550100",
    email: "sales@reganhd.example",
    address: "Address to be confirmed",
    hours: "Hours to be confirmed",
  },
  nav: [
    { label: "Marathon brakes", href: "#marathon" },
    { label: "Refurbishing", href: "#refurbish" },
    { label: "Trucking", href: "#trucking" },
    { label: "Contact", href: "#quote" },
  ],
} as const;

// SKUs supplied by client. Descriptions/specs TODO: client to provide.
export const skus = ["4707", "4709", "4711", "4719", "4720", "4702", "4515"] as const;

// Placeholder photos from globaltruckparts.ca (watermarked). TODO: replace with Regan HD / Marathon photography.
export const products = [
  { src: "/images/products/spring-brake-18-24.jpeg", alt: "Spring brake chamber, type 18/24", label: "Spring brake chambers" },
  { src: "/images/products/service-chamber-24.jpeg", alt: "Disc brake service chamber, type 24", label: "Service chambers" },
  { src: "/images/products/adb-chamber-csb18d.jpeg", alt: "Air disc brake service chamber", label: "Air disc brake chambers" },
] as const;

// Draft process copy. TODO: client to confirm real steps.
export const refurbSteps = [
  { title: "Send your core", text: "Ship the used brake part to us, or drop it off with your next order." },
  { title: "Inspect", text: "We check the part to see if it can be rebuilt." },
  { title: "Rebuild", text: "Worn components are replaced and the part is cleaned and reassembled." },
  { title: "Test", text: "Each rebuilt part is tested before it leaves." },
  { title: "Return", text: "The part comes back ready to install." },
] as const;

// ---- v3: brake shoes ----
export const navShoes = [
  { label: "How we rebuild", href: "#process" },
  { label: "Sandblasting", href: "#machine" },
  { label: "Stop Box Kit", href: "#stopbox" },
  { label: "Part numbers", href: "#parts" },
  { label: "Trucking", href: "#trucking" },
] as const;

// Draft process copy for the scroll sequence. TODO: client to confirm real steps and wording.
export const shoeStages = [
  { title: "Worn shoes arrive", text: "Used brake shoes come in as cores, with cracked, glazed or worn-out lining." },
  { title: "Sandblasted clean", text: "Each core goes through our sandblasting cabinet. Rust and old lining come off, bare steel is left." },
  { title: "Relined and riveted", text: "New friction lining is fitted and riveted to the cleaned shoe on the press." },
  { title: "Boxed and shipped", text: "Finished shoes are packed in Marathon Stop Box Kits and sent to fleets and shops." },
] as const;

// Flow-generated clips. Set to a path under /public once the file exists; null falls back to the photo.
export const videos = {
  banner: "/videos/banner.mp4" as string | null,
  blast: "/videos/blast.mp4" as string | null,
  box: "/videos/box.mp4" as string | null,
  // Extra Flow clips for the process section. Fall back to the clips above until they exist.
  cores: "/videos/cores.mp4" as string | null,
  rivet: "/videos/rivet.mp4" as string | null,
  pack: "/videos/pack.mp4" as string | null,
};

// Demo switch in the header that flips between the two hero banners. Set to false before launch.
export const demo = {
  showBannerSwitch: true,
  banners: [
    { n: 1, label: "Banner 1", href: "/banner-1" },
    { n: 2, label: "Banner 2", href: "/" },
  ],
} as const;
