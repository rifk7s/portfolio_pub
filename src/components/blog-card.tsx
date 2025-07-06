"use client";

import { Post } from "@/data/blog";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
          "rounded-lg border bg-muted p-4 transition-all duration-300 ease-out h-full",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{post.metadata.title}</h3>
          <ChevronRightIcon className="size-4" aria-hidden="true" />
        </div>
        <p className="text-sm text-muted-foreground">
          {post.metadata.summary}
        </p>
      </div>
    </Link>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {content}
    </motion.div>
  );
}
