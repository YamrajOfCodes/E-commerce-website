import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux';
import { productCategoryApi } from '../../Redux/Slice/productSlice/productslice';
import toast from 'react-hot-toast';
 

const Addcategory = () => {

    const dispatch=useDispatch();

    const [input,setinput]=useState({
        productCategory:"",
        productDescription:""
    })

    const handledata=(e)=>{
    
    const {name,value}=e.target;
    setinput({...input,[name]:value})

    }

    const handleClick=(e)=>{

        e.preventDefault();
 
        const {productCategory,productDescription}=input;

        if(productCategory==""){
            toast.error("productvategory is required")
        }else if(productDescription==""){
            toast.error("productdescription is required")
        }else{
            dispatch(productCategoryApi(input))
        }
    }
  return (
   <>
     <section className='mb-5'>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Add Category</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="category">Add category</label>
                            <input type="text" name="productCategory" id="category" onChange={handledata} />
                        </div>
                      
                        <div className='form_input'>
                            <FloatingLabel controlId="floatingTextarea2" >
                                Description
                            </FloatingLabel>
                            <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    onChange={handledata}
                                    name='productDescription'
                
                                />
                        </div>


                        <button className='btn' onClick={handleClick}>Submit</button>
                       
                    </form>
                </div>
            </section>
   </>
  )
}

export default Addcategory
