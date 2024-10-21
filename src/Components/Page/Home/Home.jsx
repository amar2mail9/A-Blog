import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import FeaturedPosts from "../FeatureAndBlog/FeaturedPosts";
import HeroSection from "../../HeroSection/HeroSection";
import Hero from "../HeroSection/Hero";

export default function Home() {
  return (
    <Layout>
      {/* About */}
      <Hero />
      <h1 className="text-center text-4xl mt-8 text-orange-500 animate-pulse font-semibold ">
        Website Under Process...
      </h1>
    </Layout>
  );
}
