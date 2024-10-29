import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import "../assets/styles/Global.scss";
import { AuthorizedHeader } from "./Headers/AuthorizedHeader";
import { Footer } from "./Footer/Footer";
import { UnauthorizedHeader } from "./Headers/UnauthorizedHeader";
import { User } from "types";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const user: User = useOutletContext();
  const [bodyTopPadding, setBodyTopPadding] = useState<number | null>(null);
  const [bodyBottomPadding, setBodyBottomPadding] = useState<number | null>(
    null
  );
  const [contentHeight, setContentHeight] = useState<number | null>();
  const headerRefContainer = useRef<HTMLDivElement | null>(null);
  const footerRefContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRefContainer.current) {
      setBodyTopPadding(headerRefContainer.current.offsetHeight);
    }
  }, [headerRefContainer]);

  useEffect(() => {
    if (footerRefContainer.current) {
      setBodyBottomPadding(footerRefContainer.current.offsetHeight);
    }
  }, [footerRefContainer]);

  useEffect(() => {
    if (bodyBottomPadding && bodyTopPadding)
      setContentHeight(window.innerHeight - bodyBottomPadding - bodyTopPadding);
  }, [bodyBottomPadding, bodyTopPadding]);

  return (
    <div
      className="page min-h-screen flex"
      style={{
        paddingTop: `${bodyTopPadding}px`,
        paddingBottom: `${bodyBottomPadding}px`,
      }}
    >
      <div
        className="header-container fixed top-0 w-full bg-slate-100 p-2"
        ref={headerRefContainer}
      >
        {user ? <AuthorizedHeader user={user} /> : <UnauthorizedHeader />}
      </div>
      <div
        className="page-content"
        style={{
          maxHeight: `${contentHeight}px`,
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <div
        ref={footerRefContainer}
        className="footer-container absolute bottom-0 w-full bg-white p-2"
      >
        <Footer />
      </div>
    </div>
  );
};
