"use client";
import { NextPage } from "next";
import { ReactElement } from "react";
import { MainLayout } from "@/components";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
const Home: NextPage = (): ReactElement => {
  return (
    <MainLayout isCenter={true}>
      <div className=" flex gap-y-7 md:flex-row flex-col justify-center w-full h-min items-center md:py-0 py-5 ">
        <div className="md:w-3/5 w-full flex flex-col md:items-start items-center md:gap-y-4 gap-y-3 ">
          <h1 className="md:text-3xl text-2xl font-bold">Hello world, i am</h1>
          <h1 className="md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3a80f5] to-[#4bdf80] md:text-left text-center">
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
          <div className="md:w-[400px] w-[200px] md:hidden flex">
            <Image
              src={`https://res.cloudinary.com/dmzjszisi/image/upload/v1689316850/fahmi_jo4r2u.jpg`}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-full"
            />
          </div>
          <p className="md:text-lg text-base md:text-left font-normal text-gray-300  text-center">
            Informatics engineering student at Nusantara Islamic University, has
            an interest in website development, especially in full stack web
            developer
          </p>
          <div className="flex gap-5 md:text-lg text-base font-medium ">
            <a
              target="_blank"
              className="underline underline-offset-4 decoration-dotted decoration-1 "
              href="https://res.cloudinary.com/dmzjszisi/image/upload/v1689334244/CV-MOHAMMAD_NURFAHMI_SUGIARTO_ui44ax.pdf"
            >
              Resume
            </a>
            <a
              target="_blank"
              className="underline underline-offset-4 decoration-dotted decoration-1 "
              href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto/"
            >
              Linked In
            </a>
            <a
              target="_blank"
              className="underline underline-offset-4 decoration-dotted decoration-1 "
              href="https://github.com/sugiartofahmi"
            >
              Github
            </a>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex  md:justify-end justify-center   ">
          <div className="md:w-[350px] w-[200px] md:flex hidden ">
            <Image
              src={`https://res.cloudinary.com/dmzjszisi/image/upload/v1689316850/fahmi_jo4r2u.jpg`}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Home;
