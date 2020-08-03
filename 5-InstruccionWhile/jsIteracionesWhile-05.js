/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	do {
		sexo=prompt("Ingrese su sexo: f o m ").toLowerCase() //para convertit minuscula aunque ingrese Mayusc
		// a la inversa .toUpperCase()
		
	} while (sexo!="f" && sexo!= "m");

	document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN