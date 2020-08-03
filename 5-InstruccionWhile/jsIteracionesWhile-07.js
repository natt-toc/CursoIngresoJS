/*
Al presionar el botón, pedir números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let respuesta;
	let numeroIngresado;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un númmero"))
		acumulador = parseInt(acumulador+numeroIngresado)
		contador++;
		respuesta= prompt("Escriba SI para continuar").toLocaleUpperCase()
	} 
	while (respuesta=="SI");
		
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;


}//FIN DE LA FUNCIÓN