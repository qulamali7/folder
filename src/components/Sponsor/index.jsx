import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss";
const Sponsor = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <>
            <section id='sponsor_logos'>
                <div className='logos_container'>
                    <div className='logos_title'>
                        <h3 data-aos="fade-right"  data-aos-duration="2000">Sponsor Logos</h3>
                    </div>
                    <div data-aos="fade-left"  data-aos-duration="2000"  className='slider'>
                        <Slider {...settings}>
                            <div>
                                <img src="https://preview.colorlib.com/theme/eventcon/img/brand/1.png.webp" alt="" />
                            </div>
                            <div>
                                <img src="https://preview.colorlib.com/theme/eventcon/img/brand/2.png.webp" alt="" />
                            </div>
                            <div>
                                <img src="https://preview.colorlib.com/theme/eventcon/img/brand/3.png.webp" alt="" />
                            </div>
                            <div>
                                <img src="https://preview.colorlib.com/theme/eventcon/img/brand/4.png.webp" alt="" />
                            </div>
                            <div>
                                <img src="https://preview.colorlib.com/theme/eventcon/img/brand/5.png.webp" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Sponsor