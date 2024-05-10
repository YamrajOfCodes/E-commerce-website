import { commonrequest } from "../commonrequest"
import { Base_URL } from "../helper"



export const userRegisterAPI=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/user/api/register`,data,header,"user");
}

export const userLoginAPI=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/user/api/login`,data,header,"user");
}

export const userVerifyAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/user/api/userverify`,"",header,"user");
}

export const userLogoutAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/user/api/logout`,"",header,"user");
}

export const getusersAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/user/api/getallusers?page=${data.page}`,"",header,"admin")
}

export const deleteuserAPI=async(data,header)=>{
    return await commonrequest("DELETE",`${Base_URL}/user/api/deleteuser/${data.userId}`,{},header,"admin");
}


