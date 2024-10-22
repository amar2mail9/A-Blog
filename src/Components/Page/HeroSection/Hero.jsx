import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 text-white h-[75vh] flex items-center relative overflow-hidden">
      {/* Background Image */}

      <div className="container mx-auto flex flex-col  justify-between items-center relative z-10 md:flex-row-reverse px-6 md:px-12 lg:px-24">
        {/* Text Section */}
        <div className="w-full md:w-1/2  text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl flex gap-2 items-center font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to{" "}
            <span className="text-indigo-700">
              {" "}
              Polytec<span className="text-green-500">Hub</span>
            </span>
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
            <motion.button
              className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Get Started <i className="ri-arrow-right-up-line"></i>
            </motion.button>

            <motion.button
              className="border-2 border-orange-500 text-indigo-500 py-2 px-6 rounded-md hover:bg-pink-500 hover:text-white transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Learn More <i className="ri-arrow-right-up-line"></i>
            </motion.button>
          </div>
        </div>

        {/* Optional Image or Illustration */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <motion.img
            src="./img/hero01.webp"
            className="rounded-lg w-[450px] h-[450px] animate-pulse drop-shadow-[0_0_6px_rgba(250,249,249,1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      </div>

      {/* SVG Wave at the Bottom */}
      <svg
        id="wave"
        className="absolute bottom-0 right-0"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 140"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(249, 249, 249, 1)" offset="0%" />
            <stop stopColor="rgba(249, 249, 249, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,14L14.1,21C28.2,28,56,42,85,49C112.9,56,141,56,169,60.7C197.6,65,226,75,254,65.3C282.4,56,311,28,339,21C367.1,14,395,28,424,46.7C451.8,65,480,89,508,102.7C536.5,117,565,121,593,114.3C621.2,107,649,89,678,70C705.9,51,734,33,762,35C790.6,37,819,61,847,72.3C875.3,84,904,84,932,79.3C960,75,988,65,1016,67.7C1044.7,70,1073,84,1101,74.7C1129.4,65,1158,33,1186,32.7C1214.1,33,1242,65,1271,67.7C1298.8,70,1327,42,1355,37.3C1383.5,33,1412,51,1440,63C1468.2,75,1496,79,1525,72.3C1552.9,65,1581,47,1609,44.3C1637.6,42,1666,56,1694,67.7C1722.4,79,1751,89,1779,84C1807.1,79,1835,61,1864,49C1891.8,37,1920,33,1948,46.7C1976.5,61,2005,93,2019,109.7L2032.9,126L2032.9,140L2018.8,140C2004.7,140,1976,140,1948,140C1920,140,1892,140,1864,140C1835.3,140,1807,140,1779,140C1750.6,140,1722,140,1694,140C1665.9,140,1638,140,1609,140C1581.2,140,1553,140,1525,140C1496.5,140,1468,140,1440,140C1411.8,140,1384,140,1355,140C1327.1,140,1299,140,1271,140C1242.4,140,1214,140,1186,140C1157.6,140,1129,140,1101,140C1072.9,140,1045,140,1016,140C988.2,140,960,140,932,140C903.5,140,875,140,847,140C818.8,140,791,140,762,140C734.1,140,706,140,678,140C649.4,140,621,140,593,140C564.7,140,536,140,508,140C480,140,452,140,424,140C395.3,140,367,140,339,140C310.6,140,282,140,254,140C225.9,140,198,140,169,140C141.2,140,113,140,85,140C56.5,140,28,140,14,140L0,140Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
