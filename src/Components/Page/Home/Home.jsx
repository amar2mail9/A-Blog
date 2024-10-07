import React from "react";

import Layout from "./Layout";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Home() {
  return (
    <Layout>
      <h1>
        Welcome to Amar Blog helloo a everyone
        <Button
          onClick={() => {
            Swal.fire("SweetAlert2 is working!");
          }}
        >
          click me
        </Button>
      </h1>
    </Layout>
  );
}
