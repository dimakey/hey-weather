import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ModalContainer } from "reoverlay";
import { ROUTES } from "./constants/routes";
import HomePage from "./pages/HomePage";
import LoadingCity from "./pages/LoadingCity";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Start from "./pages/Start/Start";
import TestPage from "./pages/TestPage";

function App() {
  React.useEffect(() => {
    const element = document.querySelector("#app-preloader") as HTMLElement;
    element.style.display = "none";
  }, []);

  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path={ROUTES.index} element={<HomePage />} />
        <Route path={ROUTES.city} element={<LoadingCity />} />
        <Route path={ROUTES.start} element={<Start />} />
        <Route path={ROUTES.cityWithName} element={<LoadingCity />} />
        <Route path={ROUTES.all} element={<PageNotFound />} />
      </Routes>

      <ModalContainer />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
