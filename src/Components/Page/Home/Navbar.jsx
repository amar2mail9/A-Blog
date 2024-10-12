import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
  ];

  const socialMedia = [
    {
      icon: (
        <i className="ri-facebook-circle-fill text-2xl md:text-3xl text-blue-600"></i>
      ),
      path: "/",
    },
    {
      icon: (
        <i className="ri-instagram-fill text-2xl md:text-3xl text-pink-600"></i>
      ),
      path: "/",
    },
    {
      icon: (
        <i className="ri-twitter-x-line text-2xl md:text-3xl text-sky-500"></i>
      ),
      path: "/",
    },
  ];

  const toggleMenu = () => {
    setShowMenuItems(!showMenuItems);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <header className="w-full z-50 bg-gradient-to-r from-indigo-400 to-purple-500 sticky top-0 right-0 shadow-lg pt-2 pb-2 md:pt-4 md:pb-4 transition-all duration-300">
        <nav className="flex items-center md:jus tify-around justify-between w-11/12  md:my-2 mx-auto">
          <div>
            <label className="flex items-center font-semibold md:text-3xl text-2xl">
              <span className="text-white">Poly</span>{" "}
              <span className="text-yellow-400">Tech</span>
              <span className="text-orange-300">Hub</span>
            </label>
          </div>
          <div className="flex items-center">
            <ul className="md:flex gap-4 hidden font-semibold">
              {menu.map((items, index) => {
                const isActive = location.pathname === items.path;
                return (
                  <Link
                    to={items.path}
                    key={index}
                    className={`hover:scale-110  transition-transform md:text-lg hover:underline-offset-8   duration-300 hover:underline hover:text-yellow-400  ${
                      isActive ? " text-yellow-400  " : "text-slate-100"
                    }`}
                  >
                    <li>{items.name}</li>
                  </Link>
                );
              })}
            </ul>
            <div className="flex gap-3">
              <button
                onClick={toggleSearch}
                className="text-xl md:hidden text-white font-semibold hover:bg-orange-400 p-1 rounded-full w-10 h-10"
              >
                <i className="ri-search-line "></i>
              </button>
              <button
                className="bg-orange-600 w-10 h-10 rounded-full text-white border-none md:hidden block transition duration-300 hover:bg-orange-700"
                onClick={toggleMenu}
              >
                <i className="ri-menu-5-line text-xl"></i>
              </button>
            </div>
          </div>
          <ul className="hidden md:flex md:gap-3 items-center">
            {socialMedia.map((items, index) => (
              <Link to={items.path} key={index}>
                <li className="transition-transform duration-300 hover:scale-110">
                  {items.icon}
                </li>
              </Link>
            ))}
            <button
              onClick={toggleSearch}
              className="text-xl text-white font-semibold hover:bg-orange-400 p-1 rounded-full w-10 h-10"
            >
              <i className="ri-search-line "></i>
            </button>
          </ul>
        </nav>
      </header>

      {showMenuItems && (
        <div className="fixed h-screen top-14 rounded-md md:hidden  duration-200 delay-300 left-0 z-50 w-full  p-2 " onClick={toggleMenu}>
          <ul className="flex flex-col gap-2 py-4 text-lg bg-orange-300 font-semibold text-white rounded-md shadow-xl transition-all duration-300">
            {menu.map((items, index) => {
              const isActive = location.pathname === items.path;
              return (
                <Link
                  key={index}
                  to={items.path}
                  onClick={() => setShowMenuItems(false)} // Close menu on item click
                  className={`px-4 py-2 w-full hover:bg-orange-400 transition duration-300 ${
                    isActive ? "bg-orange-500" : ""
                  }`}
                >
                  <li>{items.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}

      {showSearch && (
        <div className="fixed   h-screen duration-200 delay-300 left-0 z-50 w-full   bg-indigo-50   flex items-center justify-center md:px-16 px-4 flex-col ">
          <input
            placeholder="search..."
            type="text"
            className="px-4 border bg-indigo-50 text-xl border-slate-300 outline-indigo-500  py-2 w-full rounded-full md:w-[90%]"
          />
          <button
            className="bg-orange-500 px-6 py-2 rounded-full  text-white mt-6 text-xl hover:bg-orange-600"
            onClick={toggleSearch}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
}
