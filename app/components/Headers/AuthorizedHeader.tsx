import React from "react";
import { User } from "types";

interface Props {
  user: User;
}

export const AuthorizedHeader = ({ user }: Props) => {
  return (
    <div className="fixed top-0 w-full bg-white">
      Hi {user.username ? user.username : user.email}!
    </div>
  );
};
