import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full items-center justify-between">
        <a href="#top">
          <Image src="/logo.png" alt="2024 成大 Google 學生開發者論壇" width={120} height={40} />
        </a>
        <nav className="flex">
          <a className="nav-item" href="#info">活動資訊</a>
          <a className="nav-item" href="#agenda">活動議程</a>
          <a className="nav-item" href="#projects">專題小組</a>
          <a className="nav-item" href="#projects">贊助廠商</a>
          <a className="nav-item" href="https://forms.gle/FmESxj4Nv7MLmPeR8" target="_blank">立即報名</a>
        </nav>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="mt-8 text-4xl ">2024 成大 Google 學生開發者論壇</h1>
        <p className="mt-4 text-lg">
          歡迎大家 6/8 (六) 在成功大學國際會議廳齊聚一堂，凝聚滿滿開發能量 🚀 🚀 Code your goal, Fuel your soul！
        </p>
      </div>
    </main>
  );
}
