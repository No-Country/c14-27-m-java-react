"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form.jsx";
import Image from "./components/image.jsx";
import Text from "./components/text.jsx";

export default function Detail() {
  return (
    <div className="container">
      <div className="row">
          <Image />
        <div className="col-md-6">
          <Text />
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </div>
  );
}


