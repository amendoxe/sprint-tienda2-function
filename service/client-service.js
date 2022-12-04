//fetch
const listaDeProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());
//sube al servidor
const crearProducto = (nombre, precio, descripcion, imagen) =>
	fetch("http://localhost:3000/producto", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ nombre, precio, descripcion, imagen, id: uuid.v4() })
	});

// eliminando Producto
const eliminarProducto = (id) => {
	console.log("elimina producto", id);
	fetch(`http://localhost:3000/producto/${id}`, {
		method: "DELETE"
	});
};
//exportando funciones
export const clientServices = {
	listaDeProductos,
	crearProducto,
	eliminarProducto
};
