import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function GalleryPage() {
  // Personal images from the public folder (excluding work projects)
  const galleryImages = [
    {
      src: "/gallery/cats.avif",
      alt: "Gallery image 1"
    },
    {
      src: "/gallery/e.gif", 
      alt: "Gallery image 2"
    },
    {
      src: "/gallery/squidward.png",
      alt: "Gallery image 3"
    },
    {
      src: "/gallery/salam.png",
      alt: "Gallery image 4"
    },
    
  ];

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
              <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
            </div>
          </BlurFade>
        </div>
      </section>
      
      <section>
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, id) => (
              <BlurFade key={image.src} delay={BLUR_FADE_DELAY * 2 + id * 0.1}>
                <div className="aspect-square relative overflow-hidden rounded-lg border bg-muted/50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
  title: "Gallery - Archives",
  description: "A collection of photos and visual memories.",
};
