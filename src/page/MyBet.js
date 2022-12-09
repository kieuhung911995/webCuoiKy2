import { useState, useEffect } from "react";
import axios from "axios";

import "./MyBet.css";
import { SpinnerCircular } from "spinners-react";

const MyBetComponent = ({
  matchKey,
  dateTime,
  tourment,
  teams,
  rates,
  avatars,
  BO,
  winningBet,
  valueBet,
}) => {
  return (
    <div className="MyBetComponent">
      <div className="match-id">
        <div className="MyBetComponent-header">No.</div>
        <div className="MyBetComponent-info">#{matchKey}</div>
      </div>
      <div className="match-bet">
        <div className="match-bet-header MyBetComponent-header">Match</div>
        <div className="matchComponentBet">
          <div className="match-header">
            <div className="small">{dateTime}</div>
            <div className="strong">{tourment}</div>
          </div>
          <div className="match-main">
            <div className="width1">
              <div className="teams-rates team1">
                <div className="strong">{teams[0]}</div>
                <div className="small rate1">
                  <>x{rates[0]}</>
                </div>
              </div>
              <img src={avatars[0]} alt="team1Logo" className="avatars"></img>
            </div>
            <div className="BO">BO{BO}</div>
            <div className="width2">
              <img src={avatars[1]} alt="team2Logo" className="avatars"></img>
              <div className="teams-rates team2">
                <div className="strong">{teams[1]}</div>
                <div className="small">x{rates[1]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="value-bet">
        <div className="MyBetComponent-header">Bet on</div>
        <div className="MyBetComponent-info">{winningBet}</div>
      </div>
      <div className="value-bet">
        <div className="MyBetComponent-header">Bet Value</div>
        <div className="MyBetComponent-info">{valueBet}$</div>
      </div>
      <div className="value-bet">
        <div className="MyBetComponent-header">Result</div>
        <div className="MyBetComponent-info"></div>
      </div>
    </div>
  );
};

const MyBet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [betMatchs, setBetMatchs] = useState([]);
  useEffect(() => {
    async function getMatchData() {
      try {
        const response = await axios.get(
          `https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products-bet`
        );
        setBetMatchs(response.data.sort((a, b) => b.createdAt - a.createdAt));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getMatchData();
  }, [betMatchs]);
  return (
    <>
      <div className="myBet">
        <div className="user-bet">
          {!isLoading ? (
            betMatchs.map((betMatch) => (
              <MyBetComponent
                key={betMatch.id}
                dateTime={betMatch.dateTime}
                tourment={betMatch.tourment}
                teams={betMatch.teams}
                rates={betMatch.rates}
                avatars={betMatch.avatars}
                BO={betMatch.BO}
                winningBet={betMatch.winningBet}
                valueBet={betMatch.valueBet}
                matchKey={betMatch.id}
              />
            ))
          ) : (
            <SpinnerCircular
              style={{ position: "absolute", left: "25%", top: "25%" }}
            />
          )}
        </div>
        <div className="user-balance">
          <div className="balance-header">
            <>Balance</>
          </div>
          <div className="flex-balance">
            <div className="balance-comp">
              <div className="balance-text">Balance</div>
              <div className="balance-value">1000000$</div>
            </div>
            <div className="balance-comp">
              <div className="balance-text">Total withdrawals</div>
              <div className="balance-value">500$</div>
            </div>
          </div>
          <div className="flex-balance">
            <div className="balance-comp">
              <div className="balance-text">Total deposits</div>
              <div className="balance-value">5000000$</div>
            </div>
            <div className="balance-comp">
              <div className="balance-text">Compensations</div>
              <div className="balance-value">0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBet;
