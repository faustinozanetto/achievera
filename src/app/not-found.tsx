import React from "react";

import Link from "next/link";
import Button from "@components/ui/buttons/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col bg-background-alternate rounded-lg shadow-lg border p-6 gap-2 text-start max-w-lg">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          The page does not exist!
        </h1>
        <p className="max-w-lg">
          We apologize for the inconvenience, but it seems that an error has
          occurred. Our team has been notified and is working diligently to
          resolve the issue.
        </p>

        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
