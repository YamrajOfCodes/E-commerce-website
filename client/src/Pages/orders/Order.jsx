import React from 'react'
import {Col,Row,Card,Container} from "react-bootstrap"

const Order = () => {
     return (
     <>
    <Container className='pt-4 pb-4'>
        <h2>Your Orders</h2>

        <Card>
            
                            <div className="mt-2 store-item bottom-line pb-3">
                                <h5>OrderId :-34324sd4324</h5>
                                           
                                                <div className='mb-3'>
                                                    <Row>
                                                        <Col lg={3}>
                                                            <img src="./shoes.png" className='image-store' alt="" />
                                                        </Col>
                                                        <Col lg={9}>
                                                            <div className='mt-3 mt-lg-0 d-flex align-items-center justify-content-between'>
                                                                <h4> </h4>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <p><span style={{ fontWeight: "bold" }}>discount :- </span> 30% </p>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <p> <span style={{ fontWeight: "bold" }}>Price :- </span>  ₹300</p>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <p> <span style={{ fontWeight: "bold" }}>Delivery Adress :-  </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi? </p>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <p> <span style={{ fontWeight: "bold" }}>OrderStatus:- </span> Shipping</p>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <div className='text-end' style={{ width: "100%" }}>
                                                                    <h5>Total :- 23</h5>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                  

                                <hr />
                            </div>
                       
                
              
            


        </Card>


    </Container>
</>
     )
}

export default Order
