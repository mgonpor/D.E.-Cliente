// DATOS INICIALES
let leyenda: string[] = ["nombre", "puntos", "jugados", "ganados", "empatados", "perdidos", "favor", "contra"];

    // A 12/11/25
let clasificacion: (string | number)[][] = [
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

window.onload = (): void => {
    cargarClasificacion();
    $opciones();
}

// MAIN
function cargarClasificacion(): void {
    let tbody: HTMLElement = document.getElementById("clasificacion");
    tbody.innerHTML = ''; // Limpiamos lo que hubiese

    for(let i = 0; i < clasificacion.length; i++) {

        let row: HTMLTableRowElement = document.createElement("tr");

        for(let j = 0; j < clasificacion[i].length; j++){
            let col: HTMLTableCellElement = document.createElement("td");
            col.textContent = String(clasificacion[i][j]);
            row.appendChild(col);
        }

        tbody.appendChild(row);

    }
}

function validarEquipos(): void {
    let local: string = $getSelectById("local").value;
    let visitante: string = $getSelectById("visitante").value;
    let parrafo: HTMLParagraphElement = document.getElementById("validacionEquipos") as HTMLParagraphElement;

    if(local === visitante){
        parrafo.textContent = "¡Los equipos son iguales! Cámbialo antes de enviarlo.";
        parrafo.style.color = "red";
    }else{
        parrafo.textContent = "Creando partido.";
        parrafo.style.color = "green";
        nuevoPartido(local, visitante);
    }
}

function nuevoPartido(local: string, visitante: string): void {

    // Coger equipos
    let selectLocal: HTMLSelectElement = $getSelectById("local");
    let selectVisitante: HTMLSelectElement = $getSelectById("visitante");

    let equipoLocal: (string|number)[] = $buscarEquipo(selectLocal.value);
    let equipoVisitante: (string|number)[] = $buscarEquipo(selectVisitante.value);

    // Actualizar equipos
    let golesLocal: number = (document.getElementById("golesLocal") as HTMLInputElement).valueAsNumber;
    let golesVisitante: number = (document.getElementById("golesVisitante") as HTMLInputElement).valueAsNumber;

        // Partidos

        // Goles

        // Puntos

    // Meter nuevo equipo en clasificacion
    $actualizarEquipo(equipoLocal);     // SIN COMPLETAR
    $actualizarEquipo(equipoVisitante);

    // Actualizar pagina
}

// HELPERS
function $opciones(): void {
    let selectLocal: HTMLSelectElement = $getSelectById("local");
    let selectVisitante: HTMLSelectElement = $getSelectById("visitante");

    for(let i = 0; i < clasificacion.length; i++) {
        selectLocal.appendChild($opcion(i));
        selectVisitante.appendChild($opcion(i));
    }
}
function $opcion(equipo: number): HTMLOptionElement {
    let opt = document.createElement('option');
    opt.value = String(clasificacion[equipo][0]);
    opt.textContent = String(clasificacion[equipo][0]);

    return opt;
}

function $getSelectById(id: string): HTMLSelectElement {
    return document.getElementById(id) as HTMLSelectElement;
}

function $buscarEquipo(nombre: string): (string|number)[] {
    for(let i = 0; i < clasificacion.length; i++) {
        if(clasificacion[i][0] === nombre){
            return clasificacion[i];
        }
    }
}

function $actualizarEquipo(equipo: (string|number)[]): void {

}