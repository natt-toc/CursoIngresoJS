function mostrar()
{
	var edad;
	var edadPars;

		edad=document.getElementById("txtIdEdad").value;
		edadPars=parseInt(edad);

			if (edadPars >= 18 && edadPars <= 100 ) 
			{ 
				alert("Ud. es Mayor de edad")
			 } 
			 
}//FIN DE LA FUNCIÓN