/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var sumaResultado;

		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
		
	// suma
	
	sumaResultado= numeroUno + numeroDos;

	alert(sumaResultado);
}

