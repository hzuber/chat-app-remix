import React from "react";
import { UnauthorizedHeader } from "../Headers/UnauthorizedHeader";
import { Footer } from "../Footer/Footer";

export const UnauthorizedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <UnauthorizedHeader />
      <div className="page-content py-4 px-8">{children}</div>
      <Footer />
    </>
  );
};
