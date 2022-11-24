import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <img
          src="./logo/dota2Logo.PNG"
          alt="dota2Logo"
          className="logo-item"
        ></img>
        <img
          src="./logo/csgoLogo.PNG"
          alt="csgoLogo"
          className="logo-item"
        ></img>
        <img
          src="./logo/worldCupLogo.PNG"
          alt="footballLogo"
          className="logo-item"
        ></img>
      </div>
      <div className="login">LOGIN</div>
    </div>
  );
}
export default Header;
