const MainLayout = ({ children }) => {
  return (
    <main className="font-lato w-full h-full md:px-[20vh] px-[4vh]  dark:text-white text-[#232322]  dark:bg-[#232322] bg-white ease-in duration-300">
      {children}
    </main>
  );
};

export default MainLayout;
