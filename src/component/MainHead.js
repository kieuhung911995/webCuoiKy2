import { useContext } from "react";

import "./MainHead.css";
import { GiTrade } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { DataDisplay } from "../App";

function MainHead() {
  const display = useContext(DataDisplay);
  const handleChooseOptionComing = () => {
    display.setIsComing("true-option");
    display.setIsEnded("false-option");
  };
  const handleChooseOptionEnded = () => {
    display.setIsComing("false-option");
    display.setIsEnded("true-option");
  };
  return (
    <div className="main-head">
      <div className="trades">
        <GiTrade size="30px" color="#6BA908" />
        <span style={{ fontSize: "20px", color: "white" }}>Trades</span>
      </div>
      <div className="bets">
        <div className="bet">
          <GiPerspectiveDiceSixFacesOne size="30px" color="#6BA908" />
          <span style={{ fontSize: "20px", color: "white" }}>Bets</span>
        </div>
        <div className="bet-date">
          <div className={display.isComing} onClick={handleChooseOptionComing}>
            Upcoming
          </div>
          <div className={display.isEnded} onClick={handleChooseOptionEnded}>
            Ended
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
