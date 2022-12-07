import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Match.css";
import { DataDisplay } from "../App";
import { Modal } from "antd";
import { SpinnerCircular } from "spinners-react";

function MatchComponent({
  dateTime,
  tourment,
  teams,
  rates,
  avatars,
  BO,
  matchId,
  result,
}) {
  const navigate = useNavigate();
  const display = useContext(DataDisplay);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="matchComponent"
        onClick={() => {
          if (display.isComing === "true-option") {
            navigate(`/match/${matchId}`);
          } else {
            setIsModalOpen(true);
          }
        }}
      >
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
      <Modal
        title="Result of match"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="matchComponent" style={{ width: "100%" }}>
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
            <div className="BO" style={{ fontSize: "20px" }}>
              {result}
            </div>
            <div className="width2">
              <img src={avatars[1]} alt="team2Logo" className="avatars"></img>
              <div className="teams-rates team2">
                <div className="strong">{teams[1]}</div>
                <div className="small">x{rates[1]}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

function Match() {
  const display = useContext(DataDisplay);
  const [isLoading, setIsLoading] = useState(true);
  const [matchs, setMatchs] = useState([]);

  useEffect(() => setIsLoading(true), [display.isComing, display.isEnded]);

  useEffect(() => {
    async function getMatchData() {
      try {
        if (display.isComing === "true-option") {
          const response = await axios.get(
            "https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products"
          );
          setMatchs(response.data);
          setIsLoading(false);
        } else {
          const response = await axios.get(
            "https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products-end"
          );
          setMatchs(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMatchData();
  }, [display.isComing]);
  return (
    <div className="match">
      {!isLoading ? (
        matchs.map((match) => (
          <MatchComponent
            key={match.id}
            dateTime={match.dateTime}
            tourment={match.tourment}
            teams={match.teams}
            rates={match.rates}
            avatars={match.avatars}
            BO={match.BO}
            matchId={match.id}
            result={match.result}
          />
        ))
      ) : (
        <SpinnerCircular className="spinner" />
      )}
    </div>
  );
}
export default Match;
