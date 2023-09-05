import React from 'react';
import { Skeleton } from '@components/ui/skeleton/skeleton';

const RegistriesFeedEntryPlaceholder: React.FC = () => {
  return (
    <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
      <Skeleton className="h-6 w-60 mb-2" />

      <ul className="flex flex-col gap-1 list-decimal list-inside">
        {Array.from({ length: 3 }).map((_, index) => {
          return <Skeleton key={`placeholder-${index}`} className="h-6 w-full" />;
        })}
      </ul>
    </div>
  );
};

export default RegistriesFeedEntryPlaceholder;
