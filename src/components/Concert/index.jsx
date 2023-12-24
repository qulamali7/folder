import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Concert = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="concert">
        <div className="concert_area">
          <div className="concert_overlay">
            <div className="concert_container">
              <div className="concert_content">
                <div
                  className="concert_content_left"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                >
                  <img
                    src="https://preview.colorlib.com/theme/eventcon/img/shape/shape_2.svg"
                    alt=""
                  />
                </div>
                <div className="concert_content_text">
                  <span data-aos="zoom-in-left"  data-aos-duration="2000">12 Feb, 2020</span>
                  <h1 data-aos="zoom-in-right" data-aos-duration="2000">CONCERT 2020</h1>
                  <p data-aos="zoom-in-right"  data-aos-duration="2000">Green Avenue, New York</p>
                </div>
                <div
                  className="concert_content_right"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                >
                  <img
                    src="https://preview.colorlib.com/theme/eventcon/img/shape/shape_1.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Concert;
