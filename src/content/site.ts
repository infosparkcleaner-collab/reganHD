// Single source of truth for company details. Items marked TODO need client confirmation.
export const site = {
  name: "Regan HD",
  tagline: "Heavy-duty brake shoes, sandblasted, relined and riveted in Canada.",
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
  { label: "Brake Shoe Rebuilding", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Trucking", href: "/trucking" },
  { label: "Contact", href: "/contact" },
] as const;

// SKUs supplied by client. Descriptions/specs TODO: client to provide.
export const skus = ["4707", "4709", "4711", "4719", "4720", "4702", "4515"] as const;

// Generated photography (ChatGPT image set, graded to match). TODO: swap for real Regan HD shoot when available.
export const img = {
  heroShop: "/images/site/hero-shop.jpg",
  sandblast: "/images/site/sandblast.jpg",
  rivet: "/images/site/rivet.jpg",
  cores: "/images/site/cores.jpg",
  finished: "/images/site/finished.jpg",
  warehouse: "/images/site/warehouse.jpg",
  truck: "/images/site/truck-highway.jpg",
  fleet: "/images/site/fleet-yard.jpg",
  worker: "/images/photos/worker-brake-shoe.jpeg",
  box: "/images/photos/stop-box-kit.jpeg",
} as const;

// Draft process copy. TODO: client to confirm real steps and wording.
export const shoeStages = [
  { title: "Cores come in", text: "Worn brake shoes arrive as cores, with cracked, glazed or worn-out lining.", image: img.cores, alt: "A bin of worn, rusty brake shoe cores waiting to be rebuilt" },
  { title: "Sandblasted to bare steel", text: "Each core goes through the sandblasting cabinet. Rust and old lining come off; clean steel is left.", image: img.sandblast, alt: "Gloved hands holding a brake shoe inside a sandblasting cabinet" },
  { title: "Relined and riveted", text: "New friction material is fitted to the cleaned shoe and riveted on the press.", image: img.rivet, alt: "A riveting press fastening new lining to a steel brake shoe" },
  { title: "Inspected and packed", text: "Finished shoes are checked and packed in Marathon Stop Box Kits for fleets and shops.", image: img.finished, alt: "Rows of rebuilt brake shoes with fresh lining" },
] as const;

export const processFacts = [
  { k: "Sandblasted", v: "to bare steel" },
  { k: "Relined", v: "new friction material" },
  { k: "Riveted", v: "on the press" },
  { k: "Packed", v: "Marathon Stop Box Kit" },
  { k: "Assembled", v: "in Canada" },
] as const;

export const audiences = [
  { t: "Fleet maintenance", d: "Keep tractors and trailers on the road with rebuilt shoes ordered by part number." },
  { t: "Heavy-duty repair shops", d: "Boxed kits ready for the bay, so a brake job is not waiting on parts." },
  { t: "Parts distributors", d: "Repeat orders of Marathon Stop Box Kits, packed and shipped from Canada." },
] as const;
