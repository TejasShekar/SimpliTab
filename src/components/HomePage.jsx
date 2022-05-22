import { TodoProvider } from "../context/todo-context";
import { GreetUserWithTime } from "./GreetUserWithTime";
import { MainFocus } from "./MainFocus";
import { Quotes } from "./Quotes";
import { ToDo } from "./ToDo";
import { Weather } from "./Weather";

export const HomePage = () => {
  return (
    <>
      <TodoProvider>
        <Weather />
        <GreetUserWithTime />
        <MainFocus />
        <Quotes />
        <ToDo />
      </TodoProvider>
    </>
  );
};
