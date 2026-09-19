import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSingleProduct = createAsyncThunk("singleProductSlice/fetchSingleProduct" , async(id)=> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return data
})

export const singleProductSlice = createSlice({
    initialState:{},
    name:"singleProductSlice",
    reducers:{
        getProduct:(state , action)=> {
            state = action.payload ;
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchSingleProduct.fulfilled , (state , action)=> {
            return action.payload
        })
    }
})
export const getProduct = singleProductSlice.actions;
export default singleProductSlice.reducer;