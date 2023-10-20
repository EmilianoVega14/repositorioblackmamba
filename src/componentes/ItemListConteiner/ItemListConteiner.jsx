import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../asincmock";
import ItemList from "../ItemList/ItemList";

// Este es el contenedor de la lista de los productos que voy a tener en mi proyecto.
// esta logica tiene el objetivo solamente de pedir los productos a la base de datos y setear la informacion en un estado.
// Lo que queremos es tomar la informacion y setearlo en otro componente que se encargue de mostrarlo en una lista.

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    getProductos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);
  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListConteiner;
