import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ContentLayout from "../../layouts/ContentLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  });
  return (
    <Fragment>
      <Navbar />
      <ContentLayout>
        <section
          data-aos="fade-up"
          className=" flex gap-y-7 md:flex-row flex-col justify-center w-full items-center md:py-0 py-5"
        >
          <section className="md:w-1/2 w-full flex flex-col md:items-start items-center md:gap-y-4 gap-y-3 ">
            <h1 className="md:text-3xl text-2xl font-bold">
              Hello world, i am,
            </h1>
            <h1 className="md:text-5xl text-4xl font-bold text-gradient md:text-left text-center">
              <Typewriter
                words={["MOHAMMAD NURFAHMI SUGIARTO"]}
                loop={4}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <section className="md:w-[400px] w-[200px] md:hidden flex">
              <img className="rounded-full" src="/fahmi.jpg" alt="" />
            </section>
            <p className="md:text-lg text-base md:text-left font-light text-gray-300 text-center">
              Informatics engineering student at Nusantara Islamic University,
              has an interest in website development, especially in front end
              web developer
            </p>
            <section className="flex gap-5 md:text-lg text-base">
              <a
                className="underline underline-offset-4 decoration-dotted decoration-1"
                href="/CV-MOHAMMAD NURFAHMI SUGIARTO.pdf"
              >
                Resume
              </a>
              <a
                className="underline underline-offset-4 decoration-dotted decoration-1"
                href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto/"
              >
                Linked In
              </a>
              <a
                className="underline underline-offset-4 decoration-dotted decoration-1"
                href="https://github.com/sugiartofahmi"
              >
                Github
              </a>
            </section>
          </section>

          <section className="md:w-1/2 w-full flex  md:justify-end justify-center   ">
            <section className="md:w-[350px] w-[200px] md:flex hidden">
              <img className="rounded-full" src="/fahmi.jpg" alt="" />
            </section>
          </section>
        </section>
      </ContentLayout>
    </Fragment>
  );
};
export default Home;
