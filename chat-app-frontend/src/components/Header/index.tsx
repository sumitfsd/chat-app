import history from '../../utils/history';
import { HOME, WEATHER } from '../../constants/urls';
import staticText from '../../constants/messages.json';

import './assets/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <h1 onClick={() => history.push(HOME)}>{staticText.chat_app}</h1>
        </div>
        <div className="headerText">
          <h1 onClick={() => history.push(WEATHER)}>{staticText.weather}</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
