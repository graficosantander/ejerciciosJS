var visor = document.GetElementById ("visor");
var calculo;

init ();

function init (){
calculo = false;
var inputs = 
     document.GetElementByTagName ("button");
for (var i=0; i !== inputs.lenght; i++){
  inputs[i].add.EventListener("click", 
  function (){
            calcular(this.id)
            });
  }
};

function calcular(tecla){
  tecla = tecla.trim();
  switch (tecla) {
    case "=" :
        visor.innerText =
          eval(visor.innerText);
          calculo = true;
    break;
    case  "c" : visor.innerText =
          "0";
    break;
    case  "+":
    case  "-":
    case  "*":
    case  "/": calculo = false;
    default:
            if (visor.innerText == "0" || 
      calculo) visor.innerText = "";
      calculo = false;
      visor.innerText = visor.innerText + tecla;
  }
}