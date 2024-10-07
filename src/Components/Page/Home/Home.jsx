import React, { useEffect } from "react";

import Layout from "./Layout";

export default function Home() {
  useEffect(() => {
    {
      swal.fire({
        title: "Welcome back",
      });
    }
  }, []);
  return (
    <Layout>
      <h1>Welcome to Amar Blog</h1>
    </Layout>
  );
}
