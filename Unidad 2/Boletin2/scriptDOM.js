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
    document.body.style.backgroundColor = "white";
};
/*
------------------------------------------------------------------------
*/
//Ejercicio 1 Cambiar título
function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo título");
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
//Ejercicio 2 Color fondo
function cambiar_fondo() {
    var body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
//Ejercicio 3 Analizar edad
function analiza_edad() {
    var edad = Number(document.getElementById("edad").value);
    var nodoLista = document.getElementById("res_edad");
    nodoLista.innerHTML = "";
    nodoLista.style.color = "green";
    nodoLista.style.fontWeight = "bold";
    nodoLista.type = "a";
    var mayor_menor = document.createElement("li");
    mayor_menor.textContent = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";
    nodoLista.appendChild(mayor_menor);
    var par_impar = document.createElement("li");
    par_impar.textContent = "Tu edad es " + (edad % 2 == 0 ? "par" : "impar");
    nodoLista.appendChild(par_impar);
    var divisores = "";
    for (var i = 1; i <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2);
    var nodoDivisores = document.createElement("li");
    nodoDivisores.textContent = "Los divisores de tu edad son: " + divisores;
    nodoLista.appendChild(nodoDivisores);
    var nodoRango = document.createElement("li");
    switch (true) {
        case edad < 15:
            nodoRango.textContent = "Según tu edad eres: Niño";
            break;
        case edad < 30:
            nodoRango.textContent = "Según tu edad eres: Joven";
            break;
        case edad < 60:
            nodoRango.textContent = "Según tu edad eres: Adulto";
            break;
        case edad > 60:
            nodoRango.textContent = "Según tu edad eres: Mayor";
            break;
        default:
            nodoRango.textContent = "Edad no válida";
            break;
    }
    nodoLista.appendChild(nodoRango);
}
//Ejercicio 4 Saludar
function saludo() {
    var nombre = prompt("Dime tu nombre: ");
    var p_saludo = document.getElementById("saludo");
    p_saludo.textContent = "Hola, " + nombre + "!";
}
function cambiar_color() {
    var p_saludo = document.getElementById("saludo");
    var sel_colores = document.getElementById("colores");
    p_saludo.style.color = sel_colores.value;
}
