import React from 'react';
import ThemeToggler from '@components/theme/theme-toggler';
import { getLoggedUser } from '@lib/auth.lib';
import Link from 'next/link';
import NavbarUserDetails from './navbar-user-details';
import NavbarSignIn from './navbar-sign-in';

const Navbar = async () => {
  const user = await getLoggedUser();

  return (
    <div className="border-b flex justify-between items-center py-4">
      <Link className="font-black text-3xl text-primary" href="/">
        Achievera
      </Link>

      <div className="flex gap-4 items-center">
        {user ? <NavbarUserDetails user={user} /> : <NavbarSignIn />}
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
