import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataDisplay } from "../App";
import "./Login.css";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const display = useContext(DataDisplay);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName !== "" && password !== "") {
      const jsonAccount = JSON.stringify({
        userName: userName,
        password: password,
      });
      localStorage.setItem("account", jsonAccount);
      display.setIsLogin(true);
      navigate("/");
    } else {
      alert("you must login to bet");
    }
  };

  return (
    <div className="form">
      <form action="/action_page.php" style={{ width: "20%" }}>
        <label htmlFor="uname" style={{ color: "white" }}>
          *User name:
        </label>
        <br />
        <input
          type="text"
          id="uname"
          name="uname"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            width: "97%",
            height: "20px",
            borderRadius: "5px",
          }}
        />
        <br />
        <label htmlFor="pword" style={{ color: "white" }}>
          *Password:
        </label>
        <br />
        <input
          type="password"
          id="pword"
          name="pword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "97%", height: "20px", borderRadius: "5px" }}
        />
        <br />
        <br />
        <div onClick={handleLogin} className="button">
          <AiOutlineLogin />
          login
        </div>
      </form>
    </div>
  );
};
export default Login;
