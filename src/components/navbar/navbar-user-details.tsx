'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu/dropdown-menu';
import Image from 'next/image';
import { SessionUser } from 'typedefs/app.types';

import { LogoutIcon } from '@components/ui/icons/logout-icon';
import { signOut } from 'next-auth/react';
import { UserIcon } from '@components/ui/icons/user-icon';
import { useToast } from '@hooks/toasts/use-toast';
import { SettingsIcon } from '@components/ui/icons/settings-icon';
import { useRouter } from 'next/navigation';

type NavbarUserDetailsProps = {
  user: SessionUser;
};

const NavbarUserDetails: React.FC<NavbarUserDetailsProps> = (props) => {
  const { user } = props;

  const toast = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({ variant: 'success', content: 'Signed out successfully!' });
    } catch (err) {
      toast({ variant: 'danger', content: 'An error occurred!' });
    }
  };

  const handleSettings = () => {
    router.push('/profile');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative flex items-center justify-center h-10 w-10 shrink-0 overflow-hidden bg-background rounded-full">
          {user.image ? (
            <Image src={user.image} alt={`${user.name} Profile Picture`} width={75} height={75} />
          ) : (
            <UserIcon />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSettings}>
          <SettingsIcon className="mr-2" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogoutIcon className="mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserDetails;
