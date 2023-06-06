import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContentLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  });
  return (
    <main
      data-aos="fade-up"
      className="flex flex-row w-full md:min-h-[85vh] justify-between  min-h-[90vh]  ease-in duration-300"
    >
      {children}
    </main>
  );
};

export default ContentLayout;
