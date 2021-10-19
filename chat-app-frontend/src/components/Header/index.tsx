import history from '../../utils/history';
import { WEATHER } from '../../constants/urls';

import './assets/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <h1>Chat App</h1>
        </div>
        <div className="headerText">
          <h1 onClick={() => history.push(WEATHER)}>Weather</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
