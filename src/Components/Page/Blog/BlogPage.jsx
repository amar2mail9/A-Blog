import React from "react";
import Layout from "../Home/Layout";
import TechnologyBlog from "./TechnologyBlog";

export default function BlogPage() {
  return (
    <Layout>
      <section className="container mt-4 ">
        <div className="w-full bg-slate-800 rounded-md md:h-32 h-24 mb-8 flex items-center justify-center shadow-md shadow-rose-400">
          <h1 className="lg:text-5xl md:text-4xl text-2xl text-center text-slate-200 ">
            Blog
          </h1>
        </div>
        <TechnologyBlog />
      </section>
    </Layout>
  );
}
