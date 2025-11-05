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
    // Escribir cookie
    var cookieIdioma = "user=Miguel";
    var cookieCurrency = "currency=EUR";
    document.cookie = "";
    document.cookie = cookieIdioma;
    document.cookie = cookieCurrency;
    // Leer cookies
    var arrayCookies = document.cookie.split(";");
    arrayCookies.forEach(function (cookie) { return console.log("Cookie: " + cookie); });
    // Leer una en concreto (user)
    var valor = "";
    for (var i = 0; i < arrayCookies.length; i++) {
        var claveValor = arrayCookies[i].split("=");
        if (claveValor[0] == "user") {
            valor = claveValor[1];
        }
    }
    var p = document.getElementById("result1");
    p.textContent = valor ? "La cookie user contiene: " + valor : "No existe esa cookie.";
}
