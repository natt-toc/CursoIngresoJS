function mostrar()
/* Al ingresar una edad solo 
debemos informar si la persona NO es adolescente */
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;

	if (edad < 13 || edad > 17) {
		alert("Ud. NO es adolescente");
	}

}//FIN DE LA FUNCIÓN