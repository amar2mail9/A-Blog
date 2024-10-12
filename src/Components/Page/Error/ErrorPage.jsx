import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Home/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-xl text-gray-700">Something went wrong.</p>
        <p className="mt-2 text-gray-500">Please try again later.</p>
        <Link to={"/"}>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Refresh Page
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
