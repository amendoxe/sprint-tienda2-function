import { valida } from "./validaciones2.js";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
	input.addEventListener("blur", (input) => {
		console.log("target: ", input.target);
		console.log("input: ", input);
		valida(input);
	});
});
