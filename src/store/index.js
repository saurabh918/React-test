import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import bookSlice from "../reducers/bookSlice";
let store;
if (process.env.NODE_ENV === "development") {
  store = configureStore(
    {
      reducer: { bookSlice },
    },
    composeWithDevTools()
  );
} else {
  store = configureStore(
    {
      reducer: { bookSlice },
    }
  );
}

export default store
 
