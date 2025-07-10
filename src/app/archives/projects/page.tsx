import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsArchivePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted transition-colors hover:bg-muted/50"
                href="/archives"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
              <h1 className="font-bold text-3xl tracking-tight">Projects</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl">
          <div className="py-16 text-center">
            <p className="text-muted-foreground">
              Coming soon... Development projects and code archives will be
              here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Projects - Archives',
  description: 'Development projects and code archives.',
};
