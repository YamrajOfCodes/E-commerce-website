import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Country, State } from "country-state-city"
import {toast} from "react-hot-toast"
// import { logger } from '../../../../server/helper'


function Shipping() {



    const location = useLocation();

    const countrydata = Country.getAllCountries();
    const navigate=useNavigate();

    const [country, setcountry] = useState([]);
    const [state, setstate] = useState([]);
    const [countrycode, setcountrycode] = useState("");
    const arr = [];
    const newarrr = [];
  const [shippingprice,setshippingprice]=useState(50);

      const [inputvalue,setinputvalue]=useState({
        mobile:"",
        city:"",
        number:"",
        country:"",
        inputareas:"",
      })


    useEffect(() => {

        for (let i = 0; i < countrydata.length; i++) {
            let newarr = { value: countrydata[i].isoCode, label: countrydata[i].name };
            arr.push(newarr);
        }
        setcountry(arr);

        console.log(countrycode);
        if (countrycode) {
            const statedata = State.getStatesOfCountry(countrycode);
            console.log(statedata);

            for (let i = 0; i < statedata.length; i++) {
                let newarr = { value: statedata[i].isoCode, label: statedata[i].name };
                newarrr.push(newarr);
            }
            setstate(newarrr)

        }

    }, [countrycode])



    const handleinput = (e) => {
        
        const {name,value}=e.target;
       setinputvalue({...inputvalue,[name]:value})

    // console.log(e);
    }

    const sendDetails=(e)=>{
        e.preventDefault();
        const{mobile,city,number,inputareas}=inputvalue;

        if(mobile==""){
            toast.error("enter mobile number Properly")
        }else if(city==""){
            toast.error("enter city")
        }else if(number==""){
            toast.error("enter pin code")
        }else if(countrycode==""){
            toast.error("select your country")
        }else if(inputareas==""){
            toast.error("edit description")
        }
        else{
          
            const data={
                mobile,
                city,
                number,
                country:countrycode,
                inputareas,
                shippingprice,
                totalprice:shippingprice + location.state,
                state
            }

            navigate("/checkout",{state:data});
        }
    }






    return (
        <>
            <section className='mb-5'>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Shipping Details</h1>
                    </div>
                    <div className="profile_div text-center">
                        <img src="/logo192.png" style={{ width: "50px" }} alt="" />
                    </div>

                    <form>
                        <div className="form_input">
                            <input type="text" name="mobile" placeholder='Enter Your Mobile' id=""  onChange={handleinput}  value={inputvalue.mobile}/>
                        </div>
                        <div className="form_input mb-3">
                            <Select options={country} placeholder="Select your country" onChange={(e) => { setcountrycode(e.value) }} />
                        </div>
                        <div className="form_input mb-3">
                            <Select options={state}  onChange={(e)=>{setstate(e.label)}} name='state'/>
                        </div>

                        <div className="form_input">
                            <input type="text" name="city" placeholder='Enter Your City' id="" onChange={handleinput} />
                        </div>
                        <div className="form_input">
                            <input type="number" name="number" id="number" placeholder='Enter your pin code' onChange={handleinput} />
                        </div>

                        <div className="form_input">
                            <FloatingLabel controlId="floatingTextarea2" label="shipping Adress" >
                                <Form.Control
                                    as="textarea"
                                    placeholder="shipping Adress"
                                    style={{ height: '100px' }}
                                    onChange={handleinput}
                                    name='inputareas'
                                />
                            </FloatingLabel>
                        </div>


                        <button className='btn' onClick={sendDetails}>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Shipping
