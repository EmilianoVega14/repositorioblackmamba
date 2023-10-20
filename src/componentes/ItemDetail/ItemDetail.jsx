export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>
        <img src="#" alt={item.nombre} />
        <div>
          <h3>nombre:{item.nombre}</h3>
          <p>precio:${item.precio}</p>
          <p>id:{item.id}</p>
          <p>idCat:{item.categoria}</p>
          <p>detalles:{item.detalle}</p>
          <button>Ver Más</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
