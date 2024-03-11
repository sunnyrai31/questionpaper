import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "Sunny",
    lastName: "Rai",
  },
  reducers: {
    changeName: (state, action) => {
      state.firstName = action.payload;
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});
export const { changeName, changeLastName } = userSlice.actions;
export default userSlice.reducer;
