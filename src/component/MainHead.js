import "./MainHead.css";
import { GiTrade } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";

function MainHead() {
  return (
    <div className="main-head">
      <div className="trades">
        <GiTrade size="30px" color="gray" />
        <span>Trades</span>
      </div>
      <div className="bets">
        <div className="bet">
          <GiPerspectiveDiceSixFacesOne size="30px" color="gray" />
          <span>Bets</span>
        </div>
        <div className="bet-date">
          <span>Upcoming</span>
          <span>Ended</span>
        </div>
      </div>
    </div>
  );
}
export default MainHead;
