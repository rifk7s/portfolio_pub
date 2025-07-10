'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  readonly title: string;
  readonly href?: string;
  readonly description: string;
  readonly dates: string;
  readonly tags: readonly string[];
  readonly link?: string;
  readonly image?: string;
  readonly video?: string;
  readonly links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  readonly className?: string;
}

// Move any inline JSX or components outside the parent component
const BadgeComponent = ({ tag, index }: { tag: string; index: number }) => (
  <motion.div
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    key={tag}
    transition={{
      delay: index * 0.05,
      duration: 0.2,
    }}
  >
    <Badge className="px-1 py-0 text-[10px]" variant="secondary">
      {tag}
    </Badge>
  </motion.div>
);

const MarkdownParagraph = (
  props: React.HTMLAttributes<HTMLParagraphElement>
) => (
  <p
    {...props}
    className="prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-xs"
  />
);

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <motion.div
      className="h-full"
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <Card
        className={
          'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
        }
      >
        <Link
          className={cn('block cursor-pointer', className)}
          href={href ?? '#'}
        >
          {video && (
            <video
              autoPlay
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              loop
              muted
              playsInline
              src={video}
            />
          )}
          {image && (
            <div className="h-40 overflow-hidden">
              <Image
                alt={title}
                className="pointer-events-auto h-40 w-full object-cover object-top"
                height={300}
                src={image}
                width={500}
              />
            </div>
          )}
        </Link>
        <CardHeader className="flex-grow px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace('https://', '')
                .replace('www.', '')
                .replace('/', '')}
            </div>
            <Markdown
              components={{
                p: MarkdownParagraph,
              }}
            >
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag, index) => (
                <BadgeComponent index={index} key={tag} tag={tag} />
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((linkItem, _idx) => (
                <Link
                  href={linkItem?.href}
                  key={`${linkItem.type}-${linkItem.href}`}
                  target="_blank"
                >
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
