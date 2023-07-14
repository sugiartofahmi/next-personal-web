"use client";

import { FC, Fragment, ReactElement } from "react";
import { TPropsMainLayout } from "./types";
import { Navbar } from "@/components/organisms";
export const MainLayout: FC<TPropsMainLayout> = ({
  children,
  isCenter,
}): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <div
        className={`w-full md:min-h-[85vh] min-h-[90vh] py-[2vh] flex  ${
          !!isCenter && "items-center"
        }`}
      >
        {children}
      </div>
    </Fragment>
  );
};
