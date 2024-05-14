import React from "react";
import Image from "next/image";

const CardModules = ({ title, paragraph, imgSrc }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white flex p-4 m-2">
      {/* Imagen en el lado izquierdo */}
      <div className="flex-shrink-0 mr-4">
        <Image
          src={imgSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      {/* Contenedor para el título y el párrafo en el lado derecho */}
      <div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardModules;
