import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useHourlyWeather } from "../../../hooks/useHourlyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { icons } from "../../../utils/constants";
import * as S from "./CityDuringDay.styled";

const swiperConfig = {
  modules: [Scrollbar],
  scrollbar: { draggable: true },
  slidesPerView: 5,
  spaceBetween: 8,
  breakpoints: {
    425: {
      slidesPerView: 5,
    },
  },
};

const CityDuringDay = () => {
  const { data } = useLocale();
  const duringDay = useHourlyWeather();

  return (
    <S.DuringDay>
      <WidgetHeader title={data.widget.duringDay} />

      <S.DayList>
        <Swiper {...swiperConfig}>
          {duringDay?.map((day, index) => (
            <SwiperSlide key={index}>
              <S.DayItem>
                <S.DayTime dateTime={day.dt.iso}>{day.dt.time}</S.DayTime>
                <S.DayIcon>
                  <img src={icons.weather[day.icon]} alt={day.description} />
                </S.DayIcon>
                <S.DayTemp>{day.temp}</S.DayTemp>
                <S.DayHumidity>
                  <img src={icons.stats.humiditySm} alt="humidity, %" />
                  {day.humidity}%
                </S.DayHumidity>
              </S.DayItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.DayList>
    </S.DuringDay>
  );
};

export default CityDuringDay;
