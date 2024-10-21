import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Start Blogging",
    description: "A guide for beginners.",
    link: "#",
  },
  {
    title: "Tips for Consistent Content",
    description: "Stay ahead in the blogging game.",
    link: "#",
  },
  {
    title: "Monetize Your Blog",
    description: "Make money from your blog.",
    link: "#",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Posts
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="mt-2 text-gray-600">{post.description}</p>
            <a href={post.link} className="text-indigo-500 mt-4 block">
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
