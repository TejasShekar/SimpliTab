import { useEffect, useState } from "react";
import { useUserInfo } from "context/user-context";
import { getGreetings } from "utils/greetings";

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
      <h1>{time.slice(0, 5)}</h1>
      <p className="greeting px-2 py-1 text-center">
        {greetings}, {user}
      </p>
    </div>
  );
};
