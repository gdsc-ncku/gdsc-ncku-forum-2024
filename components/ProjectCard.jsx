import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CursorArrowRaysIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import projectData from "@/data/projectData";

export default function ProjectCard({number}) {
  const project = projectData.find((project) => project.number === number);

  return (
    <Dialog>
      <div className="relative block aspect-[5/3] h-[calc(50%_-_10px)] border border-black bg-White p-5 transition-all duration-500 hover:scale-[102%]">
        <div className=" absolute right-5 border border-black p-1">{project.number}</div>
        <h3 className="text-xl">{project.team}</h3>
        <h3 className="text-xl font-extrabold">{project.name}</h3>
        <p className="mt-3 text-xs sm:text-base">
          {project.description.length > 150
            ? project.description.substring(0, 150) + "......read more"
            : project.description}
        </p>
        <DialogTrigger className="absolute bottom-5 right-5 rounded-full border border-black px-3 py-1 hover:bg-gray-300">
          詳細介紹
          <CursorArrowRaysIcon className=" inline size-6" />
        </DialogTrigger>
      </div>
      <DialogContent className="flex max-h-[90%] max-w-[80%] flex-col overflow-auto md:flex-row">
        <div className="md:w-3/5">
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
        <div className="md:w-2/5">
          <div className="my-5 h-[150px] w-[200px] bg-gray-300 sm:h-[300px] sm:w-[400px]">
            <Image src={project.membersPhotoLink} alt="組照" width={400} height={300} />
          </div>
          <div className="text-lg font-bold">團隊成員</div>
          <span>{project.members}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}