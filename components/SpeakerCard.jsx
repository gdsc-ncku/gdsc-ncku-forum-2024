import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";
import speakerData from "@/data/speakerData";

export default function SpeakerCard({name}) {
  const speaker = speakerData.find((speaker) => speaker.name === name);

  return (
    <Dialog>
      <DialogTrigger className="agenda-item min-w-72 justify-start px-3 hover:bg-gray-200">
        <div className="relative mr-2 flex size-16 shrink-0 overflow-hidden rounded-full">
          <Image src={speaker.photoLink} alt={speaker.name} width={200} height={200} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-normal">{speaker.name}</h2>
          <h1 className="text-left text-sm font-bold sm:text-lg">{speaker.agendaTitle}</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90%] max-w-[80%] flex-col justify-between gap-10 overflow-auto sm:flex-row">
        <div className="sm:w-3/5">
          <h2 className="text-2xl font-bold">{speaker.agendaTitle}</h2>
          <p className="my-3 flex items-center">
            <ClockIcon className="mr-1 size-5" />
            {speaker.agendaTime}
            <MapPinIcon className="ml-2 mr-1 size-5" />
            {speaker.agendaLocation}
          </p>
          <p dangerouslySetInnerHTML={{__html: speaker.agendaDesc}}></p>
        </div>
        <div className="sm:w-2/5">
          <Image src={speaker.photoLink} alt={speaker.name} width={200} height={200} />
          <h3 className="my-2 text-lg font-bold">{speaker.name}</h3>
          <p dangerouslySetInnerHTML={{__html: speaker.intro}}></p>
        </div>
      </DialogContent>
    </Dialog>
  );
}