/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var sumaResultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroUnoParseado=parseInt(numeroUno);

		numeroDos=document.getElementById("txtIdNumeroDos").value;
		numeroDosParseado=parseInt(numeroDos);

	// suma
	
	sumaResultado= numeroUnoParseado + numeroDosParseado;


	alert(sumaResultado);
}

