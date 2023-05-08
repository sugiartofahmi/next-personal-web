import { BsMoonFill } from "react-icons/bs";
import NavLayout from "../../layouts/NavLayout";
import { useRecoilState } from "recoil";
import { navState } from "../../store";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useRecoilState(navState);
  const handleNav = (element) => {
    setNav((prev) =>
      prev.map((el) => {
        if (el.element == element) {
          return { ...el, isActive: true };
        } else {
          return { ...el, isActive: false };
        }
      })
    );
  };

  return (
    <NavLayout>
      <figure className="md:w-1/3 w-full md:flex hidden ">
        <figcaption className="font-bold text-xl">
          Fahmi | Personal Web
        </figcaption>
      </figure>
      <nav className="md:w-1/3 w-full flex justify-center items-center">
        <ul className="flex flex-row  gap-5 font-semibold md:text-lg text-base">
          {nav.map((el, i) => (
            <Link
              key={i}
              onClick={() => handleNav(el.element)}
              className={`cursor-pointer ${el.isActive && "active"}`}
              to={`${el.path}`}
            >
              {el.element}
            </Link>
          ))}
        </ul>
      </nav>
      <section className="md:w-1/3 w-full flex items-center justify-end ">
        <section className="p-2 border-[1px] rounded-lg cursor-pointer">
          <BsMoonFill className="icon" />
        </section>
      </section>
    </NavLayout>
  );
};

export default Navbar;
