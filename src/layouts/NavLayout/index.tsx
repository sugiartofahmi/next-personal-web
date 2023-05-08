import { ReactNode, FC } from "react";

type NavLayoutType = {
  children: ReactNode;
};

const NavLayout: FC<NavLayoutType> = ({ children }) => {
  return (
    <header className="font-lato text-white flex flex-row justify-between md:h-[15vh] h-[9vh] bg-[#232322] items-center md:px-[10vh] px-[4vh] ">
      {children}
    </header>
  );
};

export default NavLayout;
