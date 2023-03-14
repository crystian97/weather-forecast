import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 144px 128px;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TemperatureNow = styled.div`
  width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  background-image: url("./TemperatureNowBg.png");
  align-items: center;
`;
export const WeatherWidgets = styled.div`
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 578px;
`;
