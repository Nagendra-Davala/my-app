import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR",
  reducers: {
    //action : logic
    //action: (state, action) =>{}
    //state: current data inside the store related to this slice.
    //action: data coming from the component
    //Actions must be dispatched to the store.
    setCurrency(state, action) {
      //return updated data to the store and returns immutable data.
      //By default Redux toolkit uses the immerjs to update the data immutably. so, we no need to worry about the updating the data immutably. we can update mutably.
      return action.payload;
      console.log(state);
    },
  },
});

//actions are uses by component to initiate the data changes
export const { setCurrency } = currencySlice.actions;

//reducers are used by the store to update the data.
export default currencySlice.reducer;
