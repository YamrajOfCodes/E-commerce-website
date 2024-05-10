import React, { useEffect, useState } from 'react'
import "./Admin.scss"
import Adminusertable from '../../Components/adminusertable/Adminusertable'
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../Redux/Slice/productSlice/productslice';
import { getUsers } from '../../Redux/Slice/Userslice/userauthSlice';

const Admindashboard = () => {

  const dispatch=useDispatch();
  const [page,setpage]=useState(1);
  const {getproducts}=useSelector((state)=>state.product)
  const {deleteuser}=useSelector((state)=>state.user)
  const {getusers}=useSelector((state)=>state.user)
  // console.log("data",getusers);

  const [usercount,setusercount]=useState(0);
  const [pagecount,setpagecount]=useState(0)
  

const productsapi=()=>{

  const data={
    selectcategory:"all",
    page
  }

  dispatch(getallproducts(data))



}


const getuserAPI=()=>{

  const data={
    page
  }

  dispatch(getUsers(data)).then((res)=>{
    if(res?.payload){
      setpagecount(res.payload.pagination.pagecount);
      setusercount(res.payload.pagination.count);
    }
  }).catch((e)=>{
    console.log(e);
  })
}



useEffect(()=>{

  productsapi();
  getuserAPI();

},[page,deleteuser]);

  return (
    <>
    <div className="section py-5 mt-5">
        <div className="card border px-4 py-3 shadow">
       <h4>Total Order</h4>
       <div className="number">
        <h4>4</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Total Order</h4>
       <div className="number">
        <h4>{getproducts?.pagination?.totalProducts}</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Total Products</h4>
       <div className="number">
        <h4>{getproducts?.pagination?.totalProducts}</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
        <div className="card border px-4 py-3 shadow">
       <h4>Users</h4>
       <div className="number">
        <h4>{usercount}</h4>
        <i class="fa-regular fa-circle fs-2"></i>
       </div>
       <div className="flex">
       <i class="fa-regular fa-square"></i>
       <span>Up from yesterday</span>
       </div>
        </div>
    </div>
    <section className='section-2 p-3'>
        <h2>Recent Sales  <br />users</h2>
        <div className="table">
            <Adminusertable getusers={getusers} page={page}/>
        </div>
    </section>
    </>
  )
}

export default Admindashboard
