import { Base_URL } from "../helper";
import { commonrequest } from "../commonrequest";


export const adminCategoryAPI=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/product/api/addcategory`,data,header,"admin");
}

export const getcategory=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/product/api/getcategory`,"",header,"admin")
}

export const addproductAPI=async(data,select,header)=>{
    return await commonrequest("POST",`${Base_URL}/product/api/addproduct?productcategory=${select}`,data,header,"admin");
}

export const getallproductsAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/product/api/getallproducts?categoryid=${data.selectcategory}&page=${data.page}`,"",header,"admin");
}

export const getLestestproducts=async(data,header)=>{
  return await commonrequest("GET",`${Base_URL}/product/api/newarrivals`,"",header,"user");
}

export const deleteproductAPI=async(data,header)=>{
    return await commonrequest("DELETE",`${Base_URL}/product/api/deleteproduct/${data.productId}`,{},header,"admin")
}

export const getsingleproductAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/product/api/getsingleproduct/${data.productId}`,"",header,"user")
}

export const productreviewAPI=async(data,header)=>{
    return await commonrequest("POST",`${Base_URL}/product/api/addreview/${data.productId}`,data.data,header,"user")

}

export const getproductreviewAPI=async(data,header)=>{
    return await commonrequest("GET",`${Base_URL}/product/api/getproductreview/${data.productId}`,"",header,"user")

}

export const deleteproductReviewAPI=async(data,header)=>{
    return await commonrequest("DELETE",`${Base_URL}/product/api/productreviewdelete/${data.reviewId}`,{},header,"user")

}