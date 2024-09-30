import React from "react";
import { AuthorizedHeader } from "../Headers/AuthorizedHeader";
import { Footer } from "../Footer/Footer";

export const AuthorizedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <AuthorizedHeader />
      <div className="page-content py-4 px-8">{children}</div>
      <Footer />
    </>
  );
};
