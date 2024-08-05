import { Outlet } from "react-router-dom";
import "../../App.css";
import Navbar from "../Navbar-Footer/Navbar";
import Footer from "../Navbar-Footer/Footer";
import TopHeading from "../Navbar-Footer/TopHeading";
import { HoodiesCartProvider } from "../../hooks/HoodiesCartContext";
import { useRef } from "react";

const HomeLayout = () => {
  const footerRef = useRef(null);

  return (
    <>
      <div className="flex flex-col flex-1 h-screen">
        <TopHeading />

        <Navbar footerRef={footerRef} />

        <div className="flex-1">
          <HoodiesCartProvider>
            <Outlet />
          </HoodiesCartProvider>
        </div>

        <Footer ref={footerRef} />
      </div>
    </>
  );
};

export default HomeLayout;
