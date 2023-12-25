import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const PageTitle = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="page_title">
        <div className="page_title_area">
          <div className="page_title_overlay">
            <div className="page_title_container">
              <div className="page_title_content">
                <div
                  className="page_title_content_left"
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
                <div className="page_title_content_text">
                  <h1 data-aos="zoom-in-right" data-aos-duration="2000">Performer</h1>
                </div>
                <div
                  className="page_title_content_right"
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

export default PageTitle;
