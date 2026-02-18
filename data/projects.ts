export interface Project {
  id: string;
  title: string;
  image?: string;
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
    database?: string[];
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
    summary: "AI-powered resume builder that transforms standard resumes into ATS-optimized, one-page LaTeX documents. Uses multi-LLM orchestration for intelligent content generation.",
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
      database: ["Supabase"],
      tools: ["LaTeX", "Tailwind"],
      other: ["OpenAI GPT-4/5", "Gemini", "Cerebras GPT OSS", "Structured prompting"],
    },
    liveUrl: "https://yesresume-front-coops.vercel.app/",
  },
  {
    id: "2",
    title: "Lexi-RAG",
    description:
      "Privacy-first legal Retrieval-Augmented Generation (RAG) system combining encrypted document storage, hybrid semantic + keyword retrieval, answer re-ranking, and role-enforced vector filtering.",
    summary: "Privacy-first legal RAG system combining encrypted document storage with semantic search. Features role-based access control and citation-backed responses.",
    businessContext: "Legal teams manage highly sensitive documents that must remain encrypted at rest while still being searchable for fast and accurate case research.\n\nLexi-RAG was built to address a fundamental contradiction:\n\nHow can confidential legal data remain encrypted while still enabling high-quality semantic search and contextual AI reasoning?\n\nThe system delivers secure document ingestion, strict role-based access control, citation-backed responses, and context-aware legal dialogue designed for multi-tenant legal environments.",
    architecture: "Dual-Database Security Architecture: MongoDB stores AES-256-GCM encrypted legal documents, while Qdrant stores 1024-dimensional embeddings for semantic retrieval. Security is enforced at query time through indexed role-based filtering rather than post-processing.\n\nHybrid Semantic + Keyword Retrieval Pipeline: The hybrid design combines dense semantic embeddings (BGE-M3) with keyword-sensitive retrieval to handle both contextual legal reasoning and structured references such as section numbers or clauses. A context-aware router determines when to rely on conversational memory versus fresh vector retrieval.\n\nLocal Embedding Engine (Security-Oriented Design): The 2GB BGE-M3 embedding model is loaded once at startup and executed locally. This ensures embeddings are generated without exposing raw legal text externally, adding an additional privacy layer. BGE-M3 was selected for its ability to support both semantic similarity and keyword-aware retrieval.\n\nRole-Based Vector Filtering (RBAC at Query Time): A 4-tier hierarchy (Partner → Associate → Staff → Client) is enforced directly within Qdrant payload filters. This guarantees zero cross-privilege leakage by embedding access rules directly into the vector search layer.\n\nAnswer Re-Ranking Layer: Retrieved chunks are re-ranked before final generation to ensure the most legally relevant and contextually aligned passages are prioritized. This improves citation precision and reduces noise from semantically similar but irrelevant chunks.\n\nContext-Aware Conversational Layer: The FastAPI backend maintains structured chat sessions, enabling multi-turn reasoning. The system preserves contextual continuity between the user and the AI while selectively triggering retrieval only when needed.",
    hardDecisions: "Encryption vs. Searchability: Adopted a dual-storage model (encrypted source text + unencrypted embeddings) to preserve retrieval quality while maintaining confidentiality. Research is ongoing to further strengthen encryption strategies without degrading retrieval performance.\n\nPost-Filtering vs. Query-Time Enforcement: Moved RBAC enforcement directly into Qdrant's indexed payload filters to eliminate security gaps and avoid expensive post-retrieval filtering.\n\nRetrieval Frequency vs. Latency: Implemented contextual routing to reduce unnecessary vector searches, lowering latency and infrastructure costs.\n\nModel Size vs. Cost & Security: Selected Llama 3.1-8B via Groq for inference to balance security, cost efficiency, and low-latency responses. The lightweight 8B model provides sufficient reasoning capacity while remaining computationally economical.",
    techStack: ["Python", "FastAPI", "Beanie ODM", "Motor", "BGE-M3", "Llama 3.1-8B", "LangChain", "MongoDB", "Qdrant", "Next.js", "React", "TypeScript"],
    slug: "lexi-rag",
    technicalDetails: {
      languages: ["Python", "TypeScript"],
      frameworks: ["FastAPI", "LangChain", "Next.js", "React"],
      database: ["MongoDB", "Qdrant"],
      tools: ["Beanie ODM", "Motor"],
      other: ["BGE-M3 embeddings", "Llama 3.1-8B (Groq)", "AES-256-GCM encryption", "RBAC"],
    },
  },
  {
    id: "3",
    title: "Wealthnudge",
    description:
      "Full-stack, multi-tenant personal finance platform combining a React Native mobile application with a Node.js financial API and a dedicated AI coaching service.",
    summary: "Full-stack personal finance platform with React Native mobile app and dual-backend architecture. Features atomic financial operations and AI coaching service.",
    businessContext: "Most personal finance applications focus narrowly on budgeting. WealthNudge was designed as a broader financial control system allowing users to manage wallets, transactions, debts, goals, and advisory interactions within a single coherent architecture.\n\nTwo core challenges shaped the system:\n\nDesigning an intuitive end-to-end architecture enabling users to control their entire financial lifecycle not just expense tracking.\n\nProviding intelligent, AI-driven insights without compromising security or exposing sensitive financial data.\n\nThe objective was to build a secure financial operating layer capable of handling real monetary workflows while remaining extensible during active development.",
    architecture: "Dual-Backend Design: The system is split into two backend services within a modular repository: Core Financial API (CRUD operations + financial logic) and AI Agent Service (streaming advice and persona-based coaching). This separation allows independent scaling, clearer responsibility boundaries, and prevents AI workloads from impacting transactional performance.\n\nApplication-Level Financial Logic: All core financial rules are implemented in structured Node.js service-layer functions rather than database-level stored procedures. This decision simplifies iteration, debugging, and rapid architectural changes during active development while still preserving transactional safety.\n\nAtomic Financial Operations: Critical workflows (transfers, bill payments, balance updates) are executed within controlled transaction blocks to prevent race conditions and ensure balance consistency.\n\nMulti-Tenant Isolation (Row-Level Security): Row-Level Security policies enforce tenant isolation directly at the database layer. The API passes authenticated context, and PostgreSQL automatically filters rows per user eliminating manual filtering logic and reducing cross-tenant risk.\n\nMobile Resilience Layer: Implemented an Axios request queue pattern to handle token refresh race conditions. Failed requests during session renewal are queued and replayed after a single successful refresh, preventing logout loops and concurrency bugs.\n\nTime-Aware Budget Algorithm: Designed a lightweight variance-based health scoring model (variance = spend_ratio - time_ratio) computed in under 100ms without heavy AI processing, enabling real-time financial feedback.",
    hardDecisions: "Database Enforcement vs Development Agility: Rather than embedding all rules in stored procedures, financial logic lives primarily in structured Node.js services. This increases flexibility and simplifies debugging while the product architecture is evolving.\n\nSecurity Architecture Vision: The system is designed with strict separation between identity and financial data. The architectural principle is: access to a user identity does not automatically expose financial records, and financial records are never accessible without verified identity context.\n\nAI Scalability vs Core Stability: The AI service is deployed as a separate backend to allow focused scalability and independent performance tuning, ensuring conversational inference workloads do not degrade financial operations.",
    techStack: ["React Native", "TypeScript", "Expo", "Zustand", "Node.js", "Express", "PostgreSQL", "Supabase", "RS256 JWT"],
    slug: "wealthnudge",
    technicalDetails: {
      languages: ["TypeScript", "Node.js", "SQL"],
      frameworks: ["React Native", "Expo", "Express"],
      database: ["PostgreSQL", "Supabase"],
      tools: ["Zustand", "RS256 JWT"],
      other: ["Row-Level Security", "Atomic transactions", "Modular service architecture"],
    },
  },
  {
    id: "4",
    title: "SafeSpace",
    description:
      "Real-time geolocation-based safety platform built in 24 hours by a team of 4 during a hackathon, enabling instant walking buddy matching and live location tracking.",
    summary: "Real-time safety platform built in 24 hours enabling instant walking buddy matching via geolocation. Uses WebSocket notifications for live location tracking.",
    businessContext: "SafeSpace was a hackathon project focused on building a working real-time safety system under strict time constraints. The objective was simple: match users with nearby volunteers and deliver live updates reliably.",
    architecture: "Efficient Geospatial Matching: Implemented the Haversine distance algorithm to compute proximity within a configurable radius (default 5km).\n\nReal-Time Notification Layer: Integrated WebSocket-based realtime broadcasting to deliver buddy requests instantly. Used dual INSERT + UPDATE listeners to ensure sub-second delivery and automatic hiding of fulfilled requests.\n\nRace Condition Handling: Designed first-come-first-served logic with status-based filtering to prevent multiple volunteers from accepting the same request simultaneously.\n\nPersistent Live Location System: Stored timestamped coordinates with freshness thresholds (5-minute window) to maintain reliable proximity calculations even across server restarts.\n\nDatabase-Level Isolation: Enforced Row-Level Security (RLS) in PostgreSQL to guarantee strict separation between users and volunteers without relying solely on application-layer filtering.",
    hardDecisions: "Speed vs. Abstraction: Chose a direct Express + PostgreSQL architecture to ship quickly rather than introducing complex architectural layers.\n\nReal-Time Performance vs. Simplicity: Used indexed queries and event-based filtering to ensure fast matching and near-instant notification delivery without overengineering the system.",
    techStack: ["Node.js", "Express", "PostgreSQL", "WebSockets", "HTML", "CSS", "Google Maps API", "Supabase", "JWT"],
    slug: "safespace",
    technicalDetails: {
      languages: ["JavaScript", "Node.js"],
      frameworks: ["Express"],
      database: ["PostgreSQL", "Supabase"],
      tools: ["WebSockets", "Google Maps API"],
      other: ["Haversine algorithm", "Row-Level Security", "Real-time notifications", "JWT authentication"],
    },
  },
  {
    id: "5",
    title: "AI Finance Agent",
    description:
      "AI orchestration backend powering the WealthNudge ecosystem, routing financial requests across tools and analytics using a LangGraph state machine, secure Text-to-SQL validation, and dynamic MCP tool execution.",
    summary: "AI orchestration backend using LangGraph state machine for intelligent financial request routing. Features secure Text-to-SQL pipeline with multi-stage validation.",
    businessContext: "This system extends WealthNudge by adding an intelligent AI layer that actively guides users through their financial decisions. Instead of only exposing dashboards and CRUD endpoints, the platform enables users to interact conversationally with their data.\n\nThe objective is to create a secure financial environment where users can:\n\n• Log and modify financial data through natural language\n• Query analytics without writing SQL\n• Receive structured guidance while preserving strict data isolation\n\nThe AI layer is designed to enhance usability without compromising safety, performance, or tenant separation.",
    architecture: "Agent Orchestration (LangGraph): Implemented an event-driven state machine with specialized nodes and conditional routing across four intent categories (domain action, analytics read, general inquiry, other). A shared AgentState model preserves session context across multi-step flows.\n\nSecure Text-to-SQL Pipeline: Built a multi-stage validation system: Deterministic LLM SQL generation, Security validation enforcing SELECT-only queries and mandatory user filters, and Execution with automatic fallback to a safe query builder. This guarantees zero unsafe write operations while enabling flexible financial analytics.\n\nMCP Tool Execution Layer: Designed a dynamic tool registry supporting seven financial domains (wallets, transactions, budgets, bills, goals, income, debts), allowing the agent to trigger structured backend operations.\n\nCRUD Factory Pattern: Implemented a configurable factory that generates domain tools dynamically, significantly reducing duplication while maintaining strict schema validation and type safety.",
    hardDecisions: "Flexibility vs. Security: Enabled natural language analytics while enforcing strict SQL validation and database-level Row-Level Security.\n\nScalability vs. Simplicity: Adopted a registry-based tool architecture to support multi-domain expansion at the cost of increased orchestration complexity.\n\nLatency vs. Correctness: Accepted additional validation and routing layers to ensure financial correctness and tenant isolation.",
    techStack: ["Python", "FastAPI", "LangGraph", "Pydantic", "MCP", "OpenAI GPT-4o-mini", "PostgreSQL", "Supabase", "JWT"],
    slug: "ai-finance-agent",
    technicalDetails: {
      languages: ["Python"],
      frameworks: ["FastAPI", "LangGraph", "MCP"],
      database: ["PostgreSQL", "Supabase"],
      tools: ["Pydantic"],
      other: ["OpenAI GPT-4o-mini", "Text-to-SQL", "Row-Level Security", "Intent classification", "Rate limiting"],
    },
  },
];
