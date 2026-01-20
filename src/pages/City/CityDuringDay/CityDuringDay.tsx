import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as HumiditySm } from "../../../assets/humidity-sm.svg";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useHourlyWeather } from "../../../hooks/useHourlyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../store/useSettings";
import * as S from "./CityDuringDay.styled";

const CityDuringDay = () => {
  const { data } = useLocale();
  let duringDay = useHourlyWeather();
  const duringDaySwitcher = useSettings((state) => state.duringDaySwitcher);
  const setDuringDaySwitcher = useSettings(
    (state) => state.setDuringDaySwitcher
  );

  const isDuringDaySwitcherIsShort = duringDaySwitcher === "short";

  const duringDaySwiperConfig = {
    modules: [Scrollbar],
    scrollbar: { draggable: true },
    slidesPerView: isDuringDaySwitcherIsShort ? 4 : 5,
    spaceBetween: 8,
    breakpoints: {
      425: {
        slidesPerView: isDuringDaySwitcherIsShort ? 4 : 5
      }
    }
  };

  const duringDayRadioGroupItems = [
    {
      value: "short",
      label: data.other.short
    },
    {
      value: "24h",
      label: `${duringDay?.length || "24"}${data.units.h}`
    }
  ];


  if (duringDaySwitcher === "short") {
    duringDay = duringDay?.filter(
      (hour) => Number(hour.dt.time.slice(0, 2)) % 6 === 0
    );

  }

  const handleHourSwitch = (value: string) => {
    setDuringDaySwitcher({ duringDaySwitcher: value });
  };

  return (
    <S.DuringDay>
      <S.DuringDayHeader>
        <WidgetHeader title={data.widget.duringDay} />
        <RadioGroup
          items={duringDayRadioGroupItems}
          defaultValue={duringDaySwitcher}
          onChange={handleHourSwitch}
        />
      </S.DuringDayHeader>
      <S.DayList>
        <Swiper {...duringDaySwiperConfig}>
          {duringDay?.map((day, index) => (
            <SwiperSlide key={index}>
              <S.DayItem>
                <S.DayTime dateTime={day.dt.iso}>
                  {isDuringDaySwitcherIsShort ? day.dt.dayPart : day.dt.time}
                </S.DayTime>
                <S.DayIcon>
                  <ShowWeatherIcon
                    iconId={day.icon}
                    iconDescription={day.description}
                    isDay={day.isItDay}
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
