import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Header from "@/components/ui/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import ProjectImageGallery from "@/components/ui/ProjectImageGallery";
import { ArrowUpRight } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black mb-4">
      {children}
    </h2>
  );
}

function ContentSection({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (!children) return null;
  
  // Convert text with bullet points (•) and subsection titles into formatted content
  const formatContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let currentParagraph = '';

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('•')) {
        // Save any pending paragraph
        if (currentParagraph) {
          elements.push(<p key={`p-${idx}`}>{currentParagraph}</p>);
          currentParagraph = '';
        }
        // Add to current list
        currentList.push(trimmedLine.substring(1).trim());
      } else if (trimmedLine === '') {
        // Empty line - flush current list if any
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${idx}`} className="list-disc list-outside ml-5 space-y-2">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
          currentList = [];
        }
        // Flush paragraph if any
        if (currentParagraph) {
          elements.push(<p key={`p-${idx}`}>{currentParagraph}</p>);
          currentParagraph = '';
        }
      } else if (trimmedLine.includes(':')) {
        // Subsection title (text before colon)
        // Flush any pending content first
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${idx}`} className="list-disc list-outside ml-5 space-y-2">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
          currentList = [];
        }
        if (currentParagraph) {
          elements.push(<p key={`p-${idx}`}>{currentParagraph}</p>);
          currentParagraph = '';
        }
        
        // Split at first colon
        const colonIndex = trimmedLine.indexOf(':');
        const title = trimmedLine.substring(0, colonIndex).trim();
        const content = trimmedLine.substring(colonIndex + 1).trim();
        
        elements.push(
          <div key={`subsection-${idx}`} className="mt-4 first:mt-0">
            <h4 className="font-bold text-zinc-800 mb-1">{title}</h4>
            {content && <p className="text-zinc-600">{content}</p>}
          </div>
        );
      } else {
        // Regular text line
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${idx}`} className="list-disc list-outside ml-5 space-y-2">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
          currentList = [];
        }
        currentParagraph += (currentParagraph ? ' ' : '') + trimmedLine;
      }
    });

    // Flush any remaining content
    if (currentList.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-disc list-outside ml-5 space-y-2">
          {currentList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    }
    if (currentParagraph) {
      elements.push(<p key="p-final">{currentParagraph}</p>);
    }

    return elements;
  };

  return (
    <section className={`border-l-2 border-zinc-100 pl-5 md:pl-6 py-1 ${className}`}>
      {title && <SectionHeading>{title}</SectionHeading>}
      <div className="text-base text-zinc-600 leading-relaxed space-y-3">
        {typeof children === 'string' ? formatContent(children) : children}
      </div>
    </section>
  );
}

function TechnicalGrid({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 bg-white text-zinc-700 text-xs font-medium rounded-md border border-zinc-200 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.gallery?.length
    ? project.gallery
    : project.image
    ? [project.image]
    : [];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-zinc-900 selection:text-white">
      <PageWrapper>
        <Header />
        
        <article className="max-w-5xl mx-auto px-6 py-8 md:py-12">
          
          {galleryImages.length > 0 ? (
            <>
              {/* 1. Images Section - Top */}
              <div className="mt-8 md:mt-12 mb-10 md:mb-12 max-h-[400px] overflow-hidden">
                <ProjectImageGallery
                  images={galleryImages}
                  title={project.title}
                />
              </div>

              {/* 2. Header: Title & Link */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-zinc-100">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-black">
                  {project.title}
                </h1>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200"
                  >
                    View Live Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Centered Title When No Images */}
              <div className="mt-8 md:mt-12 mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
                  {project.title}
                </h1>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200"
                  >
                    View Live Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="border-b border-zinc-100 mb-12"></div>
            </>
          )}

          {/* 3. Content Sections - Vertical Layout */}
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Headline / Description - "Standard content part with the headline" */}
            <div className="text-lg md:text-xl font-medium text-zinc-900 leading-relaxed">
              {project.description}
            </div>

            {/* Business Context */}
            {project.businessContext && (
              <ContentSection title="Business Context">
                {project.businessContext}
              </ContentSection>
            )}

            {/* Engineering Architecture */}
            {project.architecture && (
              <ContentSection title="Engineering Architecture">
                {project.architecture}
              </ContentSection>
            )}

            {/* Key Trade-offs */}
            {project.hardDecisions && (
              <ContentSection title="Key Trade-offs">
                {project.hardDecisions}
              </ContentSection>
            )}

            {/* Tech Stack */}
            <section className="border-l-2 border-zinc-100 pl-5 md:pl-6 py-1">
              <SectionHeading>Tech Stack & Tools</SectionHeading>
              
              {project.technicalDetails &&
              (project.technicalDetails.languages?.length ||
                project.technicalDetails.frameworks?.length ||
                project.technicalDetails.database?.length ||
                project.technicalDetails.tools?.length ||
                project.technicalDetails.other?.length) ? (
                <div className="bg-zinc-50/50 rounded-2xl p-5 border border-zinc-100">
                  <TechnicalGrid
                    title="Languages"
                    items={project.technicalDetails.languages ?? []}
                  />
                  <TechnicalGrid
                    title="Frameworks"
                    items={project.technicalDetails.frameworks ?? []}
                  />
                  <TechnicalGrid
                    title="Database"
                    items={project.technicalDetails.database ?? []}
                  />
                  <TechnicalGrid
                    title="Tools"
                    items={project.technicalDetails.tools ?? []}
                  />
                  <TechnicalGrid
                    title="Other"
                    items={project.technicalDetails.other ?? []}
                  />
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </section>

          </div>
        </article>
      </PageWrapper>
    </main>
  );
}
