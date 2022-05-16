import { GreetUserWithTime } from "./GreetUserWithTime";
import { MainFocus } from "./MainFocus";
import { Weather } from "./Weather";

export const HomePage = () => {
  return (
    <>
      <Weather />
      <GreetUserWithTime />
      <MainFocus />
      {/* Quote */}
    </>
  );
};
