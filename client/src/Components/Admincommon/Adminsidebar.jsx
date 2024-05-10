import React, { useEffect, useState } from 'react'
import "./adminsidebar.scss"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout, adminloggedin } from '../../Redux/Slice/Adminslice/Adminslice';
import {Navigate} from "react-router-dom"


const Adminsidebar = ({children}) => {

    const dispatch=useDispatch();

    const {adminLoggedin}=useSelector(state=>state.admin);
    const navigate=useNavigate();

//    console.log(adminLoggedin[0]?.data.name);



   
    const [active,setactive]=useState(false);

    const clickhandler=()=>{
 
        setactive(!active);
        // console.log(active);

    }

  
   

     const handlefunction=()=>{
       dispatch(adminloggedin()).then((res)=>{
        console.log("res",res);
       }).catch((e)=>{
        console.log(e);
       })
     }

     const logoutfunction=()=>{
        dispatch(adminLogout()).then((res)=>{
            navigate("/admin/login");
        }).catch((e)=>{
            navigate("/admin/login")
        })
     }


    useEffect(()=>{
     handlefunction();
    },[])


  return (
    <>
    <div className='sidebar'>
    <div className="profile pt-3 px-2">
        <i className='fa-solid fa-user'></i>
        <span>Kundan</span>
    </div>
    <ul className='mt-3'>
       <li>
       <NavLink>
            <i className='fa-solid fa-certificate'></i>
            <span>Dashboared</span>
        </NavLink>
       </li>
       <li>
       <NavLink>
            <i className='fa-solid fa-truck-fast'></i>
             <Link to={"/admin/addproduct"}><span>Add products</span></Link>
        </NavLink>
       </li>
       <li>
       <NavLink>
            <i className='fa-solid fa-certificate'></i>
         <Link to={"/admin/addcategory"}><span>Add category</span></Link>
        </NavLink>
       </li>
       <li>
       <NavLink>
            <i className='fa-solid fa-certificate'></i>
            <Link to={"/admin/products"}><span>Products</span></Link>
        </NavLink>
       </li>
       <li>
       <NavLink>
            <i className='fa-solid fa-bag-shopping'></i>
            <span>Other</span>
        </NavLink>
       </li>
       <li>
       <NavLink>
            <i className='fa-solid fa-gears'></i>
            <span>Setting</span>
        </NavLink>
       </li>
    </ul>
    </div>

    {/*  Header */}

    <section >
    <nav>
        <div className="wrapper">
        <div className="nav-logo">
            <i className='fa-solid fa-bars' onClick={clickhandler}></i>
            <span>Dashboard</span>
        </div>

        <div className="search">
            <input type="text" name="search" id="search" placeholder='Search' />
            <i className='fa-solid fa-search'></i>
        </div>

        <Dropdown className='dropdown'>
      <Dropdown.Toggle id="dropdown-basic">
   {/* {
    adminLoggedin[0]?.data.name
   } */}
   {/* <img src={adminLoggedin[0]?.data.profile} style={{width:'40px'}} alt="" srcset="" /> */}

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={logoutfunction}>
       <a p="#" className='text-decoration-none text-dark'>
       <i class=" p1 fa-solid fa fa-right-from-bracket text-dark"></i>&nbsp;
       Logout
       </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
       
    </nav>
    <div className="containerss">
        {
            children
        }
    </div>
    </section>
    
    

    
    </>
  )
}

export default Adminsidebar
