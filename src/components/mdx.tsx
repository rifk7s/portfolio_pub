import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Table({
  data,
}: Readonly<{ data: { headers: string[]; rows: string[][] } }>) {
  const headers = data.headers.map((header) => <th key={header}>{header}</th>);
  const rows = data.rows.map((row) => {
    const rowKey = row.join('|');
    return (
      <tr key={rowKey}>
        {row.map((cell) => (
          <td key={`${rowKey}-${cell}`}>{cell}</td>
        ))}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(
  props: Readonly<React.AnchorHTMLAttributes<HTMLAnchorElement>>
) {
  const href = props.href ?? '';

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props}>{props.children ?? href}</a>;
  }

  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {props.children ?? href}
    </a>
  );
}

import type { ImageProps } from 'next/image';

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

// This replaces rehype-slug
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

export const globalComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Table,
};
