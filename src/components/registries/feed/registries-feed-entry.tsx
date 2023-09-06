import React, { memo } from 'react';
import { SafeRegistry } from '@typedefs/registries.types';
import { Badge } from '@components/ui/badge/badge';
import { datesAreEqual } from '@lib/common.lib';
import { motion } from 'framer-motion';
import RegistriesFeedEntryContent from './registries-feed-entry-content';

type RegistriesFeedEntryProps = {
  content: SafeRegistry[];
  date: string;
};

const RegistriesFeedEntry: React.FC<RegistriesFeedEntryProps> = memo((props) => {
  const { date, content } = props;

  // Reconstruct entry date from 2023-06-14 to Date type.
  const dateParts = date.split('-');
  const entryDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
  const todayDate = new Date();

  const isEntryToday = datesAreEqual(entryDate, todayDate);

  return (
    <motion.div
      className="bg-background-alternate p-4 shadow-lg rounded-lg border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.25,
      }}
    >
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
              <RegistriesFeedEntryContent key={`entry-content-${entry.id}`}>{entry.content}</RegistriesFeedEntryContent>
            );
          })}
        </ul>
      ) : (
        <p className="font-medium text-sm sm:text-base">No content registered for this day!</p>
      )}
    </motion.div>
  );
});

export default RegistriesFeedEntry;
