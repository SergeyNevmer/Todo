import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  id: string;
}

const initialState: IState = {
  id: "",
};

const idSlice = createSlice({
  name: "idTask",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
