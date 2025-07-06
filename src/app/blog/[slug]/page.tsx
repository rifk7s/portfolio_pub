import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  let post = await getPost(resolvedParams.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  readonly params: Promise<{
    slug: string;
  }>;
}) {
  const resolvedParams = await params;
  let post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-muted hover:bg-muted/50 transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">
                {post.metadata.title}
              </h1>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex justify-between items-center text-sm">
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)} (2mo ago)
                </p>
              </Suspense>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <article
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.source }}
            ></article>
          </BlurFade>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
    </main>
  );
}
