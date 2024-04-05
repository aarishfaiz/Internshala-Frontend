import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.jpg";

const Slidebar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const opensidebar = () => {
    setsidebarOpen(true);
  };
  const closeslidebar = () => {
    setsidebarOpen(false);
  };
  useEffect(() => {
    const handleOutslideClick = (e) => {
      if (
        sidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest("open-btn")
      ) {
        closeslidebar();
      }
    };
    document.addEventListener("click", handleOutslideClick);
    return () => {
      document.removeEventListener("click", handleOutslideClick);
    };
  }, [sidebarOpen]);

  const user = 1;

  return (
    <>
      {/* <div className="App2 -mt-2 overflow-hidden">
        <img src={logo} className="h-20 w-20" alt="logo" />
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}></div>
        <span className="cursor-pointer close-btn" onClick={closeslidebar}>
          &times;
        </span>
      </div>
      ; */}
    </>
  );
};

export default Slidebar;
