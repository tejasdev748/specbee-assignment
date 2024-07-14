import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slice";

const rootReducer = combineReducers({ newsFilter: filterReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
