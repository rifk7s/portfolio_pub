import { cva } from 'class-variance-authority';
import type React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  readonly skill: string;
  readonly className?: string;
}

const skillBadgeVariants = cva(
  'flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-sm italic transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border bg-muted text-muted-foreground hover:bg-muted/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const skillIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  MySQL: SiMysql,
  Git: FaGitAlt,
  JavaScript: SiJavascript,
  Java: SiOpenjdk,
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  GitHub: SiGithub,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
};

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  const IconComponent = skillIcons[skill];

  return (
    <div
      className={cn(
        skillBadgeVariants({ variant: 'outline-solid' }),
        className
      )}
    >
      {IconComponent && <IconComponent className="size-4" />}
      <span className="font-medium text-sm">{skill}</span>
    </div>
  );
}
