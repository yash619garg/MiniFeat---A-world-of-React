import React from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import image4 from "../images/dp.png";
import { useCustomContext } from "../context";
const Hero = () => {
  const { closeSubmenu /*closeWelcome,openWelcome*/ } = useCustomContext();
  // const handleWelcomeOpen = (e) => {
  //   const box2 = e.target.getBoundingClientRect();
  //   // const center2 = (box2.left + box2.right) / 2;
  //   const center2 = box2.left;
  //   const bottom2 = box2.top;
  //   const coordinate2 = { center: center2, bottom: bottom2 };
  //   openWelcome(coordinate2);
  // };

  const handleClose = (e) => {
    closeSubmenu();
    // if (!e.target.classList.contains("icon")) {
    //   closeWelcome();
    // }
  };

  return (
    <div className="hero-section" onMouseOver={handleClose}>
      <article className="info">
        <div className="info-box">
          <div className="hero-head">
            Hi, I'm Yash Garg
            <div className="line"></div>
          </div>
          <div className="hero-mid">I am a Computer Science Student</div>
          <div className="hero-bottom">
            {" "}
            "I work as a web developer, which means I design and build websites
            and web applications. It's a dynamic field, and I enjoy creating
            interactive and user-friendly online experiences."{" "}
          </div>

          <div className="button-container">
            <button className="btn">DOWNLOAD CV</button>
            <button className="btn">CONTACT ME</button>
          </div>
        </div>
      </article>
      <div className="profile">
        <div className="bg">
          <img className="pf-img" src={image4} alt="" />
          <span className="icon" /*onMouseOver={handleWelcomeOpen}*/>
            <BsFillChatLeftQuoteFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
