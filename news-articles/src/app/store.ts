import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice";

export default configureStore({
  reducer: {
    newsFilter: filterReducer,
  },
});
