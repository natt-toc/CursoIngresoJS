/*
Al presionar el botón, 

pedir  números  hasta que el usuario quiera,

mostrar el número máximo y el número mínimo ingresado.*/

function mostrar() {	// declarar variables


	let num;
	let respuesta;
	let numeroMaximo; //Number.MIN_VALUE;
	let numeroMinimo; // Number.MIN_VALUE;
	let banderaDelPrimero = 0; //inicializo e incremento var control

	do {
		num = parseInt(prompt("Ingrese un número"))
		if (banderaDelPrimero == 0) {
			numeroMinimo = num;
			
			numeroMaximo = num;
			banderaDelPrimero = 1
		}

		if (num < numeroMinimo) {
			numeroMinimo = num;

		} else {
			numeroMaximo = num;

		}
		respuesta = prompt("Desea ingresar otro número?").toLocaleUpperCase()

	} while (respuesta == "SI");


	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo








	/*var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	
	while(respuesta=="si")
	
	txtIdMaximo.value=numeroMaximo;*/

}//FIN DE LA FUNCIÓN