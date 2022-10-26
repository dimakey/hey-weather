import React from "react";
import Layout from "../../layouts/Layout";
import * as S from "./City.styled";
import CityAstro from "./CityAstro/CityAstro";
import CityDuringDay from "./CityDuringDay/CityDuringDay";
import CityForecast from "./CityForecast/CityForecast";
import CityInfo from "./CityInfo/CityInfo";
import CityName from "./CityName/CityName";
import CityWeather from "./CityWeather/CityWeather";

const City = () => {
  return (
    <Layout>
      <S.City>
        <CityName />
        <CityInfo />
        <CityWeather />
        <CityDuringDay />
        <CityAstro />
        <CityForecast />
      </S.City>
    </Layout>
  );
};

export default City;
