import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Menu items
  const menuItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog-page",
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

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 py-3  ">
        <nav className="md:w-10/12 w-11/12 mx-auto flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <button className="text-indigo-50 font-semibold md:text-3xl xl:text-4xl sm:text-xl text-md">
                POLYTEC<span className="text-orange-400">HUB</span>
              </button>
            </Link>
          </div>

          {/* Menu Items */}
          <div>
            <ul className="md:flex font-semibold items-center gap-8 hidden">
              {menuItems.map((item, index) => {
                let isActive = location.pathname === item.path;
                return (
                  <NavLink to={item.path} key={index}>
                    <li
                      className={`transition-transform duration-300 hover:scale-110 hover:underline hover:underline-offset-8 ${
                        isActive
                          ? "text-orange-950 "
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      {item.name}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>

          {/* Toggle Menu */}
          <button
            className="text-white text-2xl font-bold md:hidden block "
            onClick={() => {
              toggleMenu();
            }}
          >
            {!isOpen ? (
              <i className="ri-menu-5-line"></i>
            ) : (
              <i className="ri-close-large-fill"></i>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed z-50 md:hidden xl:hidden   w-full animate__animated animate__bounceIn   ">
          <center>
            <ul
              className="m-2 bg-gradient-to-r  from-orange-500 via-indigo-500 to-pink-500 rounded-md py-4 flex justify-center flex-col  "
              style={{
                boxShadow: "0 0 5px 2px #f97316",
              }}
            >
              {menuItems.map((items, index) => {
                const isActive = location.pathname === items.path;
                return (
                  <Link
                    className={`font-semibold py-2 duration-200 ${
                      isActive
                        ? "bg-orange-100 text-orange-500 rounded-md"
                        : "bg-transparent text-white hover:bg-orange-100 hover:text-orange-500 hover:rounded-md"
                    }`}
                    key={index}
                    to={items.path}
                  >
                    <li>{items.name}</li>
                  </Link>
                );
              })}
            </ul>
          </center>
        </div>
      )}
    </>
  );
}

export default Navbar;
