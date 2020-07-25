function mostrar() {
	let estacion;
	let destino;
	let estadiaBase = 15000;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {

		case "Invierno":
			if (destino == "Bariloche") {
				precioFinal = parseFloat(estadiaBase * 1.20);

			} else if (destino == "Cordoba") {
				precioFinal = parseFloat(estadiaBase * 1.10);

			} else if (destino == "Mar del plata") {
				precioFinal = parseFloat(estadiaBase * 0.80);

			} else {
				precioFinal = parseFloat(estadiaBase);
			}
			alert("El costo total de su estadia en Invierno es " + precioFinal);
			break;

		case "Verano":
			if (destino == "Bariloche") {
				precioFinal = parseFloat(estadiaBase * 0.80);

			} else if (destino == "Cordoba" || destino == "Cataratas") {
				precioFinal = parseFloat(estadiaBase * 1.10);

			} else if (destino == "Mar del plata") {
				precioFinal = parseFloat(estadiaBase * 1.20);
			}

			alert("El costo total de su estadia en Verano es de " + precioFinal);
			break;

		case "Otoño":
		case "Primavera":
			if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
				precioFinal = parseFloat(estadiaBase * 1.10);

			} else {
				precioFinal = parseFloat(estadiaBase);
			}

			alert("El costo total de su estadia en Verano es de " + precioFinal);
			break;

	}

}//FIN DE LA FUNCIÓN