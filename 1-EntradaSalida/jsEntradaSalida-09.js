/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreseSueldo;
	var sueldoPars;
	var resultado;

		ingreseSueldo=document.getElementById("txtIdSueldo").value;
		sueldoPars=parseInt(ingreseSueldo);

	//operación
	
		resultado= (sueldoPars * 0.10) + sueldoPars;
		
	document.getElementById("txtIdResultado").value=resultado;
	
}
