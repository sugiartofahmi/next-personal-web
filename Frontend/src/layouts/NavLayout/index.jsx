const NavLayout = ({ children }) => {
  return (
    <header className="font-lato  flex flex-row justify-between md:h-[15vh] h-[10vh]  items-center ease-in duration-300  ">
      {children}
    </header>
  );
};

export default NavLayout;
