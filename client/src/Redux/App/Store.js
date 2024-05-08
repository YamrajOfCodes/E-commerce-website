import { configureStore } from "@reduxjs/toolkit"
import Adminslice from "../Slice/Adminslice/Adminslice"
import productslice from "../Slice/productSlice/productslice"
import userSlice from "../Slice/Userslice/userauthSlice"
export const store = configureStore({
    reducer: {
    admin:Adminslice,
    product:productslice,
    user:userSlice
    }
})