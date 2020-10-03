var mensaje = [];
var dni;
var nombre;
var apellido;
var email;

init();

function init(){
    var Form=document.getElementsByName('formulario');
    for(i = 0; i < Form.length; i++) {
        Form[i].addEventListener("focus", function(){
            this.classList.add("activo")
      })
    }
    dni = document.getElementById ("dni");
    nombre = document.getElementById ("nombre");
    apellido = document.getElementById ("apellido");
    email = document.getElementById ("email");
    dni.focus();
    document.getElementById ("botonGuard").addEventListener ("click" ,function(){
    validacion = Validar();
        if(validacion === -1){
            enviar();
        }else {
            controlDeError(validacion);
        };
    })
}
function Validar(){
            var validacion = "";
            if(dni.value =="") {
                return 0;
            }

            if(dni.value < 10000 || dni.value > 99999999) {
                return 1;
            }
                if (nombre.value == "") {
                return 2;
            }
                if (nombre.value.length < 5) {
                return 3;
            }
                if (apellido.value == "") {
                return 4;
            }
                if (apellido.value.length < 5) {
                return 5;
            }
                if (email.value == "") {
                return 6;
            }
                if (!email.value.includes("@") ||
                    !email.value.includes(".com")) {
                return 7
            }

                return -1;
                
        }
function controlDeError (errorNumber){
        mensaje.push ("El DNI no puedo estar vacío");
        mensaje.push ("El número ingresado no parece un DNI");
        mensaje.push ("El nombre no puede estar en blanco");
        mensaje.push ("Debe ingresar un nombre válido");
        mensaje.push ("El apellido no puede estar en blanco");
        mensaje.push ("Debe ingresar un apellido válido");
        mensaje.push ("Debe ingresar un email");
        mensaje.push ("Esto no tiene forma de email");
        switch (errorNumber){
            case 0:
                dni.focus();
                break;
            case 1:
                dni.focus();
                break;
            case 2:
                nombre.focus();
                break;
            case 3:
                nombre.focus();
                break
            case 4:
                apellido.focus();
                break;
            case 5:
                apellido.focus();
                break;
            case 6:
                break;
            case 7:
                email.focus();
                break
        }
        alert(mensaje[errorNumber]);
    }
function enviar(){
        alert("Se anvía correctamente el formulario");
        dni.value ="";
        nombre.value ="";
        apellido.value ="";
        email.value ="";
    };
