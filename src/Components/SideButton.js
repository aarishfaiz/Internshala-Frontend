import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 ${
        isOpen ? "w-48" : "w-0"
      }`}
    >
      <button className="text-black p-1 flex  " onClick={toggleMenu}>
        <RiMenuLine />
      </button>
      <div className={`pt-12 ${isOpen ? "block" : "hidden"}`}>
        <ul>
          <li>
            <Link
              to={"/internshipavl"}
              onClick={closeMenu}
              className="block p-4 hover:bg-gray-800"
            >
              Internships
            </Link>
          </li>
          <li className="p-4" onClick={closeMenu}>
            Jobs
          </li>
          <li className="p-4" onClick={closeMenu}>
            Contact Us
          </li>
          <li className="p-4" onClick={closeMenu}>
            My Application
          </li>
          <li className="p-4" onClick={closeMenu}>
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideButton;
