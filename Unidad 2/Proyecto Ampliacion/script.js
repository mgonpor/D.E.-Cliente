// DATOS INICIALES
var leyenda = ["nombre", "puntos", "jugados", "ganados", "empatados", "perdidos", "favor", "contra"];
// A 12/11/25
var clasificacion = [
    ["Real Madrid", 31, 12, 10, 1, 1, 26, 10],
    ["FC Barcelona", 28, 12, 9, 1, 2, 32, 15],
    ["Villarreal", 26, 12, 8, 2, 2, 24, 10],
    ["Atlético de Madrid", 25, 12, 7, 4, 1, 24, 11],
    ["Real Betis", 20, 12, 5, 5, 2, 19, 13],
    ["Espanyol", 18, 12, 5, 3, 4, 15, 15],
    ["Athletic", 17, 12, 5, 2, 5, 12, 13],
    ["Getafe", 17, 12, 5, 2, 5, 12, 14],
    ["Sevilla", 16, 12, 5, 1, 6, 18, 19],
    ["Deportivo Alavés", 15, 12, 4, 3, 5, 11, 11]
];
window.onload = function () {
    cargarClasificacion();
    $opciones();
};
// MAIN
function cargarClasificacion() {
    var tbody = document.getElementById("clasificacion");
    tbody.innerHTML = ''; // Limpiamos lo que hubiese
    for (var i = 0; i < clasificacion.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < clasificacion[i].length; j++) {
            var col = document.createElement("td");
            col.textContent = String(clasificacion[i][j]);
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
}
function validarEquipos() {
    var local = $getSelectById("local").value;
    var visitante = $getSelectById("visitante").value;
    var parrafo = document.getElementById("validacionEquipos");
    if (local === visitante) {
        parrafo.textContent = "¡Los equipos son iguales! Cámbialo antes de enviarlo.";
        parrafo.style.color = "red";
    }
    else {
        parrafo.textContent = "Creando partido.";
        parrafo.style.color = "green";
        nuevoPartido(local, visitante);
    }
}
function nuevoPartido(local, visitante) {
    // Coger equipos
    var selectLocal = $getSelectById("local");
    var selectVisitante = $getSelectById("visitante");
    var equipoLocal = $buscarEquipo(selectLocal.value);
    var equipoVisitante = $buscarEquipo(selectVisitante.value);
    // Actualizar equipos
    var golesLocal = document.getElementById("golesLocal").valueAsNumber;
    var golesVisitante = document.getElementById("golesVisitante").valueAsNumber;
    // Partidos
    // Goles
    // Puntos
    // Meter nuevo equipo en clasificacion
    $actualizarEquipo(equipoLocal); // SIN COMPLETAR
    $actualizarEquipo(equipoVisitante);
    // Actualizar pagina
}
// HELPERS
function $opciones() {
    var selectLocal = $getSelectById("local");
    var selectVisitante = $getSelectById("visitante");
    for (var i = 0; i < clasificacion.length; i++) {
        selectLocal.appendChild($opcion(i));
        selectVisitante.appendChild($opcion(i));
    }
}
function $opcion(equipo) {
    var opt = document.createElement('option');
    opt.value = String(clasificacion[equipo][0]);
    opt.textContent = String(clasificacion[equipo][0]);
    return opt;
}
function $getSelectById(id) {
    return document.getElementById(id);
}
function $buscarEquipo(nombre) {
    for (var i = 0; i < clasificacion.length; i++) {
        if (clasificacion[i][0] === nombre) {
            return clasificacion[i];
        }
    }
}
function $actualizarEquipo(equipo) {
}
