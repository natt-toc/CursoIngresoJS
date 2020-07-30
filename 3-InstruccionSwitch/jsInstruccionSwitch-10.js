function mostrar()
{
	let estacion;
	let destino;
	let estadiaBase = 15000;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				alert("Se viaja");
				break;
		} else {
			alert("No se viaja");
			break;
		}
		case "Verano":
			if (destino == "Mar del plata" || destino== "Cataratas"){
				alert("Se viaja");
				break;
		} else {
			alert ("No se viaja");
			break;
		 }
		case "Otoño":{
			alert("Se viaja");
			break;
		}
		case "Primavera":{
			alert("No se viaja");
			break;
		}
			

	}

}//FIN DE LA FUNCIÓN