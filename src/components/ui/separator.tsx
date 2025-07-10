'use client';

import { Root as SeparatorRoot } from '@radix-ui/react-separator';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Separator = forwardRef<
  React.ComponentRef<typeof SeparatorRoot>,
  React.ComponentPropsWithoutRef<typeof SeparatorRoot>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorRoot
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  )
);
Separator.displayName = SeparatorRoot.displayName;

export { Separator };
