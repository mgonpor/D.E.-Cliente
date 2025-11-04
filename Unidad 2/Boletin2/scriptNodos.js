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
// Ejercicio 1
function ejercicio1() {
    var opcion = document.getElementById("option").value;
    var lista = document.getElementById("lista");
    var parrafo = document.getElementById("result");
    switch (opcion) {
        case "a":
            parrafo.textContent = "El número de elementos es " + lista.childElementCount;
            break;
        case "b":
            parrafo.textContent = "Primero: " + lista.firstElementChild.textContent + "\n -- Último: " + lista.lastElementChild.textContent;
            break;
        case "c":
            var nc = Math.abs(Number(prompt("Número: ")));
            if (lista.children.length >= nc) {
                lista.appendChild(document.createElement("li")).textContent = lista.children.item(nc - 1).textContent;
                parrafo.textContent = "Añadido elemento " + nc;
            }
            else {
                parrafo.textContent = "No existe el nodo " + nc;
            }
            break;
        case "d":
            var nd = Math.abs(Number(prompt("Número: ")));
            if (lista.children.length >= nd) {
                lista.children.item(nd - 1).textContent = prompt("Nuevo contenido: ");
                parrafo.textContent = "Modificado elemento " + nd;
            }
            else {
                parrafo.textContent = "No existe el nodo " + nd;
            }
            break;
        case "e":
            for (var i = 0; i < lista.children.length; i++) {
                parrafo.textContent += (i + 1) + "." + lista.children.item(i).textContent + " - ";
            }
            break;
        case "f":
            lista.appendChild(document.createElement("li")).textContent = prompt("Contenido: ");
            parrafo.textContent = "Añadido nuevo elemento.";
            break;
        case "g":
            var ng = Math.abs(Number(prompt("Elige un elemento a eliminar")));
            if (lista.children.length >= ng) {
                lista.removeChild(lista.children.item(ng - 1));
                parrafo.textContent = "Elemento " + ng + " eliminado";
            }
            else {
                parrafo.textContent = "No existe el nodo " + ng;
            }
            break;
        case "h":
            var elementos = [].slice.call(lista.children);
            elementos.sort(function (a, b) { return a.textContent.localeCompare(b.textContent); });
            lista.innerHTML = "";
            for (var i = 0; i < elementos.length; i++) {
                lista.appendChild(elementos[i]);
            }
            parrafo.textContent = "Lista ordenada alfabéticamente.";
            break;
        default:
            parrafo.textContent = "Elige una opción válida";
            break;
    }
}
// Ejercicio 2
