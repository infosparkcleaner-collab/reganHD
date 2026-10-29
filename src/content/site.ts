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
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Brake shoe rebuilding", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Trucking", href: "/trucking" },
  { label: "Contact", href: "/contact" },
] as const;

// SKUs supplied by client. Descriptions/specs TODO: client to provide.
export const skus = ["4707", "4709", "4711", "4719", "4720", "4702", "4515"] as const;

// Draft process copy. TODO: client to confirm real steps and wording.
export const shoeStages = [
  { title: "Worn shoes arrive", text: "Used brake shoes come in as cores, with cracked, glazed or worn-out lining." },
  { title: "Sandblasted clean", text: "Each core goes through our sandblasting cabinet. Rust and old lining come off, bare steel is left." },
  { title: "Relined and riveted", text: "New friction lining is fitted and riveted to the cleaned shoe on the press." },
  { title: "Boxed and shipped", text: "Finished shoes are packed in Marathon Stop Box Kits and sent to fleets and shops." },
] as const;
