"use client";
import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { MainLayout } from "@/components";
import { Card } from "@/components";
import { api } from "@/services";
import { TProject } from "./types";
const Projects: NextPage = (): ReactElement => {
  const [projects, setProjects] = useState<[] | null>([]);
  const getData = async (): Promise<void> => {
    const { data } = await api.get("/api/projects");
    setProjects(data?.projects);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <MainLayout isCenter={false}>
      <div className=" w-full h-full  flex flex-col md:gap-y-5 gap-y-3 ">
        <div className="flex flex-col gap-y-1">
          <h1 className="md:text-4xl text-2xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#3a80f5] to-[#4bdf80] md:w-48 w-28 ">
            Projects
          </h1>
          <p className="md:text-base text-sm dark:font-normal font-bold text-gray-300 ">
            Here are some of my projects on web development
          </p>
        </div>
        <div className="flex flex-wrap w-full gap-x-4 md:gap-y-5 gap-y-4">
          {projects?.map((el: TProject, i: number) => (
            <Card
              key={i}
              title={el.title}
              href={`/projects/${el.slug}`}
              description={el.description}
              image={el.image}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
export default Projects;
