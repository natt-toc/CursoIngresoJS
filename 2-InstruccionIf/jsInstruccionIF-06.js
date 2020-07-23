function mostrar()
/*Al ingresar una edad debemos informar si la persona es mayor 
de edad (mas de 18 años) o adolescente (entre 13 y 17 años)
 o niño (menor a 13 años).*/
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;

	if (edad >= 18) {
		alert ("Ud. es mayor");
		
	} else if (edad > 12 && edad < 18) {
		alert("Ud. es un adolescente");
		
	} else {
		alert("Ud. es un niño");
		
	}


}//FIN DE LA FUNCIÓN