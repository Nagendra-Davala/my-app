import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUSer: (_state, action) => {
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
  },
});

export const { setUSer, clearUser } = userSlice.actions;
export default userSlice.reducer;
