'use client';

import React, { useMemo } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { SafeRegistry } from '@typedefs/app.types';
import RegistriesFeedEntry from './registries-feed-entry';
import RegistriesFeedEntryPlaceholder from './registries-feed-entry-placeholder';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const RegistriesFeed: React.FC = () => {
  const { data, isLoading } = useSWR<{ registries: SafeRegistry[] }>('/api/registries', fetcher);

  /**
   * This useMemo hook combines and groups registry data by date.
   */
  const combinedRegistries = useMemo(() => {
    if (!data || !data.registries) return [];

    const combined: { [date: string]: SafeRegistry[] } = data.registries.reduce((acc, curr) => {
      const date = new Date(curr.createdAt).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(curr);
      return acc;
    }, {});

    return Object.entries(combined);
  }, [data]);

  return (
    <div className="flex flex-col  gap-4">
      <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
        <h2 className="font-semibold text-lg">🌟 Daily Achievements & Goals</h2>
        <p className="mb-2 text-sm sm:text-base">
          See your progress, one day at a time. Explore your daily achievements and goals here. 🚀
        </p>
      </div>

      <div className="grid gap-2">
        {isLoading &&
          Array.from({ length: 2 }).map((_m, index) => {
            return <RegistriesFeedEntryPlaceholder key={`placeholder-${index}`} />;
          })}

        {!isLoading && combinedRegistries.length === 0 && (
          <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
            <p className="text-sm sm:text-base">
              Seems <span className="font-bold text-primary">you haven&apos;t created</span> any goals or achievements
              yet. Start now to track your progress with Achievera!
            </p>
          </div>
        )}

        {combinedRegistries.map((registry, index) => {
          return <RegistriesFeedEntry key={`registry-${index}`} date={registry[0]} content={registry[1]} />;
        })}
      </div>
    </div>
  );
};

export default RegistriesFeed;
