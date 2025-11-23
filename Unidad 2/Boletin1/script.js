var colores = [
    "#AEC6CF", "#FFB3BA",
    "#FFDFBA", "#FFFFBA",
    "#BAFFC9", "#BAE1FF",
    "#E7BAFF", "#FFD1DC",
    "#C1FFD7", "#F6D1F5"
];
var ejercicios = document.getElementsByClassName("ejercicio");
window.onload = function () {
    for (var i = 0; i < ejercicios.length; i++) {
        var colorAleatorio = Math.floor(Math.random() * colores.length);
        ejercicios[i].style.backgroundColor = colores[colorAleatorio];
    }
    pagina_cargada();
    saludo_tardio();
};
/*
------------------------------------------------------------------------
*/
//Ejecicio 1
function ejercicio1() {
    //No exite primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
/*
------------------------------------------------------------------------
*/
//Helpers (comunes para todoel boletin)
function $inputvalue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value; // value LEE
    }
    return result;
}
function $writeNode(id, msg) {
    var node = document.getElementById(id);
    if (node) {
        node.textContent = msg; // textContent ESCRIBE
    }
}
/*
------------------------------------------------------------------------
*/
//Ejercicio 2
function ejercicio2() {
    // let expReg: RegExp = /lo_que_sea/;
    var expReg = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$");
    if (document.getElementById("email")) {
        if (expReg.test($inputvalue("email"))) {
            $writeNode("ok", "Email correcto");
            setTimeout(function () { return $writeNode("ok", ""); }, 5000);
            $writeNode("error", "");
        }
        else {
            $writeNode("ok", "");
            $writeNode("error", "Formato de email incorrecto");
            setTimeout(function () { return $writeNode("error", ""); }, 5000);
        }
    }
}
/*
------------------------------------------------------------------------
*/
function $redimensionarVentana(width, heigth) {
    window.resizeTo(window.screen.availWidth * width / 100, window.screen.availHeight * heigth / 100);
}
/*
------------------------------------------------------------------------
*/
//Ejercicio 3
// window.open('http://localhost:52330/Unidad%202/Boletin1/index.html', 'miVentana', 'resizable=yes');
// SOLO FUNCIONA resizeTo() en ventanas abiertas con window.open()
function ejercicio3() {
    var ancho = Number(prompt("Indica el porcentaje de ancho de la ventana: "));
    var alto = Number(prompt("Indica el porcentaje de alto de la ventana: "));
    // let ventanaNueva = window.open("https:www.google.es", "resizable=yes")
    if (ancho && alto) {
        console.log("El usuario rellenó los prompts.");
        if (confirm("¿Está seguro? \nAncho " + ancho + "% y alto " + alto + "%: ")) {
            console.log("El usuario confirmó.");
            $redimensionarVentana(ancho, alto);
            console.log("La ventana se redimensionó.");
        }
        else {
            console.log("El usuario NO confirmó.");
        }
    }
    console.log("Se acabó la función.");
}
//Ejercicio 4
function ejercicio4() {
    var regex = new RegExp("^https:\/\/");
    var url = $inputvalue("enlace");
    if (regex.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Introduzca una url válida.");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
//Ejercicio 5
function ejercicio5() {
    window.open("https://ieslosalcores.org/", "_blank");
}
//Ejercicio 6
// Linea 18
function saludo_tardio() {
    setTimeout(function () {
        console.log("¡Hola! Perdón por la tardanza.");
    }, 5000);
}
//Ejercicio 7
function info_navegador() {
    var info = "Nombre: " + navigator.appName +
        "\nVersión: " + navigator.appVersion +
        "\nPlataforma: " + navigator.platform +
        "\nConexión: " /*+ Navigator.connection*/;
    $writeNode("info_nav", info);
}
// -----------------------------------------------------------------------------------------
//Ejemplo de funciones normales y su definición corta (flecha)
function suma1(a, b) {
    return a + b;
}
var suma2 = function (a, b) { return a + b; };
suma1(5, 5);
suma2(5, 5);
// Uso de funciones flecha predefinidas en JS
var arrayPruebas = [2, 4, 6, 8, 10];
// Filter
var arrayMayorCinco1 = [];
for (var i = 0; i < arrayPruebas.length; i++) {
    if (arrayPruebas[i] > 5) {
        arrayMayorCinco1.push(arrayPruebas[i]);
    }
}
var arrayMayorCinco2 = arrayPruebas.filter(function (data) { return data > 5; });
// Map
var arrayDoble1 = [];
for (var i = 0; i < arrayPruebas.length; i++) {
    arrayDoble1.push(arrayPruebas[i] * 2);
}
var arrayDoble2 = arrayPruebas.map(function (data) { return data * 2; });
var arrayMayor5YDoble = arrayPruebas
    .filter(function (data) { return data > 5; })
    .map(function (data) { return data * 2; });
// Reduce
var totalSuma = arrayPruebas.reduce(function (acumulador, data) { return acumulador + data; }, 0 /* valor inicial acumulador */);
// Foreach
arrayPruebas.forEach(function (data, i) { return console.log("Este es el elemento " + (i + 1) + ": " + data); });
// Some
var hayMayorQue8 = arrayPruebas.some(function (data) { return data > 8; });
//true
// Every
var todosMayorQue8 = arrayPruebas.every(function (data) { return data > 8; });
//false
//Definir una función propia donde uno de sus parámetros sea una función
function resuelveOperacion(callback, a, b) {
    console.log("Todavia no");
    var res = callback(a, b);
    console.log("Ya sí");
    return res;
}
// LO IMPORTANTE ES CUANDO SE EJECUTA LA FUNCION CALLBACK
resuelveOperacion(function (a, b) { return a + b; }, 10, 5);
resuelveOperacion(function (a, b) { return a - b; }, 10, 5);
resuelveOperacion(function (a, b) { return a * b; }, 10, 5);
resuelveOperacion(function (a, b) { return a / b; }, 10, 5);
// -----------------------------------------------------------------------------------------
//Ejercicio 8
//Linea 17
function pagina_cargada() {
    alert("La página ha terminado de cargar.");
}
//Ejercicio 9
// window.onbeforeunload = (e: BeforeUnloadEvent): string => {
//     e.preventDefault();
//     e.returnValue = '';
//     return "¿Estás seguro de que quieres salir?";
// }
