import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ContentLayout from "../../layouts/ContentLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
const Home = () => {
  document.title = "Its Me | Home";
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
          className="md:w-1/2 w-full flex flex-col gap-y-3 justify-center"
        >
          <h1 className="md:text-3xl text-2xl font-bold">Hello world, i am,</h1>
          <h1 className="md:text-5xl text-4xl font-bold text-gradient ">
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
          <p className="md:text-lg text-base">
            Informatics engineering student at Nusantara Islamic University, has
            an interest in website development, especially in front end web
            developer
          </p>
          <section>
            <button className="md:text-base text-sm shadow-lg button-shadow-gradient dark:text-white text-[#232322]  dark:bg-[#232322] bg-white mt-2 p-2 rounded hover:scale-110 ease-in duration-300">
              <a href="/CV-Mohammad Nurfahmi Sugiarto.pdf">Download CV</a>
            </button>
          </section>
        </section>
      </ContentLayout>
    </Fragment>
  );
};
export default Home;
