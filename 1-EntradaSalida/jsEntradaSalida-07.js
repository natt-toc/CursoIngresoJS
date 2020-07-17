/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{		var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var sumaResultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroUnoParseado=parseInt(numeroUno);

		numeroDos=document.getElementById("txtIdNumeroDos").value;
		numeroDosParseado=parseInt(numeroDos);

	sumaResultado=numeroUnoParseado + numeroDosParseado;
	alert(sumaResultado);	
}

function restar()
{	var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var restaResultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroUnoParseado=parseInt(numeroUno);

		numeroDos=document.getElementById("txtIdNumeroDos").value;
		numeroDosParseado=parseInt(numeroDos);
	
	restaResultado=numeroUnoParseado - numeroDosParseado;	
	alert(restaResultado);
}

function multiplicar()
{ 	var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var multiplicacionResultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroUnoParseado=parseInt(numeroUno);

		numeroDos=document.getElementById("txtIdNumeroDos").value;
		numeroDosParseado=parseInt(numeroDos);
	
		multiplicacionResultado= numeroUnoParseado * numeroDosParseado;
		alert(multiplicacionResultado);
}

function dividir()
{	var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var divisionResultado;

		numeroUno=document.getElementById("txtIdNumeroUno").value;
		numeroUnoParseado=parseInt(numeroUno);

		numeroDos=document.getElementById("txtIdNumeroDos").value;
		numeroDosParseado=parseInt(numeroDos);

	divisionResultado=numeroUnoParseado / numeroDosParseado;	
	alert (divisionResultado);
}

