import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import "../assets/styles/Global.scss";
import { AuthorizedHeader } from "./Headers/AuthorizedHeader";
import { Footer } from "./Footer/Footer";
import { UnauthorizedHeader } from "./Headers/UnauthorizedHeader";
import { User } from "types";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const user: User = useOutletContext();
  // const [bodyTopPadding, setBodyTopPadding] = useState<number | null>(null);
  // const [bodyBottomPadding, setBodyBottomPadding] = useState<number | null>(
  //   null
  // );
  // const headerRefContainer = useRef<HTMLDivElement | null>(null);
  // const footerRefContainer = useRef<HTMLDivElement | null>(null);

  // // function roundToHalf(value: number) {
  // //   let decimal = value - Math.trunc(value);
  // //   decimal = Math.round(decimal * 10);
  // //   if (decimal === 5) {
  // //     return Math.trunc(value) + 0.5;
  // //   }
  // //   if (decimal < 3 || decimal > 7) {
  // //     return Math.round(value);
  // //   } else {
  // //     return Math.trunc(value) + 0.5;
  // //   }
  // // }

  // useEffect(() => {
  //   const calculateRem = (num: number) => {
  //     const start = num / 16;
  //     return start + 2;
  //   };

  //   if (headerRefContainer.current) {
  //     const paddingInRem = calculateRem(
  //       headerRefContainer.current.offsetHeight
  //     );
  //     setBodyTopPadding(paddingInRem);
  //   }
  // }, [headerRefContainer]);

  // useEffect(() => {
  //   const calculateRem = (num: number) => {
  //     const start = num / 16;
  //     return start + 1;
  //   };

  //   if (footerRefContainer.current) {
  //     const paddingInRem = calculateRem(
  //       footerRefContainer.current.offsetHeight
  //     );
  //     setBodyBottomPadding(paddingInRem);
  //   }
  // }, [footerRefContainer]);

  return (
    <>
      <div
        className="header-container fixed top-0 w-full bg-white p-2"
        // ref={headerRefContainer}
      >
        {user ? <AuthorizedHeader user={user} /> : <UnauthorizedHeader />}
      </div>
      <div className="page-content">{children}</div>
      <div
        // ref={footerRefContainer}
        className="footer-container absolute bottom-0 w-full bg-white p-2"
      >
        <Footer />
      </div>
    </>
  );
};
