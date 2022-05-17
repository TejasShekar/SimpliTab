import { GreetUserWithTime } from "./GreetUserWithTime";
import { MainFocus } from "./MainFocus";
import { Quotes } from "./Quotes";
import { Weather } from "./Weather";

export const HomePage = () => {
  return (
    <>
      <Weather />
      <GreetUserWithTime />
      <MainFocus />
      <Quotes />
    </>
  );
};
