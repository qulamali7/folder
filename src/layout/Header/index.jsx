import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header id="header">
        <div className="header_area">
          <div className="header_area_main">
            <div className="header_area_main_container">
              <div className="header_content">
                <div className="header_logo">
                  <Link><img src="https://preview.colorlib.com/theme/eventcon/img/logo.png.webp" alt="" /></Link>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link>HOME</Link>
                    </li>
                    <li>
                      <Link>PERFORMER</Link>
                    </li>
                    <li>
                      <Link>PAGES</Link>
                    </li>
                    <li>
                      <Link>BLOG</Link>
                    </li>
                    <li>
                      <Link>CONTACT</Link>
                    </li>
                  </ul>
                </nav>
                <button>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
