import BlurFade from "@/components/magicui/blur-fade";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Archives",
  description: "A collection of categories and memories.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ArchivesPage() {
  const categories = [
    {
      name: "gallery",
      href: "/archives/gallery",
    },
    {
      name: "projects", 
      href: "/archives/projects",
    },
    {
      name: "gaming",
      href: "/archives/gaming", 
    },
    {
      name: "tools",
      href: "/archives/tools",
    },
    {
      name: "misc",
      href: "/archives/misc",
    },
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-muted hover:bg-muted/50 transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">Archives</h1>
            </div>
          </BlurFade>
        </div>
      </section>
      
      <section>
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {categories.map((category, id) => (
              <BlurFade key={category.name} delay={BLUR_FADE_DELAY * 2 + id * 0.1}>
                <Link 
                  href={category.href}
                  className="group block text-center"
                >
                  <div className="w-16 h-16 relative mb-3 mx-auto">
                    {/* Light theme folder */}
                    <Image
                      src="/black-folder.webp"
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 dark:hidden"
                      sizes="64px"
                    />
                    {/* Dark theme folder */}
                    <Image
                      src="/white-folder.webp"
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 hidden dark:block"
                      sizes="64px"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">
                    {category.name}
                  </p>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}