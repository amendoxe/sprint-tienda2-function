const listaDeProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());

listaDeProductos().then((response) => {
	const data = response;
	console.log(data);
});
