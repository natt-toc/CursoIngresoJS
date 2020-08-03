function mostrar()
{
	
	let contador=0;
	let acumulador=0;
	let numeroIngresado;
	
	while (contador <= 4) 
	{
		numeroIngresado = parseInt(prompt("Ingrese 5 números"));
		acumulador = parseInt(acumulador+numeroIngresado);
		contador++;
	}
		
	document.getElementById("txtIdSuma").value=acumulador; 
	document.getElementById("txtIdPromedio").value=acumulador / 5;
	

	
	/*do {
		numeroIngresado=parseInt(prompt("Ingrese 5 números"))

	} while (contador<5);

	acumulador= acumulador+numeroIngresado; // la suma es acumulador

	contador++;

	document.getElementById("txtIdSuma").value=acumulador; 

	document.getElementById("txtIdPromedio").value=acumulador / 5;*/
}

//FIN DE LA FUNCIÓN
/*let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	contador=1;
	acumulador=0;

	while (contador <= 5) 
	{
		numeroIngresado = parseFloat(prompt(`${contador}-Ingrese el numero; `));
		acumulador = (acumulador+numeroIngresado);
		contador++;	
	}
	promedio = (acumulador/5).toFixed(2);
	alert(`la suma es: ${acumulador} y el promedio es: ${promedio}`);*/
