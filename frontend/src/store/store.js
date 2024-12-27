import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/auth/index'
import adminProductSlice  from '../store/admin/product-slice/index'

const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProduct : adminProductSlice,
    }
})

export default store;