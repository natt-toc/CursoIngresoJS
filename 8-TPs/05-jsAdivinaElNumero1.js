/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto 
 o si “se pasó…”  del número secreto.
*/
let numSecreto;
let ingreseNum;
let contadorIntentos;


function comenzar() {

  let vMax = 100;
  let vMin = 1;
 
  document.getElementById("txtIdIntentos").value = 0 
  numSecreto = parseInt(Math.round(Math.random() * (vMax - vMin) + vMin));
  alert(numSecreto)
  contadorIntentos=0

}

function verificar() {
  
  ingreseNum = parseInt(document.getElementById("txtIdNumero").value);
  
  contadorIntentos++;
   
  document.getElementById("txtIdIntentos").value = contadorIntentos;

  if (numSecreto == ingreseNum) {
    alert("Ud. es un ganador!!! y en solo " + contadorIntentos + " intentos");
  } else {
    
    if (numSecreto < ingreseNum) {
      alert("Se paso del número secreto");
    } else {
      alert("Falta para el número secreto");
    }
    
  }




}