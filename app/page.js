import Image from "next/image";
import NavBar from "@/components/NavBar";
import HomePageBG from "@/components/HomePageBG";
import Countdown from "@/components/Countdown";
import ProjectCard from "@/components/ProjectCard";
import { GlobeAltIcon, ChatBubbleLeftEllipsisIcon, SparklesIcon, GiftIcon } from "@heroicons/react/24/solid";
import projectData from "@/data/projectData";

export default function Home() {
  return (
    <main>
      <section id="home" className="relative min-h-screen">
        <NavBar />
        <HomePageBG />
        <div className="title-box absolute bottom-1/2 mx-4 translate-y-1/2 lg:left-20">
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
          <h3 className="flex items-center text-2xl font-bold leading-loose text-[#8FB7F8]">
            <SparklesIcon className="inline size-7" />
            <span className="mx-2">專案成果展示</span>
            <SparklesIcon className="inline size-7" />
          </h3>
          <p>今年度社團成員們共計進行了 9 組專案，主題包含 AI、Big data、Web、Unity......等。我們將藉由海報展攤位與簡報 Showcase，向會眾分享開發經驗與技術細節，並評選出大家心目中第一名的專案 🏆 </p>
          <br />
          <h3 className="flex items-center text-2xl font-bold leading-loose text-[#48C268]">
            <GiftIcon className="inline size-7" />
            <span className="mx-2">會眾好康</span>
            <GiftIcon className="inline size-7" />
          </h3>
          <ul className="list-inside list-disc">
            <li>精美禮品抽獎：現場報到並完成人氣投票任務，即可抽 <b>ITFIT 系列筋膜槍</b>、<b>空氣清淨機</b>、<b>手持吸塵器</b>、<b>手目耳 $2680 配鏡券</b>、<b>$1680 墨鏡券</b>...等眾多好禮！</li>
            <li>社群攤位交流：與資安社、數位行銷社、區塊鏈社...等社群合作，擴展技術人脈～</li>
            <li>提供茶水與下午茶甜點：讓大家在緊湊的活動中，也能享受一下午的美好時光～</li>
          </ul>
        </div>
      </section>

      <section id="agenda" className="bg-Yellow px-10 py-12 sm:px-20">
        <h1 className="section-title">活動議程</h1>

      </section>

      <section id="projects" className="bg-Green px-10 py-12 sm:px-20">
        <h1 className="section-title">專案發表</h1>
        <div className="flex flex-wrap gap-5">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              number={project.number}
              team={project.team}
              name={project.name}
              description={project.description}
              members={project.members}
              membersPhotoLink={project.membersPhotoLink}
            />
          ))}
        </div>
      </section>

      <section id="partners" className="bg-Blue px-10 py-12 sm:px-20">
        <h1 className="section-title">合作夥伴</h1>
        <p className="text-xl font-semibold text-White">贊助商</p>
        <div className="mb-5 flex flex-wrap gap-10">
        </div>
        <p className="text-xl font-semibold text-White">社群攤位</p>
        <div className="flex flex-wrap gap-10">
          <a href="https://www.instagram.com/ncku.dmc" target="_blank" className="flex items-center justify-center"><Image src="/community/ncku_dmc_logo.png" alt="成大數位行銷社" width={100} height={100} /></a>
          <a href="https://www.instagram.com/nckuctf/" target="_blank"><Image src="/community/ncku_ctf_logo.png" alt="成大資安社" width={100} height={100} /></a>
          <a href="https://www.instagram.com/nckublockchainclub/" target="_blank"><Image src="/community/ncku_blockchain_club_logo.jpg" alt="成大區塊鏈社" width={100} height={100} /></a>
          <a href="https://www.instagram.com/ncku_tricking/" target="_blank"><Image src="/community/ncku_tricking_logo.png" alt="成大 Tricking 社" width={100} height={100} /></a>
          <a href="https://scist.org" target="_blank"><Image src="/community/SCIST_logo.png" alt="南臺灣學生資訊社群" width={100} height={100} /></a>
          <a href="https://www.facebook.com/profile.php?id=61555579555321" target="_blank"><Image src="/community/foi_logo.jpg" alt="台灣不分系協會" width={100} height={100} /></a>
          <a href="https://www.act.club.tw/" target="_blank"><Image src="/community/agile_tw_logo.png" alt="台灣敏捷協會" width={100} height={100} /></a>
        </div>
      </section>

      <footer className="flex flex-col justify-between bg-[#1C1C1C] px-10 py-6 text-White sm:flex-row">
        <div>
          <ul className="mb-2 flex gap-4 text-White">
            <li><a href="https://gdscncku.com" target="_blank"><GlobeAltIcon className="size-5" /></a></li>
            <li>
              <a href="https://www.facebook.com/gdscncku" target="_blank">
                <Image src="/facebook.svg" alt="GDSC NCKU facebook" width={20} height={20} className="text-White" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gdsc.ncku" target="_blank">
                <Image src="/instagram.svg" alt="GDSC NCKU instagram" width={20} height={20} className="text-White" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@nckugdsc" target="_blank">
              <Image src="/youtube.svg" alt="GDSC NCKU youtube" width={20} height={20} className="text-White" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/3AgWYcZXZm" target="_blank">
                <Image src="/discord.svg" alt="GDSC NCKU discord" width={20} height={20} className="text-White" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gdsc-ncku" target="_blank">
                <Image src="/github.svg" alt="GDSC NCKU github" width={20} height={20} className="text-White" />
              </a>
            </li>
          </ul>
          聯絡我們：<a href="mailto:GDSC.club@gs.ncku.edu.tw" className="underline">GDSC.club@gs.ncku.edu.tw</a>
          <p className="mt-2">© 2024 成大 Google 學生開發者論壇</p>
        </div>
        <Image src="/logo-long.svg" alt="GDSC NCKU" width={400} height={200} className="mt-2" />
      </footer>
    </main>
  );
}
