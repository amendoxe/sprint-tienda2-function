const loginForm = document.querySelector("[data-login]");
const errorMark = document.querySelector("[data-login-error]");
const errorMail = document.querySelector("[data-login-error-mail]");
const errorPassword = document.querySelector("[data-login-error-password]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");

loginForm.addEventListener("submit", (e) => {
	validaLogin(e);
});

function validaLogin(e) {
	console.log("here");
	if (email.value == "something@hotmail.com") {
		console.log("mail is correct");
		//TODO redirecciona a todos los productos
	} else {
		email.value = "";
		password.value = "";
		console.log("something is wrang!!");
		errorMail.style.display = "block";
		errorPassword.style.display = "block";

		errorMark.style.borderColor = "orange";
	}
	e.preventDefault();
}
