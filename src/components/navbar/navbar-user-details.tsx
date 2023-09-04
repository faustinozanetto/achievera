import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu/dropdown-menu";
import { SessionUser } from "typedefs/app.types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/ui/avatar/avatar";
import { LogoutIcon } from "@components/ui/icons/logout-icon";

type NavbarUserDetailsProps = {
  user: SessionUser;
};

const NavbarUserDetails: React.FC<NavbarUserDetailsProps> = (props) => {
  const { user } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user.image && <AvatarImage src={user.image} />}
          <AvatarFallback>FZ</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutIcon className="mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserDetails;