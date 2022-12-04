//Validando productos
const productosForm = document.querySelector("[data-productos-form]");
const productosNombre = document.querySelector("[data-productos-nombre]");
const productosPrecio = document.querySelector("[data-productos-precio]");
const productosDescripcion = document.querySelector("[data-productos-descripcion]");

productosForm.addEventListener("submit", (ev) => {
	console.log("here");
	validaProducto(ev);
});
function validaProducto(ev) {
	if (productosNombre && productosPrecio && productosDescripcion) {
		//redireccionar
		// window.location.href = "/views/productos-add.html";
	} else {
		console.log("no estan completos");
	}
	ev.preventDefault();
}
