import type { ElementType, ReactNode } from 'react';
import { cn } from '~/lib/utils';

export default function Container({
  className,
  as: Component = 'div',
  children,
}: {
  className?: string;
  as?: ElementType;
  children: ReactNode;
}) {
  return <Component className={cn(className, 'max-w-screen-2xl mx-auto max-sm:px-2 sm:px-4 md:px-6 lg:px-8')}>{children}</Component>;
}
