import React, { useEffect, useState } from 'react'
import productimage from "../Homeproducts/shoes.png"
import "./homeproduct.scss"
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { getallproducts } from '../../Redux/Slice/productSlice/productslice'


function Homeproduct({getproducts,letestProducts}) {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  
  ]
  const dispatch=useDispatch();
  const [page,setpage]=useState(1);
  const [pagecount,setpagecount]=useState(0)
  const [selectcategory,setselectedcategory]=useState("");

  
  const productapi=(e)=>{

  const data={
    selectcategory,
    page
  }
 
  dispatch(getallproducts(data)).then((res)=>{
    setpagecount(res.payload.pagination.pagecount)
  })


  }


  useEffect(()=>{


  },[page]);

  console.log(getproducts);
  return (
   <section id='homeproduct'>
      <div className="title container ">
      <h2>Products</h2>
  
      </div>
    <div className="products container">
       {

        getproducts?.length > 0 ?
         getproducts.slice(0,2).map((element)=>{
          return (
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
           <button><a href="#">Add to cart</a></button>
           </div>
          </div>
          )
         })

      :"Product are not available"
     

      }

       
    
    </div>





    {/* new arrivals */}

    <div className="title container spacer">
      <h2>New Arrivals</h2>
      </div>
    <div className="products container">
      {

      letestProducts?.length > 0 ?
       letestProducts.slice(0,3).map((element)=>{
        return(
          <div className="cards">
          <div className="productimage">
            <img src={element.productimage} alt="product image" />
          </div>
          <div className="product-title">
          <p>Nike Shoes</p>
          </div>
          <div className="product-price">
            <p>{element.price}</p>
          </div>
         <div className="product-buy-button">
         <button><a href="#">Buy Now</a></button>
         </div>
        </div>
  
        )
       })
    :"No new products added"
      } 
      
     
    </div>
   </section>
  )
}

export default Homeproduct
