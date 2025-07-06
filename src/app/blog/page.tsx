import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import { BlogCard } from "@/components/blog-card";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
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
              <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl space-y-4">
          {posts
            .toSorted((a, b) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
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
