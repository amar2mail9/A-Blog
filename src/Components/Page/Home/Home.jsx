import React from "react";

import Layout from "./Layout";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import BlogImage from "../Blog/BlogImage";
import BlogContant from "../Blog/BlogContant";
import BlogUser from "../Blog/BlogUser";
import BlogRelated from "../Blog/BlogRelated";
import BlogCategory from "../Blog/BlogCategory";
import LatestBlog from "../Blog/LatestBlog";

export default function Home() {
  return (
    <Layout>
      <h1>
        Welcome to Amar Blog helloo a everyone
        <Button
          onClick={() => {
            Swal.fire("SweetAlert2 is working!");
          }}
        >
          click me
        </Button>
      </h1>
      <BlogImage />
      <BlogContant />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-3xl">Latest Blog</h1>
      <LatestBlog />
      <BlogUser />
      <BlogRelated />
      <BlogCategory />
    </Layout>
  );
}
