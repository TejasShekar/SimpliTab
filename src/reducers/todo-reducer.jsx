import { v4 as uuid } from "uuid";

export const ToDoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, { id: uuid(), todo: payload, checked: false }];
    case "REMOVE_TODO":
      return state.filter((obj) => obj.id !== payload);
    case "TOGGLE_TODO_CHECKED":
      return state.map((obj) =>
        obj.id === payload ? { ...obj, checked: !obj.checked } : obj
      );
    default:
      return state;
  }
};
