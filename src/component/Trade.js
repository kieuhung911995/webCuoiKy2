import { useState, useEffect } from "react";
import axios from "axios";

import "./Trade.css";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import { FaSteam } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function Trade() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getTradeData() {
      try {
        const response = await axios.get(
          "https://637b8eaa6f4024eac2115eb8.mockapi.io/match/items"
        );
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getTradeData();
  });
  return (
    <div className="trade-body">
      <div className="trade">
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[0]?.img} alt="item-img"></img>
            <div className="value">${items[0]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[1]?.img} alt="item-img"></img>
            <div className="value">${items[1]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[2]?.img} alt="item-img"></img>
            <div className="value">${items[2]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[3]?.img} alt="item-img"></img>
            <div className="value">${items[3]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[4]?.img} alt="item-img"></img>
            <div className="value">${items[4]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[5]?.img} alt="item-img"></img>
            <div className="value">${items[5]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[6]?.img} alt="item-img"></img>
            <div className="value">${items[6]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[7]?.img} alt="item-img"></img>
            <div className="value">${items[7]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[8]?.img} alt="item-img"></img>
            <div className="value">${items[8]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[9]?.img} alt="item-img"></img>
            <div className="value">${items[9]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[10]?.img} alt="item-img"></img>
            <div className="value">${items[10]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[11]?.img} alt="item-img"></img>
            <div className="value">${items[11]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[12]?.img} alt="item-img"></img>
            <div className="value">${items[12]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[13]?.img} alt="item-img"></img>
            <div className="value">${items[13]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[14]?.img} alt="item-img"></img>
            <div className="value">${items[14]?.value}</div>
          </div>
          <div className="img-item">
            <img className="img" src={items[15]?.img} alt="item-img"></img>
            <div className="value">${items[15]?.value}</div>
          </div>
        </div>
        <div className="trade-items">
          <div className="img-item">
            <img className="img" src={items[16]?.img} alt="item-img"></img>
            <div className="value">${items[16]?.value}</div>
          </div>
        </div>
      </div>
      <div className="trade-support">
        <p>You can top up your balance on our website with SKINS via Skinpay</p>
        <TiArrowMaximiseOutline size={"80px"} style={{ marginLeft: "10px" }} />
      </div>
      <div className="trade-support">
        <div>
          <b>ATTENTION!</b>
          <p>Now you can log in to the site only using STEAM!</p>
        </div>
        <FaSteam size={"80px"} style={{ marginLeft: "10px" }} />
      </div>
      <div className="trade-support">
        <div>
          <b>JOIN US!</b>
          <p>The most interesting stuff is on our DISCORD</p>
        </div>
        <BsDiscord size={"80px"} style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
}
export default Trade;
