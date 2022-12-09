import { SiSteam } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="created">
        <i style={{ color: "white" }}>@Created by: Hưng, Huy and Đức</i>
      </div>
      <div className="contact">
        <i style={{ color: "white" }}>Contact us:</i>
        <SiSteam size="30px" className="contact-icons" />
        <AiFillTwitterCircle size="34px" className="contact-icons" />
        <BsFacebook size="30px" className="contact-icons" />
        <BsReddit size="30px" className="contact-icons" />
        <SiDiscord size="30px" className="contact-icons" />
        <FaInstagramSquare size="30px" className="contact-icons" />
      </div>
    </div>
  );
}

export default Footer;
