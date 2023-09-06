import React, { memo } from 'react';

type RegistriesFeedEntryContentProps = {
  children: React.ReactNode;
};

const RegistriesFeedEntryContent: React.FC<RegistriesFeedEntryContentProps> = memo((props) => {
  const { children } = props;

  return <li className="bg-background rounded-lg border p-1.5 font-medium text-sm sm:text-base">{children}</li>;
});

export default RegistriesFeedEntryContent;
