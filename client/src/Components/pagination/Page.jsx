import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from 'react-redux';


const Page = ({pageCount,handlernext,handleprev,page,setpage}) => {



  
 
  
  return (
    <div className='pagination d-flex justify-content-end mt-3'>
    <Pagination>
 
   <Pagination.Prev  onClick={()=>{handleprev()}}/>
    {
 
      Array(pageCount).fill(null).map((element,index)=>{
        return (
          <>
        <Pagination.Item  onClick={()=>setpage(index+1)}  active={page==index +1 ? true : false}>{index+1}</Pagination.Item>
          </>
        )
      })
    }
   <Pagination.Next onClick={handlernext}/>

 </Pagination>
 </div>
  )
}

export default Page
