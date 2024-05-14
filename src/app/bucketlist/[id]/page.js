"use client";
import React, { useEffect } from "react";
import { bucketListJson } from "./../../../utils/mock.js";
import Image from "next/image";

const Details = ({ params }) => {
  const { id } = params;

  useEffect(() => {
    const getUserfromLocalStorage = localStorage.getItem("logged")
      ? JSON.parse(localStorage.getItem("logged"))
      : null;

    if (!getUserfromLocalStorage) {
      window.location.href = "/login";
    }
  }, []);

  const experience = bucketListJson.find((item) => item.principalKey === id);

  if (!experience) {
    return <div>Errore: Esperienza non trovata.</div>;
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col justify-center items-center py-24">
      {/* Visualizza i dettagli dell'esperienza */}
      <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
      <p className="text-lg mb-6">{experience.description}</p>
      {/* Ciclo sulle immagini disponibili */}
      <div className="flex flex-wrap justify-center gap-3">
        {experience.allImages.map((image, index) => (
          <div key={index} className="w-1/3 h-1/4 flex justify-center">
            <Image
              key={index}
              src={`/images/bucketlist/${experience.principalKey}/${image}.jpg`}
              alt={`Image ${index + 1}`}
              layout="responsive" // Impostazione del layout responsive
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
