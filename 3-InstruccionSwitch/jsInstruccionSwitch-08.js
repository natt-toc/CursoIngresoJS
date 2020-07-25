function mostrar()
/*Al seleccionar un 
destino informar si hace FRIO o CALOR en ese destino*/
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Cordoba":
			alert("El clima en este destino es FRIO");
			break;

		case "Cataratas":
			alert("El clima en este destino es CALUROSO");
			break;

		case "Mar del plata":
			alert("El clima en este destino es FRIO/CALUROSO");
			break;
	}

}//FIN DE LA FUNCIÓN