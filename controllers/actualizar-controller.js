import { clientServices } from "../service/client-service.js";

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
	console.log(nombre, imagen);
	clientServices.detalleProducto(id).then((perfil) => {
		imagen.value = perfil.imagen;
		nombre.value = perfil.nombre;
		precio.value = perfil.precio;
		descripcion.value = perfil.value;
	});
};

obtenerInformacion();
