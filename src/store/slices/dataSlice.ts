import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [] as any[], error: null },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      return state;
    },
    setError: (state, action) => {
      state.data = action.payload;
      return state;
    },
    clearData: () => {
      return { data: [], error: null };
    },
  },
});

export const { setData, setError, clearData } = dataSlice.actions;
export default dataSlice.reducer;
