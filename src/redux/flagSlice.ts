import { createSlice } from "@reduxjs/toolkit";

interface IState {
  flag: boolean;
}

const initialState: IState = {
  flag: false,
};

const flagSlice = createSlice({
  name: "flag",
  initialState,
  reducers: {
    changeFlag: (state) => {
      state.flag = !state.flag;
    },
  },
});

export const { changeFlag } = flagSlice.actions;
export default flagSlice.reducer;
