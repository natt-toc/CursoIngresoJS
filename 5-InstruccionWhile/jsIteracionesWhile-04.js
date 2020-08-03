/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numIngresado;

	//Asigno Variable
	do {
		numIngresado=parseInt(prompt("Ingrese un numero entre 0 y 9 inclusive"))

	} while (numIngresado< 0 || numIngresado>9 || isNaN(numIngresado));
	
	
 
 document.getElementById("txtIdNumero").value=numIngresado;
	
  }
