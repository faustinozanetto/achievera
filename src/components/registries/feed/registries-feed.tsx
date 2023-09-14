'use client';

import React, { useMemo } from 'react';

import { SafeRegistry } from '@typedefs/registries.types';
import { useRegistries } from '@hooks/registries/use-registries';
import { motion } from 'framer-motion';
import RegistriesFeedEntry from './registries-feed-entry';
import RegistriesFeedEntryPlaceholder from './registries-feed-entry-placeholder';
import RegistriesFeedLoadMore from './registries-feed-load-more';

const RegistriesFeed: React.FC = () => {
  const { registries, hasMore, isLoading, increasePage } = useRegistries();

  /**
   * This useMemo hook combines and groups registry data by date.
   */
  const combinedRegistries = useMemo(() => {
    if (registries === undefined) return [];

    const combined: Record<string, SafeRegistry[]> = registries.reduce((acc, curr) => {
      const date = new Date(curr.createdAt).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(curr);
      return acc;
    }, {});

    // If combined registries do not contain todays date, it means the user did not create a goal for today so we add a empty array at the date.
    const date = new Date().toISOString().split('T')[0];
    if (!combined[date]) {
      combined[date] = [];
    }

    return Object.entries(combined).sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime());
  }, [registries, isLoading]);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
        <h2 className="font-semibold text-lg">🌟 Daily Achievements & Goals</h2>
        <p className="text-sm sm:text-base">
          See your progress, one day at a time. Explore your daily achievements and goals here. 🚀
        </p>
      </div>

      <div className="grid gap-4">
        {/* Loading content placeholder */}
        {isLoading &&
          Array.from({ length: 2 }).map((_m, index) => {
            return <RegistriesFeedEntryPlaceholder key={`placeholder-${index}`} />;
          })}

        {/* No registries message */}
        {!isLoading && combinedRegistries.length === 0 && (
          <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
            <p className="text-sm sm:text-base">
              Seems <span className="font-bold text-primary">you haven&apos;t created</span> any goals or achievements
              yet. Start now to track your progress with Achievera!
            </p>
          </div>
        )}

        {/* Registries feed */}
        {!isLoading &&
          combinedRegistries.length > 0 &&
          combinedRegistries.map((registry, index) => {
            return (
              <motion.div
                key={`registry-${registry[0]}`}
                initial={{ opacity: 0, translateY: -15 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.2,
                }}
              >
                <RegistriesFeedEntry date={registry[0]} content={registry[1]} />
              </motion.div>
            );
          })}

        {!isLoading && hasMore && <RegistriesFeedLoadMore handleLoadMore={increasePage} />}
      </div>
    </div>
  );
};

export default RegistriesFeed;
