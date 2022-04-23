import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import flagSlice from "./flagSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    flag: flagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
