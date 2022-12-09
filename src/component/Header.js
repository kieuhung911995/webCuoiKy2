import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import { DataDisplay } from "../App";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillTags, AiFillInfoCircle } from "react-icons/ai";

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
        {display.isLogin ? (
          <div className="icons-header">
            <div className="icon-header" onClick={() => navigate("/myBet")}>
              <GiPerspectiveDiceSixFacesOne size="30px" color="#6BA908" />
              <span>My bets</span>
            </div>
            <div className="icon-header" onClick={() => navigate("/discount")}>
              <AiFillTags size="30px" color="#6BA908" />
              <span>Discounts</span>
            </div>
            <div
              className="icon-header"
              onClick={() => navigate("/information")}
            >
              <AiFillInfoCircle size="30px" color="#6BA908" />
              <span>How it works</span>
            </div>
          </div>
        ) : (
          <div className="my-bet"></div>
        )}
      </div>
      {!display.isLogin ? (
        <div className="login" onClick={() => navigate("/login")}>
          <>
            <AiOutlineLogin style={{ fontSize: "30px" }} />
            LOGIN
          </>
        </div>
      ) : (
        <div style={{ marginRight: "17px" }}>
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
                <div className="user-info">
                  <FaUserSecret
                    style={{ fontSize: "30px", color: "#6BA908" }}
                  />
                  Hello, {JSON.parse(localStorage.getItem("account")).userName}
                </div>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      )}
    </div>
  );
}
export default Header;
