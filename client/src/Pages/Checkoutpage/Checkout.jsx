import React from 'react'
import {Card,Button,Row,Col} from "react-bootstrap"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import shoespng from "./shoes.png"
import { useSelector } from 'react-redux';
import moment from 'moment';
function Checkout() {


  const {state}=useLocation();
  // console.log(location.state);

  const {cartdata}=useSelector((state)=>state.user)
  console.log(cartdata[0].productdetails);

  const navigate=useNavigate();

  const submitdata=(e)=>{
    e.preventDefault();
    const data={
      ...state,
      cartdata
    }

    navigate('/payments',{state:data})
  }

  const {mobile,city}=state
  // console.log(mobile);
  // console.log(state);

  const date=moment().add(2,"days").format("YYYY-MM-DD");

  return (
   <>
   <div className="container">
    <Card className='px-4 py-5' style={{width:'22rem',marginTop:'15px' , border:'1px solid blue'}}>
  <Card.Title>
   Shipping Details
  </Card.Title>

  <Card.Text>
    <span className='fw-bold'>Adress:- </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, corporis.
  </Card.Text>
  <Card.Text>
    <span className='fw-bold'>City:- </span>{state.city}
  </Card.Text> 
  <Card.Text>
    <span className='fw-bold'>State:- </span>{state.state}
  </Card.Text>
  <Card.Text>
    <span className='fw-bold'>Country:- </span>{state.country}
  </Card.Text>
  <Card.Text>
    <span className='fw-bold'>Mobile number:- </span>{state.mobile}
  </Card.Text>
  <Card.Text>
    <span className='fw-bold'>Shipping price:-</span>{state.shippingprice}
  </Card.Text>
  <Card.Text>
    <span className='fw-bold'>Total price:-</span>{state.totalprice}
  </Card.Text>
    </Card>


    {
      cartdata?.map((element,index)=>{
        return (
          <>
          <Row className=' d-flex mt-2 mb-2 pb-2 border'>
            <Col lg={3}>
                <img src={cartdata[0]?.productdetails.productimage} alt="" srcset="" />
            </Col>
            <Col lg={8}>
            <div className="title d-flex " >
                <h4>Nike Shoe</h4>
            </div>
            <div className="desc" >
                    <p>Discount:- {cartdata[0]?.productdetails.discount}</p>
                    <p>Price:- {cartdata[0]?.productdetails.price}</p>
                    <p>Delivery Date:- {date}</p>
                </div>

                <div className="buttons d-flex gap-2 justify-content-between" >

                <div className="p">
                    <h3>Total :- <span>{cartdata[0]?.productdetails.price * cartdata[0]?.productdetails.quantity}</span></h3>
                </div>
                </div>
            </Col>
          </Row>
          
          </>
        )
      })
    }

    
   </div>
   <div className="container mb-2 mt-2">
    <Button onClick={submitdata}>Process to payment</Button>
   </div>
   </>
  )
}

export default Checkout
