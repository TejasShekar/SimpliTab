import { useEffect, useState } from "react";

export const Time = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB");
      setTime(time);
    }, 1000);
  });
  return (
    <>
      <h1 className="time">{time.slice(0, 5)}</h1>
    </>
  );
};
