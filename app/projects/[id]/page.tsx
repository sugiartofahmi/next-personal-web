"use client";
import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { DetailLayout, Button } from "@/components";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "@/services";
import { TProject } from "./types";
const Projects: NextPage = (): ReactElement => {
  const params = useParams();
  const [project, setProject] = useState<TProject | null>();
  const getData = async (): Promise<void> => {
    const { data } = await api.get(`/projects/${params?.id}`);
    setProject(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DetailLayout isCenter={false}>
      <div className=" w-full h-full flex flex-col md:gap-y-5 gap-y-3 relative ">
        <Link
          href="/projects"
          className="md:left-10 md:top-10 left-3 top-3 fixed md:visible invisible z-10 text-4xl  bg-gradient-to-r from-[#3a80f5] to-[#4bdf80] rounded-full text-gray-200 cursor-pointer hover:opacity-80 "
        >
          <IoArrowBackCircle />
        </Link>

        <div className="w-full h-full relative">
          <img
            className="rounded-lg object-cover"
            src={String(project?.image.replace("/upload/", "/upload/q_80/"))}
          />
        </div>
        <div className="flex flex-col gap-y-2 text-base">
          <h1 className="md:text-4xl text-lg font-extrabold">
            {project?.title}
          </h1>
          <div className="flex flex-row gap-x-2 items-center text-sm capitalize">
            <MdDateRange />
            <h1>
              {new Date(project?.date as string).toLocaleString("default", {
                month: "long",
              })}{" "}
              - {new Date(project?.date as string).getFullYear()}
            </h1>
          </div>
          <p className="text-justify md:text-lg text-base">
            {project?.description}
          </p>
          <h1 className="md:text-2xl text-lg font-extrabold">Tech Stack</h1>
          <ul className="capitalize list-disc pl-5 md:text-lg text-base">
            {project?.tech.map((el: any, i: number) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </DetailLayout>
  );
};
export default Projects;
