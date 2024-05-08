import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import { addproductAPI, adminCategoryAPI, deleteproductAPI, deleteproductReviewAPI, getLestestproducts, getallproductsAPI, getcategory, getproductreviewAPI, getsingleproductAPI, productreviewAPI } from "../../../Api/ProductAPI/productAPI";



export const productCategoryApi = createAsyncThunk("productcategory", async (data) => {
    try {
        const response = await adminCategoryAPI(data);
        if (response.status == 200) {
            toast.success("category is added successfully")
            return response.data
        } else {
            toast.error(response.response.data.error)
        }
    } catch (error) {
        throw error
    }
})

export const getCategoryAPI = createAsyncThunk("getCategoryAPI", async () => {
    try {
        const response = await getcategory();
        return response.data;
    } catch (error) {
        throw error
    }
})

export const addProduct = createAsyncThunk("addproduct", async (data) => {
    const response = await addproductAPI(data.data, data.select, data.config);
    if (response.status == 200) {
        toast.success("product added successfully")
        return response.data;
    } else {
        toast.error(response.response.data.error)
    }
})

export const getallproducts = createAsyncThunk("getallproducts", async (data) => {
    try {
        const response = await getallproductsAPI(data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})


export const deleteproducts=createAsyncThunk("deleteproducts",async(data)=>{
    const response=await deleteproductAPI(data);

    if(response.status===200){
        toast.success("product deleted successfully")
        return response.data
    }else{
        toast.error("error")
    }
})

export const LetestProducts=createAsyncThunk("letestproducts",async()=>{
    const response=await getLestestproducts();
    if(response.status===200){
        return response.data
    }else{
        toast.error("error")
    }
})

export const getsingleProduct=createAsyncThunk("getsingleProduct",async(data)=>{
    const response=await getsingleproductAPI(data);
    if(response.status===200){
        return response.data
    }else{
        toast.error("error")
    }
})

export const productReview=createAsyncThunk('productReview',async(data)=>{
   try {
    const response=await productreviewAPI(data);
    if(response.status==200){
        toast.success("Review is added successfully")
        return response.data;
    }else{
        toast.error("there might be a problem")
    }
   } catch (error) {
    console.log("error is",error);
   }
})

export const getProductReview=createAsyncThunk("getProductReview",async(data)=>{
    try {
        console.log("data is ",data);
        const response=await getproductreviewAPI(data);
        if(response.status==200){
            return response.data;
        }else{
            console.log("error");
        }
    } catch (error) {
        console.log("error");
    }
})

export const deleteproductReview=createAsyncThunk("deleteproductReview",async(data)=>{
    const response=await deleteproductReviewAPI(data);
    if(response.status==200){
        toast.success("product review is deleted");
        return response.data;
    }else{
        toast.success("product review is deleted")
    }
})


const productcategorySlice = createSlice({
    name: 'addcategorySlice',
    initialState: {
        productcategory: [],
        category: [],
        addproduct: [],
        getproducts:[],
        deleteproduct:[],
        letestProducts:[],
        singleproduct:[],
        productreview:[],
        getproductreviews:[],
        deletereview:[],
        loader: false,
        error: null
    },
    extraReducers: (builders) => {
        builders.addCase(productCategoryApi.pending, (state) => {
            state.loader = true;
        })
            .addCase(productCategoryApi.fulfilled, (state, action) => {
                state.loader = false;
                state.productcategory = action.payload;
            })
            .addCase(productCategoryApi.rejected, (state, action) => {
                state.loader = false;
                state.error = action.payload
            })
        // getcategory
        builders.addCase(getCategoryAPI.pending, (state) => {
            state.loader = true;
        })
            .addCase(getCategoryAPI.fulfilled, (state, action) => {
                state.loader = false;
                state.category = action.payload;
            })
            .addCase(getCategoryAPI.rejected, (state, action) => {
                state.loader = false;
                state.error = action.payload
            })
        // addproduct

        builders.addCase(addProduct.pending, (state) => {
            state.loader = true;
        })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loader = false;
                state.addproduct = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loader = false;
                state.error = action.payload
            })

            //getallproducts

            .addCase(getallproducts.pending,(state)=>{
                state.loader=true;
            })
            .addCase(getallproducts.fulfilled,(state,action)=>{
                state.loader=false;
                state.getproducts=action.payload
            })
            .addCase(getallproducts.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })

            //deleteproducts

            .addCase(deleteproducts.pending,(state)=>{
                state.loader=true;
            })
            .addCase(deleteproducts.fulfilled,(state,action)=>{
                state.loader=false;
                state.singleproduct=[action.payload]
            })
            .addCase(deleteproducts.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })

            //Letest Products

            .addCase(LetestProducts.pending,(state)=>{
                state.loader=true;
            })
            .addCase(LetestProducts.fulfilled,(state,action)=>{
                state.loader=false;
                state.letestProducts=[action.payload]
            })
            .addCase(LetestProducts.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })

            // getsingleproduct

            .addCase(getsingleProduct.pending,(state)=>{
                state.loader=true;
            })
            .addCase(getsingleProduct.fulfilled,(state,action)=>{
                state.loader=false;
                state.singleproduct=[action.payload]
            })
            .addCase(getsingleProduct.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })


            // Addreview

            .addCase(productReview.pending,(state)=>{
                state.loader=true;
            })
            .addCase(productReview.fulfilled,(state,action)=>{
                state.loader=false;
                state.productreview=[action.payload]
            })
            .addCase(productReview.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })
        
            // getroductreview

            .addCase(getProductReview.pending,(state)=>{
                state.loader=true;
            })
            .addCase(getProductReview.fulfilled,(state,action)=>{
                state.loader=false;
                state.getproductreviews=[action.payload]
            })
            .addCase(getProductReview.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })


            // deletereview
                   
            .addCase(deleteproductReview.pending,(state)=>{
                state.loader=true;
            })
            .addCase(deleteproductReview.fulfilled,(state,action)=>{
                state.loader=false;
                state.deletereview=[action.payload]
            })
            .addCase(deleteproductReview.rejected,(state,action)=>{
                state.loader=false;
                state.error=action.payload;
            })



            
    }
})

export default productcategorySlice.reducer;