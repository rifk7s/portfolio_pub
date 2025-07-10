import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { BlogCard } from '@/components/blog-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { SkillBadge } from '@/components/skill-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getBlogPosts } from '@/data/blog';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="flex min-h-dvh flex-col space-y-16">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex items-start justify-between">
            <div className="flex flex-1 flex-col space-y-1">
              <BlurFadeText
                className="font-bold text-4xl tracking-tight"
                delay={BLUR_FADE_DELAY}
                text={DATA.name.split(' ')[0]}
                yOffset={8}
              />
              <BlurFadeText
                className="text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text="Fullstack Developer"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <Avatar className="size-16 border-2">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <h2 className="mb-4 font-bold text-2xl">Today</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="prose dark:prose-invert max-w-full space-y-4 text-pretty font-sans text-muted-foreground">
            <p>
              Hi, I&apos;m {DATA.name.split(' ')[0]} {DATA.name.split(' ')[1]}{' '}
              an undergraduate Informatics student from Indonesia, studying at{' '}
              {DATA.education[0].school.replace('Universitas ', '')}. I work on
              various projects, from simple websites to complex web
              applications, and I enjoy the variety of challenges each project
              offers.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m learning new technologies and
              working on personal projects to enhance my fullstack development
              skills.
            </p>
          </div>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
            <h2 className="font-bold text-xl">Tech Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                inView
                key={skill}
              >
                <SkillBadge key={skill} skill={skill} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <h2 className="font-bold text-2xl">Experience</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.work.map((work, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                inView
                key={work.company}
              >
                <ResumeCard
                  altText={work.company}
                  badges={work.badges}
                  description={work.description}
                  href={work.href}
                  key={work.company}
                  logoUrl={work.logoUrl}
                  period={`${work.start} - ${work.end ?? 'Present'}`}
                  subtitle={work.title}
                  title={work.company}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h2 className="font-bold text-2xl">Education</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.education.map((education, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                inView
                key={education.school}
              >
                <ResumeCard
                  altText={education.school}
                  href={education.href}
                  key={education.school}
                  logoUrl={education.logoUrl}
                  period={`${education.start} - ${education.end}`}
                  subtitle={education.degree}
                  title={education.school}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">Projects</h2>
              <Link
                className="flex items-center gap-1 text-base text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                href="/projects"
              >
                view all projects
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-primary/40 transition-colors group-hover:text-primary"
                />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA.projects.slice(0, 2).map(
              (
                project,
                id //slice to show only 2 projects
              ) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  inView
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
              )
            )}
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="w-full space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 13} inView>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">Latest Blogs</h2>
              <Link
                className="flex items-center gap-1 text-base text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                href="/blog"
              >
                view more blogs
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-primary/40 transition-colors group-hover:text-primary"
                />
              </Link>
            </div>
          </BlurFade>
          <div className="space-y-4">
            {posts.slice(0, 2).map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                inView
                key={post.slug}
              >
                <BlogCard post={post} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
