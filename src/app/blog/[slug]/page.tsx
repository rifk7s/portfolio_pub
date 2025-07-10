import createDOMPurify from 'dompurify';
import parse from 'html-react-parser'; // Use html-react-parser
import { JSDOM } from 'jsdom';
import { ChevronLeftIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts, getPost } from '@/data/blog';
import { DATA } from '@/data/resume';
import { formatDate } from '@/lib/utils';

const BLUR_FADE_DELAY = 0.04;

// Create a DOMPurify instance using jsdom for server-side rendering
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

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
  const post = await getPost(resolvedParams.slug);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
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
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const sanitizedContent = DOMPurify.sanitize(post.source);

  return (
    <main className="flex min-h-dvh flex-col space-y-10">
      <section>
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted transition-colors hover:bg-muted/50"
                href="/blog"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
              <h1 className="font-bold text-3xl tracking-tight">
                {post.metadata.title}
              </h1>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center justify-between text-sm">
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-muted-foreground text-sm">
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
            <article className="prose dark:prose-invert max-w-none">
              {/* Render sanitizedContent as React elements */}
              {parse(sanitizedContent)}
            </article>
          </BlurFade>
        </div>
      </section>

      <script suppressHydrationWarning type="application/ld+json">{`
        ${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.metadata.title,
          datePublished: post.metadata.publishedAt,
          dateModified: post.metadata.publishedAt,
          description: post.metadata.summary,
          image: post.metadata.image
            ? `${DATA.url}${post.metadata.image}`
            : `${DATA.url}/og?title=${post.metadata.title}`,
          url: `${DATA.url}/blog/${post.slug}`,
          author: {
            '@type': 'Person',
            name: DATA.name,
          },
        })}
      `}</script>
    </main>
  );
}
