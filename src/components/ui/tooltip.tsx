'use client';

export {
  Content as TooltipPrimitiveContent,
  Provider as TooltipProvider,
  Root as Tooltip,
  Trigger as TooltipTrigger,
} from '@radix-ui/react-tooltip';

import { Content as TooltipPrimitiveContent } from '@radix-ui/react-tooltip';
import type { ComponentPropsWithoutRef, ComponentRef } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitiveContent>,
  ComponentPropsWithoutRef<typeof TooltipPrimitiveContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitiveContent
    className={cn(
      'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out',
      className
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitiveContent.displayName;

export { TooltipContent };
