import React from 'react';
import { cn } from '@lib/common.lib';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {};

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
