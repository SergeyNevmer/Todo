import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./types";

interface IEditText {
  id: string;
  text: string;
}

interface IState {
  todos: Array<ITodo>;
}

const initialState: IState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        status: false,
        text: action.payload,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const newObj = state.todos[index];
      newObj.status = !newObj.status;

      state.todos.splice(index, 1, newObj);
    },
    editText: (state, action: PayloadAction<IEditText>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const newObj = state.todos[index];
      newObj.text = action.payload.text;

      state.todos.splice(index, 1, newObj);
    },
  },
});

export const { addTodo, removeTodo, changeStatus, editText } =
  todoSlice.actions;
export default todoSlice.reducer;
