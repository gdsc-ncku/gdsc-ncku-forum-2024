import Image from "next/image";
import NavBar from "@/components/NavBar";
import HomePageBG from "@/components/HomePageBG";
import Countdown from "@/components/Countdown";
import ProjectCard from "@/components/ProjectCard";
import AgendaTable from "@/components/AgendaTable";
import { GlobeAltIcon, ChatBubbleLeftEllipsisIcon, SparklesIcon, GiftIcon, ChevronDoubleRightIcon, RocketLaunchIcon, TruckIcon, MapIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  return (
    <main>
      <section id="home" className="relative min-h-screen">
        <NavBar />
        <HomePageBG />
        <div className="title-box absolute bottom-1/2 mx-4 w-[360px] translate-y-1/2 sm:w-[440px] lg:left-20">
          <div className="mb-5 border-4 border-black bg-White p-3 leading-snug">
            <p className="text-3xl font-bold sm:text-4xl">GDSC NCKU FORUM</p>
            <p className="text-3xl font-bold sm:text-4xl">成大學生開發者論壇</p>
            <p className="text-xl">2024.06.08 (Sat.) 09:00-17:00</p>
            <p className="text-xl">成功大學 光復校區 國際會議廳</p>
          </div>
          <div className="mb-7 border-4 border-black bg-White p-3 text-base font-bold sm:text-xl ">
            距離活動開始還有 <Countdown />
          </div>
          <div className=" flex flex-col gap-5 sm:flex-row">
            <a className="nav-item w-36 bg-black p-2 text-lg text-White hover:bg-gray-800" href="https://forms.gle/FmESxj4Nv7MLmPeR8" target="_blank">
              <RocketLaunchIcon className="mr-1 inline size-5" />立即報名
            </a>
            <Dialog>
              <DialogTrigger className="nav-item w-36 p-2 text-lg hover:bg-gray-300 sm:w-40">
                <MapIcon className="mr-1 inline size-6" />展場攤位圖
              </DialogTrigger>
              <DialogContent className="max-h-[90%] max-w-[80%] overflow-scroll">
                🚧 製作中 🚧
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="nav-item w-36 p-2 text-lg hover:bg-gray-300">
                <TruckIcon className="mr-1 inline size-6" />交通路線
              </DialogTrigger>
              <DialogContent className="max-h-[90%] max-w-[80%] overflow-scroll">
                <Image src="/map.png" alt="地圖" width={500} height={300} />
                <h2 className="text-xl font-bold">搭乘高鐵</h2>
                <p>搭乘高鐵至台南站，轉搭乘臺鐵沙崙線至臺南火車站下車，自後站出口至大學路西段，步行二百公尺後，左側即為光復校區前門，進入校區後，依指標至國立成功大學國際會議廳。</p>
                <h2 className="text-xl font-bold">搭乘台鐵</h2>
                <p>於臺南火車站下車，自後站出口至大學路西段，步行二百公尺後，左側即為光復校區前門，進入校區後，依指標至國立成功大學國際會議廳。</p>
                <h2 className="text-xl font-bold">自行開車</h2>
                <h3 className="text-lg font-semibold">1.車行南下：</h3>
                <p>國道一號下大灣交流道（324公里處），下交流道後沿高速二街直行至復興路右轉，沿復興路直行續接小東路，左轉勝利路，右轉大學路西段，左轉由光復校區前門進入，停車於校園內。依指標至國立成功大學國際會議廳。</p>
                <h3 className="text-lg font-semibold">2.車行北上：</h3>
                <p>國道一號下仁德交流道（327A裕農路）方向，沿高速一街一段直行，續至高速一街二段，於復興路左轉，沿復興路直行續接小東路，左轉勝利路，右轉大學路西段，左轉由光復校區前門進入，停車於校園內。依指標至國立成功大學國際會議廳。</p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-[#1C1C1C] p-2 text-3xl">
          <div class="box-border w-full overflow-hidden whitespace-nowrap">
            <code className="inline-block animate-[marquee_10s_linear_infinite] pl-[120%] text-White">Code to goal, Fuel your soul！</code>
          </div>
        </div>
      </section>

      <section id="info" className="gap-4 bg-Red px-10 py-14 sm:px-20">
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

      <section id="agenda" className="bg-Yellow py-14">
        <div className="mb-4 flex items-end px-10 sm:px-20">
          <h1 className="section-title my-0">活動議程</h1>
          <span className="mx-3 text-sm text-White">向右滾動查看完整議程</span>
          <ChevronDoubleRightIcon className="bounce-right inline size-5 text-White" />
        </div>
        <div className="h-[820px] overflow-x-scroll px-10 sm:h-[900px]">
          <AgendaTable />
        </div>
      </section>

      <section id="projects" className="bg-Green py-14">
        <div className="mb-4 flex items-end px-10 sm:px-20">
          <h1 className="section-title my-0">專案發表</h1>
          <span className="mx-3 text-sm text-White">向右滾動查看更多專案</span>
          <ChevronDoubleRightIcon className="bounce-right inline size-5 text-White" />
        </div>
        <div className="flex h-[500px] flex-col flex-wrap gap-5 overflow-x-scroll pl-10 sm:h-[600px]">
          <ProjectCard number={1} />
          <ProjectCard number={2} />
          <ProjectCard number={3} />
          <ProjectCard number={4} />
          <ProjectCard number={5} />
          <ProjectCard number={6} />
          <ProjectCard number={7} />
          <ProjectCard number={8} />
          <ProjectCard number={9} />
        </div>
      </section>

      <section id="partners" className="bg-Blue px-10 py-14 sm:px-20">
        <h1 className="section-title">合作夥伴</h1>
        <div className="mb-5 mt-6 flex justify-center border-b border-White pb-2 text-xl font-semibold text-White">
          贊助商
        </div>
        <div className="mb-6 flex flex-wrap justify-center gap-10">
          <a href="https://www.falken.com.tw/hersheys/kisses/index/" target="_blank">
            <Image src="/sponsors/HSY.png" alt="HERSHEY'S" width={120} height={120} />
          </a>
          <a href="https://www.paolyta.com.tw/" target="_blank" className="flex items-center justify-center">
            <Image src="/sponsors/保力達.jpg" alt="保力達" width={120} height={120} />
          </a>
          <a href="https://www.see-more.com.tw/" target="_blank">
            <Image src="/sponsors/手目耳.png" alt="手目耳" width={120} height={120} />
          </a>
          <a href="https://www.mk2000.com.tw/" target="_blank">
            <Image src="/sponsors/晨間廚房.png" alt="晨間廚房" width={120} height={120} />
          </a>
          <a href="https://www.lebledor.com/" target="_blank">
            <Image src="/sponsors/金色三麥.png" alt="金色三麥" width={120} height={120} />
          </a>
          <a href="https://titansoft.com/tw" target="_blank">
            <Image src="/sponsors/鈦坦.png" alt="鈦坦" width={120} height={120} />
          </a>
        </div>
        <div className="mb-5 mt-10 flex justify-center border-b border-White pb-2 text-xl font-semibold text-White">
          社群夥伴
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a href="https://www.instagram.com/ncku.dmc" target="_blank" className="flex items-center justify-center">
            <Image src="/community/ncku_dmc_logo.png" alt="成大數位行銷社" width={120} height={120} />
          </a>
          <a href="https://www.instagram.com/nckuctf/" target="_blank">
            <Image src="/community/ncku_ctf_logo.png" alt="成大資安社" width={120} height={120} />
          </a>
          <a href="https://www.instagram.com/nckublockchainclub/" target="_blank">
            <Image src="/community/ncku_blockchain_club_logo.jpg" alt="成大區塊鏈社" width={120} height={120} />
          </a>
          <a href="https://www.instagram.com/ncku_tricking/" target="_blank">
            <Image src="/community/ncku_tricking_logo.png" alt="成大 Tricking 社" width={120} height={120} />
          </a>
          <a href="https://scist.org" target="_blank">
            <Image src="/community/SCIST_logo.png" alt="南臺灣學生資訊社群" width={120} height={120} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555579555321" target="_blank">
            <Image src="/community/foi_logo.jpg" alt="台灣不分系協會" width={120} height={120} />
          </a>
          <a href="https://www.act.club.tw/" target="_blank">
            <Image src="/community/agile_tw_logo.png" alt="台灣敏捷協會" width={120} height={120} />
          </a>
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
