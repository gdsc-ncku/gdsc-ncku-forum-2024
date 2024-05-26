"use client"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import projectData from "@/data/projectData";

export default function DemoCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild className="agenda-item cursor-pointer hover:bg-gray-200">
        <div className="flex flex-col justify-start">
          <div className="mt-3">
            專案成果發表會 <ChevronUpDownIcon className="inline size-5" />
          </div>
          <CollapsibleContent className="mt-3 flex flex-col items-start">
            <p>13:30 - 13:45 形形色色</p>
            <p>13:45 - 14:00 YEGO</p>
            <p>14:00 - 14:15 自動交易機器人</p>
            <p>14:15 - 14:30 「政」知道了</p>
            <p>14:30 - 14:45 Sync Focus</p>
            <p>14:45 - 15:00 休息時間</p>
            <p>15:00 - 15:15 音樂創作 x 數位體驗</p>
            <p>15:15 - 15:30 股News.app</p>
            <p>15:30 - 15:45 學海浩劫</p>
            <p>15:45 - 16:00 揚揚女團生產器</p>
          </CollapsibleContent>
        </div>
      </CollapsibleTrigger>
    </Collapsible>
  );
}



