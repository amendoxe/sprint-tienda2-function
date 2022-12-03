//Creando elemento
const creaNuevaLinea = (imagen, nombre, precio) => {
	const linea = document.createElement("div");
	const contenido = `<div class="section__single-products">
			<img src=".${imagen}" class="product-image" />
			<p class="product-name">${nombre}</p>
			<p class="product-price">$${precio}</p>
			<a href="">
				<p class="product-link">Ver producto</p>
			</a>
		</div>`;
	linea.innerHTML = contenido;
	return linea;
};

//Donde crear el elemento
const listaDonde = document.querySelector("[data-productos-todos]");

//fetch
const listaDeProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());

listaDeProductos().then((response) => {
	const data = response;
	console.log(data);
	//ya teniendo nuestro html y donde lo queremos
	data.forEach((producto) => {
		const nuevaLinea = creaNuevaLinea(producto.imagen, producto.nombre, producto.precio);
		listaDonde.appendChild(nuevaLinea);
	});
});
