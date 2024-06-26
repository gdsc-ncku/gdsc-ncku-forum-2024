"use client";
import { useState, useEffect } from 'react';

export default function Countdown() {
  /**
  const calculateTimeLeft = () => {
    const target = new Date('Jun 8 2024 9:00:00 GMT+0800 (Taipei Standard Time)');
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
  */

  return (
    <span suppressHydrationWarning>
      0 天 0 小時 0 分 0 秒
    </span>
  );
};
