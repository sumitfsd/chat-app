import { useState } from 'react';
import axios from 'axios';
import env from '../../utils/envVariable';
import Header from '../../components/Header';
import staticText from '../../constants/messages.json';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import './assets/weather.scss';

const Weather = () => {
  const [city, setCity] = useState<string>('');
  const [temperature, setTemperature] = useState<number>(0);
  const [minTemperature, setMinTemperature] = useState<number>(0);
  const [maxTemperature, setMaxTemperature] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [humidity, setHumidity] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isWeatherVisible, setWeatherVisiblity] = useState<boolean>(false);
  const [pressure, setPressure] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [icon, setIcon] = useState<string>('');

  const getWeatherData = async (city: string) => {
    await axios({
      method: 'GET',
      url: `${env.WEATHER_BASE_URL}/data/2.5/weather?q=${city}&appid=${env.WEATHER_KEY}`,
    })
      .then((res: any) => {
        setTemperature(res.data.main.temp - 273.15);
        setDescription(res.data.weather[0].description);
        setMaxTemperature(res.data.main.temp_max - 273.15);
        setMinTemperature(res.data.main.temp_min - 273.15);
        setHumidity(res.data.main.humidity);
        setCityName(res.data.name);
        setIcon(res.data.weather[0].icon);
        setPressure(res.data.main.pressure);
        setWindSpeed(res.data.wind.speed);
        setWeatherVisiblity(true);
      })
      .catch(() => {
        alert(staticText.city_not_found);
      });
  };

  return (
    <>
      <Header />
      <div className="weather-layout">
        <div className="weather-left">
          <div className="weather-info">
            {isWeatherVisible && (
              <div className="weather-data">
                <div className="temp">
                  {Math.floor(temperature)}
                  <sup className="supp">℃</sup>
                </div>
                <div className="location">
                  <div className="city">{cityName}</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="weather-right">
          <div className="main">
            <div className="weatherSpaceBox">
              <h1>{staticText.weather_condition}</h1>
              <div className="form">
                <Input
                  type="text"
                  value={city}
                  onChangeHandler={(value) => setCity(value)}
                  placeholder={staticText.enter_city_name}
                />
                <Button
                  onChangedHandler={() => getWeatherData(city)}
                  className="btn"
                  text={staticText.search}
                />
              </div>
              {isWeatherVisible && (
                <>
                  <div className="align-self-center">
                    <h1>{description}</h1>
                    <img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt="weather-icon"
                      style={{ width: 200, height: 200 }}
                      className="weather-icon"
                    />
                  </div>
                  <div className="wather-table-data">
                    <h2 className="wather-box">{staticText.weather_details}</h2>
                    <div className="wather-box">
                      <span>{staticText.humidity}</span>
                      <span>{humidity}%</span>
                    </div>
                    <div className="wather-box">
                      <span>{staticText.pressure}</span>
                      <span>{pressure}hpa</span>
                    </div>
                    <div className="wather-box">
                      <span>{staticText.wind_speed}</span>
                      <span>{Number(3.6 * windSpeed).toFixed()}km/h</span>
                    </div>
                    <div className="wather-box">
                      <span>{staticText.minimum_temperature}</span>
                      <span>
                        {Math.floor(minTemperature)}
                        <sup>℃</sup>
                      </span>
                    </div>
                    <div className="wather-box">
                      <span>{staticText.maximum_temperature}</span>
                      <span>
                        {Math.floor(maxTemperature)}
                        <sup>℃</sup>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
