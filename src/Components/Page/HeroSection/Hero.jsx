import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-[75vh] flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?blog,writing')",
        }}
      />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 px-6 md:px-12 lg:px-24">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center  mb-8 md:mb-0">
          <motion.h1
            className="text-4xl xl:text-5xl  grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span> Welcome to</span>
            <span className="text-indigo-500">PolytecHub</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Dive into the world of tech, tutorials, and insightful articles.
            Join us as we explore various topics and share knowledge to inspire
            and educate.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link to={"/blog-page"}>
              <motion.button
                className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Get Started <i className="ri-arrow-right-up-line"></i>
              </motion.button>
            </Link>

            <Link to={"/blog-page"}>
              <motion.button
                className="border border-indigo-500 text-indigo-500 py-2 px-6 rounded-md hover:bg-indigo-500 hover:text-white transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Learn More <i className="ri-arrow-right-up-line"></i>
              </motion.button>{" "}
            </Link>
          </div>
        </div>

        {/* Optional Image or Illustration */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <motion.img
            src="./img/hero01.webp"
            className="rounded-lg shadow-lg w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
