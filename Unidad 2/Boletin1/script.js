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
//Ejercicio 2
function ejercicio2() {
    // let expReg: RegExp = /lo_que_sea/;
    var expReg = new RegExp("[0-9]");
    //Nos aseguramos que no es null (no se puede almacenar en HTMLInputElement)
    if (document.getElementById("email")) {
        var email = document.getElementById("email");
        // Creamos span
        var mensajeOK = document.createElement('span');
        if (expReg.test(email.value)) {
            mensajeOK.textContent = "Email correcto";
            mensajeOK.style.color = "green";
        }
        else {
            mensajeOK.textContent = "Introduce un correo válido.";
            mensajeOK.style.color = "red";
        }
        // Insertamos span
        var div2 = document.getElementById("ejercicio2");
        if (div2) {
            div2.appendChild(mensajeOK);
        }
    }
}
