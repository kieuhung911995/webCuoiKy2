import "./App.css";

import Header from "./component/Header.js";
import MainHead from "./component/MainHead";
import Match from "./component/Match.js";
import Trade from "./component/Trade.js";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainHead />
      <div className="main-content">
        <Trade />
        <Match />
      </div>
      <Footer />
    </div>
  );
}

export default App;
