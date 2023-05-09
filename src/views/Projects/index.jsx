import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ContentLayout from "../../layouts/ContentLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
const Projects = () => {
  document.title = "Its Me | Projects";
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
          className=" w-full flex flex-col gap-y-6 md:py-8 py-4"
        >
          <section className="flex flex-col gap-y-1">
            <h1 className="md:text-4xl text-2xl font-extrabold text-gradient md:w-[210px] w-[150px]">
              Projects
            </h1>
            <p className="md:text-base text-sm">
              Here are some of my projects on front-end website development
            </p>
          </section>
          <section className="flex flex-wrap w-full gap-x-4 md:gap-y-5 gap-y-4">
            <section className="ease-in duration-300 md:w-[350px] w-[320px] md:h-[330px] h-[310px] rounded-lg border-[1px] border-[#232322] dark:border-white flex flex-col gap-4">
              <figure className="">
                <img className="rounded-t-lg" src="/shortway.png" alt="" />
              </figure>
              <section className="px-4 flex flex-col gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">Shortway</h1>
                <p className="md:text-base text-sm">
                  Create a website application to shorten long urls
                </p>
              </section>
              <section className="px-4 flex flex-row gap-2 ">
                <a
                  target="_blank"
                  href="https://github.com/sugiartofahmi/react-url-shortener"
                >
                  <AiFillGithub
                    size={27}
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                  />
                </a>
                <a target="_blank" href="https://shortway.mnfs.dev">
                  <TbWorld
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                    size={27}
                  />
                </a>
              </section>
            </section>
            <section className="ease-in duration-300 md:w-[350px] w-[320px] md:h-[330px] h-[310px] rounded-lg border-[1px] border-[#232322] dark:border-white flex flex-col gap-4">
              <figure className="">
                <img className="rounded-t-lg" src="/quickchat.png" alt="" />
              </figure>
              <section className="px-4 flex flex-col gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">Quickchat</h1>
                <p className="md:text-base text-sm">
                  Create a website application that generates urls from whatsapp
                  numbers
                </p>
              </section>
              <section className="px-4 flex flex-row gap-2 ">
                <a
                  target="_blank"
                  href="https://github.com/sugiartofahmi/react-quick-chat"
                >
                  <AiFillGithub
                    size={27}
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                  />
                </a>
                <a target="_blank" href="https://quickchat.mnfs.dev">
                  <TbWorld
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                    size={27}
                  />
                </a>
              </section>
            </section>
            <section className="ease-in duration-300 md:w-[350px] w-[320px] md:h-[330px] h-[310px] rounded-lg border-[1px] border-[#232322] dark:border-white flex flex-col gap-4">
              <figure className="">
                <img className="rounded-t-lg" src="/weather.png" alt="" />
              </figure>
              <section className="px-4 flex flex-col gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">
                  Weather App
                </h1>
                <p className="md:text-base text-sm">
                  Create a website application to see the weather with the city
                  search feature
                </p>
              </section>
              <section className="px-4 flex flex-row gap-2 ">
                <a
                  target="_blank"
                  href="https://github.com/sugiartofahmi/react-weather-app"
                >
                  <AiFillGithub
                    size={27}
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                  />
                </a>
                <a target="_blank" href="https://weather.mnfs.dev">
                  <TbWorld
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                    size={27}
                  />
                </a>
              </section>
            </section>
            <section className="ease-in duration-300 md:w-[350px] w-[320px] md:h-[330px] h-[310px] rounded-lg border-[1px] border-[#232322] dark:border-white flex flex-col gap-4">
              <figure className="">
                <img className="rounded-t-lg" src="/todo.png" alt="" />
              </figure>
              <section className="px-4 flex flex-col gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">Todo List</h1>
                <p className="md:text-base text-sm">
                  Create a website application to create todo lists with local
                  storage
                </p>
              </section>
              <section className="px-4 flex flex-row gap-2 ">
                <a
                  target="_blank"
                  href="https://github.com/sugiartofahmi/react-todo"
                >
                  <AiFillGithub
                    size={27}
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                  />
                </a>
                <a target="_blank" href="https://todo.mnfs.dev">
                  <TbWorld
                    className="cursor-pointer hover:scale-125 ease-in duration-300"
                    size={27}
                  />
                </a>
              </section>
            </section>
          </section>
        </section>
      </ContentLayout>
    </Fragment>
  );
};
export default Projects;
