import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
// pages/editUser.tsx
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
  telefono: string;
  estadoUsuario: string;
  grupoUsuario: string;
}
const Details = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "Pepito",
    apellido: "Pregunton",
    email: "Preguntadorando@gmail.com",
    direccion: "Preguntando ando en la avenida pregunta 588",
    telefono: "123456789",
    estadoUsuario: "",
    grupoUsuario: "1. Módulo de Usuarios",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para manejar la actualización del usuario
    console.log(formData);
  };

  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Editar Usuario</h1>
          <div className="card bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="avatar w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <h2 className="text-xl font-semibold">Pepito Pregunton</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Nombre:</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Apellido:</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Dirección:</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Teléfono:</label>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block font-semibold">
                    Estado del Usuario:
                  </label>
                  <select
                    name="estadoUsuario"
                    value={formData.estadoUsuario}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="">Seleccionar estado</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">
                    Grupo de Usuario:
                  </label>
                  <input
                    type="text"
                    name="grupoUsuario"
                    value={formData.grupoUsuario}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
