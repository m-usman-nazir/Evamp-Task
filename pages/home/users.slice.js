import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      let id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
    addNewUser: (state, action) => {
      let lastIndex = state.users.length - 1;
      let id = state.users[lastIndex].id + 1;
      let newUser = { ...action.payload, id: id };
      state.users.push(newUser);
    },
    editUser: (state, action) => {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      console.log('action.payload',action.payload)
      if (userIndex >= 0) {
        state.users[userIndex] = action.payload;
      } else {
        console.log("user does not exist");
      }
    },
  },
});

export const { setUsers, deleteUser, addNewUser, editUser } =
  usersSlice.actions;

export default usersSlice.reducer;
