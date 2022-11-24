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
      <div className="created">Created by:</div>
      <div className="contact">
        <SiSteam size="30px" />
        <AiFillTwitterCircle size="34px" />
        <BsFacebook size="30px" />
        <BsReddit size="30px" />
        <SiDiscord size="30px" />
        <FaInstagramSquare size="30px" />
      </div>
    </div>
  );
}

export default Footer;
