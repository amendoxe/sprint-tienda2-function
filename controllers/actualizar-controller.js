import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-productos-form]");

const obtenerInformacion = () => {
	const url = new URL(window.location); //clase ya establecida en js, contiene searchParams
	const id = url.searchParams.get("id"); //obtenemos el id
	if (id === null) {
		window.location.href = "/views/error.html";
	}
	const imagen = document.querySelector("[data-imagen]"); // generamos una nueva constante
	const nombre = document.querySelector("[data-productos-nombre]");
	const precio = document.querySelector("[data-productos-precio]");
	const descripcion = document.querySelector("[data-productos-descripcion]");

	clientServices.detalleProducto(id).then((perfil) => {
		imagen.value = perfil.imagen;
		nombre.value = perfil.nombre;
		precio.value = perfil.precio;
		descripcion.value = perfil.value;
	});
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	const imagen = document.querySelector("[data-imagen]").value;
	const nombre = document.querySelector("[data-productos-nombre]").value;
	const precio = document.querySelector("[data-productos-precio]").value;
	const descripcion = document.querySelector("[data-productos-descripcion]").value;
	clientServices.actualizarCliente(nombre, precio, descripcion, imagen, id).then(() => {
		window.location.href = "/views/productos-add.html";
	});
});
