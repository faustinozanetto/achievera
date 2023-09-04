"use client";

import React from "react";
import { SafeRegistry } from "@typedefs/app.types";
import RegistriesFeedEntryContent from "./registries-feed-entry-content";

type RegistriesFeedEntryProps = {
  date: string;
  content: SafeRegistry[];
};

const RegistriesFeedEntry: React.FC<RegistriesFeedEntryProps> = (props) => {
  const { date, content } = props;

  return (
    <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
      <h3 className="font-bold mb-2 sm:text-lg">
        {new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>
      <ul className="flex flex-col gap-1 list-decimal list-inside">
        {content.map((entry) => {
          return (
            <RegistriesFeedEntryContent
              key={`entry-content-${new Date(entry.createdAt).toISOString()}`}
            >
              {entry.content}
            </RegistriesFeedEntryContent>
          );
        })}
      </ul>
    </div>
  );
};

export default RegistriesFeedEntry;
