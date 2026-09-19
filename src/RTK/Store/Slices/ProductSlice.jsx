/* eslint-disable react-refresh/only-export-components */
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProducts = createAsyncThunk("ProductSlice/FetchProducts" , async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})

const ProductSlice = createSlice({
    initialState:[],
    name:"ProductSlice",
    reducers:{
        getProducts:(state , action) => {
            state.push(action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(FetchProducts.fulfilled , (state , action) => {
            return action.payload
        })
    }
})

export const {getProducts} = ProductSlice.actions ;
export default ProductSlice.reducer;