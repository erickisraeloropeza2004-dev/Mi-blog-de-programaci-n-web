console.log("JavaScript funcionando");
var nombre = "Erick";
var edad = 21;

var mensaje = "Hola soy " + nombre + ", bienvenido a mi web, tengo " + edad + " años.";

alert(mensaje);

var mensajeBienvenida = document.getElementById("mensajeBienvenida");
mensajeBienvenida.textContent = mensaje;

var temas = ["HTML", "CSS", "JS", "FORMULARIO", "MODAL"];

var ListaTemas = document.getElementById("ListaTemas");

for (var i = 0; i < temas.length; i++) {
    var elemento = document.createElement("li");
    elemento.textContent = temas[i];
    ListaTemas.appendChild(elemento);
}

var checkboxMostrar = document.getElementById("checkboxMostrar");
var mensajeOculto = document.getElementById("mensajeOculto");

function mostrarOcultarMensaje() {
    if (checkboxMostrar.checked) {
        mensajeOculto.style.display = "block";
    } else {
        mensajeOculto.style.display = "none";
    }
}

mostrarOcultarMensaje();

checkboxMostrar.addEventListener("change", mostrarOcultarMensaje);

var fechaTexto = document.getElementById("fechaActual");

function mostrarFechaActual (){
    var fecha = new Date();
    fechaTexto.textContent = "Hoy es: " + fecha.toLocaleDateString();
}

mostrarFechaActual ();

var relojTexto = document.getElementById("relojActual");

function mostrarHoraActual (){
    var hora = new Date();
    relojTexto.textContent = "Hora: " + hora.toLocaleTimeString();
}

mostrarHoraActual ();
setInterval(mostrarHoraActual, 1000);
