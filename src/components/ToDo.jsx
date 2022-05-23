import { useState } from "react";
import { useTodo } from "context/todo-context";

export const ToDo = () => {
  const [isTodoOpen, setTodoOpen] = useState(false);
  const [todoValue, setTodo] = useState("");
  const [editID, setEditId] = useState("");
  const [todoEdit, setTodoEdit] = useState(false);
  const { todoList, todoListDispatch } = useTodo();

  const addToDo = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      todoListDispatch({
        type: "ADD_TODO",
        payload: e.target.value,
      });
      e.target.value = "";
    }
  };

  const toggleTodoChecked = (id) => {
    todoListDispatch({
      type: "TOGGLE_TODO_CHECKED",
      payload: id,
    });
  };

  const editToDo = (id, todo) => {
    setTodo(todo);
    setEditId(id);
    setTodoEdit((prev) => !prev);
  };

  const saveToDo = (id, todoValue) => {
    if (todoValue === "") {
      removeToDo(id);
      return;
    }
    const updatedList = todoList.map((obj) =>
      obj.id === id ? { ...obj, todo: todoValue } : obj
    );
    todoListDispatch({
      type: "SAVE_TODO",
      payload: updatedList,
    });
    setTodoEdit((prev) => !prev);
    setTodo("");
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
          display: isTodoOpen ? "flex" : "none",
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
                  {todoEdit && editID === id ? (
                    <input
                      className="todo-edit-input"
                      type="text"
                      defaultValue={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  ) : (
                    <label
                      htmlFor={`todo-${index}`}
                      className="m-sm"
                      style={
                        Boolean(checked)
                          ? { textDecoration: "line-through", color: "grey" }
                          : { textDecoration: "none" }
                      }
                    >
                      {todo}
                    </label>
                  )}
                </div>
                <div>
                  {Boolean(checked) ? (
                    <button
                      className="todo-delete"
                      onClick={() => removeToDo(id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  ) : todoEdit && editID === id ? (
                    <button
                      className="todo-save"
                      onClick={() => saveToDo(id, todoValue)}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  ) : (
                    <button
                      className="todo-edit"
                      onClick={() => editToDo(id, todo)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  )}
                </div>
              </li>
            ))
          ) : (
            <p style={{ textAlign: "center", userSelect: "none" }}>
              Your To-Do is empty
            </p>
          )}
        </ol>
        <input
          className="todo-input"
          type="text"
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
