'use client';

import Button from '@components/ui/buttons/button';
import React from 'react';

type RegistriesFeedLoadMoreProps = {
  handleLoadMore: React.MouseEventHandler<HTMLButtonElement>;
};

const RegistriesFeedLoadMore: React.FC<RegistriesFeedLoadMoreProps> = (props) => {
  const { handleLoadMore } = props;

  return (
    <div className="flex flex-col gap-4">
      <Button className="sm:ml-auto" onClick={handleLoadMore}>
        Load More
      </Button>
    </div>
  );
};

export default RegistriesFeedLoadMore;
