function mostrar()
/*Al seleccionar un 
destino informar si hace FRIO o CALOR en ese destino*/
{
	let destino;
	let clima;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Cordoba":
			clima= "Frio";
			break;

		case "Cataratas":
			clima= "CALUROSO";
			break;

		case "Mar del plata":
			clima = "FRIO/CALUROSO";
			break;
		}

		alert("El clima en este destino es " + clima);

}//FIN DE LA FUNCIÓN