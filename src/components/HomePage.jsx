import { TodoProvider } from "context/todo-context";
import {
  GreetUserWithTime,
  MainFocus,
  Quotes,
  ToDo,
  Weather,
} from "components";

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
