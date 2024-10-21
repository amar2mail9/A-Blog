import { motion } from "framer-motion";
import Layout from "./Home/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Heading */}
          <motion.h1
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          {/* Contact Form */}
          <motion.div
            className="bg-white mx-auto p-8 rounded-lg shadow-lg xl:w-[700px] lg:w-[600px] md:w-[500px] sm:w-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <i className="ri-facebook-circle-fill text-3xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <i className="ri-twitter-x-fill text-3xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <i className="ri-instagram-fill text-3xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <i className="ri-linkedin-fill text-3xl"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
