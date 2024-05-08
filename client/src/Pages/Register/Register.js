import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { userRegister } from '../../Redux/Slice/Userslice/userauthSlice';





const Register = () => {


    const [inputvalue,setinputvalue]=useState({
        Firstname:'',
        Lastname:'',
        email:'',
        password:"",
        confirmpassword:''
    });

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [image,setimage]=useState("");
    const [preview,setpreview]=useState("");

    const changehandler=(e)=>{
        const {name,value}=e.target;

        setinputvalue({...inputvalue,[name]:value})
        }

    const imagehandler=(e)=>{
        setimage(e.target.files[0])
    }

    useEffect(()=>{
     
    if(image){
        setpreview(URL.createObjectURL(image))
    }

    },[image])


      const submitdata=(e)=>{
        e.preventDefault();

        const {Firstname,Lastname,email,password,confirmpassword}=inputvalue;

        if(Firstname==""){
            toast.error("please enter firstname")
        }else if(Lastname==""){
            toast.error("please enter lastname")
        }else if(email == ""){
            toast.error("Email is required")
        }else if(!email.includes("@")){
            toast.error("Please enter valid email")
        }else if(image==""){
            toast.error("select your profie")
        }
        else if(password == ""){
            toast.error("please enter a password")
        }else if(confirmpassword == ""){
            toast.error("Enter confirmpassword")
        }else if(password !== confirmpassword){
            toast.error("confirmpassword does not matched")
        }else{
          
        const data=new FormData();
        data.append("Firstname",Firstname);
        data.append("Lastname",Lastname);
        data.append("email",email);
        data.append("user_image",image)
        data.append("password",password);
        data.append("confirmpassword",confirmpassword)

        const config={
            'Content-Type':'multipart/form-data'
        }

        const datasend={
            data,
            config
        }

        dispatch(userRegister(datasend)).then((res)=>{
            if(res?.payload){
                setinputvalue({...inputvalue,Firstname:"",Lastname:"",
             email:"",
             password:"",
             confirmpassword:""
            })

           setimage("")
            }

           setTimeout(() => {
            navigate("/login")
           }, 1000);
        });

        }
      }

    return (
        <>
            {
               <section className='mb-5'>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="profile_div text-center">
                            <img src={image ? preview : "/logo192.png"} style={{ width: "50px" }}   alt="" />
                        </div>

                        <form>
                            <div className="form_input">
                                <input type="text" name="Firstname" onChange={changehandler} value={inputvalue.Firstname}   placeholder='Enter Your Name' id="" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="Lastname" onChange={changehandler} value={inputvalue.Lastname}   placeholder='Enter Your Last Name' id="" />
                            </div>
                            <div className="form_input">
                                <input type="email" name="email" onChange={changehandler} value={inputvalue.email}  placeholder='Enter Your Email Address' id="" />
                            </div>
                            <div className="form_input">
                                <input type="file" name="userprofile"  id="" onChange={imagehandler} />
                            </div>
                            <div className="form_input">
                                <div className="two">
                                    <input type="password"  name="password"  onChange={changehandler}  value={inputvalue.password} placeholder='Enter Your password' id="" />
                                    <div className="showpass" >
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="form_input">
                                <div className="two">
                                    <input type="password"  name="confirmpassword" onChange={changehandler} value={inputvalue.confirmpassword} placeholder='Enter Your Confirm password' id="" />
                                    <div className="showpass">
                                       
                                    </div>
                                </div>
                            </div>

                            <button className='btn' onClick={submitdata}>Sign Up</button>
                            <p>Already have an Account ? <NavLink to="/login">Log IN</NavLink></p>
                        </form>
                    </div>
                </section>
            }

        </>
    )
}

export default Register