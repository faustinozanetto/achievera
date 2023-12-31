import React from 'react';
import { GithubIcon } from '@components/ui/icons/github-icon';
import { GoogleIcon } from '@components/ui/icons/google-icon';
import AuthSignInOption, { AuthSignInOptionProps } from './auth-sign-in-option';

const AUTH_OPTIONS: AuthSignInOptionProps[] = [
  {
    icon: <GithubIcon className="mr-2" />,
    option: 'github',
  },
  {
    icon: <GoogleIcon className="mr-2" />,
    option: 'google',
  },
];

const AuthSignInOptions: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {AUTH_OPTIONS.map((option) => {
        return <AuthSignInOption key={option.option} {...option} />;
      })}
    </div>
  );
};

export default AuthSignInOptions;
