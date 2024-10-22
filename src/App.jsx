import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

// My Components
import Home from "./Components/Page/Home/Home";
import AboutUs from "./Components/Page/AboutUs";
import ContactUs from "./Components/Page/ContactUs";
import ErrorPage from "./Components/Page/Error/ErrorPage";
import BlogPage from "./Components/Page/Blog/BlogPage";
import SlugBlogPage from "./Components/Page/BLog/SlugBlogPage";

// Blog Context API
const TechBlogContext = createContext();

export const useTechBlog = () => {
  return useContext(TechBlogContext);
};

export default function App() {
  // State variables
  const [techBlog, setTechBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [individualBlog, setIndividualBlog] = useState("");

  // Fetching functions
  const fetchData = {
    fetchTechBlog: async function () {
      setIsLoading(true);
      try {
        let res = await fetch("https://dummyjson.com/posts");
        let result = await res.json();
        setTechBlog(result.posts);
      } catch (error) {
        console.error("Error fetching tech blog:", error);
      } finally {
        setIsLoading(false);
      }
    },
    fetchIndividualBlog: async function (title) {
      try {
        setIsLoading(true);
        let res = await fetch("https://dummyjson.com/posts");
        let result = await res.json();

        const blog = result.posts.find((post) => {
          return post.title.toLowerCase() === title.toLowerCase();
        });

        if (blog) {
          setIndividualBlog(blog);
        } else {
          setIndividualBlog(null);
          console.error("Blog Post Not Found");
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    },
  };

  return (
    <TechBlogContext.Provider
      value={{ techBlog, isLoading, fetchData, individualBlog }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog-page" element={<BlogPage />} />
          <Route path="/blog-page/:title" element={<SlugBlogPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TechBlogContext.Provider>
  );
}
