import { useEffect, useState } from "react";
import { useUserInfo } from "../context/user-context";
import { getGreetings } from "../utils/greetings";

export const GreetUserWithTime = () => {
  const [time, setTime] = useState("");
  const { user } = useUserInfo();

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB");
      setTime(time);
    }, 1000);
  });

  const hour = +time.slice(0, 2);
  const greetings = getGreetings(hour);

  return (
    <div>
      <h1 className="time">{time.slice(0, 5)}</h1>
      <h2>
        {greetings}, {user}
      </h2>
    </div>
  );
};
