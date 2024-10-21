import React from "react";

import Layout from "./Home/Layout";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Our Blog
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are passionate bloggers who share knowledge about technology,
            business, and lifestyle. Follow us to stay updated with the latest
            trends and insights.
          </p>
        </div>
      </section>

      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-4">Latest Tech News</h4>
          <p>Stay up to date with the latest trends in frontend development.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-4">Coding Tutorials</h4>
          <p>Learn new skills with our step-by-step coding tutorials.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-4">Community Support</h4>
          <p>Join our community of developers and get support.</p>
        </motion.div>
      </div>
    </Layout>
  );
}
