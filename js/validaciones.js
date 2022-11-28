const loginForm = document.querySelector("[data-login]");
const errorMark = document.querySelector("[data-login-error]");
const errorMail = document.querySelector("[data-login-error-inputs]");
const errorPassword = document.querySelector("[data-login-error-password]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");

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
		errorMail.style.display = "block";
		errorMark.style.borderColor = "orange";
	}
	if (password.value == "another") {
		console.log("mail is correct");
		checkPassword = true;
	} else {
		email.value = "";
		password.value = "";
		console.log("something is password wrang!!");
		errorPassword.style.display = "block";
		errorMark.style.borderColor = "orange";
	}
	if (checkPassword && checkMail) {
		//TODO redirecciona a todos los productos
	}

	e.preventDefault();
}
