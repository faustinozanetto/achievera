import React from "react";
import { SafeRegistry } from "@typedefs/app.types";

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
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>
      <ul className="flex flex-col gap-1 list-decimal list-inside">
        {content.map((entry, index) => {
          return (
            <li
              key={new Date(entry.createdAt).toISOString()}
              className="bg-background rounded-lg border p-1 font-medium text-sm sm:text-base"
            >
              {entry.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RegistriesFeedEntry;
