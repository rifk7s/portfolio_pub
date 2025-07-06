import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsArchivePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link 
                href="/archives"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-muted hover:bg-muted/50 transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            </div>
          </BlurFade>
        </div>
      </section>
      
      <section>
        <div className="mx-auto w-full max-w-4xl">
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Coming soon... Development projects and code archives will be here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Projects - Archives",
  description: "Development projects and code archives.",
};
