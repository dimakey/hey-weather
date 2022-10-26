import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useLocale } from "../../../hooks/useLocale";
import * as S from "./CityForecast.styled";
import CityForecastSlider from "./CityForecastSlider";

const CityForecast = () => {
  const { data } = useLocale();

  return (
    <S.Forecast>
      <WidgetHeader title={data.widget.forecast} />
      <CityForecastSlider />
    </S.Forecast>
  );
};

export default CityForecast;
