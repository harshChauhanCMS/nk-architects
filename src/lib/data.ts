// Central content file for the site: text, links and image paths (images live in /public/images).

export const site = {
  name: "N.K. Architects",
  email: "nkarchitectsglobal@gmail.com",
  phones: ["+91 9643258584", "+91 9650959147"],
  address: ["236/16, Jor Bagh Road, Lodhi Colony,", "New Delhi- 110003."],
  socials: {
    facebook: "https://www.facebook.com/nkarchitectsglobal?mibextid=wwXIfr&rdid=hNm5PMz5EfHniOkG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19uejNUFwY%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
    instagram: "https://www.instagram.com/n.k.architects?bqrl=MWg0YzR5MzA1N20xdg%3D%3D",
    youtube: "https://www.youtube.com/@nkarchitects7560",
  },
};

// Hero subtitle shared by the Portfolio, About and Journey designs.
export const heroSubtitle =
  "Our job is to listen. We listen to the client, the site, the sun, the wind, and then we begin to design.";

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero: "/images/hero.jpg",
  servicesHero: "/images/services-hero.jpg",
  nkLineArt: "/images/nk-lineart.png",
  journey: "/images/journey.jpg",
  founders: "/images/founders.jpg",
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: "Architecture" | "Interior" | "Urban Planning";
  image: string;
  /** CSS object-position: which part of a landscape photo stays visible in the tall card */
  focus?: string;
  /** full project page at /portfolio/[slug]; projects without it link to the portfolio grid */
  detail?: ProjectDetail;
};

export type ProjectDetail = {
  /** title as written in the design, if it differs from the card name */
  title?: string;
  /** heading under the hero, measured at 1440 (Figma px):
   *  textX = left edge of the heading text, underline = width of the line under it (line always starts at x161) */
  heading: { textX: number; underline: number };
  /** "tall" = Karol Bagh gradient (bottom 120px), "short" = bottom 32px (ATS Villa, Malibu Town) */
  heroFade: "tall" | "short";
  /** hero title colour (default #EEEEEE) and how many px it sits above the usual baseline */
  heroTitleColor?: string;
  heroTitleRaise?: number;
  /** heading colour under the hero (default #CDCDCD) */
  headingColor?: string;
  /** y of the first gallery row at 1440 (default 1272) */
  galleryTop?: number;
  /** show the "Add video here" slot after the gallery (default true) */
  videoSlot?: boolean;
  hero: string;
  heroAlt: string;
  /** hero photo opacity over black (the design dims some heroes this way; others come pre-darkened) */
  heroOpacity?: number;
  /** vertical gap between gallery rows at 1440 (px) — 50 unless the design says otherwise */
  galleryRowGap?: number;
  /** short line under the title in the hero */
  summary: string;
  paragraphs: string[];
  /** gallery photos; `fade` adds the design's bottom gradient (only some photos have it in the PDF) */
  /** `dx` = horizontal nudge in px at 1440, where the design places a tile slightly off the grid */
  gallery: { src: string; alt: string; fade?: boolean; dx?: number }[];
  /** video file / URL for the last gallery slot; until set, the design's "Add video here" placeholder shows */
  video?: string;
};

export const projectHref = (p: Project) => (p.detail ? `/portfolio/${p.slug}` : `/portfolio#${p.slug}`);

const proj = (slug: string) => `/images/projects/${slug}.jpg`;

export const projects: Project[] = [
  {
    slug: "ats-villa",
    name: "ATS Villa",
    location: "Noida",
    category: "Interior",
    image: proj("ats-villa"),
    focus: "48% 50%",
    // "Portfolio GURUGRAM Residence.pdf"
    detail: {
      heading: { textX: 164, underline: 355 },
      heroFade: "short",
      hero: "/images/projects/ats-villa/hero.jpg",
      video: "/videos/ats-villa.mp4",
      heroAlt: "Bedroom with a round canopy bed, crystal chandelier and sheer drapes",
      heroOpacity: 0.6,
      galleryRowGap: 35,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/ats-villa/bedroom.jpg", alt: "Bedroom with a canopy bed on a round marble platform", fade: true },
        { src: "/images/projects/ats-villa/living-room.jpg", alt: "Living room with marble TV wall, display shelves and ring chandelier", fade: true },
        { src: "/images/projects/ats-villa/courtyard.jpg", alt: "Courtyard with sculptures, topiary and a black-and-white marble wall", fade: true },
      ],
    },
  },
  {
    slug: "shanti-niketan",
    name: "Shanti Niketan",
    location: "Delhi",
    category: "Architecture",
    image: proj("shanti-niketan"),
    focus: "55% 50%",
    // "Portfolio SHANTI Residence.pdf" (hero is pre-cropped to the area the design shows)
    detail: {
      heading: { textX: 156, underline: 400 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/shanti-niketan/hero.jpg",
      heroAlt: "Night view of a classical facade with balconies, arched windows and wall lights",
      galleryRowGap: 35,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/shanti-niketan/tile-1.jpg", alt: "Side view of the classical facade with an arched double-height window", fade: true },
        { src: "/images/projects/shanti-niketan/tile-2.jpg", alt: "Front elevation with terraces, arched windows and a gated entrance", fade: true },
        { src: "/images/projects/shanti-niketan/tile-3.jpg", alt: "Dining room with crystal chandeliers, green chairs and a red display cabinet", fade: true },
        { src: "/images/projects/shanti-niketan/tile-4.jpg", alt: "Living room with red damask walls, a red armchair and gilded console", fade: true },
      ],
    },
  },
  {
    slug: "karol-bagh",
    name: "Karol Bagh",
    location: "Delhi",
    category: "Architecture",
    image: proj("karol-bagh"),
    focus: "52% 50%",
    // "Portfolio Delhi Residence.pdf"
    detail: {
      heading: { textX: 162, underline: 445 },
      heroFade: "tall",
      hero: "/images/projects/karol-bagh/hero.jpg",
      video: "https://www.youtube.com/embed/Vw-7oZPUVWY",
      heroAlt: "Double-height entrance foyer with a bonsai tree and floating staircase",
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/karol-bagh/staircase.jpg", alt: "Entrance foyer with the bonsai tree, lift and staircase", fade: true },
        { src: "/images/projects/karol-bagh/living-room.jpg", alt: "Living room with sculptural sofas, a bar and brass chandeliers" },
        { src: "/images/projects/karol-bagh/facade.jpg", alt: "Front facade with wood soffits and terraces", fade: true },
      ],
    },
  },
  {
    slug: "sahranpur",
    name: "Sahranpur",
    location: "Uttar Pradesh",
    category: "Interior",
    image: proj("sahranpur"),
    focus: "38% 50%",
    // "Portfolio SAHRANPUR Residence.pdf"
    detail: {
      heading: { textX: 162, underline: 454 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/sahranpur/hero.jpg",
      heroAlt: "White living and dining room with a marble floor and a large abstract painting",
      galleryRowGap: 35,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/sahranpur/tile-1.jpg", alt: "Living room with a grey sectional sofa, dining table and full-height windows", fade: true },
        { src: "/images/projects/sahranpur/tile-2.jpg", alt: "Kitchen with a stone island, cantilevered counter and hanging wood shelf", fade: true },
        { src: "/images/projects/sahranpur/tile-3.jpg", alt: "Front facade with a branching steel tree screen and planters", fade: true },
        { src: "/images/projects/sahranpur/tile-4.jpg", alt: "Double-height lounge seen from above, with linear pendant lights", fade: true },
      ],
    },
  },
  {
    slug: "rajinder-nagar",
    name: "Rajinder Nagar",
    location: "Delhi",
    category: "Interior",
    image: proj("rajinder-nagar"),
    focus: "50% 50%",
    // "Portfolio NOIDA Residence.pdf"
    detail: {
      heroTitleColor: "#ffffff",
      heroTitleRaise: 8,
      heading: { textX: 159, underline: 588 },
      headingColor: "#ffffff",
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/rajinder-nagar/hero.jpg",
      heroAlt: "Lounge with cream curved sofas under a ceiling of glass-ball pendants",
      galleryTop: 1293,
      galleryRowGap: 51,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/rajinder-nagar/lounge.jpg", alt: "Lounge with cream sofas, a round black ottoman and glass-ball ceiling lights", dx: 3 },
        { src: "/images/projects/rajinder-nagar/bar.jpg", alt: "Bar wall with a TV, backlit bottle shelves and pendant ceiling", fade: true, dx: -1 },
        { src: "/images/projects/rajinder-nagar/courtyard.jpg", alt: "Marble courtyard with an angel-wing sculpture and inlaid floor pattern", dx: 3 },
        { src: "/images/projects/rajinder-nagar/clients.jpg", alt: "The homeowners standing in their finished home", dx: 3 },
      ],
    },
  },
  {
    slug: "punjabi-bagh",
    name: "Punjabi Bagh",
    location: "Delhi",
    category: "Interior",
    image: proj("punjabi-bagh"),
    focus: "52% 50%",
    // "Portfolio PUNJABI Residence.pdf" (hero is pre-cropped to the area the design shows)
    detail: {
      heading: { textX: 156, underline: 400 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/punjabi-bagh/hero.jpg",
      heroAlt: "Bedroom lounge with velvet sculptural armchairs, a curved bed and crystal chandeliers",
      galleryRowGap: 35,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/punjabi-bagh/tile-1.jpg", alt: "Bedroom with a curved bed, velvet armchairs and crystal chandeliers", fade: true },
        { src: "/images/projects/punjabi-bagh/tile-2.jpg", alt: "Bedroom with a wood-panelled headboard wall, ceiling fan and tufted bench", fade: true },
        { src: "/images/projects/punjabi-bagh/tile-3.jpg", alt: "Marble bathroom vanity with a floating wood cabinet and pendant light", fade: true },
        { src: "/images/projects/punjabi-bagh/tile-4.jpg", alt: "Marble bathroom with a glass shower enclosure and a sculptural orange chair", fade: true },
      ],
    },
  },
  {
    slug: "malibu-towne",
    name: "Malibu Towne",
    location: "Gurugram",
    category: "Interior",
    image: proj("malibu-towne"),
    focus: "42% 50%",
    // "Portfolio MALIBU TOWN Residence.pdf"
    detail: {
      title: "Malibu Town",
      heading: { textX: 153, underline: 316 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/malibu-towne/hero.jpg",
      heroAlt: "Living room with a geometric light-tube chandelier, burgundy curved sofa and a classical bust artwork",
      galleryRowGap: 35,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/malibu-towne/living-room.jpg", alt: "Living room with a burgundy sofa, sculptural chair and light-tube chandelier", fade: true },
        { src: "/images/projects/malibu-towne/powder-room.jpg", alt: "Powder room with green marble, an arched mirror and crystal pendant", fade: true },
        { src: "/images/projects/malibu-towne/bathroom.jpg", alt: "Black marble bathroom with a mosaic portrait wall and chevron floor", fade: true },
        { src: "/images/projects/malibu-towne/lounge.jpg", alt: "Lounge with a tan leather sofa, white boucle chair and tall windows", fade: true },
      ],
    },
  },
  {
    slug: "dlf-3",
    name: "DLF-3",
    location: "Gurugram",
    category: "Interior",
    image: proj("dlf-3"),
    focus: "50% 50%",
    // "Portfolio DLF Residence.pdf" (hero is pre-cropped to the area the design shows)
    detail: {
      heading: { textX: 161, underline: 173 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/dlf-3/hero.jpg",
      heroAlt: "Dark lounge with sculptural cream chairs, a curved sofa and a glass-bubble chandelier",
      galleryRowGap: 38,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/dlf-3/tile-1.jpg", alt: "Dark lounge with sculptural chairs, curved sofa and a bubble chandelier", fade: true },
        { src: "/images/projects/dlf-3/tile-2.jpg", alt: "Floor plan of the upper level with numbered rooms and legend", fade: true },
        { src: "/images/projects/dlf-3/tile-3.jpg", alt: "Floor plan of the ground level with dining, living and parking", fade: true },
        { src: "/images/projects/dlf-3/tile-4.jpg", alt: "Gold faceted wall sculpture between two carved profile faces above a burgundy sofa", fade: true },
      ],
    },
  },
  {
    slug: "amaryllis",
    name: "Amaryllis",
    location: "Delhi",
    category: "Interior",
    image: proj("amaryllis"),
    focus: "30% 50%",
    // "Portfolio AMARYLLIS Residence.pdf" (hero is pre-cropped to the area the design shows)
    detail: {
      heading: { textX: 161, underline: 371 },
      heroFade: "short",
      videoSlot: false,
      hero: "/images/projects/amaryllis/hero.jpg",
      heroAlt: "Dining area with sculptural chairs, a butterfly chandelier and a striped sofa beside arched panels",
      galleryRowGap: 38,
      summary:
        "Innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
      paragraphs: [
        "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site. This house in a quiet residential neighborhood of central delhi was built for a family who had long lived on the property but wanted to rebuild as they entered a new phrase of life. The simple exterior design comprised of massive volumes piled on top of each other  takes advantage of the corner plot, with a facade of exposed alluminium louvers and wood imprinted with cedar formwork.",
        "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and practicality of everyday life. The idea was developed from the visuals of the surroundings, in the addition to the great challenge of designing a house with an extensive program of needs from a land.",
      ],
      gallery: [
        { src: "/images/projects/amaryllis/tile-1.jpg", alt: "Dining area with sculptural chairs, a butterfly chandelier and a red slatted wall", fade: true },
        { src: "/images/projects/amaryllis/tile-2.jpg", alt: "Bedroom with an upholstered bed, branch light and pink armchair", fade: true },
        { src: "/images/projects/amaryllis/tile-3.jpg", alt: "Blush bedroom with a crystal chandelier, star ceiling and backlit slatted wall", fade: true, dx: -1 },
        { src: "/images/projects/amaryllis/tile-4.jpg", alt: "Space-themed kids room with a rocket mural, bubble lights and loft bed", fade: true },
      ],
    },
  },
];

export type Service = {
  slug: string;
  title: string;
  /** short line used on the homepage carousel */
  description: string;
  /** full copy used on the Services page */
  paragraphs: string[];
  image: string;
  /** CSS object-position for the Services page crop (matches the design PDF) */
  focus?: string;
};

// Copy from the Services design PDF (placeholder text in the design — same for every service).
const serviceCopy = [
  "It’s an innovative response to a tricky brief: design a private home with an attractive double height entrance foyer around a natural tree, in a densely urban area of delhi on a 550 sq.yards site.",
  "Thought to meet all the needs and characteristics of the family, the project’s premise was to bring the contemporary style of the owners, combined with the comfort and iconic structure.",
];
const serviceBlurb =
  "The design of the house is articulated through the varying levels of privacy, arranged in an ascending order- public semi.";
const svc = (slug: string) => `/images/services/${slug}.jpg`;

export const services: Service[] = [
  { slug: "iconic-architecture", title: "Iconic Architecture", description: serviceBlurb, paragraphs: serviceCopy, image: svc("iconic-architecture"), focus: "50% 50%" },
  { slug: "luxury-interiors", title: "Luxury Interiors", description: serviceBlurb, paragraphs: serviceCopy, image: svc("luxury-interiors"), focus: "45% 50%" },
  { slug: "bespoke-furniture", title: "Bespoke Furniture", description: serviceBlurb, paragraphs: serviceCopy, image: svc("bespoke-furniture"), focus: "50% 50%" },
  { slug: "turnkey-solutions", title: "Turnkey Solutions", description: serviceBlurb, paragraphs: serviceCopy, image: svc("turnkey-solutions"), focus: "63% 50%" },
  { slug: "landscape-design", title: "Landscape Design", description: serviceBlurb, paragraphs: serviceCopy, image: svc("landscape-design"), focus: "50% 50%" },
  { slug: "art-styling", title: "Art Styling", description: serviceBlurb, paragraphs: serviceCopy, image: svc("art-styling"), focus: "45% 50%" },
];

export type Testimonial = { quote: string; name: string; rating: number };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with was an absolute delight. From our very first meeting, it was clear that they understood our vision and were committed to bringing it to life. Their attention to detail, creativity, and professionalism exceeded our expectations. The final design was not only stunning but also perfectly functional, making our home a beautiful and practical space for our family. We couldn't be happier with the results and highly recommend to anyone looking for top-notch architectural services.",
    name: "Mohit Gupta",
    rating: 5,
  },
  {
    quote:
      "Neha and Karan turned a cramped old floor into an open, light-filled home. They handled everything from layout to lighting, and kept us informed at every stage.",
    name: "Client Name",
    rating: 5,
  },
  {
    quote:
      "Our office redesign was delivered on time and on budget. The team listened carefully and the result reflects exactly who we are as a company.",
    name: "Client Name",
    rating: 5,
  },
];

export const animations = [
  { title: "Karol Bagh Residence — Walkthrough", image: proj("karol-bagh") },
  { title: "ATS Villa — Interior Fly-through", image: proj("ats-villa") },
  { title: "DLF-3 Apartment — Living Spaces", image: proj("dlf-3") },
  { title: "Shanti Niketan — Facade Study", image: proj("shanti-niketan") },
];
