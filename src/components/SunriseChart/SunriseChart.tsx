import React from "react";
import * as S from "./SunriseChart.styled";
import sunsetImg from "../../assets/sunset.svg";
import sunriseImg from "../../assets/sunrise.svg";

export type SunriseChartProps = {
  percent?: number;
  isSunPhase?: boolean;
};

const SunriseChart = ({ percent, isSunPhase }: SunriseChartProps) => {
  return (
    <S.SunriseContainer>
      <S.ImgGroup>
        {isSunPhase ? (
          <S.ImgIcon src={sunriseImg} alt="Sunrise icon" />
        ) : (
          <S.ImgIcon src={sunsetImg} alt="Sunset icon" />
        )}
      </S.ImgGroup>
      <S.Chart percent={percent}>
        <S.ChartImg percent={percent} isSunPhase={isSunPhase} />
      </S.Chart>
      <S.ImgGroup>
        {isSunPhase ? (
          <S.ImgIcon src={sunsetImg} alt="Sunset icon" />
        ) : (
          <S.ImgIcon src={sunriseImg} alt="Sunrise icon" />
        )}
      </S.ImgGroup>
    </S.SunriseContainer>
  );
};

SunriseChart.defaultProps = {
  isSunPhase: true,
};

export default SunriseChart;
