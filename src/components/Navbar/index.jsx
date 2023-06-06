import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import NavLayout from "../../layouts/NavLayout";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../../store";

const Navbar = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const nav = [
    {
      element: "Home",
      path: "/",
    },
    {
      element: "About",
      path: "/about",
    },
    {
      element: "Projects",
      path: "/projects",
    },
  ];

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const togleDarkMod = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <NavLayout>
      <figure className="md:w-1/3 w-full md:flex hidden ">
        <figcaption className="font-bold text-xl">
          Fahmi Sugiarto | Personal Web
        </figcaption>
      </figure>
      <nav className="md:w-1/3 w-full flex justify-center items-center">
        <ul className="flex flex-row  md:gap-5 gap-4 dark:font-bold font-extrabold md:text-lg text-base">
          {nav.map((el, i) => (
            <NavLink key={i} className="nav cursor-pointer " to={`${el.path}`}>
              {el.element}
            </NavLink>
          ))}
        </ul>
      </nav>
      <section className="md:w-1/3 w-full flex items-center justify-end ">
        <section className="p-2 border-[1px] border-[#232322] dark:border-white rounded-lg cursor-pointer">
          {theme == "dark" ? (
            <BsMoonFill onClick={togleDarkMod} className="icon" />
          ) : (
            <BsFillSunFill onClick={togleDarkMod} className="icon" />
          )}
        </section>
      </section>
    </NavLayout>
  );
};

export default Navbar;
