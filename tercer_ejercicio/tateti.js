var movimiento = 0
var turno = 0
var jugador;

init();
function init()
{
document.write('<style>.tateti{');
document.write('width:50px;heigth:50px;');
document.write('}</style>');

var inputs = document.getElementsByTagName("input");
for(var i=0; i !== inputs.length; i++){
    inputs[i].addEventListener("click", function ()
    {
        marca(this.id)
    });
    inputs[i].classList.add("tateti");
jugador = document.getElementById("jugador");
clear();
}
function clear(){
    var celdas = document.getElementsByTagName("input");
    for(var i=0; i !== celdas.length; i++){
        celdas[i].value = "";
        }
    turno = 0
    movimiento = 0
    jugador.innerHTML = "juega participante 1 <br>" +
                    "marca: 0 <br>";
    }
function marca(id){;
var marca;
var paracartel;
celda = document.getElementById(id);
if (celda.value !== ""){
    alert("Esta celda ya ha sido utilizada!");
    return;
}
if (turno) {
    marca = "x";
    paracartel = "0";
}else {
    marca = "0";
    paracartel = "X";
}
celda.value = marca;
movimiento += 1;

if (check(marca)) {
    turno = 1 - turno;
    jugador.innerHTML = "Juega participante" +
    (1 + turno).toString() + "<br>" +
    "marca:" + paracartel + "<br>" + 
    "Movimientos realizados:" +
    movimiento.toString() + "/9";

if (movimiento == 9) {
    alert("No hay más movimientos!");
    clear();
    }
}
}
function check(marca)
{
    //asignamos el valor de cada input a una variable
celda1 = document.getElementById("celda1").value;
celda2 = document.getElementById("celda2").value;
celda3 = document.getElementById("celda3").value;
celda4 = document.getElementById("celda4").value;
celda5 = document.getElementById("celda5").value;
celda6 = document.getElementById("celda6").value;
celda7 = document.getElementById("celda7").value;
celda8 = document.getElementById("celda8").value;
celda9 = document.getElementById("celda9").value;

//chequeamos si se cumple la condición de tres en línea
if(
    (celda1 == marca && celda2 == marca && celda3 == marca) ||
    (celda4 == marca && celda5 == marca && celda6 == marca) ||
    (celda7 == marca && celda8 == marca && celda9 == marca) ||
    (celda1 == marca && celda5 == marca && celda9 == marca) ||
    (celda1 == marca && celda4 == marca && celda7 == marca) ||
    (celda2 == marca && celda5 == marca && celda8 == marca) ||
    (celda3 == marca && celda6 == marca && celda9 == marca) ||
    (celda1 == marca && celda5 == marca && celda9 == marca) ||
    (celda3 == marca && celda5 == marca && celda7 == marca)
    )
{//si se cumple emito alerta y limpio el tablero
alert("Participante " + (turno + 1 ).toString()+ 
    " Ganó");
    clear();
return false;
}// si no se cumple salgo de la función con true return true;
return true;
}
}
