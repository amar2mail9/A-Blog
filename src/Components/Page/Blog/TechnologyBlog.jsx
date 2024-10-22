import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";

function TechnologyBlog() {
  const { fetchData, isLoading, techBlog } = useTechBlog();

  useEffect(() => {
    fetchData.fetchTechBlog();
  }, []);

  return (
    <section>
      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" p-6 rounded-lg "
        >
          <p className="text-sky-500 text-4xl font-semibold font-serif text-center">
            Technology
          </p>
        </motion.h2>
      </AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" flex justify-center animate-bounce"
        >
          <Spinner animation="border" variant="warning" />
        </motion.div>
      ) : techBlog.length > 0 ? (
        <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {techBlog.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white  rounded-lg shadow-lg"
              >
                <div className="p-2 ">
                  <div className="  rounded-lg overflow-hidden">
                    <Link to={`/blog-page/${encodeURIComponent(item.title)}`}>
                      <div className="lg:w-[300px] md:w-[250px] sm:[230px] w-[300px]  aspect-square mx-auto">
                        <img
                          className="h-fit  w-full object-cover object-center bg"
                          src="./img/hero01.webp"
                          alt="blog"
                        />
                      </div>
                    </Link>

                    <div className="p-2">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Technology
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.body.length > 30
                          ? `${item.body.slice(0, 30)}...`
                          : item.body}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {item.body.length > 70
                          ? `${item.body.slice(0, 70)}...`
                          : item.body}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/blog-page/${encodeURIComponent(item.title)}`}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>

                        {/* views */}
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          {item.views > 999
                            ? `${(item.views / 1000).toFixed(2)}K`
                            : item.views}
                        </span>
                        {/* Linke */}
                        <div className="flex items-center gap-2">
                          {" "}
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <i className="ri-thumb-up-fill text-xl mr-1 text-green-300"></i>
                            {item.reactions.likes > 999
                              ? `${(item.reactions.likes / 1000).toFixed(2)}K`
                              : item.reactions.likes}
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <i className="ri-thumb-down-fill text-xl  mr-2 text-rose-300"></i>
                            {item.reactions.dislikes > 999
                              ? `${(item.reactions.dislikes / 1000).toFixed(
                                  2
                                )}K`
                              : item.reactions.dislikes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className=" xl:w-[200px] aspect-square lg:w-[170px] md:w-[150px] sm:w-[220px]  w-[250px] mx-auto  rounded-md border bg-gray-100 border-slate-600">
                  <Link to={`/blog-page/${encodeURIComponent(item.title)}`}>
                    <img
                      src="./img/hero01.webp"
                      alt=""
                      className=" rounded-md bg-slate-300 w-full bg-cover"
                    />
                  </Link>
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  {item.title.length > 35
                    ? `${item.title.slice(0, 35)}...`
                    : item.title}
                </h4>
                <p>
                  {item.body.length > 70
                    ? `${item.body.slice(0, 70)}...`
                    : item.body}
                </p>{" "}
                <Link
                  className="text-sky-400 mt-1"
                  to={`/blog-page/${encodeURIComponent(item.title)}`}
                >
                  Read More
                </Link> */}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <center>
          <h1 className="text-rose-400 text-3xl">
            Internal Sever Error Retry...
          </h1>
        </center>
      )}
    </section>
  );
}

export default TechnologyBlog;
