// validaciones "b"
export function valida(input) {
	const tipoDeInput = input.dataset.tipo; // viene del data-tipo en cada input

	if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		console.log("es válido", input.validity);
		input.parentElement.querySelector(".input-message-error").innerHTML = "";
	} else {
		input.parentElement.classList.add("input-container--invalid");
		console.log("no es válido", input.validity);
		input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
	}
}
const mensajesDeError = {
	nombre: {
		valueMissing: "El campo nombre no puede estar vacío"
	},
	mensaje: {
		valueMissing: "Este campo no puede estar vacío"
	},
	email: {
		valueMissing: "Este campo no puede estar vacío",
		typeMismatch: "Verifica que hayas escrito bien tu correo"
	},
	password: {
		valueMissing: "Este campo no puede estar vacío",
		pattenMismatch:
			"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número  y no pude contener caracteres especiales."
	},
	nombrep: {
		valueMissing: "El campo nombre del producto no puede estar vacío"
	},
	precio: {
		valueMissing: "El campo precio del producto no puede estar vacío"
	},
	descripción: {
		valueMissing: "El campo descripción del producto no puede estar vacío"
	},
	busqueda: {
		valueMissing: "Este campo de búsqueda no puede estar vacío"
	}
};
//lista de nuestros tipos de errores ↑
const tipoDeErrores = ["valueMissing", "typeMismatch", "pattenMismatch"];

function mostrarMensajeDeError(tipoDeInput, input) {
	let mensaje = "";
	tipoDeErrores.forEach((error) => {
		if (input.validity[error]) {
			console.log("validity", input.validity);
			console.log("error", error);
			console.log(mensajesDeError[tipoDeInput][error]);
			mensaje = mensajesDeError[tipoDeInput][error];
		}
	});
	return mensaje;
}
