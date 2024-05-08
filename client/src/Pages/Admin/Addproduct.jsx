import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import { addProduct, getCategoryAPI } from '../../Redux/Slice/productSlice/productslice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';


const Addproduct = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const dispatch=useDispatch();
    const [option,setoptions]=useState([]);
    
    const {category}=useSelector(state=>state.product);
    // console.log("data",category);

    useEffect(()=>{

        dispatch(getCategoryAPI());

    },[]);

    useEffect(()=>{

      const arr=[];

      for(let i=0;i<category.length;i++){

        let setdata={
            value:category[i]._id,
            label:category[i].productCategory
        }
        arr.push(setdata);
      }

      setoptions(arr)

    },[category])


    const [input,setinput]=useState({
        productname:"",
        price:"",
        discount:"",
        quantity:"",
        description:""

    })

    const [product_image,setimage]=useState("");
    const [select,setselect]=useState("")


    const handlechange=(e)=>{

   const {name,value}=e.target;

   setinput({...input,[name]:value});

    }

    const handleimage=(e)=>{
        setimage(e.target.files[0]);
    }

    const handleselect=(e)=>{
        const {value}=e;
        setselect(value)
    }


    const submitdata=(e)=>{

        e.preventDefault();
  
       const {productname,price,discount,quantity,description}=input;

       if(productname==""){
        toast.error("productname is required");
       }else if(price==""){
        toast.error("price is required");
       }else if(discount==""){
        toast.error("discount is required");
       }else if(quantity==""){
        toast.error("quantity is required");
       }else if(description==""){
        toast.error("description is required");
       }else if(product_image==""){
        toast.error("image is required");
       }else if(select==""){
        toast.error("category is required");
       }else{

        const data=new FormData();
        data.append("productname",productname);
        data.append("price",price);
        data.append("discount",discount);
        data.append("quantity",quantity);
        data.append("description",description);
        data.append("product_image",product_image);


             // setting headers

             const config={
                "Content-Type":'multipart/form-data'
             }

             // snd data

             const senddata={
                data,
                select,
                config
             }

             dispatch(addProduct(senddata)).then((res)=>{
                if(res.payload){
                    setinput({...input,productname:"",discount:"",quantity:"",description:"",price:""});
                    setimage("");
                    setselect("")
                }
             }).catch((error)=>{
                console.log(error);
             });

       }

    }


    return (
        <>
            <section className='mb-5'>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Add Product</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <input type="text" name="productname" placeholder='Enter product name' onChange={handlechange} value={input.productname} id="" />
                        </div>
                        <div className="form_input">
                            <Select options={option} placeholder="product category" onChange={handleselect} />
                        </div>
                        <div className="form_input">
                            <input type="text" name="price" placeholder='price' id="" onChange={handlechange} value={input.price}  />
                        </div>
                        <div className="form_input">
                            <input type="text" name="discount" placeholder='Discount' id="" onChange={handlechange}value={input.discount}  />
                        </div>
                        <div className="form_input">
                            <input type="file" name="product_image" id=""  onChange={handleimage}/>
                        </div>
                        <div className="form_input">
                            <input type="text" name="quantity" placeholder='quantity' id="" onChange={handlechange} value={input.quantity} />
                        </div>
                        <div className='form_input'>
                            <FloatingLabel controlId="floatingTextarea2" >
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    name='description'
                                    onChange={handlechange} 
                                    value={input.description}
                                />
                            </FloatingLabel>
                        </div>


                        <button className='btn' onClick={submitdata}>Submit</button>
                       
                    </form>
                </div>
            </section>
        </>
    )
}

export default Addproduct
