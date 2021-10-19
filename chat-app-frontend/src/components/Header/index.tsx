import './assets/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <h1>Chat App</h1>
        </div>
        <div className="headerText">
          <h1>Weather</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
