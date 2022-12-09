import "./Information.css";
import { AiFillLike } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiAlarmClock, GiBullseye } from "react-icons/gi";
const Information = () => {
  return (
    <div className="Information-body">
      <div className="Information">
        <div className="Information-left">
          <div className="Information-left-items">
            <AiFillLike size={"70px"} color={"green"} />
            <div>
              <h2>Simple</h2>
              <p>
                No odds or unnecessary calculations. Your winnings only depend
                only on your bets and those of other players.
              </p>
            </div>
          </div>
          <div className="Information-left-items">
            <RiSecurePaymentLine size={"70px"} color={"green"} />
            <div>
              <h2>Secure</h2>
              <p>
                We aren't newbies in our business. We guarantee that you'll get
                your winnings.
              </p>
            </div>
          </div>
          <div className="Information-left-items">
            <GiAlarmClock size={"70px"} color={"green"} />
            <div>
              <h2>Fast</h2>
              <p>
                Once the match has ended officially, you immediately get the
                opportunity to withdraw the money you won.
              </p>
            </div>
          </div>
          <div className="Information-left-items">
            <GiBullseye size={"70px"} color={"green"} />
            <div>
              <h2>Convenient</h2>
              <p>
                We are constantly improving the service based on your requests,
                and our technical support team will answer any questions you
                might have.
              </p>
            </div>
          </div>
        </div>
        <div className="Information-right">
          <h1>About dota2lounge.com</h1>
          <p>dota2lounge.com is a platform for betting on Dota 2 matches</p>
          <p>
            This is a betting website were any user can bet against other users
            on which of two teams will win. If you know Dota 2 and can predict
            the results of matches, our website will give you a great way to use
            your Dota 2 knowledge and experience to make money.
          </p>
        </div>
      </div>
      <div className="Information-bottom">
        <div className="Information-bottom-header">How it works?</div>
        <div className="Information-bottom-main">
          <h1 style={{ marginLeft: "20px" }}>How to make a bet?</h1>
          <div className="Information-bottom-main-flex">
            <div className="Information-bottom-main-item">
              <div className="item-number">1</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
            <div className="Information-bottom-main-item">
              <div className="item-number">2</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
            <div className="Information-bottom-main-item">
              <div className="item-number">3</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
            <div className="Information-bottom-main-item">
              <div className="item-number">4</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
            <div className="Information-bottom-main-item">
              <div className="item-number">5</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
            <div className="Information-bottom-main-item">
              <div className="item-number">6</div>
              <div className="item-text">
                Add funds to your account on the deposit and withdrawal page .
                You can choose any deposit method you like.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
