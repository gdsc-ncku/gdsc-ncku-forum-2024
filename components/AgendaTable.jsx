import projectData from "@/data/projectData";
import SpeakerCard from "@/components/SpeakerCard";

export default function AgendaTable() {
  return (
    <div className="grid grid-flow-col grid-cols-[1fr_2fr_2fr_2fr] grid-rows-[auto_auto_auto_1fr_auto_auto_auto_auto_auto] gap-x-2 gap-y-4">
      <div></div>
      <div className="agenda-time">09:00 - 09:30</div>
      <div className="agenda-time">09:30 - 09:40</div>
      <div className="agenda-time">09:40 - 10:20</div>
      <div className="agenda-time">10:30 - 11:10</div>
      <div className="agenda-time">11:20 - 12:00</div>
      <div className="agenda-time">12:00 - 13:30</div>
      <div className="agenda-time">13:30 - 16:00</div>
      <div className="agenda-time">16:00 - 16:30</div>

      <div className="agenda-item w-36 justify-self-center rounded-full">B1 第一演講室</div>
      <div className="agenda-item col-span-3">會眾報到</div>
      <div className="agenda-item">開場、貴賓致詞</div>
      <SpeakerCard name="電扶梯走左邊 with Jacky" />
      <SpeakerCard name="五倍學院 - 高見龍" />
      <SpeakerCard name="成大資訊系教授 - jserv" />
      <div className="agenda-item col-span-3">午休</div>
      <div className="agenda-item">專案小組簡報 Showcase</div>
      <div className="agenda-item">頒獎 & 閉幕式</div>

      <div className="agenda-item w-36 justify-self-center rounded-full">B1 第二演講室</div>
      <div className="agenda-item">-</div>
      <div className="agenda-item">-</div>
      <SpeakerCard name="Line 前總經理 - 陶韻智" />
      <SpeakerCard name="生成式藝術家 - 吳哲宇" />
      <div className="agenda-item">-</div>
      <div className="agenda-item">-</div>

      <div className="agenda-item w-36 justify-self-center rounded-full">1F 多功能廳</div>
      <div className="agenda-item row-span-4">專案小組攤位展示 人氣投票</div>
      <div className="agenda-item">專案小組攤位展示 人氣投票</div>
      <div className="agenda-item">-</div>
    </div>
  );
}



