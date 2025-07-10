import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex min-h-dvh flex-col space-y-16">
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted transition-colors hover:bg-muted/50"
                href="/"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
              <h1 className="font-bold text-4xl tracking-tight">Projects</h1>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-muted-foreground">
              A collection of projects I&apos;ve worked on, from web
              applications to desktop software.
            </p>
          </BlurFade>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              key={project.title}
            >
              <ProjectCard
                dates={project.dates}
                description={project.description}
                href={project.href}
                image={project.image}
                key={project.title}
                links={project.links}
                tags={project.technologies}
                title={project.title}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
