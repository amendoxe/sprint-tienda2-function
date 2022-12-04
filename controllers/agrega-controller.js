import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-productos-form]");
formulario.addEventListener("submit", (ev) => {
	ev.preventDefault();
	const nombre = document.querySelector("[data-productos-nombre]").value;
	const precio = document.querySelector("[data-productos-precio]").value;
	const descripcion = document.querySelector("[data-productos-descripcion]").value;
	const imagen = document.querySelector("[data-productos-imagen]").value;
	console.log(nombre, "-", precio, "-", descripcion, "-", imagen);
	clientServices
		.crearProducto(nombre, precio, descripcion, imagen)
		.then((respuesta) => {
			window.location.href = "/views/productos-add.html";
		})
		.catch((err) => console.log("error", err));
});
