import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsTelegram } from "react-icons/bs";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <div className="telegram">
        <a
          className="telegram__icon-link" // O'zgartirildi
          href="https://t.me/Hamidjon04"
          aria-label={"Telegram link"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram className="telegram__icon" />
          <div className="telegram__ring"></div>
        </a>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;