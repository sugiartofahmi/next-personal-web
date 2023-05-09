const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-row w-full md:min-h-[85vh] justify-between  min-h-[90vh]  ease-in duration-300">
      {children}
    </main>
  );
};

export default ContentLayout;
