import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./types";

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
  },
});

export const { addTodo, removeTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
