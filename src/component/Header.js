import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import { DataDisplay } from "../App";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

function Header() {
  const display = useContext(DataDisplay);
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "My bets",
      key: "1",
      onClick: () => navigate("/myBet"),
    },
    {
      label: "Logout",
      key: "2",
      onClick: () => {
        display.setIsLogin(false);
        localStorage.clear();
        navigate("/");
      },
    },
  ];
  return (
    <div className="header">
      <div className="logo-header">
        <img
          onClick={() => navigate("/")}
          src="./logo/dota2Logo.PNG"
          alt="dota2Logo"
          className="logo-item"
        ></img>
        <img
          src="./logo/csgoLogo.PNG"
          alt="csgoLogo"
          className="logo-item"
        ></img>
        {display.isLogin ? (
          <div className="my-bet" onClick={() => navigate("/myBet")}>
            <GiPerspectiveDiceSixFacesOne size="30px" color="green" />
            <span>My bets</span>
          </div>
        ) : (
          <div className="my-bet"></div>
        )}
      </div>
      {!display.isLogin ? (
        <div className="login" onClick={() => navigate("/login")}>
          LOGIN
        </div>
      ) : (
        <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={(e) => e.preventDefault()}
          >
            <Space>
              Đã Login
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      )}
    </div>
  );
}
export default Header;
