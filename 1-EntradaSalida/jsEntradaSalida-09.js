/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
		
	//operación
	
	resultado= sueldo + (sueldo * 0.10);
		
	document.getElementById("txtIdResultado").value=resultado;
	
}
