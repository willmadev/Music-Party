import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string;
  displayName: string;
}

const initialState: UserState = {
  uid: "",
  displayName: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
  },
});

export const { setDisplayName, setUid } = slice.actions;

export default slice.reducer;
