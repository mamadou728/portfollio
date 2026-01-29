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
    title: "YesResume",
    image: "/images/projects/yesresume.jpg",
    description:
      "A resume intelligence system that matches candidates to jobs using Vector DBs.",
    techStack: ["Next.js", "Python", "Qdrant"],
    slug: "yes-resume",
  },
  {
    id: "2",
    title: "Lexi-RAG",
    image: "/images/projects/lexi-rag.jpg",
    description:
      "A privacy-first AI system for document analysis and retrieval.",
    techStack: ["Python", "LangChain", "Vector DB"],
    slug: "lexi-rag",
  },
  // Add more projects here
];
