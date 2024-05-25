import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import projectData from "@/data/projectData";
import ProjectModalPage from "@/components/ProjectModalPage";

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
        <DialogTrigger className="absolute bottom-5 right-5 rounded-full border border-black px-3 py-1">
          詳細介紹
          <CursorArrowRaysIcon className=" inline size-6" />
        </DialogTrigger>
      </div>
      <ProjectModalPage number={number} />
    </Dialog>
  );
}