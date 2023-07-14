"use client";

import { FC, ReactElement } from "react";
import { TPropsMainLayout } from "./types";
export const DetailLayout: FC<TPropsMainLayout> = ({
  children,
  isCenter,
}): ReactElement => {
  return (
    <div
      className={`w-full md:min-h-[85vh] min-h-[90vh] py-[6vh] flex  ${
        !!isCenter && "items-center"
      }`}
    >
      {children}
    </div>
  );
};
