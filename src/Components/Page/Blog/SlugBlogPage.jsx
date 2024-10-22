import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";
import Layout from "../Home/Layout";

function SlugBlogPage() {
  const { fetchData, individualBlog, isLoading } = useTechBlog();
  const { title } = useParams();

  useEffect(() => {
    fetchData.fetchIndividualBlog(title);
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
