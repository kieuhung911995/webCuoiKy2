import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Detail from "./page/Detail";
import MyBet from "./page/MyBet";
import Header from "./component/Header";

export const DataDisplay = createContext();

function App() {
  const [isComing, setIsComing] = useState("true-option");
  const [isEnded, setIsEnded] = useState("false-option");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("account"))) {
      setIsLogin(true);
    }
  }, []);
  return (
    <DataDisplay.Provider
      value={{
        isComing: isComing,
        setIsComing: setIsComing,
        isEnded: isEnded,
        setIsEnded: setIsEnded,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/match/:id" element={<Detail />} />
        <Route path="/myBet" element={<MyBet />} />
      </Routes>
    </DataDisplay.Provider>
  );
}

export default App;
