import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";
import Layout from "../Home/Layout";

function SlugBlogPage() {
  const { fetchData, individualBlog, isLoading } = useTechBlog();
  const { title } = useParams();
  console.log(title);

  useEffect(() => {
    fetchData.fetchIndividualBlog(title); // Fetch the individual blog post using the ID from params
  }, [title]);

  return (
    <Layout>
      <section className="container mt-16">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <Spinner variant="primary" />
          </div>
        ) : (
          <h1>{individualBlog.title}</h1>
        )}
      </section>
    </Layout>
  );
}

export default SlugBlogPage;
