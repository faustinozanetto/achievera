'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@components/ui/alert-dialog/alert-dialog';
import Button from '@components/ui/buttons/button';
import { useIsMounted } from '@hooks/common/use-is-mounted';
import { useToast } from '@hooks/toasts/use-toast';
import axios from 'axios';
import { DeleteAccountApiResponse } from '@typedefs/api.types';
import { useRouter } from 'next/navigation';

const UserProfileDangerZoneDeleteAccount: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const isMounted = useIsMounted();

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete<DeleteAccountApiResponse>('/api/account');
      const { data } = response;
      if (!data.success) {
        toast({ variant: 'danger', content: 'Could not delete account!' });
      }
      router.push('/');
    } catch (err) {
      toast({ variant: 'danger', content: 'An error occurred!' });
    }
  };

  if (!isMounted) return null;

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAccount}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserProfileDangerZoneDeleteAccount;
