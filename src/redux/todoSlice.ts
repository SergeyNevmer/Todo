import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./types";

interface IStatus {
  status: boolean;
  id: string;
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
    changeStatus: (state, action: PayloadAction<IStatus>) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
