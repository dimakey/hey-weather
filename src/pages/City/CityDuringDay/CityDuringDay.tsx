import React from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as HumiditySm } from "../../../assets/humidity-sm.svg";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useHourlyWeather } from "../../../hooks/useHourlyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../store/useSettings"; // Fixed import path if necessary
import * as S from "./CityDuringDay.styled";
import { FormattedHourly } from "../../../types/types";


const CityDuringDay = () => {
  const { data } = useLocale();
  // Call the hook
  let duringDay = useHourlyWeather() as unknown as FormattedHourly[];

  const duringDaySwitcher = useSettings((state) => state.duringDaySwitcher);
  const setDuringDaySwitcher = useSettings((state) => state.setDuringDaySwitcher);

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

  // FIX: Added type 'FormattedHourly' to 'hour'
  if (duringDaySwitcher === "short") {
    duringDay = duringDay?.filter(
      (hour: FormattedHourly) => Number(hour.dt.time.slice(0, 2)) % 6 === 0
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
          {/* FIX: Changed 'day: WeatherDaily' to 'hour: FormattedHourly' */}
          {duringDay?.map((hour: FormattedHourly, index: number) => (
            <SwiperSlide key={index}>
              <S.DayItem>
                <S.DayTime dateTime={hour.dt.iso}>
                  {isDuringDaySwitcherIsShort ? hour.dt.dayPart : hour.dt.time}
                </S.DayTime>
                <S.DayIcon>
                  <ShowWeatherIcon
                    iconId={hour.weatherId}
                    iconDescription={hour.description}
                    isDay={hour.isItDay}
                  />
                </S.DayIcon>
                <S.DayTemp>{hour.temp}</S.DayTemp>
                <S.DayHumidity>
                  <HumiditySm />
                  {hour.humidity}%
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