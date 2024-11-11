import { User } from "types";
import { UserIcon } from "../UserIcon";
import { NavLink } from "@remix-run/react";

interface Props {
  user: User;
}

export const AuthorizedHeader = ({ user }: Props) => {
  return (
    <div className="flex justify-end items-center">
      <NavLink to={"/user"}>
        <div className="flex justify-between items-center">
          {user.icon && (
            <UserIcon
              height="25"
              width="25"
              icon={user.icon.icon}
              background={user.icon.background}
              padding={"p-2 mr-4"}
            />
          )}
          <p>Hi {user.username ? user.username : user.email}!</p>
        </div>
      </NavLink>
    </div>
  );
};
