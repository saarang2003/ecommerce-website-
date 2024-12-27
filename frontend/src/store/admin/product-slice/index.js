import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
  productList: [],
}

export const addNewProduct = createAsyncThunk(
    '/products/addnewproduct', 
    async (formData) =>{
      const result = await axios.post(
        "http://localhost:3000/api/admin/product/add",
        formData,
        {
             headers: {
             "Content-Type": "application/json",
                    }
        }
      );
      return result?.data;
    }
);

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const result = await axios.get("http://localhost:3000/api/admin/product/get");
    console.log("Fetched products:", result?.data);  // For debugging
    return result?.data.listOfProduct;  // Return the actual array of products
  }
);

export const editProduct = createAsyncThunk(
  'products/editProduct', 
  async ({ id, formData }) => {
     const result = await axios.put(
        `http://localhost:3000/api/admin/product/edit/${id}`,
        formData,
        {
           headers: {
              "Content-Type": "application/json",
           }
        }
     );    
     return result?.data;
  }
);


export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async(id) =>{
    const result = await axios.delete(
      `http://localhost:3000/api/admin/product/delete/${id}`
    )
    return result?.data;
  }
)

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
      state.products = state.products.filter(product => product._id !== deletedProductId);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedProductId = action.payload._id;
        state.productList = state.productList.filter(
          (product) => product._id !== deletedProductId
        );
      });
  },
});


export default adminProductSlice.reducer;