/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	
	let numPositivo; 
	let sumaPositivos = 0;
	let sumaNegativos = 0;
	let cantidadCeros=0;
	let contadorPos = 0;
	let contadorNeg = 0;
	let promedioPos;
	let promedioNeg;
	let diferenciaNegPos;
	let contadorPares=0;

	do {
		num = parseInt(prompt("Ingrese un número"))

		if (num > 0) {
			numPositivo = num;
			sumaPositivos = numPositivo + sumaPositivos;
			contadorPos++;

		} else if (num == 0) {
			cantidadCeros++;

		} else {
			numNegativos = num;
			sumaNegativos = num + sumaNegativos;
			console.log( contadorNeg++);
		}

		if (num % 2 == 0) {
			contadorPares++;	
		}

		respuesta = confirm("Desea ingresar otro número?")
	} while (respuesta == true);

	promedioPos = parseFloat((sumaPositivos / contadorPos).toFixed(1));
	promedioNeg = parseFloat((sumaNegativos / contadorNeg).toFixed(1));
	diferenciaNegPos =sumaNegativos + sumaPositivos;
	 
	document.write("1. Suma de los negativos = "+sumaNegativos+"<br/>");
	document.write("2. Suma de los positivos = "+sumaPositivos+"<br>");
	document.write("3. Cantidad de positivos = "+contadorPos+"<br>");
	document.write("4. Cantidad de negativos = "+contadorNeg+"<br>");
	document.write("5. Cantidad de ceros= "+cantidadCeros+"<br>");
	document.write("6. Cantidad de números pares= "+contadorPares+"<br>");
	document.write("7. Promedio de positivos= "+ promedioPos+"<br>");
	document.write("8. Promedios de negativos = "+promedioNeg+"<br>");
	document.write("9. Diferencia entre positivos y negativos = "+diferenciaNegPos);

}//FIN DE LA FUNCIÓN