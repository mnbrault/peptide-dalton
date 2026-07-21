export const SITE = {
  name: "DALTON",
  tagline: "Architects of Ritual.",
  description:
    "DALTON — Marine Peptides. One daily ritual designed for your body's living architecture.",
  url: "https://mnbrault.github.io/peptide-dalton",
  email: "contact@dalton.example",
  madeIn: "Made in France",
} as const;

export const PRODUCT = {
  id: "dalton-n1",
  name: "DALTON N°1",
  subtitle: "Marine Peptides",
  ritual: "30-Day Ritual",
  price: 68,
  subscribePrice: 58,
  currency: "€",
  rating: 5,
  reviews: 128,
  batch: "BATCH 001",
  description:
    "One sachet. Every morning. Thirty days. Designed for your body's living architecture.",
} as const;

export const IMAGES = {
  hero: "/images/ChatGPT_Image_May_16__2026__07_37_50_PM-7264c0d2-ffca-4c25-87aa-9f9bcf735c0e.png",
  presence: "/images/ChatGPT_Image_May_16__2026__07_37_44_PM-7a0d3f7b-e707-4a11-b452-872fb05bdfa0.png",
  sachet: "/images/ChatGPT_Image_May_16__2026__07_39_04_PM-6621102d-313b-42e1-ad9d-d9e7d027c9f3.png",
  morning: "/images/ChatGPT_Image_May_16__2026__07_38_10_PM-997d4d5d-9bb8-4eb5-8c7e-90f7be9c014a.png",
  unboxing: "/images/ChatGPT_Image_May_16__2026__07_40_56_PM-f3123923-4751-43fb-b8e8-56f962556962.png",
  table: "/images/ChatGPT_Image_May_16__2026__07_37_57_PM-104f607f-539a-49d0-a0d6-a44bcfdc9f6e.png",
  still: "/images/ChatGPT_Image_May_16__2026__07_38_30_PM-1f9aa128-c56d-4211-93f2-9382ec6d79c4.png",
  box: "/images/ChatGPT_Image_May_16__2026__07_43_05_PM-03ad7023-e129-4d74-8ac0-75bf4cb85708.png",
  packshot: "/images/ChatGPT_Image_May_14__2026__02_59_53_PM-23178319-7a83-4ea8-b093-230c2932f989.png",
  lifestyle: "/images/ChatGPT_Image_May_14__2026__03_01_00_PM-e5dc56df-7e2c-44c9-b8e7-6bb6ed8156d9.png",
  packaging: "/images/ChatGPT_Image_May_14__2026__03_02_29_PM-5e0587fb-727f-481e-b55b-abd62d0e73ec.png",
} as const;

export const NAV_LINKS = [
  { href: "/#science", label: "Science" },
  { href: "/#ritual", label: "Ritual" },
  { href: "/journal", label: "Journal" },
  { href: "/product", label: "Shop" },
] as const;

export const BODY_SYSTEMS = [
  "Skin",
  "Bones",
  "Joints",
  "Muscles",
  "Ligaments",
  "Tendons",
  "Connective Tissue",
] as const;

export const TIMELINE = [
  { id: "earth", label: "EARTH", copy: "Minerals. Matter. Time." },
  { id: "ocean", label: "OCEAN", copy: "Marine peptides. Living architecture." },
  { id: "humans", label: "HUMANS", copy: "Presence. Ritual. Continuity." },
  { id: "dalton", label: "DALTON", copy: "One daily gesture." },
] as const;

export const INGREDIENTS = [
  {
    name: "Naticol®",
    detail: "Marine collagen hydrolysate Type I/III · ~2,000 Da",
    dose: "10 g",
    note: "The foundation of the ritual — low molecular weight peptides.",
  },
  {
    name: "Cartidyss®",
    detail: "Skate cartilage hydrolysate Type II + GAG",
    dose: "500 mg",
    note: "A complementary pathway — distinct from Type I.",
  },
  {
    name: "Vitamin C",
    detail: "L-ascorbic acid · 100% NRV",
    dose: "80 mg",
    note: "Essential cofactor for collagen formation.",
  },
  {
    name: "Magnesium",
    detail: "Bisglycinate · highly bioavailable",
    dose: "~45 mg",
    note: "Muscle function. Energy metabolism. Calm.",
  },
  {
    name: "Chromium",
    detail: "Picolinate · 100% NRV",
    dose: "40 µg",
    note: "Macronutrient metabolism. Glycaemia support.",
  },
  {
    name: "Zinc",
    detail: "Bisglycinate · 100% NRV",
    dose: "10 mg",
    note: "Protein synthesis. Skin. Oxidative balance.",
  },
  {
    name: "Hyaluronic Acid",
    detail: "Low molecular weight · <50 kDa",
    dose: "100 mg",
    note: "Synergy with collagen for cutaneous hydration.",
  },
  {
    name: "Green Tea",
    detail: "Standardised 50% EGCG",
    dose: "250 mg EGCG",
    note: "Natural polyphenols. Antioxidant presence.",
  },
] as const;

export const RITUAL_STEPS = [
  { n: "01", title: "POUR", copy: "Open the sachet. Water. Light.", image: "sachet" as const },
  { n: "02", title: "DRINK", copy: "One gesture. Nothing more.", image: "morning" as const },
  { n: "03", title: "PAUSE", copy: "Thirty seconds of presence.", image: "hero" as const },
  { n: "04", title: "LIVE", copy: "The day begins.", image: "presence" as const },
] as const;

export const JOURNAL_POSTS = [
  {
    slug: "architecture-of-presence",
    title: "The Architecture of Presence",
    topic: "Architecture",
    excerpt: "On rooms, light, and the quiet objects we keep.",
    image: "box",
  },
  {
    slug: "ocean-peptide",
    title: "From Ocean to Ritual",
    topic: "Ocean",
    excerpt: "Marine peptides and the long memory of water.",
    image: "table",
  },
  {
    slug: "longevity-as-habit",
    title: "Longevity as Habit",
    topic: "Longevity",
    excerpt: "Not optimisation — continuity.",
    image: "still",
  },
  {
    slug: "matte-surfaces",
    title: "Matte Surfaces",
    topic: "Design",
    excerpt: "Kraft, linen, ceramic — the language of touch.",
    image: "unboxing",
  },
  {
    slug: "mediterranean-morning",
    title: "Mediterranean Morning",
    topic: "Mediterranean",
    excerpt: "Golden hour, glass, and a single sachet.",
    image: "lifestyle",
  },
  {
    slug: "living-quietly",
    title: "Living Quietly",
    topic: "Living",
    excerpt: "Aspiration through stillness.",
    image: "presence",
  },
] as const;

export const FAQ = [
  {
    q: "What is DALTON N°1?",
    a: "A single daily ritual of marine peptides — one sachet, dissolved in water, every morning for thirty days.",
  },
  {
    q: "How do I take it?",
    a: "Open. Dissolve in a glass of clear water. Drink. Repeat daily.",
  },
  {
    q: "Is it vegan?",
    a: "No. Peptides are of marine origin (fish). The product is not vegan.",
  },
  {
    q: "What about health claims?",
    a: "Authorised EU health claims relate to vitamins and minerals in the formula (Vitamin C, Magnesium, Chromium, Zinc, Vitamin E) at regulatory doses. Marine peptides themselves do not carry specific EFSA-authorised health claims.",
  },
  {
    q: "Subscribe & Save?",
    a: "Monthly delivery of your 30-day ritual. Pause or cancel anytime. Designed for continuity.",
  },
] as const;
