import React, { useEffect } from 'react'
import "./index.scss";
import PerformerCard from '../PerformerCard';
import AOS from "aos";
import "aos/dist/aos.css";
const Performer = () => {
    useEffect(() => {
      AOS.init()
    }, [])
    
  return (
    <>
    <section id='performer'>
        <div className='performer_container'>
            <div className='performer_title'>
                <h3 data-aos="fade-down-left" data-aos-duration="1000">Performer</h3>
            </div>
            <div className='performer_cards'>
                <div className="performer_cards_content">
                    <PerformerCard  img="https://preview.colorlib.com/theme/eventcon/img/performer/1.png.webp" name="Mr. Zosoldos"/>
                    <PerformerCard  img="https://preview.colorlib.com/theme/eventcon/img/performer/2.png.webp" name="Protik Hasan"/>
                    <PerformerCard img="https://preview.colorlib.com/theme/eventcon/img/performer/3.png.webp" name="Salmon Vicky"/>
                    <PerformerCard img="https://preview.colorlib.com/theme/eventcon/img/performer/4.png.webp" name="Filaris Habol"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Performer