import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import projectData from "@/data/projectData";

export default function ProjectModalPage({number}) {
  const project = projectData.find((project) => project.number === number);

  return (
    <DialogContent className="flex max-w-[80%] flex-col lg:flex-row">
      <div className="lg:w-3/5">
        <h3 className="text-lg font-bold text-Red">{project.team}</h3>
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p><ClockIcon className="mr-1 inline size-5" />發表時間：{project.demoTime}</p>
        <p className="mt-4">{project.description}</p>
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
          <Image src={project.membersPhotoLink} alt="組照" width={500} height={300} />
        </div>
        <div className="text-lg font-bold">團隊成員</div>
        <span>{project.members}</span>
      </div>
    </DialogContent>
  );
}