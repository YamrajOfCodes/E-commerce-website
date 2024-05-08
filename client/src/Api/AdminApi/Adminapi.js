import { Base_URL } from "../helper";
import { commonrequest } from "../commonrequest";



// admin regisetr api
export const adminRegisterApi=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/admin/api/register`,data,header,"admin");
}

//admin login api

export const adminloginApi=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/admin/api/login`,data,header,"admin");
}

export const adminloggedinApi=async(header)=>{
    return await commonrequest("GET",`${Base_URL}/admin/api/adminverify`,"",header,"admin");
}

export const adminlogout=async(header)=>{
    return await commonrequest("GET",`${Base_URL}/admin/api/logout`,"",header,"admin")
}