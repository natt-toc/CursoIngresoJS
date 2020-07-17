/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseSueldo;
	var sueldoPars;
	var Descuento;
	var resultado;

		ingreseSueldo=document.getElementById("txtIdImporte").value;
		sueldoPars=parseInt(ingreseSueldo);

	//operación
	
		Descuento= (sueldoPars * 0.25);
		resultado= sueldoPars - Descuento;
		
	document.getElementById("txtIdResultado").value=resultado;
	
}
