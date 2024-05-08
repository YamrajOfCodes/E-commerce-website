import React, { useEffect, useState } from 'react'
import "./commonstyle.scss"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userlogin } from '../../Redux/Slice/Userslice/userauthSlice'
import toast from 'react-hot-toast'


const Login = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
  

   
   const [inputvalue,setinputvalue]=useState({
    email:"",
    password:""
   });


   const handlechange=(e)=>{

    const {name,value}=e.target;

    setinputvalue({...inputvalue,[name]:value})

   }

   const submitdata=(e)=>{
    e.preventDefault();

    const {email,password}=inputvalue;
    
    if(email==""){
        toast.error("email is required")
    }else if(!email.includes("@")){
        toast.error("Please enter Valid email")
    }else if(password==""){
        toast.error("password is required");
    }else{

        dispatch(userlogin(inputvalue)).then((res)=>{
            if(res.payload){
                navigate("/")
            }
        });

    
    }

   }

      

    return (
        <>
        {
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign In</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"  placeholder='Enter Your Email Address' onChange={handlechange} id="" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type= "password" name="password" placeholder='Enter Your password' onChange={handlechange} id="" />
                                <div className="showpass" >
                                   
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={submitdata}>Login</button>
                        <p>Don't have an Account ? <NavLink to="/register">Sign Up</NavLink></p>
                        <p style={{ color: "black", fontWeight: "bold" }}>Forgot Password <NavLink to="/forgotpassword">Click Here</NavLink></p>
                    </form>
                </div>
            </section>
        }
            
        </>
    )
}

export default Login