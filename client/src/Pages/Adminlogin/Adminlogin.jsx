import React, { useState } from 'react'
import {Button} from "react-bootstrap"
import "./adminlogin.scss"
import toast from 'react-hot-toast';
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { adminLogin } from '../../Redux/Slice/Adminslice/Adminslice';

const Adminlogin = () => {

    const Dispatch=useDispatch();
    const navigate=useNavigate();


    const [input,setinput]=useState({
        email:"",
        password:""
    })

    function handler(e){
      const {name,value}=e.target;

      setinput({...input,[name]:value})

    }

    const handlesubmit=()=>{
      
        const {email,password}=input;

        if(email==""){
            toast.error("email is required")
        }else if(password==""){
            toast.error("password is required");
        }else{
            Dispatch(adminLogin(input)).then((res)=>{
                if(res.payload.token){
                    navigate("/admin/dashboared")
                }
            }).catch((e)=>{
                console.log(e);
            })
        }
    }

  return (
   <>
   <section id='adminLogin py-2'>
    <div className="form mt-2">
        <div className="form_heading mt-2 ">
            <h2 className='text-center'>Admin Sign In</h2>
        </div>
            <div className="form_data">
                <div className="form_input">
                    <label htmlFor="email" className='fw-bold'>Email</label>
                    
                    <input type="text" name="email" id="email" onChange={handler} placeholder='Enter your email here' />
                </div>
                <div className="form_input">
                    <label htmlFor="password" className='fw-bold'>Password</label> 
                    <input type="password" name="password" id="password" onChange={handler} placeholder='Enter your password' />
                <Button className='mt-3' onClick={handlesubmit}>Login</Button>
                </div>
            </div>
    </div>
   </section>
   </>
  )
}

export default Adminlogin
