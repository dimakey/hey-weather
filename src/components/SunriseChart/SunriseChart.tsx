import React from "react";
import * as S from "./SunriseChart.styled";
import { ReactComponent as SunsetImg } from "../../assets/sunset.svg";
import { ReactComponent as SunriseImg } from "../../assets/sunrise.svg";

export type SunriseChartProps = {
  percent?: number;
  isSunPhase?: boolean;
};

const SunriseChart = ({ percent, isSunPhase }: SunriseChartProps) => {
  return (
    <S.SunriseContainer>
      <S.ImgGroup>{isSunPhase ? <SunsetImg /> : <SunriseImg />}</S.ImgGroup>
      <S.Chart percent={percent}>
        <S.ChartImg percent={percent} isSunPhase={isSunPhase} />
      </S.Chart>
      <S.ImgGroup>{isSunPhase ? <SunriseImg /> : <SunsetImg />}</S.ImgGroup>
    </S.SunriseContainer>
  );
};

SunriseChart.defaultProps = {
  isSunPhase: true,
};

export default SunriseChart;
