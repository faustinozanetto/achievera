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
import { useToast } from '@hooks/toasts/use-toast';
import axios from 'axios';
import { DeleteAccountApiResponse } from '@typedefs/api.types';
import { useMutation } from '@tanstack/react-query';

const UserProfileDangerZoneDeleteAccount: React.FC = () => {
  const toast = useToast();

  const { mutate: deleteAccount } = useMutation<DeleteAccountApiResponse, Error, unknown>({
    mutationKey: ['deleteAccount'],
    mutationFn: async () => {
      const response = await axios.delete<DeleteAccountApiResponse>('/api/account');
      return response.data;
    },
    onError: (err) => {
      toast({ variant: 'danger', content: err.message });
    },
    onSuccess: () => {
      toast({ variant: 'success', content: 'Account deleted successfully!' });
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
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
          <AlertDialogAction onClick={deleteAccount}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserProfileDangerZoneDeleteAccount;
