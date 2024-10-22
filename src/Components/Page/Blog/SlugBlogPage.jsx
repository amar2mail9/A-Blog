import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";
import Layout from "../Home/Layout";

function SlugBlogPage() {
  const { fetchData, individualBlog, isLoading } = useTechBlog();
  const { title } = useParams(); // Use title from URL

  useEffect(() => {
    fetchData.fetchIndividualBlog(title); // Fetch the blog by title
  }, [title]);

  return (
    <Layout>
      <section className="container mt-16">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <Spinner variant="primary" />
          </div>
        ) : individualBlog ? (
          <div>
            <h1>{individualBlog.title}</h1>
            <p>{individualBlog.body}</p>
          </div>
        ) : (
          <h2>Blog not found</h2>
        )}
      </section>
    </Layout>
  );
}

export default SlugBlogPage;
