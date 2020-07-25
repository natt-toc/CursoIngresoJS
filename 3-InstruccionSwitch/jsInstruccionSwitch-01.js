function mostrar()
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/ {
	//tomo el mes
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Enero":
			alert("que comiences bien el año!!!");
			break;

		case "Marzo":
			alert("a clases!!!");
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;

		case "Diciembre":
			alert("Felices fiesta!!!");
			break;

	}


}//FIN DE LA FUNCIÓN