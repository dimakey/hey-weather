import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const HomePage = () => {
  //  TODO: [feature] with favorites pages (if exists in store)
  // const lastVisitedCity = useAppSelector((state) => state.settings.lastCity);
  // const favoriteCity = useAppSelector((state) => state.settings.favoriteCity);
  // const navigateRoute = favoriteCity || lastVisitedCity || ROUTES.start;
  return <Navigate to={ROUTES.start} />;
};

export default HomePage;
