import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2024 成大 Google 學生開發者論壇",
  description: "歡迎大家 6/8 (六) 在成功大學國際會議廳齊聚一堂，凝聚滿滿開發能量 🚀 🚀 Code your goal, Fuel your soul！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
