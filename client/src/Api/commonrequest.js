import axios from "axios";

export const commonrequest=async(methods,url,body,header,auth)=>{

    console.log(body);


    let admintoken=localStorage.getItem("admintoken");
    let usertoken = localStorage.getItem("userlogin");

    let config={
        method:methods,
        url,
        headers:{},
        data:body
    }


    if(auth=="admin"){
        config.headers.Authorization=admintoken
    }else if(auth=="user"){
        console.log("header");
        config.headers.Authorization=usertoken
    }

    if(header){
        config.headers["Content-Type"] = "multipart/form-data"
    }else{
        config.headers["Content-Type"] = "application/json"
    }

  
    try {
        const response=await axios(config);
        console.log(response);
        return response
    } catch (error) {
        return error;
    }

}


