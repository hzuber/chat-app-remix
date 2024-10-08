import React from "react";
import { useOutletContext } from "@remix-run/react";
import "../assets/styles/Global.scss";
import { AuthorizedHeader } from "./Headers/AuthorizedHeader";
import { Footer } from "./Footer/Footer";
import { UnauthorizedHeader } from "./Headers/UnauthorizedHeader";
import { User } from "types";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const user: User = useOutletContext();
  return (
    <>
      {user ? <AuthorizedHeader user={user} /> : <UnauthorizedHeader />}
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
};
