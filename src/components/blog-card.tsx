'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Post } from '@/data/blog';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: Post;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = (
    <Link href={`/blog/${post.slug}`}>
      <div
        className={cn(
          'h-full rounded-lg border bg-muted p-4 transition-all duration-300 ease-out',
          className
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{post.metadata.title}</h3>
          <ChevronRightIcon aria-hidden="true" className="size-4" />
        </div>
        <p className="text-muted-foreground text-sm">{post.metadata.summary}</p>
      </div>
    </Link>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.div
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
      {content}
    </motion.div>
  );
}
