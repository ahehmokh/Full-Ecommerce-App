import { createSlice } from '@reduxjs/toolkit';

// Retrieve the cart from localStorage or initialize as an empty array
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

// Create the slice
export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const findProduct = state.find((product) => product.id === action.payload.id);
        const clone = { ...action.payload, quantity: 1 };
        
        if (findProduct) {
            findProduct.quantity += 1;
        } else {
            state.push(clone);
        }
        localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
       const index = state.filter(item => item.id !== action.payload.id);
        localStorage.setItem('cart', JSON.stringify(state));
        return index;
    },
    clear: (state) => {
      // Clear all items from the cart
      state.length = 0;
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

// Export actions and reducer
export const { addToCart, deleteFromCart, clear } = CartSlice.actions;
export default CartSlice.reducer;