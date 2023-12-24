import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const PerformerCard = ({ img, name }) => {
  // const [rotation, setRotation] = useState({ persX: 0, persY: 0 });

  // const handleMouseMove = (e) => {
  //   let persX = (((e.target.clientWidth / 2) - e.nativeEvent.offsetX) / 4);
  //   let persY = (((e.target.clientHeight / 2) - e.nativeEvent.offsetY) / 4);

  //   if (persX < 0 && persY > 0) {
  //     persY = -persY;
  //   } else if (persX < 0 && persY < 0) {
  //     persX = -persX;
  //   } else if (persX > 0 && persY > 0) {
  //     persX = -persX;
  //   } else if (persX > 0 && persY < 0) {
  //     persY = -persY;
  //   }

  //   setRotation({ persX, persY });

  //   let rotate = `rotateY(${persY}deg) rotateX(${persX}deg)`;
  //   // Apply the rotation to the card
  //   document.getElementById('card').style.transform = rotate;
  // };

  // const handleMouseLeave = () => {
  //   // Reset the rotation when the mouse leaves
  //   setRotation({ persX: 0, persY: 0 });
  //   document.getElementById('card').style.transform = 'rotateY(0deg)';
  // };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="card"
        className="performer_card"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="performer_card_img">
          <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
        <p>Acoustic drum</p>
      </div>
    </>
  );
};

export default PerformerCard;
