import { clientServices } from "../service/client-service.js";
//Creando elemento
const creaNuevaLinea = (imagen, nombre, precio, id) => {
	const linea = document.createElement("div");
	const contenido = `<div class="section__single-products">
			<img src=".${imagen}" class="product-image" />
			<p class="product-name">${nombre}</p>
			<p class="product-price">$${precio}</p>
			<a href="">
				<p class="product-link">Ver producto</p>
			</a>
			<ul class="table__button-control">
				<li>
					<a href="../views/edita.html?id=${id}" class=" simple-button--edit">
						Editar
					</a>
				</li>
				<li>
					<button class="simple-button simple-button--delete" type="button" id="${id}">
						Eliminar
					</button>
				</li>
			</ul>
		</div>`;
	linea.innerHTML = contenido;
	const btn = linea.querySelector("button");
	btn.addEventListener("click", () => {
		const id = btn.id;
		clientServices
			.eliminarProducto(id)
			.then((re) => console.log(re))
			.catch((er) => console.log("error", er));
	});
	return linea;
};

//Donde crear el elemento
const listaDonde = document.querySelector("[data-productos-todos]");
//invocando el fetch y usando
clientServices
	.listaDeProductos()
	.then((response) => {
		const data = response;
		//ya teniendo nuestro html y donde lo queremos
		data.forEach((producto) => {
			const nuevaLinea = creaNuevaLinea(producto.imagen, producto.nombre, producto.precio, producto.id);
			listaDonde.appendChild(nuevaLinea);
		});
	})
	.catch((err) => console.log("ocurrió un error", err));

//Para ver todos los productos
//creando elemento sin botón
const creaNuevaLineaSin = (imagen, nombre, precio) => {
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
const listaDondeSin = document.querySelector("[data-productos-todos-sin]");
//invocando el fetch y usando
clientServices
	.listaDeProductos()
	.then((response) => {
		const data = response;
		//ya teniendo nuestro html y donde lo queremos
		data.forEach((producto) => {
			const nuevaLineaSin = creaNuevaLineaSin(producto.imagen, producto.nombre, producto.precio, producto.id);
			listaDondeSin.appendChild(nuevaLineaSin);
		});
	})
	.catch((err) => console.log("ocurrió un error", err));
