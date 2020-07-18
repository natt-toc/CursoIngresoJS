/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;
	var sumaResultado;

		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

		sumaResultado=numeroUno + numeroDos;
		alert("La suma es " +sumaResultado);	
	}

function restar()
{	var numeroUno;
	var numeroDos;
	var restaResultado;

		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

		restaResultado=numeroUno - numeroDos;
		alert("La resta es " +restaResultado);
}

function multiplicar()
{ 	var numeroUno;
	var numeroDos;
	var multiplicacionResultado;

		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

		multiplicacionResultado=numeroUno * numeroDos;
		
		multiplicacionResultado= numeroUno * numeroDos;
		alert("La multiplicación es " +multiplicacionResultado);
}

function dividir()
{	var numeroUno;
	var numeroDos;
	var divisionResultado;

		numeroUno=parseFloat(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseFloat(document.getElementById("txtIdNumeroDos").value);

		divisionResultado=numeroUno + numeroDos;

		divisionResultado=numeroUno / numeroDos;	
		alert ("La división es  " +divisionResultado.toFixed(2));
}

