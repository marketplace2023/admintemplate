import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Details for {id}</h1>
      {/* Aquí puedes añadir más detalles según el id */}
    </div>
  );
};

export default Details;
