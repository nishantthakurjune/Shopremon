import { createSlice } from "@reduxjs/toolkit"; //action, action-type, reducers 

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(item => item._id === product._id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          quantity: quantity
        });
      }
      state.totalQuantity += quantity;
    },

    incrementQuantity(state, action) {
      const existingItem = state.items.find(item => item._id === action.payload);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },

    decrementQuantity(state, action) {
      const existingItem = state.items.find(item => item._id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      }
    },

    removeItem(state, action) {
      const existingItem = state.items.find(item => item._id === action.payload);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item._id !== action.payload);
      }
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;