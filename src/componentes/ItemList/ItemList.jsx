// Lo que hago aca es llamar como prop al estado creado en itemListConteiner "productos" para mapearlo y obtener la informacion de cada uno de los objetos de "misProductos" para luego renderizarlos.

import Item from "../Item/Item";

export const ItemList = ({ productos, titulo }) => {
  return (
    <div>
      <h2> {titulo}</h2>

      <div>
        {productos.map((prod) => (
          <Item productos={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
