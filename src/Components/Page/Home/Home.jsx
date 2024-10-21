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
    </Layout>
  );
}
