import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ContentLayout from "../../layouts/ContentLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
const About = () => {
  document.title = "Its Me | About";
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
          className=" w-full flex flex-col md:gap-y-5 gap-y-3 md:py-8 py-4"
        >
          <section className="flex flex-col gap-y-1">
            <h1 className="md:text-4xl text-2xl font-extrabold text-gradient md:w-[210px] w-[150px]">
              Who am I ?
            </h1>
            <p className="md:text-lg text-base md:pl-2 pl-1">
              I am a student pursuing a degree in technology. I have experience
              in web programming, especially in front-end development using
              HTML, CSS and JavaScript. I also have skills in using frameworks
              like React and Vue. I am very interested in doing an internship in
              front-end web development and am confident that I can add positive
              value to the company.
            </p>
          </section>
          <section className="flex flex-col gap-y-1">
            <h1 className="md:text-4xl text-2xl font-extrabold text-gradient md:w-[900px] ">
              What technology am I currently using ?
            </h1>
            <ul className="md:text-lg text-base list-disc md:pl-7 pl-5">
              <li>React JS</li>
              <li>Javascript</li>
              <li>Express JS</li>
              <li>Postgresql</li>
            </ul>
          </section>
        </section>
      </ContentLayout>
    </Fragment>
  );
};
export default About;
