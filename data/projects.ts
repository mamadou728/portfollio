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
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Orchestration",
    image: "/images/projects/ai-orchestration.jpg",
    description:
      "Orchestrating AI workflows and pipelines for scalable automation.",
    techStack: ["Python", "LangChain", "OpenAI"],
    slug: "ai-orchestration",
    story:
      "This project started from a need to connect multiple AI services and data sources into reliable, repeatable workflows without writing one-off scripts every time.",
    gallery: ["/images/projects/ai-orchestration.jpg"],
    technicalDetails: {
      languages: ["Python"],
      frameworks: ["LangChain", "FastAPI"],
      tools: ["OpenAI API", "Vector DB", "Docker"],
      other: ["MCP", "Async pipelines"],
    },
  },
  {
    id: "2",
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
    id: "3",
    title: "YesResume",
    image: "/images/projects/yesresume.jpg",
    description:
      "A resume intelligence system that matches candidates to jobs using Vector DBs.",
    techStack: ["Next.js", "Python", "Qdrant"],
    slug: "yes-resume",
    story:
      "YesResume was born from the frustration of applying to jobs that never fit. I wanted to flip the script: match resumes to the right roles using embeddings and semantic search.",
    gallery: ["/images/projects/yesresume.jpg"],
    technicalDetails: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Next.js", "FastAPI"],
      tools: ["Qdrant", "PostgreSQL", "Docker"],
      other: ["Vector embeddings", "RAG"],
    },
  },
  {
    id: "4",
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
];
