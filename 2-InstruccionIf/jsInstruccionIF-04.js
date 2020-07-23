function mostrar()
/*Al ingresar una edad debemos informar si la persona 
es adolescente, edad entre 13 y 17 años (inclusive) */
{
	//tomo la edad  
	var edad;

	edad=document.getElementById("txtIdEdad").value;

	if (edad > 12 && edad < 18) {
		alert ("Ud. es adolescente");
	} 


}//FIN DE LA FUNCIÓN