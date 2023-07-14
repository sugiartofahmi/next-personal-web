"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { TPropsCard } from "./types";
import { Button } from "@/components/atoms";
export const Card: FC<TPropsCard> = ({
  image,
  href,
  description,
  title,
}): ReactElement => {
  const imageQuality = image.replace("/upload/", "/upload/q_20/");
  return (
    <div className=" md:w-[350px] w-[320px] md:h-[360px] h-[340px] rounded-lg border-[1px] border-gray-400 flex flex-col gap-4">
      <figure className="w-full h-[180px] relative">
        <Image
          className="rounded-t-lg object-cover object-center "
          src={imageQuality}
          objectFit="cover"
          fill
          alt=""
        />
      </figure>
      <div className="px-4 flex flex-col gap-1">
        <h1 className="md:text-2xl text-lg font-extrabold">{title}</h1>
        <p className="line-clamp-2 md:text-base text-sm dark:font-normal font-bold dark:text-gray-300 text-slate-900 ">
          {description}
        </p>
      </div>
      <div className="px-4 flex w-full justify-end">
        <Button href={href} text="See more" />
      </div>
    </div>
  );
};
