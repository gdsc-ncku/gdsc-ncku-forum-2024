"use client";
import { useState, useEffect } from 'react';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const target = new Date('2024-06-08T09:00:00');
    const now = new Date();
    const difference = target - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span suppressHydrationWarning>
      {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分 {timeLeft.seconds} 秒
    </span>
  );
};
