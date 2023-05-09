import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import NavLayout from "../../layouts/NavLayout";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") == null
      ? "dark"
      : JSON.parse(localStorage.getItem("theme"))
  );
  const location = useLocation();
  const [nav, setNav] = useState([
    {
      element: "Home",
      path: "/",
      isActive: false,
    },
    {
      element: "About",
      path: "/about",
      isActive: false,
    },
    {
      element: "Projects",
      path: "/projects",
      isActive: false,
    },
  ]);
  useEffect(() => {
    setNav((prev) =>
      prev.map((el) => {
        if (el.path == location.pathname) {
          return { ...el, isActive: true };
        } else {
          return { ...el, isActive: false };
        }
      })
    );
  }, []);
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
            <Link
              key={i}
              className={`nav cursor-pointer ${el.isActive && "active"}`}
              to={`${el.path}`}
            >
              {el.element}
            </Link>
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
