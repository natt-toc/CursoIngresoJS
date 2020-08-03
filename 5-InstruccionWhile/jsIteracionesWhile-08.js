/*
Al presionar el botón, pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	let num;
	let respuesta;
	let positivos = 0;
	let negativos = 1; //porque no se puede multiplicar en 0 para que de resultado.
	let flag = 0;

	do {
		num = parseInt(prompt("Ingrese un número"))
		if (num >= 0) {
			positivos = positivos + num;

		} else {
			flag=1; 
			negativos = negativos * num;
		}

		respuesta = prompt("Desea ingresar otro número?").toLocaleUpperCase()

	} while (respuesta == "SI");

	if (flag == 0) {
		negativos = 0;
	}


	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;




}
//FIN DE LA FUNCIÓN