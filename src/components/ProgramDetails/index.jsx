import React, { useEffect } from 'react'
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const ProgramDetails = () => {
    useEffect(() => {
        AOS.init()
      }, [])
      
    return (
        <>
            <section id='program_details'>
                <div className='program_details_overlay'>
                    <div className='program_details_container'>
                        <div className='program_details_title'>
                            <h3>Program Details</h3>
                        </div>
                        <div className='program_details_content'>
                            <div className='program_details_cards'>
                                <div className='program_details_card'>
                                    <div className='other'></div>
                                    <div className='program_details_card_content card1'>
                                    <div className='circle1'></div>
                                        <span data-aos="fade-right" data-aos-duration="2000">3.00-4.00pm</span>
                                        <h4 data-aos="fade-right" data-aos-duration="2000">12 Feb 2020</h4>
                                        <div className='program_details_card_img' >
                                            <img data-aos="fade-up" data-aos-duration="2000" src="https://preview.colorlib.com/theme/eventcon/img/program_details/1.png.webp" alt="" />
                                        </div>
                                        <h3 data-aos="fade-left" data-aos-duration="2000">Mr. Zosoldos</h3>
                                    </div>
                                </div>
                                <div className='program_details_card'>
                                    <div className='program_details_card_content card2'>
                                    <div className='circle2'></div>
                                        <span data-aos="fade-left" data-aos-duration="2000">3.00-4.00pm</span>
                                        <h4 data-aos="fade-left" data-aos-duration="2000">12 Feb 2020</h4>
                                        <div className='program_details_card_img' >
                                            <img data-aos="fade-up" data-aos-duration="2000" src="https://preview.colorlib.com/theme/eventcon/img/program_details/1.png.webp" alt="" />
                                        </div>
                                        <h3 data-aos="fade-right" data-aos-duration="2000">Mr. Zosoldos</h3>
                                    </div>
                                    <div className='other'></div>
                                </div>
                                <div className='program_details_card'>
                                    <div className='other'></div>
                                    <div className='program_details_card_content card1'>
                                    <div className='circle1'></div>
                                        <span data-aos="fade-right" data-aos-duration="2000">3.00-4.00pm</span>
                                        <h4 data-aos="fade-right" data-aos-duration="2000">12 Feb 2020</h4>
                                        <div className='program_details_card_img' >
                                            <img data-aos="fade-up" data-aos-duration="2000" src="https://preview.colorlib.com/theme/eventcon/img/program_details/1.png.webp" alt="" />
                                        </div>
                                        <h3 data-aos="fade-left" data-aos-duration="2000">Mr. Zosoldos</h3>
                                    </div>
                                </div>
                                <div className='program_details_card'>
                        
                                    <div className='program_details_card_content card2'>
                                        <div className='circle2'></div>
                                        <span data-aos="fade-left" data-aos-duration="2000">3.00-4.00pm</span>
                                        <h4 data-aos="fade-left" data-aos-duration="2000">12 Feb 2020</h4>
                                        <div className='program_details_card_img' >
                                            <img data-aos="fade-up" data-aos-duration="2000" src="https://preview.colorlib.com/theme/eventcon/img/program_details/1.png.webp" alt="" />
                                        </div>
                                       <h3 data-aos="fade-right" data-aos-duration="2000">Mr. Zosoldos</h3>
                                        <div className='other'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProgramDetails