import CardModules from "@/components/Cardmodules";
import Layout from "@/components/Layout";
import React from "react";

const Index = () => {
  // Array de datos para cada tarjeta
  const cardData = [
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    { imgSrc: "/assets/usuarios.png", title: "17", paragraph: "Tiendas" },
    // Repite para otros datos
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {cardData.map((data, index) => (
          <CardModules
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
