'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Countdown = ({date}:{date:any}) => {
  const router =  useRouter();
  const targetTime = new Date(date.time_stamp).getTime();
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetTime));

  useEffect(() => {
    // 更新剩餘時間
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime(targetTime));
    }, 1000);

    // 清除定時器
    return () => clearInterval(interval);
  }, [targetTime]);

  function calculateRemainingTime(targetTime) {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      // 倒數計時結束
      router.refresh();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <p>{`${remainingTime.days} d, ${remainingTime.hours} h, ${remainingTime.minutes} m, ${remainingTime.seconds} s`}</p>
    </div>
  );
};

export default Countdown;
