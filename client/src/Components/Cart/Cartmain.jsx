import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import shoespng from "./shoes.png"
import "./cartsmain.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removeitem, removesingleproduct } from '../../Redux/Slice/Userslice/userauthSlice';
import moment, { isMoment } from "moment"
import { useNavigate } from 'react-router-dom';

const Cartmain = () => {
    const {cartdata}=useSelector((state)=>state.user);
    const {removesingle}=useSelector((state)=>state.user)

    const date=moment().add(2,"days").format("YYYY-MM-DD");

    const navigate=useNavigate();

    console.log("cart",cartdata);
    console.log("cart",removesingle);

    const [price,setprice]=useState(0);
    const dispatch=useDispatch();

    const setpricefunction=()=>{
      let price=0;

      cartdata.map((element)=>{
        price=price + element.productdetails.price * element.quantity;
      })

      setprice(price)
    }

    const checkout=()=>{
        navigate("/shipping",{state:price});
    }

    useEffect(()=>{
    
        setpricefunction();

    },[]
)

   
    const handlerincrement=(e)=>{
        dispatch(addtoCart(e));
    }

    const handledecrement=(e)=>{
        dispatch(removesingleproduct(e))
    }


    const removeItem=(e)=>{

        dispatch(removeitem(e))

    }

  return (
  <>
 <Container>
    <h2 className='text-center'>Shopping cart</h2>

    <Row className='mt-5'>
        <Col lg={8} md={7}>
        <Card className='p-2'>
            <Card.Title>
                Cart (2 Item)
            </Card.Title>

            {
               cartdata.length > 0 ?  cartdata?.map((element,index)=>{
                    return (
                        <>
                          <Row className=' d-flex justify-content-between mt-2 mb-2 pb-2' key={index}>
            <Col lg={3}>
                <img src={element.productdetails.productimage} alt="" srcset="" />
            </Col>
            <Col lg={8}>
            <div className="title d-flex justify-content-between" >
                <h4>{element.productdetails.productname}</h4>
                <div className="buttons d-flex gap-2">
                    <Button className='btn' variant='light' onClick={(e)=>{handledecrement(element.productdetails._id)}} >&minus;</Button>
                    <span>{element.quantity}</span>
                    <Button className='btn' variant='light' onClick={(e)=>{handlerincrement(element.productdetails._id)}} >+</Button>
                </div>

            </div>
            <div className="desc" >
                    <p>Discount:- {element.productdetails.discount}</p>
                    <p>Price:- {element.productdetails.price}</p>
                    <p>Delivery Date:-{date}</p>
                </div>

                <div className="buttons d-flex gap-2 justify-content-between" >
               <div className="btns d-flex gap-2">
               <Button className='btn' variant='danger' onClick={()=>{removeItem(element.productdetails._id)}} >
                    <i className=' fa fa-trash'></i>Remove from Cart
                </Button>
                <Button className='btn' variant='secondary' >
                    <i className=' fa fa-heart'></i>Remove from Cart
                </Button>
               </div>

                <div className="p">
                    <h3>Total :- <span>{element.productdetails.price * element.quantity}</span></h3>
                </div>
                </div>
            </Col>
          </Row> 
                        </>
                    )
                }) :<>
                 <h2>Cart is empty</h2>
                </>
            }
            
        
         
          
        </Card>



        
        </Col>

        <Col lg={4} md={5}>
            <Card className='py-4 px-2  mb-2 mx-2'>
                <Card.Title className='mx-2 fw-bold'>The total amount </Card.Title>
                <Row>
                    <Col>
                    <span className='d-flex justify-content-between '>
                        <p>Temporary amount</p>
                        <p>200</p>
                    </span>
                    <hr />
                    <span className='d-flex justify-content-between' >
                        <p>The Total Amount of <br/> (Including vat) </p>
                        <p>{price}</p>
                    </span>
                    <Col>
                    <Button className='btn-primary w-100' onClick={checkout}>Proceed to chackout</Button>
                    </Col>
                    </Col>
                </Row>
            </Card>
        </Col>

        
    </Row>
 </Container>
  </>
  )
}

export default Cartmain
