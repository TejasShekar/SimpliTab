import { createContext, useContext, useReducer, useEffect } from "react";
import { ToDoReducer } from "reducers/todo-reducer";

const TodoContext = createContext();
const useTodo = () => useContext(TodoContext);
const TodoProvider = ({ children }) => {
  const [todoList, todoListDispatch] = useReducer(
    ToDoReducer,
    JSON.parse(localStorage.getItem("SimpliTab-todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("SimpliTab-todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, todoListDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, useTodo };
