import React from 'react';
import Button from '@components/ui/buttons/button';
import Link from 'next/link';

const NavbarSignIn: React.FC = () => {
  return (
    <Button asChild variant="outline">
      <Link href="/sign-in">Sign In</Link>
    </Button>
  );
};

export default NavbarSignIn;
