import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./Detail.css";
import { Modal } from "antd";
import { SpinnerCircular } from "spinners-react";
import { DataDisplay } from "../App";

export default function Detail() {
  const { id } = useParams();
  const [nameTeam, setNameTeam] = useState("");
  const [match, setMatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [betValue, setBetValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const display = useContext(DataDisplay);
  const navigate = useNavigate();

  const handleBet = (matchTeam) => {
    setNameTeam(matchTeam);
  };

  useEffect(() => {
    async function getMatchData() {
      try {
        const response = await axios.get(
          `https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products/${id}`
        );
        setMatch(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getMatchData();
  }, [id]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    axios.post(
      "https://637b8eaa6f4024eac2115eb8.mockapi.io/match/products-bet",
      {
        dateTime: `${match.dateTime}`,
        tourment: `${match.tourment}`,
        teams: [`${match.teams[0]}`, `${match.teams[1]}`],
        rates: [`${match.rates[0]}`, `${match.rates[1]}`],
        avatars: [`${match.avatars[0]}`, `${match.avatars[1]}`],
        id: `${match.id}`,
        BO: `${match.BO}`,
        winningBet: `${nameTeam}`,
        valueBet: `${betValue}`,
        createdAt: new Date().getTime(),
      }
    );
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bet-detail">
      {!isLoading ? (
        <div className="matchComponent">
          <div className="match-header">
            <div className="small">{match.dateTime}</div>
            <div className="strong">{match.tourment}</div>
          </div>
          <div className="match-main">
            <div className="width1" onClick={() => handleBet(match.teams[0])}>
              <div className="teams-rates team1">
                <div className="strong">{match.teams[0]}</div>
                <div className="small rate1">
                  <>x{match.rates[0]}</>
                </div>
              </div>
              <img
                src={match.avatars[0]}
                alt="team1Logo"
                className="avatars"
              ></img>
            </div>
            <div className="BO">BO{match.BO}</div>
            <div className="width2" onClick={() => handleBet(match.teams[1])}>
              <img
                src={match.avatars[1]}
                alt="team2Logo"
                className="avatars"
              ></img>
              <div className="teams-rates team2">
                <div className="strong">{match.teams[1]}</div>
                <div className="small">x{match.rates[1]}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SpinnerCircular />
      )}
      {!display.isLogin ? (
        <div className="bet-main" onClick={() => navigate("/login")}>
          To make a bet please sign in
        </div>
      ) : !!nameTeam ? (
        <div className="bet-main">
          <div className="bet-header">
            <div>Win {nameTeam}</div>
            <input
              placeholder="$"
              type="number"
              value={betValue}
              onChange={(e) => setBetValue(e.target.value)}
            ></input>
          </div>
          <div className="place-bet" onClick={showModal}>
            Place bet
          </div>
          <Modal
            title="Confirm your bet"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Win: {nameTeam}</p>
            <p>Place bet value: {betValue}$</p>
          </Modal>
        </div>
      ) : (
        <div className="bet-main">Click the team you want to bet</div>
      )}
    </div>
  );
}
