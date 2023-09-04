import React from "react";
import ThemeToggler from "@components/theme/theme-toggler";
import { getLoggedUser } from "@lib/auth.lib";
import NavbarUserDetails from "./navbar-user-details";
import NavbarSignIn from "./navbar-sign-in";

const Navbar = async () => {
  const user = await getLoggedUser();

  return (
    <div className="border-b flex justify-between items-center py-4">
      <span className="font-extrabold text-3xl text-primary">Achievera</span>

      <nav className="flex gap-4 items-center"></nav>

      <div className="flex gap-4 items-center">
        {user ? <NavbarUserDetails user={user} /> : <NavbarSignIn />}
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
