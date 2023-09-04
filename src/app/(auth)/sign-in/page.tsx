import React from "react";
import AuthSignIn from "@components/auth/sign-in/auth-sign-in";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col bg-background-alternate rounded-lg shadow-lg border p-4 gap-2 text-start max-w-3xl">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="leading-7">
          Join Achievera or sign in to start tracking and celebrating your daily
          achievements.
        </p>
        <AuthSignIn />
      </div>
    </div>
  );
}
