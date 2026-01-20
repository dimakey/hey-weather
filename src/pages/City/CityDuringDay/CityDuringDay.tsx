import React, { useState, useEffect, useMemo } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { toZonedTime } from "date-fns-tz"; // Import timezone tool

import { ReactComponent as HumiditySm } from "../../../assets/humidity-sm.svg";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import ShowWeatherIcon from "../../../components/ShowWeatherIcon/ShowWeatherIcon";
import WidgetHeader from "../../../components/WidgetHeader/WidgetHeader";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { useHourlyWeather } from "../../../hooks/useHourlyWeather";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../store/useSettings";
import { FormattedHourly } from "../../../types/types";
import * as S from "./CityDuringDay.styled";

const CityDuringDay = () => {
  const { data } = useLocale();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const currentWeather = useCurrentWeather();
  if (!currentWeather) return null;
  const { timeZone } = currentWeather;

  const rawDuringDay = useHourlyWeather() as unknown as FormattedHourly[];
  const duringDaySwitcher = useSettings((state) => state.duringDaySwitcher);
  const setDuringDaySwitcher = useSettings((state) => state.setDuringDaySwitcher);

  const isDuringDaySwitcherIsShort = duringDaySwitcher === "short";

  // 1. Filter the list
  const duringDay = useMemo(() => {
    if (!rawDuringDay) return [];
    if (duringDaySwitcher === "short") {
      return rawDuringDay.filter(
        (hour: FormattedHourly) => Number(hour.dt.time.slice(0, 2)) % 6 === 0
      );
    }
    return rawDuringDay;
  }, [rawDuringDay, duringDaySwitcher]);

  // 2. Calculate "Now" based on the city's Timezone
  const activeIndex = useMemo(() => {
    if (!duringDay.length) return -1;

    // Get the current real-world time converted to the target timezone
    const now = new Date();
    const zonedDate = toZonedTime(now, timeZone);
    const currentHourInCity = zonedDate.getHours();

    return duringDay.findIndex((hour, idx) => {
      const itemHour = parseInt(hour.dt.time.slice(0, 2));

      if (!isDuringDaySwitcherIsShort) {
        return itemHour === currentHourInCity;
      } else {
        const nextItem = duringDay[idx + 1];
        const nextItemHour = nextItem ? parseInt(nextItem.dt.time.slice(0, 2)) : 24;
        return currentHourInCity >= itemHour && currentHourInCity < nextItemHour;
      }
    });
  }, [duringDay, isDuringDaySwitcherIsShort, timeZone]);

  // 3. Slide to the active index when ready
  useEffect(() => {
    if (swiper && activeIndex !== -1) {
      swiper.slideTo(activeIndex, 0);
    }
  }, [swiper, activeIndex]);

  // 4. Swiper Config with Centering
  const duringDaySwiperConfig = {
    modules: [Scrollbar],
    scrollbar: { draggable: true },
    slidesPerView: isDuringDaySwitcherIsShort ? 3 : 5,
    spaceBetween: 8,
    centeredSlides: true,        // Focus the active item in the middle
    centeredSlidesBounds: true,  // Keep slides touching the edges
    breakpoints: {
      425: {
        slidesPerView: isDuringDaySwitcherIsShort ? 4 : 5
      }
    }
  };

  const duringDayRadioGroupItems = [
    { value: "short", label: data.other.short },
    { value: "24h", label: `${duringDay?.length || "24"}${data.units.h}` }
  ];

  return (
    <S.DuringDay>
      <S.DuringDayHeader>
        <WidgetHeader title={data.widget.duringDay} />
        <RadioGroup
          items={duringDayRadioGroupItems}
          defaultValue={duringDaySwitcher}
          onChange={(v) => setDuringDaySwitcher({ duringDaySwitcher: v })}
        />
      </S.DuringDayHeader>
      <S.DayList>
        <Swiper {...duringDaySwiperConfig} onSwiper={setSwiper}>
          {duringDay?.map((hour: FormattedHourly, index: number) => (
            <SwiperSlide key={index}>
              <S.DayItem $isActive={index === activeIndex}>
                <S.DayTime dateTime={hour.dt.iso}>
                  {isDuringDaySwitcherIsShort ? hour.dt.dayPart : hour.dt.time}
                </S.DayTime>
                <S.DayIcon>
                  <ShowWeatherIcon
                    iconId={hour.icon}
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