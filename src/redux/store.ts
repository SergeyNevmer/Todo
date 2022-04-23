import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import flagSlice from "./flagSlice";
import idSlice from "./idSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    flag: flagSlice,
    id: idSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
