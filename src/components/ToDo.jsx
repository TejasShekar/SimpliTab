import { useState } from "react";
import { useTodo } from "../context/todo-context";

export const ToDo = () => {
  const [isTodoOpen, setTodoOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const { todoList, todoListDispatch } = useTodo();

  const addToDo = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      todoListDispatch({
        type: "ADD_TODO",
        payload: todo,
      });
      setTodo("");
    }
  };

  const toggleTodoChecked = (id) => {
    todoListDispatch({
      type: "TOGGLE_TODO_CHECKED",
      payload: id,
    });
  };

  const removeToDo = (id) => {
    todoListDispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <div className="flex flex-col todo-container">
      <div
        className="todo-list flex-col px-1 py-1"
        style={{
          display: `${isTodoOpen ? "flex" : "none"}`,
        }}
      >
        <ol className="mb-sm" style={{ overflow: "auto" }}>
          {todoList.length !== 0 ? (
            todoList.map(({ id, todo, checked }, index) => (
              <li key={id} className="todo flex">
                <div>
                  <input
                    type="checkbox"
                    id={`todo-${index}`}
                    onChange={() => {
                      toggleTodoChecked(id);
                    }}
                  />
                  <label htmlFor={`todo-${index}`}>
                    <span
                      className="m-sm "
                      style={
                        Boolean(checked)
                          ? { textDecoration: "line-through", color: "grey" }
                          : { textDecoration: "none" }
                      }
                    >
                      {todo}
                    </span>
                  </label>
                </div>
                <button
                  className="todo-delete"
                  onClick={() => removeToDo(id)}
                  style={
                    Boolean(checked)
                      ? { display: "initial" }
                      : { display: "hidden" }
                  }
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>Your To-Do is empty</p>
          )}
        </ol>
        <input
          className="todo-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => addToDo(e)}
          placeholder="Type your ToDo and hit Enter"
        />
      </div>
      <button
        className="toggle-todo"
        onClick={() => setTodoOpen((prev) => !prev)}
      >
        ToDo
      </button>
    </div>
  );
};
