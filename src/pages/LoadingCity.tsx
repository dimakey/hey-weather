import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import { useWeather } from "../store/useWeather";
import City from "./City/City";
import PageNotFound from "./PageNotFound/PageNotFound";

const LoadingCity = () => {
  const fetchWeather = useWeather((state) => state.fetchWeather);
  const status = useWeather((state) => state.status);

  const [searchParams] = useSearchParams();
  const cityName = searchParams.get("name");
  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));

  const hasAnyParams =
    searchParams.has("name") ||
    (searchParams.has("lat") && searchParams.has("lon"));

  const isStatusIsPending = status === "loading";
  const isStatusIsSucceeded = status === "success";

  const hasLoadingFailedOrNoParams = !hasAnyParams || status === "error";

  useEffect(() => {
    if (hasAnyParams) {
      fetchWeather({ cityName, lat, lon });
    }
  }, [lat, lon, cityName]);

  return (
    <>
      {hasLoadingFailedOrNoParams && <PageNotFound />}
      {isStatusIsPending && <Preloader />}
      {isStatusIsSucceeded && <City />}
    </>
  );
};

export default LoadingCity;
