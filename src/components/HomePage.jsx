import { GreetUserWithTime } from "./GreetUserWithTime";
import { Weather } from "./Weather";

export const HomePage = () => {
  return (
    <>
      <Weather />
      <GreetUserWithTime />
    </>
  );
};
