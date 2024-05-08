import React from 'react'
import bannerimage from "../Homemain/banner.png"
import "./homemain.scss"

function Homemain() {
  return (
      <section id='home'>
        <div className="home-banner">
            <img src={bannerimage} alt="bannerimage" srcset="" />
        </div>
        <div className="home-desc">
            <h4 className='text-danger'>SUMMER COLLECTION</h4>
            <h1>FALL - WINTER <br /> COLLECTION 2024</h1>
            <p>A specillaze label creating luxury essentials.Eyhically <br />  crafted with an to speciallze quality</p>
            <button className='bg-dark'>
                <a href="#" className='text-white text-decoration-none'>SHOP NOW</a>
            </button>
        </div>
      </section>
  )
}

export default Homemain
