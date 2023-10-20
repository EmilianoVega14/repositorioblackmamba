import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <div>
      <img src="#" alt={productos.nombre} />
      <div>
        <h3>nombre:{productos.nombre}</h3>
        <p>precio: ${productos.precio}</p>
        <p>id: {productos.id}</p>
        <p>idCat: {productos.categoria}</p>
        <Link to={`/item/${productos.id}`}> Ver Más </Link>
      </div>
    </div>
  );
};

export default Item;
