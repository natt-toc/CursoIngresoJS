function mostrar()
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/ {
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Febrero":
			alert("tiene 28 días");
			break;
		case "Abril":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días");
			break;

		default:
			alert("tiene 31 días");
			break;

	}





}//FIN DE LA FUNCIÓN