/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioUnoP;

    var precioDos;
    var precioDosP;

    var precioTres;
    var precioTresP;

    var operacion;

    precioUno=document.getElementById("txtIdPrecioUno").value;
        precioUnoP=parseInt(precioUno);

        precioDos=document.getElementById("txtIdPrecioDos").value;
        precioDosP=parseInt(precioDos);

        precioTres=document.getElementById("txtIdPrecioTres").value;
        precioTresP=parseInt(precioTres);

    operacion= precioUnoP + precioDosP + precioTresP;
    alert("Su total es de " +operacion);
	
}
function Promedio () 
{   
    var precioUno;
    var precioUnoP;

    var precioDos;
    var precioDosP;

    var precioTres;
    var precioTresP;

    var operacion;
    var operacionDec;

        precioUno=document.getElementById("txtIdPrecioUno").value;
        precioUnoP=parseInt(precioUno);

        precioDos=document.getElementById("txtIdPrecioDos").value;
        precioDosP=parseInt(precioDos);

        precioTres=document.getElementById("txtIdPrecioTres").value;
        precioTresP=parseInt(precioTres);

            operacion= (precioUnoP + precioDosP + precioTresP) / 3;
            operacionDec=operacion.toFixed(2);
            
            alert("Su promedio es " +operacionDec);
	
}
function PrecioFinal () 
{
	var precioUno;
    var precioUnoP;

    var precioDos;
    var precioDosP;

    var precioTres;
    var precioTresP;

    var precio;
    var iva;
    var precioConIva

        precioUno=document.getElementById("txtIdPrecioUno").value;
        precioUnoP=parseInt(precioUno);

        precioDos=document.getElementById("txtIdPrecioDos").value;
        precioDosP=parseInt(precioDos);

        precioTres=document.getElementById("txtIdPrecioTres").value;
        precioTresP=parseInt(precioTres);

// C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

        precio= precioUnoP + precioDosP + precioTresP
        iva= precio *0.21;
        precioConIva= (iva + precio ); 

        alert("El precio final es " +precioConIva);

}