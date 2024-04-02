import { HTMLAttributes } from 'react';

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`animate-pulse rounded-md bg-muted ${className}`} {...props} />;
}
