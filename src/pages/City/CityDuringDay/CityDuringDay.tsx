import React from "react";
import { useTheme } from "styled-components";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as HumiditySm } from "../../../assets/humidity-sm.svg";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useHourlyWeather } from "../../../hooks/useHourlyWeather";
import { useLocale } from "../../../hooks/useLocale";
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
  const theme = useTheme();
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
                  <ShowWeatherIcon
                    iconId={day.icon}
                    iconDescription={day.description}
                    theme={theme.type}
                  />
                </S.DayIcon>
                <S.DayTemp>{day.temp}</S.DayTemp>
                <S.DayHumidity>
                  <HumiditySm />
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
