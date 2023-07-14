"use client";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: FC = (): ReactElement => {
  const pathname = usePathname();
  const navLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
  ];

  return (
    <header className="flex flex-row w-full justify-center md:h-[15vh] h-[10vh] items-center">
      <nav className="w-full h-full flex flex-row  items-center justify-center gap-x-5 font-bold md:text-lg text-base ">
        {navLink.map((el, i) => (
          <Link
            className={`${
              pathname === el.path &&
              "text-transparent  bg-clip-text bg-gradient-to-r from-[#3a80f5] to-[#4bdf80]"
            }`}
            key={i}
            href={el.path}
          >
            {el.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
