import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-16">
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
              <h1 className="font-bold text-4xl tracking-tight">Contact Me</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Social Media Links */}
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(DATA.contact.social).map(
                ([platform, social], id) => (
                  <Link
                    className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border/50 bg-secondary/30 p-8 transition-all duration-300 hover:border-border/80 hover:bg-secondary/80 hover:shadow-lg"
                    href={social.url}
                    key={platform}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <social.icon className="size-8 text-foreground" />
                    <span className="text-muted-foreground text-sm">
                      @{social.username}
                    </span>
                  </Link>
                )
              )}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Information Card */}
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className=" space-y-6 rounded-lg border bg-secondary/30 p-8 text-center transition-all duration-300 hover:border-border/80 hover:bg-secondary/80 hover:shadow-lg">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {DATA.contact.email}
                </p>
                <h2 className="font-bold text-2xl">
                  {DATA.name.split(' ')[0]}
                  <span className="font-light italic">
                    {DATA.name.split(' ')[1]}
                  </span>
                </h2>
                <Link
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  href={DATA.url}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                  urwebsite.domain
                </Link>
              </div>
              <Button
                className="gap-2 transition-all duration-300 hover:bg-secondary/50"
                variant="outline"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                Download my CV
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
