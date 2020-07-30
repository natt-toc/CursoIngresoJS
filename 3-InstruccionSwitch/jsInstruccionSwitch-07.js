function mostrar()
/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
{

	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Cordoba":
			alert("El destino se encuentra al Sur del país");
			break;

		case "Cataratas":
			alert("El destino se encuentra al Nordeste del país");
			break;

		case "Mar del plata":
			alert("El destino se encuentra al Este");
			break;
	}

}//FIN DE LA FUNCIÓN