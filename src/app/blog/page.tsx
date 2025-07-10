import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { BlogCard } from '@/components/blog-card';
import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
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
              <h1 className="font-bold text-3xl tracking-tight">Blogs</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl space-y-4">
          {posts
            .toSorted((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.1} key={post.slug}>
                <BlogCard post={post} />
              </BlurFade>
            ))}
        </div>
      </section>
    </main>
  );
}
