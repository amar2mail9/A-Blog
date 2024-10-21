import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <div className="text-center mb-6">
          <Link to={"/"}>
            <button className="text-indigo-50 font-semibold md:text-3xl xl:text-4xl sm:text-xl text-md">
              POLYTEC<span className="text-orange-400">HUB</span>
            </button>
          </Link>
        </div>

        {/* Links Section */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
          <center className=" ">
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-1 hover:text-indigo-500">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="mb-1 hover:text-indigo-500">
                <Link to={"/about-us"}>About</Link>
              </li>
              <li className="mb-1 hover:text-indigo-500">
                <Link to={"/blog-page"}>Blog</Link>
              </li>
              <li className="mb-1 hover:text-indigo-500">
                <Link to={"/contact-us"}>Contact</Link>
              </li>
            </ul>
          </center>

          <center>
            <h2 className="font-semibold mb-2">Social Media</h2>
            <ul className="flex space-x-4 ">
              <li>
                <Link to={"#"} className="hover:text-indigo-500">
                  <i className="ri-facebook-circle-fill text-2xl"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-500">
                  <i className="ri-twitter-x-fill text-2xl"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-500">
                  <i className="ri-instagram-fill text-2xl"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-500">
                  <i className="ri-linkedin-fill text-2xl"></i>
                </Link>
              </li>
            </ul>
          </center>

          <center>
            <h2 className="font-semibold mb-2">Subscribe</h2>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white p-2 rounded-md mb-2 w-full"
                required
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </center>

          <center>
            <h2 className="font-semibold mb-2">Contact Us</h2>
            <p className="mb-1">Email: amar47kumar47@gmail.com</p>
            <p>Phone: +9608553167</p>
          </center>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
