import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CursorArrowRaysIcon, ArrowTopRightOnSquareIcon, ClockIcon } from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
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
      <DialogContent className="flex max-h-[90%] max-w-[90%] flex-col overflow-auto sm:max-w-[50%]">
        <section>
          <h3 className="text-lg font-bold text-Red">{project.team}</h3>
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p><ClockIcon className="mr-1 inline size-5" />發表時間：{project.demoTime}</p>
          <p className="mt-4">{project.description}</p>
        </section>
        <section>
          <h3 className="text-lg font-bold">團隊成員</h3>
          <span>{project.members}</span>
          <Image src={project.membersPhotoLink} alt="組照" width={400} height={300} />
        </section>
        <section>
          <h3 className="text-lg font-bold">
            海報
            <a href={project.posterLink} download>
              <DocumentArrowDownIcon className="ml-1 inline size-5" />
            </a>
            <a href={project.posterLink} target="_blank">
              <ArrowTopRightOnSquareIcon className="ml-1 inline size-5" />
            </a>
          </h3>
          <Image src={project.posterLink} alt="專題海報" width={594} height={841} />
        </section>
        <section>
          <h3 className="text-lg font-bold">
            簡報
          </h3>
          🚧 待更新 🚧
        </section>
        <section>
          <h3 className="text-lg font-bold">
            Demo 影片
          </h3>
          🚧 待更新 🚧
        </section>
      </DialogContent>
    </Dialog>
  );
}