import RegistriesCreate from "@components/registries/create/registries-create";
import RegistriesFeed from "@components/registries/feed/registries-feed";
import React from "react";

export default async function HomePage() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
        <h1 className="text-2xl font-bold">👋 Welcome Back!</h1>
      </div>

      <RegistriesCreate />
      <RegistriesFeed />
    </div>
  );
}
