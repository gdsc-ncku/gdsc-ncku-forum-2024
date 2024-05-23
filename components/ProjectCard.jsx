"use client";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CursorArrowRaysIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function ProjectCard({number, team, name, description, members, membersPhotoLink}) {
  return (
    <Dialog>
      <div className="relative block aspect-[5/3] h-72 border border-black bg-White p-5 transition-all duration-500 hover:scale-[102%]">
        <div className=" absolute right-5 border border-black p-1">{number}</div>
        <h3 className="text-xl">{team}</h3>
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-3">
          {description.length > 150
            ? description.substring(0, 150) + "......read more"
            : description}
        </p>
        <DialogTrigger className="absolute bottom-5 right-5 border border-black p-1 ">
          詳細介紹
          <CursorArrowRaysIcon className=" inline size-6" />
        </DialogTrigger>
      </div>

      <DialogContent className="flex max-w-[80%] flex-col lg:flex-row">
        <div className="lg:w-3/5">
          <h3 className="text-lg font-bold text-Red">{team}</h3>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="mt-4">{description}</p>
          <div className="mt-4 flex flex-wrap gap-5 text-sm">
            <div className="flex cursor-pointer items-center rounded-md border border-black p-2 ">
              海報(待更新)
              <ArrowTopRightOnSquareIcon className="ml-1 inline size-5" />
            </div>
            <div className="flex cursor-pointer items-center rounded-md border border-black p-2 ">
              簡報(待更新)
              <ArrowTopRightOnSquareIcon className="ml-1 inline size-5" />
            </div>
            <div className="flex cursor-pointer items-center rounded-md border border-black p-2 ">
              Demo 影片(待更新)
              <ArrowTopRightOnSquareIcon className="ml-1 inline size-5" />
            </div>
          </div>
        </div>
        <div>
          <div className="my-5 bg-gray-300">
            <Image src={membersPhotoLink} alt="組照" width={500} height={300} />
          </div>
          <div className="text-lg font-bold">團隊成員</div>
          <span>{members}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}