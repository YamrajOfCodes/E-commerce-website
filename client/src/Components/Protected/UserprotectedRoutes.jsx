import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const UserprotectedRoutes = ({components}) => {

    const navigate=useNavigate();

    const checkuser=()=>{
        let login=localStorage.getItem("userlogin");

        if(!login){
          navigate("/login");
        }
    }

    useEffect(()=>{
       checkuser(); 
    },[]);
    
  return (
    <div>
      {
        components
      }
    </div>
  )
}

export default UserprotectedRoutes
