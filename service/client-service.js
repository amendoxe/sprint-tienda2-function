//fetch
const listaDeProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());

export const clientServices = {
	listaDeProductos
};
