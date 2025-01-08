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


import Dashboard from "./Components/admin/Dashboard/Dashboard";
import Posts from "./Components/admin/Posts/Posts";
import Pages from "./Components/admin/Pages/Pages";

import NewCategory from "./Components/admin/Categories/NewCategory";
import EditCategory from "./Components/admin/Categories/EditCategory";
import Categories from "./Components/admin/Categories/Categories";
import AllBlog from "./Components/Page/Blog/AllBlog";
import SingleBlogPage from "./Components/Page/Blog/SingleBlogPage";
import SingleCategory from "./Components/Page/Categories/SingleCategory";
import NewPost from "./Components/admin/Posts/NewPost";




export default function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/pages" element={<Pages />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/category/new" element={<NewCategory />} />
        <Route path="/admin/category/edit/:id" element={<EditCategory />} />
        <Route path="/blog-page" element={<AllBlog />} />
        <Route path="/blog-page/:slug" element={<SingleBlogPage />} />
        <Route path="/category/:category" element={<SingleCategory />} />
<Route path="/admin/posts/new" element={<NewPost></NewPost>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  );
}
