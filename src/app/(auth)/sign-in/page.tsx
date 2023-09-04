import React from "react";
import AuthSignInOptions from "@components/auth/sign-in/auth-sign-in-options";
import { Separator } from "@components/ui/separator/separator";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col bg-background-alternate rounded-lg shadow-lg border p-4 gap-2 text-start max-w-lg">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="leading-7">
          Join Achievera to start tracking and celebrating your daily
          achievements.
        </p>
        <Separator />
        <AuthSignInOptions />
      </div>
    </div>
  );
}
