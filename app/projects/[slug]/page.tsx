import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Header from "@/components/ui/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import ProjectImageGallery from "@/components/ui/ProjectImageGallery";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-black mb-3">
      {children}
    </h2>
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
      <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200/80"
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
    <main className="min-h-screen bg-white text-black">
      <PageWrapper>
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Back link — design: muted text, clear affordance */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors mb-8"
          >
            ← Back to projects
          </Link>

          {/* Two-column layout: left content, right gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Story, Description, Technicality */}
            <article className="lg:col-span-7 space-y-10">
              {/* Title — typography hierarchy */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                {project.title}
              </h1>

              {/* 1. Story */}
              {project.story && (
                <section>
                  <SectionHeading>The story</SectionHeading>
                  <p className="text-zinc-600 leading-relaxed">
                    {project.story}
                  </p>
                </section>
              )}

              {/* 2. Description */}
              <section>
                <SectionHeading>About the project</SectionHeading>
                <p className="text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </section>

              {/* 3. Technicality */}
              <section>
                <SectionHeading>Technical details</SectionHeading>
                <p className="text-sm text-zinc-500 mb-4">
                  Languages, frameworks, and tools used in this project.
                </p>
                {project.technicalDetails &&
                (project.technicalDetails.languages?.length ||
                  project.technicalDetails.frameworks?.length ||
                  project.technicalDetails.tools?.length ||
                  project.technicalDetails.other?.length) ? (
                  <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 backdrop-blur-sm p-6">
                    <TechnicalGrid
                      title="Languages"
                      items={project.technicalDetails.languages ?? []}
                    />
                    <TechnicalGrid
                      title="Frameworks"
                      items={project.technicalDetails.frameworks ?? []}
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
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </section>
            </article>

            {/* Right: Gallery — sticky on desktop */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <ProjectImageGallery
                  images={galleryImages}
                  title={project.title}
                />
              </div>
            </aside>
          </div>
        </div>
      </PageWrapper>
    </main>
  );
}
