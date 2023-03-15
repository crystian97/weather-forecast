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
  justify-content: space-between;
  background-image: url("./TemperatureNowBg.png");
  background-size: cover;
  align-items: center;
  padding: 32px;
`;
export const WeatherWidgets = styled.div`
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 578px;
`;

export const LocationWithCity = styled.span`
  align-self: flex-end;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["white"]};
  font-size: 14px;
  svg {
    color: ${(props) => props.theme["white"]};
  }
`;
export const Temperature = styled.div`
  gap: 4px;

  height: 134px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 88px;
    font-weight: bold;
    color: ${(props) => props.theme["white"]};
  }
  span {
    font-size: 20px;
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
    &:lastchield {
      color: ${(props) => props.theme["green"]};
    }
  }
`;
export const Statistics = styled.div`
  display: flex;
  gap: 8px;
`;
export const StatisticCard = styled.div`
  width: 140px;
  height: 60px;
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  background: rgba(102, 96, 200, 0.6);
  color: ${(props) => props.theme["white"]};
  border-radius: 6px;
`;
