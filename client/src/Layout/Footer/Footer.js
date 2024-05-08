import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="content_1">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp&w=128" style={{ width: '100px' }} alt="" srcset="" />
            <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.  Non voluptatum   suscipit laborum <br />  perspiciatis,  eveniet illo  aliquam iste provident?</p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" style={{width:'200px'}} alt="" srcset="" />
          </div>
          <div className="content_2">
            <h4>Shopping</h4>
            <a p="#">Clothing store</a>
            <a p="#">Trending store</a>
            <a p="#">Accesseries</a>
            <a p="#">Sale</a>
          </div>
          <div className="content_3">
            <h4>Contact us</h4>
            <a p="#">Shopping store</a>
            <a p="#">Payemnet method</a>
            <a p="#">Delivery</a>
            <a p="#">Return and exchange</a>
          </div>
          <div className="content_4">
            <h4>Newslatter</h4>
            <p>Be the first about to new arrivals</p>
            <div className="mail">
            <input type="text" placeholder='Your Email' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer