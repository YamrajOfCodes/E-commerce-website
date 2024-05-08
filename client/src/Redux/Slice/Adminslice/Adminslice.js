import {createSlice,createAsyncThunk} from "@reduxjs/toolkit" 
import { adminRegisterApi, adminloggedinApi, adminloginApi } from "../../../Api/AdminApi/Adminapi";
import toast from 'react-hot-toast';

export const adminLogin=createAsyncThunk("AdminLogin",async(data)=>{
    try {
        
     const response=await adminloginApi(data);

   
   
   if(response.status==200){
    toast.success("admin login successfully")
    // console.log(response);
    localStorage.setItem("admintoken",response.data.token)
    return response.data;
   }else{
    toast.error(response.response.data.error)
   }

    } catch (error) {
        throw error;
    }
})

export const adminloggedin=createAsyncThunk("adminloggedin",async(thunk)=>{
   try {
     const response=await adminloggedinApi();
    //  console.log("response",response);
    //  console.log("hello");
     return response;
   } catch (error) {
    throw error;
   }
})

export const adminLogout=createAsyncThunk("adminLogout",async()=>{
    try {
        
        const response=await adminloginApi();
        if(response.status==200){
            toast.success("admin logout successfull")
            localStorage.removeItem("admintoken");
        }else{
            toast.success("admin logout successfull")
            localStorage.removeItem("admintoken");
        }
        return response;
    } catch (error) {
        throw error;
    }
})







// Create reducer and action

export const adminSlice=createSlice({
    
    name:'adminslice',
    initialState:{
        adminlogin:[],
        adminLoggedin:[],
        adminlogout:[],
        loader:false,
        error:null
    },
    extraReducers:(builder)=>{

        //admin login
        builder.addCase(adminLogin.pending,(state)=>{
            state.loader=true;
        })
        .addCase(adminLogin.fulfilled,(state,action)=>{
            state.loader=false;
            state.adminlogin=action.payload;
        })
        .addCase(adminLogin.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        // admin loggedin

        builder.addCase(adminloggedin.pending,(state)=>{
            state.loader=true;
        })
        .addCase(adminloggedin.fulfilled,(state,action)=>{
            state.loader=false;
            state.adminLoggedin=[action.payload];
        })
        .addCase(adminloggedin.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        //adminlogout

        .addCase(adminLogout.pending,(state)=>{
            state.loader=true;
        })
        .addCase(adminLogout.fulfilled,(state,action)=>{
            state.loader=false;
            state.adminlogout=[action.payload]
        })
        .addCase(adminLogout.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

export default adminSlice.reducer;