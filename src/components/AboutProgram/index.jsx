import React, { useEffect } from 'react'
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutProgram = () => {
    useEffect(() => {
        AOS.init()
      }, [])
      
  return (
    <>
    <section id='about_program'>
        <div className='about_program_container'>
            <div className='about_program_title'>
                <div className='about_program_title_content'>
                    <h3 data-aos="fade-right" data-aos-duration="2000">About Program</h3>
                    <p data-aos="fade-right" data-aos-duration="2000">The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different.</p>
                </div>
            </div>
            <div className='about_program_content'>
                
                <div className='about_program_content_img' >
                    <img data-aos="fade-right" data-aos-duration="2000" src="https://preview.colorlib.com/theme/eventcon/img/about/about.png.webp" alt="" />
                </div>
                <div className='about_program_content_text'>
                    <h4 data-aos="fade-left" data-aos-duration="2000">It’s time to book your seat</h4>
                    <p data-aos="fade-left" data-aos-duration="2000">The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different levels of experience transform your business.</p>
                    <button data-aos="fade-left" data-aos-duration="2000">Buy Tickets</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutProgram