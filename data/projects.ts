export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Brand Identity Concept",
    description: "Complete visual identity including logo design, typography, and color palette for a modern tech startup. The design focuses on minimalism and dynamic shapes.",
    image: "/images/img1.png",
    tags: ["Illustrator", "Photoshop", "Branding"],
    projectUrl: "#"
  },
  {
    id: "2",
    title: "Cyberpunk Social Media Kit",
    description: "A futuristic set of social media templates and banners designed with a neon cyberpunk aesthetic. Used for a gaming tournament promotion.",
    image: "/images/img2.png",
    tags: ["Photoshop", "Social Media", "Gaming"],
    projectUrl: "#"
  },
  {
    id: "3",
    title: "Event Poster Design",
    description: "Abstract and highly textured poster design for an underground music festival. Incorporates custom typography and 3D elements.",
    image: "/images/img3.png",
    tags: ["Illustrator", "Typography", "Poster Design"],
    projectUrl: "#"
  },
  {
    id: "4",
    title: "Product Packaging Mockups",
    description: "Premium product packaging concepts for a luxury cosmetic brand. Created 3D mockups and designed elegant minimalist labels.",
    image: "/images/img4.png",
    tags: ["Figma", "Photoshop", "Packaging"],
    projectUrl: "#"
  },
  {
    id: "5",
    title: "Abstract Art Manipulation",
    description: "A creative photo manipulation project blending surrealism with sci-fi elements to create a dream-like landscape.",
    image: "/images/img5.png",
    tags: ["Photoshop", "Photo Manipulation", "Creative Arts"],
    projectUrl: "#"
  },
  {
    id: "6",
    title: "Corporate Brochure Layout",
    description: "Clean, professional, and visually engaging multi-page corporate brochure designed for an architectural firm.",
    image: "/images/img6.png",
    tags: ["InDesign", "Print Design", "Typography"],
    projectUrl: "#"
  }
];
