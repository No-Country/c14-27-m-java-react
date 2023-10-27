"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "@/app/props/components/form";
import Text from "@/app/props/components/text";
import Image from "@/app/props/components/image";

const detailId = (id) => {
    return fetch(`http://localhost:8080/property/${id}`)
    .then(response => response.json())
}

export default async function page({params}) {
    const {id} = params;
    const detail= await detailId(id);
    console.log('detail:', detail)
  return (
    <div className="container">
      <div className="row">
          <Image data={detail.property_image}/>
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


