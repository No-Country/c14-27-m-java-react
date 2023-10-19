"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form.jsx"
import Image from "./components/image.jsx"
import Text from "./components/text.jsx"

export default function Detail() {
    return (
      <div>
        <Image/>
        <div >

          <div>
          <Text/>
          </div>

          <div>
          <Form/>
          </div>

        </div>
      </div>
    );
  }

