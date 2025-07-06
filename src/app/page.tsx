import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRightIcon } from "lucide-react";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkillBadge } from "@/components/skill-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { getBlogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between items-start">
            <div className="flex-col flex flex-1 space-y-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight"
                yOffset={8}
                text={DATA.name.split(" ")[0]}
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
          <h2 className="text-2xl font-bold mb-4">Today</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert space-y-4">
            <p>
              Hi, I&apos;m {DATA.name.split(" ")[0]} {DATA.name.split(" ")[1]} an undergraduate Informatics student from Indonesia, studying at {DATA.education[0].school.replace("Universitas ", "")}. I work on various projects, from simple websites to complex web applications, and I enjoy the variety of challenges each project offers.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m learning new technologies and working on personal projects to enhance my fullstack development skills.
            </p>
          </div>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                inView
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
            <h2 className="text-2xl font-bold">Experience</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                inView
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                inView
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Projects</h2>
              <Link
                href="/projects"
                className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 underline underline-offset-4"
              >
                view all projects
                <ChevronRightIcon
                  className="size-5 text-primary/40 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA.projects.slice(0, 2).map((project, id) => ( //slice to show only 2 projects
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                inView
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
        </div>
      </section>
      <section id="blog">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13} inView>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Latest Blogs</h2>
              <Link
                href="/blog"
                className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 underline underline-offset-4"
              >
                view more blogs
                <ChevronRightIcon
                  className="size-5 text-primary/40 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </BlurFade>
          <div className="space-y-4">
            {posts.slice(0, 2).map((post, id) => (
              <BlurFade
                key={post.slug}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                inView
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
