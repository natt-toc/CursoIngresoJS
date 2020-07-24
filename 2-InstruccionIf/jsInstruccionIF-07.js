function mostrar()
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
{
	let edad;
	let estadoCivil;

		estadoCivil=document.getElementById("estadoCivil").value;
		edad=document.getElementById("txtIdEdad").value;

		if (!(estadoCivil == "Soltero") && (edad < 18)) {
			alert(" Es muy pequeño para NO ser soltero");
		}
	


}//FIN DE LA FUNCIÓN

