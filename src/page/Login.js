import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataDisplay } from "../App";
import "./Login.css";

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
      <form action="/action_page.php">
        <label htmlFor="uname">User name:</label>
        <br />
        <input
          type="text"
          id="uname"
          name="uname"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="pword">Password:</label>
        <br />
        <input
          type="password"
          id="pword"
          name="pword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <div onClick={handleLogin} className="button">
          login
        </div>
      </form>
    </div>
  );
};
export default Login;
