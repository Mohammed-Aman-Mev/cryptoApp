import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./cryptoSlice";

export const store = configureStore({
  reducer: {
    cryptoSlice,
  },
});
