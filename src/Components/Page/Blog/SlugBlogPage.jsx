import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";
import Layout from "../Home/Layout";
import { motion } from "framer-motion";

function SlugBlogPage() {
  const { fetchData, individualBlog, isLoading } = useTechBlog();
  const { title } = useParams();

  useEffect(() => {
    fetchData.fetchIndividualBlog(title);
  }, [title]);

  return (
    <Layout>
      <section className="container ">
        {/* Blog Title */}
        {individualBlog ? (
          <div className="  py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">
                  {individualBlog.title}
                </h1>
                <div className="xl:w-[720px] mb-4 xl:h-[400px] lg:w-[650px] lg:h-[370px] bg-gray-300 rounded-md mx-auto">
                  <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png"
                    alt="imge my"
                    className="w-full rounded-md  bg-cover bg-center bg-no-repeat shadow-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4 lg:px-8">
                  {individualBlog.body}
                </p>
                <p className="text-gray-700">{individualBlog.views}</p>
                {/* Add more fields like date, tags, etc. */}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="flex justify-center  h-[70vh] items-center  animate-pulse ">
              <Spinner animation="border" variant="warning" />
              
          </div>
        )}
      </section>
    </Layout>
  );
}

export default SlugBlogPage;
