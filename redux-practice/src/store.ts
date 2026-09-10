import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slice";

const store = configureStore({
  reducer: cartSliceReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
