import React, { useEffect } from 'react'
import cartImage from "../Productdisplaymain/shoes.png"
import "./productdisplay.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproductReview, getProductReview, getsingleProduct, productReview } from '../../Redux/Slice/productSlice/productslice';
import toast from 'react-hot-toast';
import { addtoCart } from '../../Redux/Slice/Userslice/userauthSlice';


const Productdisplaycompo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { singleproduct } = useSelector((state) => state.product);
    const { userLoggedin } = useSelector((state) => state.user);
    const { productreview } = useSelector((state) => state.product)
    const { getproductreviews } = useSelector((state) => state.product)
    const {deletereview}=useSelector((state)=>state.product);


    const productdetails=useSelector((state)=>state.user.cartdata);

    console.log("productreview",deletereview);
    console.log(getproductreviews);

    let ratingcount = []

    ratingcount = getproductreviews[0]?.map((element) => {
        return element.rating
    })

    const newarray = [];

    let lenght = ratingcount?.length;
    //    console.log("lenght",lenght);

    for (let i = 0; i < lenght; i++) {

        newarray.push(Number(ratingcount[i]))

    }

    let newcount = 0;

    for (let i = 0; i < newarray.length; i++) {

        newcount = newcount + newarray[i];

    }

    //    console.log("overall rating is",newcount);

    let divide = Math.floor(newcount / newarray.length)
    //    console.log("divide",divide);




    const arr = [];

    for (let i = 0; i < divide; i++) {
        arr.push(i)
    }










    console.log("ratingcount", ratingcount);


    const { Id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();



    // new
    const [rating, setrating] = useState("");
    const [description, setdescription] = useState("");



    const setratingfun = (e) => {

        const { value, label } = e;
        setrating(value);
    }


    const addreviewadd = (e) => {

        e.preventDefault();

        if (rating == "") {
            toast.error("rating is needed");
        } else if (description == "") {
            toast.error("description is needed")
        } else {

            const data = {
                username: userLoggedin ? userLoggedin[0]?.Firstname : '',
                rating: rating,
                description: description
            }

            const productreviewdata = {
                data,
                productId: singleproduct[0]?._id
            }

            dispatch(productReview(productreviewdata))
        }
    }


    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
    ]


    const getsingleproduct = () => {

        const data = {
            productId: Id
        }

        dispatch(getsingleProduct(data)).then((res) => {
            if (res.payload) {
                setdescription("");
                setrating("")
                handleClose();
            }
        }).catch((e) => {
            console.log(e);
            handleClose();
        });
    }


    const reviewadd = (e) => {


        if (userLoggedin.length == 0) {
            toast.error("please Login first");

            // third task and second model

            setTimeout(() => {
                navigate("/login")
            }, 1000);
        } else {
            setShow(true)
        }
    }

    useEffect(() => {

        getsingleproduct();
    }, [Id, productreview,productdetails]);


    // get Products review

    const getproductreview = (e) => {

        const data = {
            productId: singleproduct[0]?._id
        }

        // console.log(data);

        dispatch(getProductReview(data))

    }

    // delete product review

    const deletereviewhandler=(id)=>{
        console.log("id is",id);

        const data={
          reviewId:id
        }

        dispatch(deleteproductReview(data))

    }


    const addtocarthandler=(productid)=>{
        dispatch(addtoCart(productid));
        // console.log("proudctid",e);
    }

    useEffect(() => {

        getproductreview();

    }, [singleproduct,deletereview])  // jevha product load hoil tevhach review distil  and review deletehoil tevhahi

    return (
        <>        
            <section id='productdisplay'>
                <h2 className='text-center'>Productdisplay</h2>
                <div className=" product mt-5 mb-5 px-5 containers">
                    <div className="left_part">
                        <img src={singleproduct[0]?.productimage} alt="" srcset="" />
                    </div>
                    <div className="right_part px-5 ">
                        <h3></h3>
                        <div className="reviewsicons mb-2" >
                            {/* <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i> */}

                            {
                                arr.map((element) => {
                                    return (
                                        <i className='fa-solid fa-star'></i>

                                    )
                                })
                            }
                            <span> {divide} Ratings</span>
                        </div>
                        <p>M.R.P :{singleproduct[0]?.price}</p>
                        <p>Discount : <span>{singleproduct[0]?.discount}</span></p>
                        <p>Items left : <span>{singleproduct[0]?.quantity}</span></p>
                        <p>Free delivery : <span style={{ fontWeight: 'bold' }}>NOV 10-15 </span>Details</p>
                        <p>Fastest delivery : <span style={{ fontWeight: 'bold' }}>Tommorow 11am</span></p>
                        <p ><span style={{ fontWeight: 'bold' }}>About the item </span>: <span>{singleproduct[0]?.description}</span></p>
                        <button className='p-2 bg-dark text-white' onClick={(e)=>{addtocarthandler(singleproduct[0]?._id)}}>Add to cart</button>
                    </div>
                </div>



            </section>
            {/* product review code */}

            <section id='review'>
                <div className="containers">
                    <div className='mt-2 d-flex justify-content-between mb-2'>
                        <h3>Customertreview</h3>
                        <Button variant="primary" onClick={reviewadd}>Write a reviw</Button>
                    </div>
                    <div className="cards mt-2 mb-5 d-flex justify-contenr-between flex-wrap gap-2">

                        {
                            getproductreviews?.length > 0 ? getproductreviews[0].map((element) => {
                                return (
                                    <>
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Body>
                                                <Card.Title>{element?.username}</Card.Title>
                                                <Card.Text>
                                                    <div className="reviewsicons mb-2">

                                                        {
                                                            Array.from({length:element.rating}).map((element)=>{
                                                                return(
                                                                <i className='fa-solid fa-star'></i>
                                                            )
                                                         })
                                                        }
                                                       

                                                    </div>
                                                </Card.Text>
                                                <Card.Text>
                                                    <p>{element?.description}</p>
                                                </Card.Text>
                                                {
                                                    userLoggedin[0]?._id===element.userid ? 
                                                    <Button onClick={()=>{deletereviewhandler(element._id)}}  variant="none"><i class="fa-solid fa-trash" style={{ color: 'red', fontSize: '1.7rem' }}></i></Button>
                                                    :""
                                                }
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            }) : "No Review Available"
                        }



                    </div>
                </div>


                {/* Model */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Write a Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form_data mb-2">
                            <label htmlFor="">Username</label> <br />
                            <input type="text" value={userLoggedin[0]?.Firstname} disabled />
                        </div>
                        <div className="form_data mb-2">
                            <label htmlFor="">Ratings</label> <br />
                            <Select options={options} onChange={setratingfun} />
                        </div>
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                onChange={(e) => { setdescription(e.target.value) }}
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Modal.Body>
                    <button className='p-3 bg-primary text-white' onClick={addreviewadd}>Add review</button>
                </Modal>
            </section>
        </>
    )
}

export default Productdisplaycompo
