"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > window.innerHeight / 6) {
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
    <div className="slide-up-in navbar fixed z-50 flex w-full items-center justify-between px-8 lg:px-12 py-4 transition-all">
      <a href="#home">
        <Image src="/logo.png" alt="2024 成大 Google 學生開發者論壇" width={120} height={48} />
      </a>

      {/* Desktop */}
      <nav className="gap-16 hidden lg:flex">
        <a className="nav-item" href="#info">活動資訊</a>
        <a className="nav-item" href="#agenda">活動議程</a>
        <a className="nav-item" href="#projects">專案發表</a>
        <a className="nav-item" href="#partners">合作夥伴</a>
        <a className="nav-item" href="https://forms.gle/FmESxj4Nv7MLmPeR8" target="_blank">立即報名</a>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="block">
            <Bars3Icon className="size-8" />
          </SheetTrigger>
          <SheetContent className="flex w-40 flex-col items-end px-8 lg:px-12 py-4">
            <SheetTrigger className="block">
              <XMarkIcon className="size-8" />
            </SheetTrigger>
            <nav className="mt-5 flex flex-col gap-8">
              <a className="nav-item" href="#info">活動資訊</a>
              <a className="nav-item" href="#agenda">活動議程</a>
              <a className="nav-item" href="#projects">專案發表</a>
              <a className="nav-item" href="#partners">合作夥伴</a>
              <a className="nav-item" href="https://forms.gle/FmESxj4Nv7MLmPeR8" target="_blank">立即報名</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}