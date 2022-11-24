import { useState, useEffect } from "react";
import axios from "axios";

import "./Trade.css";

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
  }, []);
  console.log(items[0]);
  return (
    // <div className="trade">
    //   <div className="trade-items">
    //     <img className="img-item" src={items[0].img} alt="item-img">
    //       <div className="value">${items[0].values}</div>
    //     </img>
    //     <img className="img-item" src={items[1].img} alt="item-img">
    //       <div className="value">${items[1].values}</div>
    //     </img>
    //     <img className="img-item" src={items[2].img} alt="item-img">
    //       <div className="value">${items[2].values}</div>
    //     </img>
    //     <img className="img-item" src={items[3].img} alt="item-img">
    //       <div className="value">${items[3].values}</div>
    //     </img>
    //   </div>
    // </div>
    <>abc</>
  );
}
export default Trade;
