import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropdownCircle } from "react-icons/io";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    if (props.login) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage. clear(); 

    // window.location.reload();
    navigate("/login");
  };

  return (
    <div className="inline-block text-left pr-4">
      <button
        onClick={toggleDropdown}
        className={`p-2 mt-2 transition-transform ${
          isDropdownOpen ? "transform rotate-180" : ""
        }`}
      >
        {isDropdownOpen ? (
          <IoIosArrowDropdownCircle className="w-6 rotate-180 h-6 " />
        ) : (
          <IoIosArrowDropright className="w-6 h-6 text-gray-500" />
        )}
      </button>

      {isDropdownOpen && (
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="origin-top-right absolute right-20 z-50 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity transform translate-y-0 opacity-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Dark
            </button>
            <button
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              {props.login ? 'Profile' : 'Login'}
            </button>
            {props.login && (
              <button
                onClick={() => {
                  closeDropdown();
                  handleLogout();
                }}
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Logout
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
