import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminprotectedRoutes = ({components}) => {

    const navigate=useNavigate();

    const checkadmin=()=>{
        const admin=localStorage.getItem("admintoken");
        if(!admin){
            navigate("/admin/login");
        }
    }

    useEffect(()=>{
      checkadmin();

    },[])
  return (
    <div>
      {
        components
      }
    </div>
  )
}

export default AdminprotectedRoutes
