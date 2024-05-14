"use client";
import React, { useEffect } from "react";
import { bucketListJson } from "./../../../utils/mock.js";
import Image from "next/image";

const Details = ({ params }) => {
  const { id } = params;

  useEffect(() => {
    if (!localStorage.getItem("logged")) {
      window.location.href = "/login";
    }
  }, []);

  const experience = bucketListJson.find((item) => item.principalKey === id);

  if (!experience) {
    return <div>Errore: Esperienza non trovata.</div>;
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col justify-center items-center">
      {/* Visualizza i dettagli dell'esperienza */}
      <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
      <p className="text-lg mb-6">{experience.description}</p>
      {/* Ciclo sulle immagini disponibili */}
      <div className="flex flex-wrap justify-center">
        {experience.allImages.map((image, index) => (
          <Image
            key={index}
            src={`/images/bucketlist/${experience.principalKey}/${image}.jpg`}
            alt={`Image ${index + 1}`}
            className="w-64 h-auto m-2"
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
