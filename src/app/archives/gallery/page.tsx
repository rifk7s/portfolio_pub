import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

export default function GalleryPage() {
  // Personal images from the public folder (excluding work projects)
  const galleryImages = [
    {
      src: '/gallery/cats.avif',
      alt: 'Gallery image 1',
    },
    {
      src: '/gallery/e.gif',
      alt: 'Gallery image 2',
    },
    {
      src: '/gallery/squidward.png',
      alt: 'Gallery image 3',
    },
    {
      src: '/gallery/salam.png',
      alt: 'Gallery image 4',
    },
  ];

  return (
    <main className="flex min-h-dvh flex-col space-y-10">
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
              <h1 className="font-bold text-3xl tracking-tight">Gallery</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.1} key={image.src}>
                <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted/50">
                  <Image
                    alt={image.alt}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    src={image.src}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Gallery - Archives',
  description: 'A collection of photos and visual memories.',
};
