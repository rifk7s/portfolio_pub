import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
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
              <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Social Media Links */}
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(DATA.contact.social).map(([platform, social], id) => (
                <Link
                  key={platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-3 p-8 bg-secondary/30 rounded-lg hover:bg-secondary/80 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-border/80"
                >
                  <social.icon className="size-8 text-foreground" />
                  <span className="text-sm text-muted-foreground">@{social.username}</span>
                </Link>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Information Card */}
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className=" bg-secondary/30 border rounded-lg p-8 text-center space-y-6 hover:bg-secondary/80 hover:shadow-lg transition-all duration-300 hover:border-border/80">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {DATA.contact.email}
                </p>
                <h2 className="text-2xl font-bold">
                  {DATA.name.split(" ")[0]}
                  <span className="font-light italic">{DATA.name.split(" ")[1]}</span>
                </h2>
                <Link
                  href={DATA.url}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  urwebsite.domain
                </Link>
              </div>
              <Button variant="outline" className="gap-2 hover:bg-secondary/50 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
