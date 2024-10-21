import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

import Hero from "../HeroSection/Hero";

export default function Home() {
  return (
    <Layout>
      {/* About */}
      <Hero />
      <motion.div
      
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.9 }}>
        <h1 className="text-center text-4xl mt-8 text-orange-500 animate-pulse font-semibold ">
          Website Under Process...
        </h1>

        <h1 className="text-center text-4xl mt-8 text-sky-500 animate-pulse font-semibold ">
          More Information Coming Soon....
        </h1>
      </motion.div>
    </Layout>
  );
}
