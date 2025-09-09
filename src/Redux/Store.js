// store.js
import { configureStore } from "@reduxjs/toolkit"; // use @reduxjs/toolkit
import cartReducer from "./CartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
