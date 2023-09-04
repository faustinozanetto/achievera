import React from "react";

type RegistriesFeedEntryContentProps = {
  children: React.ReactNode;
};

const RegistriesFeedEntryContent: React.FC<RegistriesFeedEntryContentProps> = (
  props
) => {
  const { children } = props;

  return (
    <li className="bg-background rounded-lg border p-1 font-medium text-sm sm:text-base">
      {children}
    </li>
  );
};

export default RegistriesFeedEntryContent;
