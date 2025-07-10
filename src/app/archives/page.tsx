import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';

export const metadata = {
  title: 'Archives',
  description: 'A collection of categories and memories.',
};

const BLUR_FADE_DELAY = 0.04;

export default function ArchivesPage() {
  const categories = [
    {
      name: 'gallery',
      href: '/archives/gallery',
    },
    {
      name: 'projects',
      href: '/archives/projects',
    },
    {
      name: 'gaming',
      href: '/archives/gaming',
    },
    {
      name: 'tools',
      href: '/archives/tools',
    },
    {
      name: 'misc',
      href: '/archives/misc',
    },
  ];

  return (
    <main className="flex min-h-dvh flex-col space-y-16">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted transition-colors hover:bg-muted/50"
                href="/"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
              <h1 className="font-bold text-3xl tracking-tight">Archives</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 2 + id * 0.1}
                key={category.name}
              >
                <Link className="group block text-center" href={category.href}>
                  <div className="relative mx-auto mb-3 h-16 w-16">
                    {/* Light theme folder */}
                    <Image
                      alt={category.name}
                      className="object-contain transition-transform duration-300 group-hover:scale-105 dark:hidden"
                      fill
                      sizes="64px"
                      src="/black-folder.webp"
                    />
                    {/* Dark theme folder */}
                    <Image
                      alt={category.name}
                      className="hidden object-contain transition-transform duration-300 group-hover:scale-105 dark:block"
                      fill
                      sizes="64px"
                      src="/white-folder.webp"
                    />
                  </div>
                  <p className="text-center font-medium text-sm">
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
