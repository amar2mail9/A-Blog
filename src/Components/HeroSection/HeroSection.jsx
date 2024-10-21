import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <motion.div
        className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Our Blog
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Discover insights, stories, and tips.
        </p>
        <button className="mt-8 bg-orange-500 text-white py-3 px-6 rounded-md text-lg hover:bg-orange-600 transition duration-300">
          Read Our Latest Posts
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
