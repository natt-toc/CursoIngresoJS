function mostrar()
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

{
	let nota;
	let vMin= 1;
	let vMax = 10;

		nota= parseInt(Math.round(Math.random() * (vMax - vMin) + vMin));
		
		if (nota >= 9)
		 {
			alert ( nota + " EXCELENTE");

		} else if (nota >= 4 && nota < 9 ) 
		{
			 alert (nota + " APROBO");
		} else {
			alert (nota + " Vamos, La próxima se puede");
			
		}
	

}//FIN DE LA FUNCIÓN