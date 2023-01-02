import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ModalContainer } from "reoverlay";
import { ThemeProvider } from "styled-components";
import { ROUTES } from "./constants/routes";
import { useSettings } from "./store/useSettings";
import HomePage from "./pages/HomePage";
import LoadingCity from "./pages/LoadingCity";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Start from "./pages/Start/Start";
import TestPage from "./pages/TestPage";
import GlobalStyle from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const siteTheme = useSettings((state) => state.siteTheme);
  const isDark = siteTheme === "dark";

  React.useEffect(() => {
    const element = document.querySelector("#app-preloader") as HTMLElement;
    element.style.display = "none";
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path={ROUTES.index} element={<HomePage />} />
        <Route path={ROUTES.city} element={<LoadingCity />} />
        <Route path={ROUTES.start} element={<Start />} />
        <Route path={ROUTES.cityWithName} element={<LoadingCity />} />
        <Route path={ROUTES.all} element={<PageNotFound />} />
      </Routes>

      <GlobalStyle />
      <ModalContainer />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  );
}

export default App;
