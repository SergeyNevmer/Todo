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
    removeId: (state) => {
      state.id = "";
    },
  },
});

export const { setId, removeId } = idSlice.actions;
export default idSlice.reducer;
