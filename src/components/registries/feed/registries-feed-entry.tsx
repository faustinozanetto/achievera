'use client';

import React from 'react';
import { SafeRegistry } from '@typedefs/app.types';
import { Badge } from '@components/ui/badge/badge';
import { datesAreEqual } from '@lib/common.lib';
import RegistriesFeedEntryContent from './registries-feed-entry-content';

type RegistriesFeedEntryProps = {
  content: SafeRegistry[];
  date: string;
};

const RegistriesFeedEntry: React.FC<RegistriesFeedEntryProps> = (props) => {
  const { date, content } = props;

  const entryDate = new Date(date);
  const todayDate = new Date();

  const isEntryToday = datesAreEqual(entryDate, todayDate);

  return (
    <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold sm:text-lg">
          {entryDate.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        {isEntryToday && <Badge>Today</Badge>}
      </div>
      {content.length > 0 ? (
        <ul className="flex flex-col gap-1 list-decimal list-inside">
          {content.map((entry) => {
            return (
              <RegistriesFeedEntryContent key={`entry-content-${new Date(entry.createdAt).toISOString()}`}>
                {entry.content}
              </RegistriesFeedEntryContent>
            );
          })}
        </ul>
      ) : (
        <p>No content registered for this day!</p>
      )}
    </div>
  );
};

export default RegistriesFeedEntry;
