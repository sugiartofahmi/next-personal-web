import { ReactNode, FC } from "react";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <main className="w-full h-full text-white bg-[#232322] px-[10vh] ">
      {children}
    </main>
  );
};

export default MainLayout;
