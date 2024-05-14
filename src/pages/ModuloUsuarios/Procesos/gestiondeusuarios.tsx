import CardModules from "@/components/Cardmodules";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import React, { useState } from "react";

const GestionDeUsuarios = () => {
  const columns = [
    { header: "Nombre", accessor: "name" },
    { header: "Correo", accessor: "email" },
    { header: "Teléfono", accessor: "phone" },
    { header: "Estado", accessor: "status" },
  ];
  const cardData = [
    {
      imgSrc: "/assets/usuarios.png",
      title: "34",
      paragraph: "Usuarios Totales",
    },
    {
      imgSrc: "/assets/usuarios.png",
      title: "17",
      paragraph: "Usuarios Activos",
    },
    {
      imgSrc: "/assets/usuarios.png",
      title: "9",
      paragraph: "Usuarios Bloquados",
    },
  ];

  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "+125476321",
      status: "active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+125476321",
      status: "active",
    },
    // Otros datos...
  ];

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    // Lógica para filtrar los datos
  };

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
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">User Table</h1>

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={filters.name}
            onChange={handleFilterChange}
            className="input input-bordered"
          />
          <input
            type="text"
            name="email"
            placeholder="Correo"
            value={filters.email}
            onChange={handleFilterChange}
            className="input input-bordered"
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={filters.phone}
            onChange={handleFilterChange}
            className="input input-bordered"
          />
          <input
            type="text"
            name="status"
            placeholder="Estado"
            value={filters.status}
            onChange={handleFilterChange}
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Buscar
          </button>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </Layout>
  );
};

export default GestionDeUsuarios;
