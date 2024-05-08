import { commonrequest } from "../commonrequest"
import { Base_URL } from "../helper"


export const addtocartAPI=async(productid,header)=>{
    return await commonrequest("POST",`${Base_URL}/cart/api/addtocart/${productid}`,{},header,"user");
}

export const getcartdataAPI=async(header)=>{
    return await commonrequest("GET",`${Base_URL}/cart/api/getcarts`,"",header,"user");
}

export const removesingleproductAPI=async(productId,header)=>{
    return await commonrequest("POST",`${Base_URL}/cart/api/removesingleItem/${productId}`,{},header,"user");
}

export const removeitemAPI=async(productId,header)=>{
    return await commonrequest("POST",`${Base_URL}/cart/api/removeallitems/${productId}`,{},header,"user");
}