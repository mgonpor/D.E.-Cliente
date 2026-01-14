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
    var golesLocal = document.getElementById("golesLocal").value;
    var golesVisitante = document.getElementById("golesVisitante").value;
    if (local === visitante) {
        parrafo.textContent = "¡Los equipos son iguales! Cámbialo antes de enviarlo.";
        parrafo.style.color = "red";
    }
    else if (golesLocal == null || golesVisitante == null ||
        golesLocal == "" || golesVisitante == "") {
        parrafo.textContent = "Introduce valores de goles válidos.";
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
    var indiceEquipoLocal = $buscarIndiceEquipo(selectLocal.value);
    var indiceEquipoVisitante = $buscarIndiceEquipo(selectVisitante.value);
    var equipoLocal = clasificacion[indiceEquipoLocal];
    var equipoVisitante = clasificacion[indiceEquipoVisitante];
    // Actualizar equipos
    var golesLocal = document.getElementById("golesLocal").valueAsNumber;
    var golesVisitante = document.getElementById("golesVisitante").valueAsNumber;
    // Goles
    equipoLocal[6] = Number(equipoLocal[6]) + golesLocal;
    equipoLocal[7] = Number(equipoLocal[7]) + golesVisitante;
    equipoVisitante[6] = Number(equipoVisitante[6]) + golesVisitante;
    equipoVisitante[7] = Number(equipoVisitante[7]) + golesLocal;
    //Partidos Y Puntos
    // jugados
    equipoLocal[2] = Number(equipoLocal[2]) + 1;
    equipoVisitante[2] = Number(equipoVisitante[2]) + 1;
    // ganados perdidos empatados
    if (golesLocal > golesVisitante) {
        equipoLocal[3] = Number(equipoLocal[3]) + 1;
        equipoVisitante[5] = Number(equipoVisitante[5]) + 1;
    }
    else if (golesLocal < golesVisitante) {
        equipoLocal[5] = Number(equipoLocal[5]) + 1;
        equipoVisitante[3] = Number(equipoVisitante[3]) + 1;
    }
    else {
        equipoLocal[4] = Number(equipoLocal[4]) + 1;
        equipoVisitante[4] = Number(equipoVisitante[4]) + 1;
    }
    // Meter nuevo equipo en clasificacion
    $actualizarEquipo(indiceEquipoLocal, equipoLocal);
    $actualizarEquipo(indiceEquipoVisitante, equipoVisitante);
    // Calcular PUNTOS equipos
    $actualizarPuntos();
    // Reordenar clasificacion
    $ordenarEquipos();
    // Actualizar tabla clasificacion
    cargarClasificacion();
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
function $buscarIndiceEquipo(nombre) {
    for (var i = 0; i < clasificacion.length; i++) {
        if (clasificacion[i][0] === nombre) {
            return i;
        }
    }
}
function $actualizarPuntos() {
    for (var i = 0; i < clasificacion.length; i++) {
        clasificacion[i][1] = (Number(clasificacion[i][3]) * 3) + (Number(clasificacion[i][4]));
    }
}
function $actualizarEquipo(indice, equipo) {
    clasificacion[indice] = equipo;
}
function $ordenarEquipos() {
    clasificacion.sort(function (a, b) {
        var puntosA = Number(a[1]);
        var puntosB = Number(b[1]);
        if (puntosA !== puntosB)
            return puntosB - puntosA;
        // Empatan a puntos
        var diffA = Number(a[6]) - Number(a[7]);
        var diffB = Number(b[6]) - Number(b[7]);
        if (diffA !== diffB)
            return diffB - diffA;
        // Empatan a diferencia de goles
        return Number(b[6]) - Number(a[6]);
    });
}
