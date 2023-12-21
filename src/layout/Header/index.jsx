import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header id='header'>
        <div className='header_container'>
          <div className='header_content'>
            <div className='header_logo'>
              <Link><img src="https://thewebmax.org/modern/images/logo-dark.png" alt="" /></Link>
            </div>
            <div className='header_icon'>
              <div className='header_icon_content'>
                <div className='header_icon_content_mail'>
                  <i className="fa-solid fa-envelope"></i>
                  <p>Info@gmail.com</p>
                </div>
                <div className='header_icon_content_telephone'>
                  <i className="fa-solid fa-phone"></i>
                  <p>(654) 123-4567</p>
                </div>
                <div>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div>
                  <i className="fa-solid fa-rss"></i>
                </div>
                <div>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className='header_content_search_menu'>
                  <div className='header_content_search'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className='header_content_menu'>
                    <i className="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header