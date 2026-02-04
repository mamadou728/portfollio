export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  slug: string;
  /** Short story behind the project */
  story?: string;
  /** Gallery images for the project page (right column) */
  gallery?: string[];
  /** Technical details: languages, tools, architecture */
  technicalDetails?: {
    languages?: string[];
    frameworks?: string[];
    tools?: string[];
    other?: string[];
  };
  /** Live project URL */
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "YesResume",
    image: "/images/projects/Yesresume/image.png",
    description:
      "A resume intelligence system that matches candidates to jobs using Vector DBs.",
    techStack: ["Next.js", "Python", "Qdrant"],
    slug: "yes-resume",
    story:
      "YesResume was born from the frustration of applying to jobs that never fit. I wanted to flip the script: match resumes to the right roles using embeddings and semantic search.",
    gallery: [
      "/images/projects/Yesresume/image.png",
      "/images/projects/Yesresume/Screenshot 2026-02-03 224057.png",
    ],
    technicalDetails: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Next.js", "FastAPI"],
      tools: ["Qdrant", "PostgreSQL", "Docker"],
      other: ["Vector embeddings", "RAG"],
    },
    liveUrl: "https://yesresume-front-coops.vercel.app/",
  },
  {
    id: "2",
    title: "Lexi-RAG",
    image: "/images/projects/lexi-rag.jpg",
    description:
      "A privacy-first AI system for document analysis and retrieval.",
    techStack: ["Python", "LangChain", "Vector DB"],
    slug: "lexi-rag",
    story:
      "Lexi-RAG is about giving users powerful document Q&A without sending their data to third-party clouds. Privacy and control come first.",
    gallery: ["/images/projects/lexi-rag.jpg"],
    technicalDetails: {
      languages: ["Python"],
      frameworks: ["LangChain", "FastAPI"],
      tools: ["Vector DB", "Local embeddings", "Docker"],
      other: ["Privacy-first", "Document chunking"],
    },
  },
  {
    id: "3",
    title: "Wealthnudge",
    image: "/images/projects/wealthnudge.jpg",
    description:
      "Personal finance and wealth-building nudges and insights.",
    techStack: ["Next.js", "TypeScript", "Fintech APIs"],
    slug: "wealthnudge",
    story:
      "Built to help people make small, consistent financial decisions with gentle nudges and clear insights instead of overwhelming dashboards.",
    gallery: ["/images/projects/wealthnudge.jpg"],
    technicalDetails: {
      languages: ["TypeScript", "SQL"],
      frameworks: ["Next.js", "React Native", "Express"],
      tools: ["PostgreSQL", "Fintech APIs", "Docker"],
    },
  },
  {
    id: "4",
    title: "SafeSpace",
    image: "/images/projects/safespace.jpg",
    description:
      "A secure platform for mental health support and community connection.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    slug: "safespace",
    story:
      "SafeSpace provides a safe, anonymous environment for individuals to seek mental health support and connect with others.",
    gallery: ["/images/projects/safespace.jpg"],
    technicalDetails: {
      languages: ["JavaScript", "TypeScript"],
      frameworks: ["React", "Express"],
      tools: ["PostgreSQL", "JWT", "Docker"],
      other: ["End-to-end encryption", "Anonymous profiles"],
    },
  },
];
