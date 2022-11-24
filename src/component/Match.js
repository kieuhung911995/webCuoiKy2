import { useState, useEffect } from "react";
import axios from "axios";

import "./Match.css";

function MatchComponent({ dateTime, tourment, teams, rates, avatars, BO }) {
  return (
    <div className="matchComponent">
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
  );
}

function Match() {
  const [matchs, setMatchs] = useState([]);
  useEffect(() => {
    async function getMatchData() {
      try {
        const response = await axios.get(
          "https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products"
        );
        setMatchs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMatchData();
  }, []);
  return (
    <div className="match">
      {matchs.map((match) => (
        <MatchComponent
          key={match.id}
          dateTime={match.dateTime}
          tourment={match.tourment}
          teams={match.teams}
          rates={match.rates}
          avatars={match.avatars}
          BO={match.BO}
        />
      ))}
    </div>
  );
}
export default Match;
