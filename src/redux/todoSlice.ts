import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  id: string;
  text: string;
  status: boolean;
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
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
