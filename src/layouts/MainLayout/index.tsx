import { FC, ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <main className=" h-full w-full bg-gradient-to-r from-blue-500 to-green-400 flex flex-col md:flex-row px-5 py-5 gap-x-5 gap-y-5">
      {children}
    </main>
  );
};

export default MainLayout;
