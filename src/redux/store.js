import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../pages/home/users.slice";

export const store = configureStore({
  reducer: {
    usersList: usersReducer,
  },
});
