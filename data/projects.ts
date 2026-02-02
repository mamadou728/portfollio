export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  slug: string;
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
  },
  {
    id: "2",
    title: "Wealthnudge",
    image: "/images/projects/wealthnudge.jpg",
    description:
      "Personal finance and wealth-building nudges and insights.",
    techStack: ["Next.js", "TypeScript", "Fintech APIs"],
    slug: "wealthnudge",
  },
  {
    id: "3",
    title: "YesResume",
    image: "/images/projects/yesresume.jpg",
    description:
      "A resume intelligence system that matches candidates to jobs using Vector DBs.",
    techStack: ["Next.js", "Python", "Qdrant"],
    slug: "yes-resume",
  },
  {
    id: "4",
    title: "Lexi-RAG",
    image: "/images/projects/lexi-rag.jpg",
    description:
      "A privacy-first AI system for document analysis and retrieval.",
    techStack: ["Python", "LangChain", "Vector DB"],
    slug: "lexi-rag",
  },
];
