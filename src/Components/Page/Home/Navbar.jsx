import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  // state Declination

  const location = useLocation(); // import from react router dom

  const [showMenuItems, setShowMenuItems] = useState(false);
  // menu
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  // social Media Icon
  const socialMedia = [
    {
      icon: (
        <i className="ri-facebook-circle-fill text-4xl text-indigo-600"></i>
      ),
      path: "/",
    },
    {
      icon: <i className="ri-instagram-fill text-4xl text-purple-500"></i>,
      path: "/",
    },
    {
      icon: <i className="ri-twitter-x-line text-3xl text-slate-700"></i>,
      path: "/",
    },
  ];

  // Function

  // toggle menu button

  const toggleMenu = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <>
      <header
        className="w-full bg-indigo-100  sticky top-0 right-0 "
        style={{
          boxShadow: " 0 0 10px rgba( 0, 0, 0, 0.5)",
        }}
      >
        <nav className="flex items-center justify-between py-1   md:w-9/12 w-11/12 mx-auto   ">
          {/* Company Logo */}
          <div>
            <img
              src="https://polytechub.in/wp-content/uploads/2024/05/cropped-cropped-Pngtree_letter_p_3d_company_logo_4173429-removebg-preview-min-50x50.png"
              alt="polytechub"
            />
          </div>
          <div className="flex gap-16 items-center ">
            {/* Menu  items */}
            <ul className="md:flex gap-4 md:text-lg text-md hidden font-semibold">
              {menu.map((items, index) => {
                let isActive = location.pathname === items.path;
                return (
                  <Link
                    to={items.path}
                    key={index}
                    className={` hover:scale-110 hover:underline-offset-8 hover:underline hover:text-orange-500  ${
                      isActive ? " text-green-600  " : "text-slate-700"
                    }`}
                  >
                    <li>{items.name}</li>
                  </Link>
                );
              })}
            </ul>

            {/* social Media Icon */}
            <ul className="hidden gap-3 items-center md:flex">
              {socialMedia.map((items, index) => {
                return (
                  <Link to={items.path} key={index}>
                    <li>{items.icon}</li>
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* menu Button */}

          <Button
            className="bg-orange-500 border-none md:hidden block"
            onClick={() => {
              toggleMenu();
            }}
          >
            <i className="ri-menu-5-line text-xl font-bold "></i>
          </Button>
        </nav>
      </header>
      {/* Section for mobiles */}

      {showMenuItems && (
        <div className="inset  top-0 z-10 w-full md:hidden block ">
          <ul className="flex flex-wrap gap-2  bg-orange-200 py-3 text-lg font-semibold text-orange-600 rounded-md shadow-xl">
            {menu.map((items, index) => {
              let isActive = location.pathname === items.path;
              return (
                <Link
                  key={index}
                  to={items.path}
                  className={`px-4 w-full py-1 hover:bg-orange-100 ${
                    isActive ? "bg-orange-100" : null
                  }`}
                >
                  <li>{items.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
