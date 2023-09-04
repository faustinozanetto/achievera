import React from "react";
import ThemeToggler from "@components/theme/theme-toggler";

const Navbar: React.FC = () => {
  return (
    <div className="border-b flex justify-between items-center mx-4 py-2 mb-4">
      <span className="font-extrabold text-3xl">Achievera</span>

      <nav className="flex gap-2 items-center"></nav>

      <ThemeToggler />
    </div>
  );
};

export default Navbar;
