"use client";
import Image from "next/image";
import { useEffect } from 'react';

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > window.innerHeight / 5) {
        navbar.classList.add('bg-[var(--background)]');
      } else {
        navbar.classList.remove('bg-[var(--background)]');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar fixed z-50 flex w-full items-center justify-between px-12 py-4 transition-all">
      <a href="#home">
        <Image src="/logo.png" alt="2024 成大 Google 學生開發者論壇" width={120} height={40} />
      </a>
      <nav className="flex gap-16 ">
        <a className="nav-item" href="#info">活動資訊</a>
        <a className="nav-item" href="#agenda">活動議程</a>
        <a className="nav-item" href="#projects">專題小組</a>
        <a className="nav-item" href="#partners">合作夥伴</a>
        <a className="nav-item" href="https://forms.gle/FmESxj4Nv7MLmPeR8" target="_blank">立即報名</a>
      </nav>
    </div>
  );
}