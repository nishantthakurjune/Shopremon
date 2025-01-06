import { configureStore } from "@reduxjs/toolkit"; // sare kaam akela kar leta h middleware, action, redux etc
import cartReducer from './shopping-cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});