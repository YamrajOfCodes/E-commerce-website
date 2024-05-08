import React from 'react'
import "./homecontact.scss"

function Homecontact() {
  return (
    <section id='homecontact'>
     <div className="container">
     <div className="map">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67293400585!2d72.71637670539744!3d19.082502000719877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1712469379436!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}}></iframe>
   </div>
   <form action="">
    <div className="form-txt">
       <h4 className='text-danger'>INFORMATION</h4>
       <h2>Contact Us</h2>
       <p>As you might expect a compony that begans as a high-end interiors <br />
       constructors, we pay strict attention</p>

       <h3>USA</h3>
       <p>195 square park dr paker,COe 34 <br />
        +234-34-343</p>

        <h3>India</h3>
        <p>+91349349</p>
    </div>
    <div className="form-desc">
         <input type="text"  placeholder='Name' className='input'/>
         <input type="text"  placeholder='Email' className='input second'/> <br />
         <textarea name="" id="" cols="70" rows="7" placeholder='Message'></textarea> <br />
         <button><a href="#">Send Message</a></button>
    </div>
   </form>
     </div>
    </section>
  )
}

export default Homecontact
