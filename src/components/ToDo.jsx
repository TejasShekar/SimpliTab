import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ToDo = () => {
  const [isTodoOpen, setTodoOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToDo = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTodoList((prev) => [
        ...prev,
        { id: uuid(), todo: e.target.value, checked: false },
      ]);
      setTodo("");
    }
  };

  const checkThisToDo = (id) => {
    const updatedTodoList = todoList.reduce((arr, obj) => {
      return obj.id === id
        ? [...arr, { ...obj, checked: !obj.checked }]
        : [...arr, obj];
    }, []);
    setTodoList(updatedTodoList);
  };

  const removeToDo = (id) => {
    const updatedTodoList = todoList.filter((obj) => obj.id !== id);
    setTodoList(updatedTodoList);
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
                      checkThisToDo(id);
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
          onKeyDown={addToDo}
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
