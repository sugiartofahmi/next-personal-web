import Link from "next/link";
import { FC } from "react";
import { TPropsButton } from "./types";
export const Button: FC<TPropsButton> = ({ href, text, target }) => {
  return (
    <Link
      href={href}
      target={target}
      className="bg-gradient-to-r from-blue-500 to-green-400 px-4 py-2 rounded-lg font-semibold  text-gray-200 hover:opacity-80  text-base"
    >
      {text}
    </Link>
  );
};
