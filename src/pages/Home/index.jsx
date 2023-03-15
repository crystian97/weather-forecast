import { CloudRain, Drop, MapPin, Wind } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { api } from "../../libs/api";
import {
  HomeContainer,
  LocationWithCity,
  StatisticCard,
  Statistics,
  Temperature,
  TemperatureNow,
} from "./styles";

function Home() {
  const [positions, setPositions] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [loading, setLoading] = useState(true);

  async function getWeateher(p) {
    const { latitude, longitude } = p;

    await api
      .get("weather?", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: "2259706cd472181ce8f32891fa4976c5",
          units: "metric",
        },
      })
      .then((response) => {
        setCurrentWeather(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function getPosition() {
    const successCallback = (position) => {
      setPositions(position.coords);
    };

    const errorCallback = (error) => {
      console.log(error);
    };
    const options = {
      timeout: 1000,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }

  useEffect(() => {
    getPosition();
  }, []);
  useEffect(() => {
    //verificar positions
    console.log(positions.latitude);

    if (
      typeof positions.latitude != "undefined" &&
      typeof positions.longitude != "undefined"
    ) {
      getWeateher(positions);
    }

    // getWeateher(positions);
  }, [positions]);
  return (
    <HomeContainer>
      {loading ? (
        <TemperatureNow>carregando...</TemperatureNow>
      ) : (
        <TemperatureNow>
          <LocationWithCity>
            <MapPin size={14} /> {currentWeather.name}
          </LocationWithCity>
          <Temperature>
            <h1>{Math.ceil(currentWeather.main.temp)}º</h1>
            <span>
              {Math.ceil(currentWeather.main.temp_min)}°{" "}
              {Math.ceil(currentWeather.main.temp_max)}°
            </span>
          </Temperature>
          <Statistics>
            <StatisticCard>
              <Wind size={32} weight="fill" />
              <div>
                <p>Vento</p>
                {currentWeather.wind.speed}
              </div>
            </StatisticCard>
            <StatisticCard>
              <Drop size={32} weight="fill" />
              <div>
                <p>Umidade</p>
                {currentWeather.main.humidity}%
              </div>
            </StatisticCard>
            <StatisticCard>
              <CloudRain size={32} weight="fill" />{" "}
              <div>
                <p>Chuva</p>
                10%
              </div>
            </StatisticCard>
          </Statistics>
        </TemperatureNow>
      )}
    </HomeContainer>
  );
}

export default Home;
