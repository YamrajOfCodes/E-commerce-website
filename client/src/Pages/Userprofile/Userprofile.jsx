import React from 'react'
import "./Userprofile.scss"
import {Container,Row,Col,Button,Card} from "react-bootstrap";
import { useSelector } from 'react-redux';
function Userprofile() {

  const {userLoggedin}=useSelector((state)=>state.user);

  console.log(userLoggedin);

  return (
    <>
    <Container className='containers mb-5 mt-5' style={{height:"50vh"}}>
        <Row className='d-flex justify-content-center'>
            <Col md={2} className='bg-info d-flex align-items-center'>
                <div className="user_img">
                <img src={userLoggedin[0]?.userprofile} style={{ width: '100px' }} alt="" srcset="" />
                 <p>{userLoggedin[0]?.Firstname}</p>
                 <p>Full stack developer</p>
                </div>
            </Col>
            <Col md={4}>
                <h2>INFORMATION</h2>
                <hr />
                <div className="desc">
                <h4>Email</h4>
                <p>{userLoggedin[0]?.email}</p> 
                </div>
                <div className="orders">
                    <h3>ORDERS</h3>
                    <hr />
                    <div className="total d-flex justify-content-between mb-2">
                        <h3>TOTAL ORDERS</h3>
                        <h4>3</h4>
                    </div>
                    <Button className='btn=primary'>See Orders</Button>
                </div>

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Userprofile
