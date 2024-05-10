import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteuserAPI, getusersAPI, userLoginAPI, userLogoutAPI, userRegisterAPI, userVerifyAPI } from "../../../Api/UserApi/userAPI";
import toast from "react-hot-toast";
import { addtocartAPI, getcartdataAPI, removeitemAPI, removesingleproductAPI } from "../../../Api/CartApi/CartAPI";





export const userRegister=createAsyncThunk("userRegister",async(data)=>{

 try {

    const response=await userRegisterAPI(data.data,data.config);

    if(response.status==200){
       toast.success("user are registered");
       return response.data;
    }else{
       toast.error(response.response.data.error)
    }
   

 } catch (error) {
    throw error
 }

})


export const getUsers=createAsyncThunk("getUsers",async(data)=>{
    const response= await getusersAPI(data);
    return response.data;
})


export const userlogin=createAsyncThunk("userlogin",async(data)=>{
    try {
        const response=await userLoginAPI(data);
        if(response.status==200){
            toast.success("login successfully");
            localStorage.setItem("userlogin",response.data.token);
            return response.data;
        }else{
            // console.log(response);
            toast.error(response.response.data.error)
        }
    } catch (error) {
         throw error
    }
})

 export const userVerify=createAsyncThunk("userVerify",async(thunkapi)=>{
    try {
         
        const response=await userVerifyAPI();
        if(response.status==200){
            return response.data;
        }else{
            return thunkapi.rejectWithValue("error");
        }

    } catch (error) {
        throw error;
    }
})

export const userLogout=createAsyncThunk("userLogout",async(thunkapi)=>{
    try {
        const response=await userLogoutAPI();
    if(response.status==200){
        toast.success("user are logout");
        localStorage.removeItem("userlogin");
        return response.data;
    }else{
        toast.success("user are logout");
        localStorage.removeItem("userlogin");
        return response.data;
    }
    } catch (error) {
        return thunkapi.rejectWithValue("error");
    }
})

export const addtoCart=createAsyncThunk("addtoCart",async(data)=>{
try {
    const response=await addtocartAPI(data);
    console.log(response);
    if(response.status==200){
        toast.success(response.data);
    }else{
        toast.error(response.response.data.error)
    }

} catch (error) {
    console.log("error",error);
}    
})

export const usercartdata=createAsyncThunk("usercartdata",async()=>{
    const response=await getcartdataAPI();
    
    if(response.status==200){
        return response.data
    }else{
        console.log("cart")
    }
})

export const removesingleproduct=createAsyncThunk("removesingleproduct",async(data)=>{
    const response=await removesingleproductAPI(data);

    if(response.status==200){
        toast.success(response.data.message)
        console.log(response);
        return response.data;
    }else{
        // toast.error(response.data);
    }
})

export const removeitem=createAsyncThunk("removeitem",async(data)=>{
try {
    const response=await removeitemAPI(data);
     if(response.status==200){
        toast.success(response.data.message);
        return response.data
     }else{
        console.log(response.data);
     }
} catch (error) {
    console.log(error);
}
    
})


export const DeleteUser=createAsyncThunk("DeleteUser",async(data)=>{
    const response=await deleteuserAPI(data);
    if(response.status==200){
        toast.success(response.data);
        return response.data
    }else{
        toast.error("user not deleted")
    }
})




export const userSlice=createSlice({
    name:'userSlice',
    initialState:{
        usersRegister:[],
        userLogin:[],
        userLoggedin:[],
        getusers:[],
        deleteuser:[],
        userLogout:[],
        addtocart:[],
        cartdata:[],
        removesingle:[],
        removeall:[],
        loader:false,
        error:null
    },
    extraReducers:(bulider)=>{
        bulider.addCase(userRegister.pending,(state)=>{
            state.loader=true
        })
        .addCase(userRegister.fulfilled,(state,action)=>{
            state.loader=false;
            state.usersRegister=[action.payload]
        })
        .addCase(userRegister.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        // userlogin
        bulider.addCase(userlogin.pending,(state)=>{
            state.loader=true
        })
        .addCase(userlogin.fulfilled,(state,action)=>{
            state.loader=false;
            state.userLogin=[action.payload]
        })
        .addCase(userlogin.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        //userLoggedin

        bulider.addCase(userVerify.pending,(state)=>{
            state.loader=true
        })
        .addCase(userVerify.fulfilled,(state,action)=>{
            state.loader=false;
            state.userLoggedin=[action.payload]
        })
        .addCase(userVerify.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })


        //Getusers

        bulider.addCase(getUsers.pending,(state)=>{
            state.loader=true
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.loader=false;
            state.getusers=[action.payload]
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })


        //deleteuser

        bulider.addCase(DeleteUser.pending,(state)=>{
            state.loader=true
        })
        .addCase(DeleteUser.fulfilled,(state,action)=>{
            state.loader=false;
            state.deleteuser=[action.payload]
        })
        .addCase(DeleteUser.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        //userlogout

        bulider.addCase(userLogout.pending,(state)=>{
            state.loader=true
        })
        .addCase(userLogout.fulfilled,(state,action)=>{
            state.loader=false;
            state.userLoggedin=[action.payload]
            state.userLoggedin=[];
            state.cartdata=[];
        })
        .addCase(userLogout.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        // addtocart

        bulider.addCase(addtoCart.pending,(state)=>{
            state.loader=true
        })
        .addCase(addtoCart.fulfilled,(state,action)=>{
            state.loader=false;
            state.addtocart=[action.payload];
        })
        .addCase(addtoCart.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        // getcart

        bulider.addCase(usercartdata.pending,(state)=>{
            state.loader=true
        })
        .addCase(usercartdata.fulfilled,(state,action)=>{
            state.loader=false;
            state.cartdata=action.payload;
        })
        .addCase(usercartdata.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })

        // removesingle

        bulider.addCase(removesingleproduct.pending,(state)=>{
            state.loader=true
        })
        .addCase(removesingleproduct.fulfilled,(state,action)=>{
            state.loader=false;
            state.removesingle=[action.payload];
        })
        .addCase(removesingleproduct.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })
         
        // removeallitem

        bulider.addCase(removeitem.pending,(state)=>{
            state.loader=true
        })
        .addCase(removeitem.fulfilled,(state,action)=>{
            state.loader=false;
            state.removeall=[action.payload];
        })
        .addCase(removeitem.rejected,(state,action)=>{
            state.loader=false;
            state.error=action.payload
        })




    }
})

export default userSlice.reducer;