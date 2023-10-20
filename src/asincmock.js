export const misProductos = [
  {
    id: "1",
    nombre: "picador de madera",
    precio: "500",
    img: "./imagenes/picador.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "2",
    nombre: "picador de metal",
    precio: "700",
    img: "./imagenes/picadordemetal.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "3",
    nombre: "seda ocb black",
    precio: "100",
    img: "./imagenes/sedaocbblack.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "4",
    nombre: "seda ocb platinium",
    precio: "200",
    img: "./imagenes/sedaocbplatinium.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "5",
    nombre: "tabaco argentino",
    precio: "800",
    img: "./imagenes/tabacoargentino.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
  {
    id: "6",
    nombre: "tabaco cubano",
    precio: "1000",
    img: "./imagenes/tabacocubano.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
];

// CREAMOS UNA FUNCION PROMESA QUE ME DEVUELVA TODOS LOS DATOS DEL ARRAY

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1000);
  });
};

// AHORA NECESITO DESARROLLAR UNA FUNCION QUE SOLAMENTE ME DEVUELVA SOLAMENTE UN SOLO PRODUCTO DE ACUERDO AL ID QUE TENGA.

export const getUnProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = misProductos.find((elemento) => elemento.id === id);

      if (item) {
        resolve(item);
      } else {
        reject("Producto no encontrado");
      }
    }, 1000);
  });
};
