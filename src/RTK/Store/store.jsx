import ProductSlice from './Slices/ProductSlice';
import CartSlice from './Slices/CartSlice';
import { configureStore } from '@reduxjs/toolkit'
import  singleProductSlice  from './Slices/singleProductSlice';

export const store = configureStore({
  reducer: {
    ShowProducts:ProductSlice,
    singleProduct:singleProductSlice,
    Cart:CartSlice,
  },
})