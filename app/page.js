import Image from "next/image";
import NavBar from "@/components/NavBar";
import HomePageBG from "@/components/HomePageBG";
import Countdown from "@/components/Countdown";
import { ChatBubbleLeftEllipsisIcon, SparklesIcon, GiftIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <main>
      <section id="home" className="relative min-h-screen">
        <NavBar />
        <HomePageBG />
        <div className="title-box absolute bottom-1/2 left-20 translate-y-1/2">
          <div className="mb-5 border-4 border-black bg-White p-3 text-3xl font-bold leading-snug">
            GDSC NCKU FORUM<br />
            成大學生開發者論壇<br />
            2024.06.08 (Sat.) 09:00-17:00
          </div>
          <div className="border-4 border-black bg-White p-3 text-lg font-bold ">
            距離活動開始還有 <Countdown />
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-[#1C1C1C] p-2 text-3xl">
          <div class="box-border w-full overflow-hidden whitespace-nowrap">
            <code className="inline-block animate-[marquee_10s_linear_infinite] pl-[100%] text-White">Code your goal, Fuel your soul！</code>
          </div>
        </div>
      </section>

      <section id="info" className="gap-4 bg-Red px-10 py-12 sm:px-20">
        <h1 className="section-title">活動資訊</h1>
        <div className="text-lg text-White">
          <h3 className="flex items-center text-2xl font-bold leading-loose text-[#FFC74B]">
            <ChatBubbleLeftEllipsisIcon className="inline size-7" />
            <span className="mx-2">資訊科技論壇</span>
            <ChatBubbleLeftEllipsisIcon className="inline size-7" />
          </h3>
          <p>邀請眾多在資訊產業耕耘的專業人士，分享他們的寶貴經驗與洞察，促進學生對業界之認識。</p>
          <br />
          <h3 className="flex items-center text-2xl font-bold leading-loose text-Blue">
            <SparklesIcon className="inline size-7" />
            <span className="mx-2">專案成果展示與發表會</span>
            <SparklesIcon className="inline size-7" />
          </h3>
          <p>今年度社團成員們共計進行了 9 組專案，主題包含 AI、Big data、Web、Unity......等。我們將藉由海報展攤位與簡報 Showcase，向會眾分享開發經驗與技術細節，並評選出大家心目中第一名的專案 🏆 </p>
          <br />
          <h3 className="flex items-center text-2xl font-bold leading-loose text-Green">
            <GiftIcon className="inline size-7" />
            <span className="mx-2">會眾好康</span>
            <GiftIcon className="inline size-7" />
          </h3>
          <ul className="list-inside list-disc">
            <li>精美禮品抽獎：現場報到並完成人氣投票任務，即可抽 <b>ITFIT 系列筋膜槍</b>、<b>空氣清淨機</b>、<b>手持吸塵器</b>、<b>手目耳 $2680 配鏡券</b>、<b>$1680 墨鏡券</b>...等眾多好禮！</li>
            <li>社群攤位交流：與資安社、數位行銷社、區塊鏈社...等社群合作，擴展技術人脈～</li>
            <li>提供茶水與下午茶甜點：讓大家在緊湊的活動中，也能享受一下午的美好時光～</li>
          </ul>

          {/* <Image src="/agenda.png" width={500} height={300} className="border border-black" /> */}
        </div>
      </section>

      <section id="agenda" className="bg-Yellow px-10 py-12 sm:px-20">
        <h1 className="section-title">活動議程</h1>

      </section>

      <section id="projects" className="bg-Green px-10 py-12 sm:px-20">
        <h1 className="section-title">專案發表</h1>
      </section>

      <section id="partners" className="bg-Blue px-10 py-12 sm:px-20">
        <h1 className="section-title">合作夥伴</h1>
      </section>

      <footer className="bg-[#3C3C3C] text-[#F6F6F6]">
        <p>GDSC NCKU</p>
        <p>聯絡我們</p>
        <p>© 2024 成大 Google 學生開發者論壇</p>
      </footer>
    </main>
  );
}
