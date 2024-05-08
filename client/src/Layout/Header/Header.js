import React, { useEffect } from 'react'
import "./header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, userVerify, usercartdata } from '../../Redux/Slice/Userslice/userauthSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const {userLoggedin}=useSelector((state)=>state.user);

  const {userLogin}=useSelector((state)=>state.user)

  const {addtocart}=useSelector((state=>state.user))
  const {removesingle}=useSelector((state)=>state.user)
  const {removeall}=useSelector((state)=>state.user);


  const productdetails=useSelector((state)=>state.user.cartdata);

  console.log("userdara",productdetails);

  console.log(userLogin);

  const userloggedin=(e)=>{
    dispatch(userVerify())
  }

  const userlogout=(e)=>{

    handleClose();

    dispatch(userLogout()).then((res)=>{
      if(res.payload){
        navigate("/")
      }
    })

  }

  const getcartdata=()=>{
 
    dispatch(usercartdata());

  }

  useEffect(()=>{
    getcartdata();
  },[addtocart,userLogin,removesingle,removeall]);


  useEffect(()=>{
    userloggedin();
  },[userLogin]);  // 2 time homepage yeil ekda login karu tevha aani ekda landing page

  return (
    <>
    <header>
      <div className="container">
        <nav>
          <div className="left">
            <div className="navlogo">
              <a p="#">
              <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={handleShow}>
            <i class="fa-solid fa-bars"></i>
            </div>
            <div className="nav_btn">
              <NavLink to={"/product"}>products</NavLink>
            </div>
            <div id='ex4' className="cartIcon">
            <NavLink to={"/cart"}>
              <span className='p1 fa-stack fa-2x has-badge'>
                <span style={{position:'absolute', fontSize:'24px',marginTop:"-20px",marginLeft:"20px"}}>{userLoggedin?.length > 0 ? productdetails[0]?.length :"0"}</span>
              <i class=" p1 fa-solid fa-cart-shopping"></i>
              </span>
            </NavLink>
            </div>

            <div className="profile">
            <Dropdown className='dropdown'>
      <Dropdown.Toggle id="dropdown-basic">
    
       <img src={userLoggedin?.length > 0 ? userLoggedin[0]?.userprofile : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" } style={{width:'50px'}} alt="" srcset="" />
          
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {
        userLoggedin?.length > 0 ?
        (
          <>
           <Dropdown.Item onClick={handleClose}>
       <NavLink to={"/userprofile"} className='text-decoration-none text-dark'>
       <NavLink class=" p1 fa-solid fa-user text-dark"></NavLink>&nbsp;
       Profile
       </NavLink>
        </Dropdown.Item>
        <Dropdown.Item onClick={userlogout}>
       <a p="#" className='text-decoration-none text-dark'>
       <i class=" p1 fa-solid fa-user text-dark"></i>&nbsp;
       Logout
       </a>
        </Dropdown.Item>
          </>
        ):
        (
          <>
          
          <Dropdown.Item onClick={handleClose}>
       <NavLink to={"/userprofile"} className='text-decoration-none text-dark'>
       <NavLink class=" p1 fa-solid fa-user text-dark"></NavLink>&nbsp;
       Profile
       </NavLink>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleClose}>
       <NavLink to="/login" className='text-decoration-none text-dark'>
       <NavLink class=" p1 fa-solid fa-user text-dark" to={"/login"}></NavLink>&nbsp;
       Login
       </NavLink>
        </Dropdown.Item>
          </>
        )
       }
      </Dropdown.Menu>
    </Dropdown>
            </div>
          </div>
        </nav>
      </div>

      {/* sidebar */}
      
      <Offcanvas show={show} onHide={handleClose}>
        {
          userLoggedin?.length > 0 ?
          (
            <>
                    <Offcanvas.Header closeButton>
        <Dropdown.Toggle id="dropdown-basic">
        <img src={userLoggedin?.length > 0 ? userLoggedin[0]?.userprofile : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" } style={{width:'50px'}} alt="" srcset="" />
      </Dropdown.Toggle> <br />
        </Offcanvas.Header>
        

        <Offcanvas.Body className='bg-dark'>
      
      <a onClick={handleClose} className='text-decoration-none text-light'>
       <i class=" p1 fa-solid fa-shop text-light"></i>&nbsp;
       Products
       </a>
       <br />
       <a onClick={handleClose} className='text-decoration-none text-light'>
       <i class=" p1 fa-solid fa-right-to-bracket text-light"></i>&nbsp;
       Logout
       </a>

       <div id='ex4' className="cartIcon">
            <a p="#">
              <span className='p1 fa-stack fa-2x has-badge text-light' data-count={0}>
              <i class=" p1 fa-solid fa-cart-shopping text-light"></i>
              </span>
            </a>
            </div>
        </Offcanvas.Body>
        </>
          )
          :

          (
            <>
            
            <Offcanvas.Header closeButton>
        <Dropdown.Toggle id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle> <br />
        </Offcanvas.Header>
        

        <Offcanvas.Body className='bg-dark'>
      
      <a onClick={handleClose} className='text-decoration-none text-light'>
       <i class=" p1 fa-solid fa-shop text-light"></i>&nbsp;
       Products
       </a>
       <br />
       <NavLink to={"/login"} p="#" className='text-decoration-none text-light' onClick={handleClose}>
       <NavLink to={"/login"} class=" p1 fa-solid fa-right-to-bracket text-light"></NavLink>&nbsp;
       Login
       </NavLink>

       <div id='ex4' className="cartIcon">
            <a p="#">
              <span className='p1 fa-stack fa-2x has-badge text-light' data-count={0}>
              <i class=" p1 fa-solid fa-cart-shopping text-light"></i>
              </span>
            </a>
            </div>
        </Offcanvas.Body>
            </>
          )
        }

      
      </Offcanvas>
    </header>
    
    </>
  )
}

export default Header