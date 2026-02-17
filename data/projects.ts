export interface Project {
  id: string;
  title: string;
  image: string;
  description: string; // Used as the "Headline" or intro
  techStack: string[];
  slug: string;
  
  // New Content Sections
  businessContext?: string;
  architecture?: string;
  hardDecisions?: string; // "Hard Decision and Trade off"
  summary?: string;
  
  /** Gallery images */
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
      "AI-powered resume optimization platform that transforms a standard resume into an ATS-optimized, one-page LaTeX resume using structured LLM orchestration.",
    businessContext: "Most candidates reuse generic resumes and manually adjust them per role, often missing critical ATS keywords and formatting constraints.\n\nYesResume automates this by:\n\n• Extracting structured requirements from job descriptions\n• Prioritizing relevant experience based on role alignment\n• Optimizing keyword coverage for ATS systems\n• Enforcing strict one-page formatting constraints",
    architecture: "Dual Generation Modes: Direct mode (30–60s) for fast turnaround, plus an adaptive interview mode for deeper, higher-quality optimization.\n\nMulti-LLM Orchestration: Supports OpenAI, Gemini, and Cerebras with task-based routing and fallback logic. The multi-model design enables experimentation and optimization across cost, speed, and output quality by leveraging each model's strengths.\n\nDeterministic LaTeX Engine: AI generates structured content while multiple deterministic LaTeX templates enforce layout consistency and page-fit control.\n\nSchema-Controlled Output: JSON schema validation and strict TypeScript typing ensure consistent, production-safe outputs before PDF compilation.",
    hardDecisions: "Creativity vs. Control: Separated AI content generation from deterministic layout enforcement to maintain structural reliability.\n\nArchitectural Complexity vs. Model Agility: Introduced multi-model orchestration to experiment and optimize cost, speed, and quality, accepting increased system complexity for greater adaptability and long-term flexibility.\n\nSpeed vs. Depth: Two generation paths balance immediate results with more refined, interview-driven tailoring.",
    techStack: ["Node.js", "TypeScript", "Fastify", "Supabase", "LaTeX", "Next.js", "React", "Tailwind", "OpenAI GPT-4/5", "Gemini", "Cerebras GPT OSS"],
    slug: "yes-resume",
    gallery: [
      "/images/projects/Yesresume/image.png",
      "/images/projects/Yesresume/Screenshot 2026-02-03 224057.png",
    ],
    technicalDetails: {
      languages: ["TypeScript", "Node.js"],
      frameworks: ["Next.js", "React", "Fastify"],
      tools: ["Supabase", "LaTeX", "Tailwind"],
      other: ["OpenAI GPT-4/5", "Gemini", "Cerebras GPT OSS", "Structured prompting"],
    },
    liveUrl: "https://yesresume-front-coops.vercel.app/",
  },
  {
    id: "2",
    title: "Lexi-RAG",
    image: "/images/projects/lexi-rag.jpg",
    description:
      "Privacy-first legal Retrieval-Augmented Generation (RAG) system combining encrypted document storage, hybrid semantic + keyword retrieval, answer re-ranking, and role-enforced vector filtering.",
    businessContext: "Legal teams manage highly sensitive documents that must remain encrypted at rest while still being searchable for fast and accurate case research.\n\nLexi-RAG was built to address a fundamental contradiction:\n\nHow can confidential legal data remain encrypted while still enabling high-quality semantic search and contextual AI reasoning?\n\nThe system delivers secure document ingestion, strict role-based access control, citation-backed responses, and context-aware legal dialogue designed for multi-tenant legal environments.",
    architecture: "Dual-Database Security Architecture: MongoDB stores AES-256-GCM encrypted legal documents, while Qdrant stores 1024-dimensional embeddings for semantic retrieval. Security is enforced at query time through indexed role-based filtering rather than post-processing.\n\nHybrid Semantic + Keyword Retrieval Pipeline: The hybrid design combines dense semantic embeddings (BGE-M3) with keyword-sensitive retrieval to handle both contextual legal reasoning and structured references such as section numbers or clauses. A context-aware router determines when to rely on conversational memory versus fresh vector retrieval.\n\nLocal Embedding Engine (Security-Oriented Design): The 2GB BGE-M3 embedding model is loaded once at startup and executed locally. This ensures embeddings are generated without exposing raw legal text externally, adding an additional privacy layer. BGE-M3 was selected for its ability to support both semantic similarity and keyword-aware retrieval.\n\nRole-Based Vector Filtering (RBAC at Query Time): A 4-tier hierarchy (Partner → Associate → Staff → Client) is enforced directly within Qdrant payload filters. This guarantees zero cross-privilege leakage by embedding access rules directly into the vector search layer.\n\nAnswer Re-Ranking Layer: Retrieved chunks are re-ranked before final generation to ensure the most legally relevant and contextually aligned passages are prioritized. This improves citation precision and reduces noise from semantically similar but irrelevant chunks.\n\nContext-Aware Conversational Layer: The FastAPI backend maintains structured chat sessions, enabling multi-turn reasoning. The system preserves contextual continuity between the user and the AI while selectively triggering retrieval only when needed.",
    hardDecisions: "Encryption vs. Searchability: Adopted a dual-storage model (encrypted source text + unencrypted embeddings) to preserve retrieval quality while maintaining confidentiality. Research is ongoing to further strengthen encryption strategies without degrading retrieval performance.\n\nPost-Filtering vs. Query-Time Enforcement: Moved RBAC enforcement directly into Qdrant's indexed payload filters to eliminate security gaps and avoid expensive post-retrieval filtering.\n\nRetrieval Frequency vs. Latency: Implemented contextual routing to reduce unnecessary vector searches, lowering latency and infrastructure costs.\n\nModel Size vs. Cost & Security: Selected Llama 3.1-8B via Groq for inference to balance security, cost efficiency, and low-latency responses. The lightweight 8B model provides sufficient reasoning capacity while remaining computationally economical.",
    techStack: ["Python", "FastAPI", "Beanie ODM", "Motor", "BGE-M3", "Llama 3.1-8B", "LangChain", "MongoDB", "Qdrant", "Next.js", "React", "TypeScript"],
    slug: "lexi-rag",
    gallery: ["/images/projects/lexi-rag.jpg"],
    technicalDetails: {
      languages: ["Python", "TypeScript"],
      frameworks: ["FastAPI", "LangChain", "Next.js", "React"],
      tools: ["MongoDB", "Qdrant", "Beanie ODM", "Motor"],
      other: ["BGE-M3 embeddings", "Llama 3.1-8B (Groq)", "AES-256-GCM encryption", "RBAC"],
    },
  },
  {
    id: "3",
    title: "Wealthnudge",
    image: "/images/projects/wealthnudge.jpg",
    description:
      "Full-stack, multi-tenant personal finance platform combining a React Native mobile application with a Node.js financial API and a dedicated AI coaching service.",
    businessContext: "Most personal finance applications focus narrowly on budgeting. WealthNudge was designed as a broader financial control system allowing users to manage wallets, transactions, debts, goals, and advisory interactions within a single coherent architecture.\n\nTwo core challenges shaped the system:\n\nDesigning an intuitive end-to-end architecture enabling users to control their entire financial lifecycle not just expense tracking.\n\nProviding intelligent, AI-driven insights without compromising security or exposing sensitive financial data.\n\nThe objective was to build a secure financial operating layer capable of handling real monetary workflows while remaining extensible during active development.",
    architecture: "Dual-Backend Design: The system is split into two backend services within a modular repository: Core Financial API (CRUD operations + financial logic) and AI Agent Service (streaming advice and persona-based coaching). This separation allows independent scaling, clearer responsibility boundaries, and prevents AI workloads from impacting transactional performance.\n\nApplication-Level Financial Logic: All core financial rules are implemented in structured Node.js service-layer functions rather than database-level stored procedures. This decision simplifies iteration, debugging, and rapid architectural changes during active development while still preserving transactional safety.\n\nAtomic Financial Operations: Critical workflows (transfers, bill payments, balance updates) are executed within controlled transaction blocks to prevent race conditions and ensure balance consistency.\n\nMulti-Tenant Isolation (Row-Level Security): Row-Level Security policies enforce tenant isolation directly at the database layer. The API passes authenticated context, and PostgreSQL automatically filters rows per user eliminating manual filtering logic and reducing cross-tenant risk.\n\nMobile Resilience Layer: Implemented an Axios request queue pattern to handle token refresh race conditions. Failed requests during session renewal are queued and replayed after a single successful refresh, preventing logout loops and concurrency bugs.\n\nTime-Aware Budget Algorithm: Designed a lightweight variance-based health scoring model (variance = spend_ratio - time_ratio) computed in under 100ms without heavy AI processing, enabling real-time financial feedback.",
    hardDecisions: "Database Enforcement vs Development Agility: Rather than embedding all rules in stored procedures, financial logic lives primarily in structured Node.js services. This increases flexibility and simplifies debugging while the product architecture is evolving.\n\nSecurity Architecture Vision: The system is designed with strict separation between identity and financial data. The architectural principle is: access to a user identity does not automatically expose financial records, and financial records are never accessible without verified identity context.\n\nAI Scalability vs Core Stability: The AI service is deployed as a separate backend to allow focused scalability and independent performance tuning, ensuring conversational inference workloads do not degrade financial operations.",
    techStack: ["React Native", "TypeScript", "Expo", "Zustand", "Node.js", "Express", "PostgreSQL", "Supabase", "RS256 JWT"],
    slug: "wealthnudge",
    gallery: ["/images/projects/wealthnudge.jpg"],
    technicalDetails: {
      languages: ["TypeScript", "Node.js", "SQL"],
      frameworks: ["React Native", "Expo", "Express"],
      tools: ["PostgreSQL", "Supabase", "Zustand", "RS256 JWT"],
      other: ["Row-Level Security", "Atomic transactions", "Modular service architecture"],
    },
  },
  {
    id: "4",
    title: "SafeSpace",
    image: "/images/projects/safespace.jpg",
    description:
      "A secure platform for mental health support and community connection.",
    businessContext: "SafeSpace was created to provide a stigma-free environment for mental health support. The core business value is trust and anonymity, allowing users to seek help without fear of exposure.",
    architecture: "The platform relies on a zero-knowledge architecture where possible. User identities are cryptographically hashed. The backend is a standard REST API but with heavy encryption layers for message storage.",
    hardDecisions: "Implementing end-to-end encryption meant sacrificing some server-side search capabilities. We decided that user privacy was non-negotiable and implemented client-side search for personal history instead.",
    summary: "SafeSpace delivers on the promise of a secure, anonymous community, fostering mental well-being through technology.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    slug: "safespace",
    gallery: ["/images/projects/safespace.jpg"],
    technicalDetails: {
      languages: ["JavaScript", "TypeScript"],
      frameworks: ["React", "Express"],
      tools: ["PostgreSQL", "JWT", "Docker"],
      other: ["End-to-end encryption", "Anonymous profiles"],
    },
  },
];
