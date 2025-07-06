import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-muted hover:bg-muted/50 transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Link>
              <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-muted-foreground">
              A collection of projects I&apos;ve worked on, from web applications to desktop software.
            </p>
          </BlurFade>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
