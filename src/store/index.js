import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import bookSlice from "../features/bookSlice";

export const store = configureStore({
  reducer: { bookSlice },
}, composeWithDevTools())