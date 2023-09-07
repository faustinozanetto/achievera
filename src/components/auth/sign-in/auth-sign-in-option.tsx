'use client';

import React from 'react';
import Button from '@components/ui/buttons/button';
import { capitalize } from '@lib/common.lib';
import { AuthOption } from '@typedefs/app.types';
import { signIn } from 'next-auth/react';
import { useToast } from '@hooks/toasts/use-toast';

export type AuthSignInOptionProps = {
  icon: React.JSX.Element;
  option: AuthOption;
};

const AuthSignInOption: React.FC<AuthSignInOptionProps> = (props) => {
  const { icon, option } = props;

  const toast = useToast();

  const handleSignIn = async () => {
    try {
      await signIn(option, {
        redirect: true,
        callbackUrl: '/',
      });
      toast({ variant: 'success', content: 'Signed in successfully!' });
    } catch (err) {
      toast({ variant: 'danger', content: 'An error occurred!' });
    }
  };

  return (
    <Button size="lg" onClick={handleSignIn}>
      {icon}
      {capitalize(option)}
    </Button>
  );
};

export default AuthSignInOption;
