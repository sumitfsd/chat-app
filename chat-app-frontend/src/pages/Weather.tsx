import React, { useState } from 'react';
import axios from 'axios';
import env from '../utils/env_variable';
import Header from '../components/Header';

const Weather = () => {
  const [city, setCity] = useState<string>('');
  const [temp, setTemp] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [humidity, setHumidity] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  // const [icon, setIcon] = useState<string>('');
  const [showMyComponent, setShowMyComponent] = useState<boolean>(false);
  const [pressure, setPressure] = useState<string>('');

  const handleCity = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    getWeatherData(city);
  };
  const getWeatherData = async (city: string) => {
    await axios({
      method: 'GET',
      url: `${env.WEATHER_BASE_URL}/data/2.5/weather?q=${city}&appid=${env.WEATHER_KEY}`,
    })
      .then((res: any) => {
        setTemp(res.data.main.temp - 273.15);
        // setIcon(res.data.weather[0].icon);
        setDescription(res.data.weather[0].description);
        setMax(res.data.main.temp_max - 273.15);
        setMin(res.data.main.temp_min - 273.15);
        setHumidity(res.data.main.humidity);
        setPressure(res.data.main.pressure);
        setShowMyComponent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="weather-layout">
        <div className="weather-left">
          <div className="weather-info">
            {showMyComponent && <div className="weather-data">
              <div className="temp">{Math.floor(temp)}℃</div>
              <div className="location">
                <div className="city">{city}</div>
                {/* <div className="time">
                  <span>10:36</span>
                  <span>tue</span>
                  <span>22 oct 19</span>
                </div> */}
              </div>
            </div>}
          </div>
        </div>
        <div className="weather-right">
          <div className="main">
            <div className="weatherSpaceBox">
              <h1>Weather Condition</h1>
              <div className="form">
                <input
                  type="text"
                  value={city}
                  onChange={handleCity}
                  placeholder="ENTER THE CITY NAME"
                />
                <button onClick={handleClick} className="btn">
                  Search
                </button>
              </div>
              {showMyComponent ? (
                <div>
                  <h1>{description}</h1>
                  <div className="table">
                    <table>
                      <tr>
                        <th>Minimum Temperature</th>
                        <th>Maximum Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                      </tr>
                      <tr>
                        <td>{Math.floor(min)}℃</td>
                        <td>{Math.floor(max)}℃</td>
                        <td>{humidity}</td>
                        <td>{pressure}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
