// validaciones "b"
export function valida(input) {
	console.log(input);
	if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		console.log("es válido", input.parentElement);
		// input.querySelector(".input-message-error").innerHTML = "";
	} else {
		input.parentElement.classList.add("input-container--invalid");
		console.log("no es válido", input.parentElement);
		// input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
	}
}
const mensajesDeError = {
	nombre: {
		valueMissing: "Este campo no puede estar vacío"
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
	nombre_producto: {
		valueMissing: "Este campo no puede estar vacío"
	},
	precio_producto: {
		valueMissing: "Este campo no puede estar vacío"
	},
	descripción_producto: {
		valueMissing: "Este campo no puede estar vacío"
	},
	busqueda: {
		valueMissing: "Este campo no puede estar vacío"
	}
};
