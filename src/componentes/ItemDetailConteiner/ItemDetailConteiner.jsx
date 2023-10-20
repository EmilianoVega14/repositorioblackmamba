import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUnProductoPorId } from "../../asincmock";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    getUnProductoPorId(id).then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailConteiner;
