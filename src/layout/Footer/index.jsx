import React from 'react'
import "./index.scss";
const Footer = () => {
  return (
    <>
    <footer id='footer'>
      <div className='footer_top'>
        <div className='footer_top_container'>
          <div className='footer_top_content'>
            <h4 data-aos="fade-up"  data-aos-duration="2000">12 Feb, 2020</h4>
            <h3 data-aos="fade-up"  data-aos-duration="2000">Green Avenue, New York</h3>
            <p data-aos="fade-up"  data-aos-duration="2000">The event regularly attracts a diverse range of attendees from around the world.</p>
            <button data-aos="fade-up"  data-aos-duration="2000">Buy Tickets</button>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p data-aos="fade-down"  data-aos-duration="2000">Copyright ©2023 All rights reserved | This template is made with 	&#9829;  by <span>Colorlib</span></p>
      </div>
    </footer>
    </>
  )
}

export default Footer