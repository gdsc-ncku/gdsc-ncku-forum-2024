import Image from "next/image";
import NavBar from "@/components/NavBar";
import HomePageBG from "@/components/HomePageBG";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main>
      <section id="home" className="relative min-h-screen">
        <NavBar />
        <HomePageBG />
        <div className="absolute bottom-1/2 left-20 translate-y-1/2">
          <div className="bg-[var(--background)] mb-5 border-4 border-black p-3 text-3xl font-bold leading-snug">
            GDSC NCKU FORUM<br />
            成大學生開發者論壇<br />
            2024.06.08 (Sat.) 09:00-17:00
          </div>
          <div className="bg-[var(--background)] border-4 border-black p-3 text-lg font-bold ">
            距離活動開始還有 <Countdown />
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-[#4C4C4C] p-2 text-3xl">
          <div className="marquee">
            <div className="track">
              🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　🦖　　　　
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="h-72 bg-Red">
      </section>

      <section id="agenda" className="h-72 bg-Yellow">

      </section>

      <section id="projects" className="h-72 bg-Green">

      </section>

      <section id="partners" className="h-72 bg-Blue">

      </section>

      <footer className="bg-[#3C3C3C] text-[#F6F6F6]">
        <p>GDSC NCKU</p>
        <p>聯絡我們</p>
        <p>© 2024 成大 Google 學生開發者論壇</p>
      </footer>
    </main>
  );
}
