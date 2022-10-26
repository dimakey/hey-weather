import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import { fetchWeatherByGeo } from "../redux/actions/weatherAction";
import { useAppDispatch, useAppSelector } from "../redux/store";
import City from "./City/City";
import PageNotFound from "./PageNotFound/PageNotFound";

const LoadingCity = () => {
  const loading = useAppSelector((state) => state.weather.loading);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const cityName = searchParams.get("name");
  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));

  const hasAnyParams =
    searchParams.has("name") ||
    (searchParams.has("lat") && searchParams.has("lon"));

  const isStatusPending = loading === "pending";
  const isStatusSucceeded = loading === "succeeded";

  const hasLoadingFailedOrNoParams = !hasAnyParams || loading === "failed";

  useEffect(() => {
    if (hasAnyParams) {
      dispatch(fetchWeatherByGeo({ cityName, lat, lon }));
    }
  }, [lat, lon, cityName]);

  return (
    <>
      {hasLoadingFailedOrNoParams && <PageNotFound />}
      {isStatusPending && <Preloader />}
      {isStatusSucceeded && <City />}
    </>
  );
};

export default LoadingCity;
