import React, { useEffect, useState } from 'react'
import productimage from "./shoes.png"
import { useDispatch, useSelector } from 'react-redux'
import { deleteproducts, getallproducts } from '../../Redux/Slice/productSlice/productslice'
import Page from '../../Components/pagination/Page'

const Adminproductss = () => {
    const data=[1,2,3,4]

    const dispatch=useDispatch();
   const [page,setpage]=useState(1);
   const [pageCount,setpageCount]=useState(0)

   const {getproducts}=useSelector((state)=>state.product);
   const {deleteproduct}=useSelector((state)=>state.product)

  


  //  console.log("products",getproducts);

  //  console.log(pageCount);

  const deletes=(id)=>{

  const data={
    productId:id
  };

  dispatch(deleteproducts(data))

  }



   
  // const {pageCount}=useSelector((state)=>state.product.getproducts.pagination);
  // console.log("products",pageCount)

  // console.log(getallproducts);


  



    const callapi=()=>{

      const senddata={
         selectcategory:"all",
         page
      }

      console.log("value of page",page);

      dispatch(getallproducts(senddata)).then((res)=>{
        setpageCount(res.payload.pagination.pageCount)
      }).catch((e)=>{
        console.log(e);
      });
    }

    useEffect(()=>{
 
      callapi();

    },[page,deleteproduct]);

    // useEffect(()=>{
    //   callapi();
    // })


    const handlernext=()=>{
      setpage(()=>{
        if(page===pageCount) return page;
        return page +1;
      })
    }

    const handleprev=()=>{
      setpage(()=>{
        if(page===1) return page;
        return page-1;
      })
    }

  return (
   <>
    <section id='seller'>
    <div className="container">
      <div className='d-flex justify-content-between'>
      <h2>Product</h2>

      </div>
        <div className='d-flex justify-content-between '>
            
            <div className="products container mt-5">
      
           {
            getproducts?.getallproductsfromdatabase?.map((elements,index)=>{
                return(
                    <div className="cards"key={index}>
                    <div className="productimage">
                      <img src={elements.productimage} alt="product image" />
                    </div>
                    <div className="product-title">
                    <p>{elements.productname}</p>
                    </div>
                    <div className="product-price">
                      <p>Rs 500</p>
                    </div>
                   <div className="product-buy-button">
                   <button onClick={()=>{deletes(elements._id)}}>< a href="#"><i className='fa-solid fa-trash'></i></a></button>
                   </div>
                  </div>
                )
              })
            }
           </div>

        </div>
            <Page pageCount={pageCount} page={page} setpage={setpage} handlernext={handlernext} handleprev={handleprev}/>

    </div>
   </section>
   </>
  )
}

export default Adminproductss
