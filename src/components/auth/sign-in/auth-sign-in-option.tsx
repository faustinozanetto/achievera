"use client";

import React from "react";
import Button from "@components/ui/buttons/button";
import { capitalize } from "@lib/common.lib";
import { AuthOption } from "@typedefs/app.types";
import { signIn } from "next-auth/react";

export type AuthSignInOptionProps = {
  icon: JSX.Element;
  option: AuthOption;
};

const AuthSignInOption: React.FC<AuthSignInOptionProps> = (props) => {
  const { icon, option } = props;

  const handleSignIn = async () => {
    await signIn(option, {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <Button size="lg" onClick={handleSignIn}>
      {icon}
      {capitalize(option)}
    </Button>
  );
};

export default AuthSignInOption;
