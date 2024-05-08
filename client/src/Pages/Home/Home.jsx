import React, { useEffect, useState } from 'react'
import Homemain from '../../Components/Homemain/Homemain'
import Homeproduct from '../../Components/Homeproducts/Homeproduct'
import Homecontact from '../../Components/Homecontact/Homecontact'
import { useDispatch, useSelector } from 'react-redux';
import { LetestProducts, getallproducts } from '../../Redux/Slice/productSlice/productslice';

function Home() {

  const [page,setpage]=useState(1);
  const dispatch=useDispatch();

  const  {getproducts} =useSelector((state)=>state.product);
  const {letestProducts}=useSelector((state)=>state.product);
  // console.log(getproducts);
  const productapi=(e)=>{

    const data={
      selectcategory:"all",
      page
    }

    dispatch(getallproducts(data))
    dispatch(LetestProducts());

  }

  useEffect(()=>{
   productapi();
  },[]);


  return (
   <>
   <Homemain/>
   <Homeproduct getproducts={getproducts.getallproductsfromdatabase} letestProducts={letestProducts} />
   <Homecontact />
   </>
  )
}

export default Home
