import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ContentLayout from "../../layouts/ContentLayout";
import { useRecoilValue } from "recoil";
import { themeState } from "../../store";
const About = () => {
  const theme = useRecoilValue(themeState);
  return (
    <Fragment>
      <Navbar />
      <ContentLayout>
        <section className=" w-full flex flex-col md:gap-y-4 gap-y-3 md:py-8 py-4">
          <section className="flex flex-col gap-y-1">
            <h1 className="md:text-4xl text-2xl font-extrabold text-gradient md:w-[210px] w-[150px]">
              Who am I ?
            </h1>
            <h1 className="md:text-lg text-base md:pl-2 pl-1 dark:font-normal font-bold leading-relaxed">
              An informatics engineering student with experience in web
              programming, especially in front end development using HTML, CSS
              and JavaScript. Besides that, I also have expertise in using the{" "}
              <a
                target="_blank"
                href="https://react.dev/"
                className="underline underline-offset-4 decoration-dotted dark:decoration-1 decoration-2"
              >
                React JS
              </a>{" "}
              framework and{" "}
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                className="underline underline-offset-4 decoration-dotted dark:decoration-1 decoration-2"
              >
                Tailwind CSS
              </a>{" "}
              . I am very interested in doing an internship in front-end web
              development and I'm sure I can make a positive contribution for
              the company
            </h1>
          </section>
          <section className="flex flex-col gap-y-1">
            <h1 className="md:text-4xl text-2xl font-extrabold text-gradient md:w-[850px] ">
              What technology am I currently using ?
            </h1>
            <ul className="md:text-lg text-base list-disc pl-2 flex flex-wrap md:gap-3 gap-4">
              <img className="w-[80px]" src="/js-icon.svg" alt="" />
              <img className="w-[150px]" src="/node-icon.svg" alt="" />
              <img className="w-[100px]" src="/react-icon.svg" alt="" />
              <img className="w-[100px]" src="/tailwind-icon.svg" alt="" />

              <img
                className="w-[90px] "
                src={
                  theme == "dark"
                    ? "/express-icon.svg"
                    : "/express-black-icon.svg"
                }
                alt=""
              />

              <img className="w-[100px]" src="/mongodb-icon.svg" alt="" />
            </ul>
          </section>
        </section>
      </ContentLayout>
    </Fragment>
  );
};
export default About;
