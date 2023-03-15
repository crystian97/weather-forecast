import { CloudRain, Drop, MapPin, Wind } from "phosphor-react";
import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  LocationWithCity,
  StatisticCard,
  Statistics,
  Temperature,
  TemperatureNow,
} from "./styles";

function Home() {
  const [positions, setPosition] = useState([]);
  function getPosition() {
    const successCallback = (position) => {
      // console.log(position.coords);
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
    console.log(positions);
  }, []);
  return (
    <HomeContainer>
      <TemperatureNow>
        <LocationWithCity>
          <MapPin size={14} /> Rio do Sul , SC
        </LocationWithCity>
        <Temperature>
          <h1>18º</h1>
          <span>22° 16°</span>
        </Temperature>
        <Statistics>
          <StatisticCard>
            <Wind size={32} weight="fill" />
            <div>
              <p>Vento</p>
              17 Km/h
            </div>
          </StatisticCard>
          <StatisticCard>
            <Drop size={32} weight="fill" />
            <div>
              <p>Umidade</p>
              31%
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
    </HomeContainer>
  );
}

export default Home;
