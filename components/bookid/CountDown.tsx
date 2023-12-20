import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function calculateRemainingTime(targetTime) {
  const currentTime = new Date().getTime();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function CountDown({ date, refetch }) {
  const targetTime = new Date(date.time_stamp).getTime();
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetTime)
  );

  useEffect(() => {
    const interval = setInterval(async () => {
      const remainingTimeNew = calculateRemainingTime(targetTime);
      setRemainingTime(remainingTimeNew);

      // 判斷是否需要執行 refetch
      if (
        remainingTimeNew.days === 0 &&
        remainingTimeNew.hours === 0 &&
        remainingTimeNew.minutes === 0 &&
        remainingTimeNew.seconds < 1
      ) {
        console.log("refetch");
        refetch && (await refetch());
        router.refresh();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime, refetch]);

  const formatTime = ({ days, hours, minutes, seconds }) => {
    return `${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒`;
  };

  return (
    <div>
      <p>剩餘時間：{formatTime(remainingTime)}</p>
    </div>
  );
}

export default CountDown;
