// validaciones "b"
export function validas(input) {
	console.log("función valida", input);
}

const loginForm = document.querySelector("[data-login]");
const errorMark = document.querySelector("[data-login-error]");
const errorMessage = document.querySelector("[data-login-error-inputs]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");

// esto funcionaba antes
loginForm.addEventListener("submit", (e) => {
	validaLogin(e);
});

function validaLogin(e) {
	console.log("here");
	let checkMail = "";
	let checkPassword = "";
	if (email.value == "something@hotmail.com") {
		console.log("mail is correct");
		checkMail = true;
	} else {
		email.value = "";
		password.value = "";
		console.log("something is mail wrang!!");
		errorMessage.style.display = "block";
		errorMark.style.borderColor = "orange";
	}
	if (password.value == "anotherO2") {
		console.log("password is correct");
		checkPassword = true;
	} else {
		email.value = "";
		password.value = "";
		console.log("something is password wrang!!");
		errorMessage.style.display = "block";
		errorMark.style.borderColor = "orange";
	}
	if (checkPassword && checkMail) {
		console.log("Redireccionando Padrino!");
		e.preventDefault();
		errorMessage.style.display = "none";
		errorMark.style.borderColor = "#f5f5f5";
		window.location.href = "/views/productos-add.html";
	}
	e.preventDefault();
}
