import React, { useEffect, useState } from 'react'
import productimage from "../Homeproducts/shoes.png"
import "./product.scss"
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryAPI, getallproducts } from '../../Redux/Slice/productSlice/productslice'
import { NavLink } from 'react-router-dom'

function Product() {

 const dispatch=useDispatch();

 const {getproducts}=useSelector((state)=>state.product)

 


  const[pagecount,setpageCount]=useState(0)
  const [page,setpage]=useState(1)

    const data=[1,2,3,4,5,6];
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

   const productApi=()=>{

      const data={
        selectcategory:'all',
        page
      }

      dispatch(getallproducts(data))
   }

    useEffect(()=>{
      productApi();
    },[])

  return (
   <>
   <section id='seller'>
    <div className="container">
      <div className='d-flex justify-content-between'>
      <h2>Product</h2>
            <div className="select">
            <Select options={options} placeholder="filter by category" />
            </div>
      </div>
        <div className='d-flex justify-content-between '>
            
            <div className="products container mt-5">
      
           
              {

                getproducts.getallproductsfromdatabase?.map((element)=>{
                  return(

                    <div className="cards">
                  <div className="productimage">
                    <img src={element.productimage} alt="product image" />
                  </div>
                  <div className="product-title">
                  <p>{element.productname}</p>
                  </div>
                  <div className="product-price">
                    <p>{element.price}</p>
                  </div>
                 <div className="product-buy-button">
                 <button><NavLink to={`/productdisplay/${element._id}`} href="#">Buy Now</NavLink></button>
                 </div>
                </div>
       
      )

                })

               
            
                    }
           
           </div>

        </div>

    </div>
   </section>
   </>
  )
}

export default Product
