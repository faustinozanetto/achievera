"use client";

import React from "react";
import RegistriesCreateForm, {
  RegistriesCreateFormData,
} from "./registries-create-form";

const RegistriesCreate: React.FC = () => {
  const handleRegistrySubmit = async (data: RegistriesCreateFormData) => {
    const response = await fetch("/api/registries", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const d = await response.json();
    console.log({ d });
  };

  return (
    <div className="bg-background-alternate p-4 shadow-lg rounded-lg border">
      <h2 className="font-semibold text-lg">Set Your Goal or Achievement</h2>
      <p className="mb-2">
        Use the form below to set your goal or achievement with Achievera.
      </p>

      <RegistriesCreateForm onSubmit={handleRegistrySubmit} />
    </div>
  );
};

export default RegistriesCreate;
