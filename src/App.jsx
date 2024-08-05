import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Router from "./routes/router";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title =
      path === "/"
        ? "Home"
        : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
    document.title = `WINGS - ${title}`;
  }, [location]);

  return null;
};

// scroll set on top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TitleUpdater />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
