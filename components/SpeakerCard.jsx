import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import speakerData from "@/data/speakerData";

export default function SpeakerCard({name}) {
  const speaker = speakerData.find((speaker) => speaker.name === name);

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center border border-black bg-White">
        <div className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
          <Image src={speaker.photoLink} alt={speaker.name} width={200} height={200} />
        </div>
        <div className="flex flex-col items-start">
          <h2>{speaker.name}</h2>
          <h1 className="text-left text-lg font-bold">{speaker.agendaTitle}</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="flex max-w-[80%] flex-col lg:flex-row">
        123
      </DialogContent>
    </Dialog>
  );
}