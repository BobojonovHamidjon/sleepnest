import React, { useEffect, useRef } from "react"; // useRef import qilindi
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsTelegram } from "react-icons/bs";

const App = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null); // Header elementiga havola yaratildi

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const headerHeight = useRef(0); // useRef bilan header balandligini saqlaymiz

  useEffect(() => {
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight; // Header balandligini olamiz
    }
  }, []);

  return (
    <div>
      <Header ref={headerRef} /> {/* Headerga ref qo'shildi */}
      <main
        className="flex-grow"
        style={{
          minHeight: "100vh",
          paddingTop: `${headerHeight.current}px`, // Dinamik balandlik
        }}
      >
        <Outlet />
      </main>
      <div className="telegram">
        <a
          className="telegram__icon-link"
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