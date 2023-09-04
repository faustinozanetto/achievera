import React from "react";
import { AuthSignInOptionProps } from "./auth-sign-in-option";

const AUTH_OPTIONS: AuthSignInOptionProps[] = [{}];

const AuthSignIn: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {AUTH_OPTIONS.map((option, index) => {})}
    </div>
  );
};

export default AuthSignIn;
