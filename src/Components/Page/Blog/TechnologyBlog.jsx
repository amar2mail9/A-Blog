import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTechBlog } from "../../../App";
import { Spinner } from "react-bootstrap";

function TechnologyBlog() {
  const { techBlog, isLoading } = useTechBlog();

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
          <Spinner animation="border" variant="info" />
        </motion.div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {techBlog.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className=" xl:w-[200px] aspect-square lg:w-[170px] md:w-[150px] sm:w-[220px]  w-[250px] mx-auto  rounded-md border bg-gray-100 border-slate-600">
                  <img
                    src="./img/hero01.webp"
                    alt=""
                    className=" rounded-md bg-slate-300 w-full bg-cover"
                  />
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
                <Link className="text-sky-400 mt-1">Read More</Link>
              </motion.div>
            );
          })}
        </div>
      )}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"></div>
    </section>
  );
}

export default TechnologyBlog;
