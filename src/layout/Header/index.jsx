import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const stickyNavbar = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", stickyNavbar);
  return (
    <>
      <header className={`header ${navbar === true ? "sticky " : ""}`}>
        <div className="header_area">
          <div className="header_area_main">
            <div className="header_area_main_container">
              <div className="header_content">
                <div className="header_logo">
                  <Link to="/">
                    <img
                      src="https://preview.colorlib.com/theme/eventcon/img/logo.png.webp"
                      alt=""
                    />
                  </Link>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link>HOME</Link>
                    </li>
                    <li>
                      <Link to="/performer">PERFORMER</Link>
                    </li>
                    <li>
                      <Link>PROGRAM</Link>
                    </li>
                    <li>
                      <Link>ABOUT</Link>
                    </li>
                    <li>
                      <Link>CONTACT</Link>
                    </li>
                  </ul>
                </nav>
                <button>Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
