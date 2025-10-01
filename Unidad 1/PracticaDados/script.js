var nombre;
var edad;
const NUMERODECARAS = 6;

window.onload = function(){
    menu();
}

function menu(){
    do{
        var opcion = prompt("Elige una opción (A, D): ");
        if(opcion != "A" && opcion != "D"){
            console.error("Opción no válida. Inténtalo de nuevo.");
        }
    }while(opcion != "A" && opcion != "D")

    if(opcion == "A"){
        nombre = prompt("Introduce tu nombre: ");
        edad = prompt("Introduce tu edad: ");
        juego();
        return;
    }else if(opcion == "D"){
        alert("¡Hasta luego! Ni has jugado...");
        return;
    }
}

var numeroTiradas = 0;
var puntosTotales = 0;
var maximoPuntos = 0;
var minimoPuntos = Infinity;

function juego(){
    var tiempoInicio = Date.now();

    do{
        var opcionJuego = prompt("Elige una opción (B, C, D): ");

        if(opcionJuego == "B"){
            console.log("Has elegido la opción " + opcionJuego);
            tirarDados();
        }else if(opcionJuego == "C"){
            console.log("Has elegido la opción " + opcionJuego);
            mostrarEstadisticas();
        }else if(opcionJuego == "D"){
            var tiempoFin = Date.now();
            var tiempoTotal = (tiempoFin - tiempoInicio) / 60000; // en minutos
            console.log("Saliendo del juego...");
            console.log("Has jugado durante "+tiempoTotal.toFixed(2)+" minutos");
            mostrarEstadisticas();
        }else{
            console.error("Opción no válida. Inténtalo de nuevo.");
        }
    }while(opcionJuego != "D")
    
}

function tirarDados(){
    const TIRADASEXTRAMAX = 3;
    let tiradasExtras = 0;
    let suma = 0;
    console.log("--- INICIO DE TURNO ---");
    do{
        var dado1 = Math.floor(Math.random() * NUMERODECARAS) + 1;
        var dado2 = Math.floor(Math.random() * NUMERODECARAS) + 1;
        numeroTiradas++;
        suma += dado1 + dado2;
        console.log("El jugador "+nombre+" ha obtenido "+(dado1+dado2)+" puntos en esta tirada. "+dado1+ " + "+dado2);
        if(dado1 == dado2){
            console.log("¡Has sacado un par de "+dado1+"!");
            tiradasExtras++;
        }
        if(tiradasExtras > TIRADASEXTRAMAX){
            console.log("Has alcanzado el máximo de tiradas extra (llevas "+ tiradasExtras +"). Te vas a cero");
            suma = 0;
        }
    }while(dado1 == dado2 && tiradasExtras <= TIRADASEXTRAMAX);

    if(suma > maximoPuntos){
        maximoPuntos = suma;
    }
    if(suma < minimoPuntos){
        minimoPuntos = suma;
    }
    puntosTotales += dado1 + dado2;
    console.log("Has acabado con "+suma+" puntos.");
    console.log("--- FIN DE TURNO ---")
    return suma;
}

function mostrarEstadisticas(){
    console.log("------------------------------");
    console.log("Estadísticas del jugador "+nombre+":");
    console.log("Número de tiradas (incluyendo extras): "+numeroTiradas);
    console.log("Media de puntos por tirada: "+(puntosTotales/numeroTiradas).toFixed(2));
    console.log("Máximo de puntos en un turno: "+maximoPuntos);
    console.log("Mínimo de puntos en un turno: "+minimoPuntos);
    console.log("------------------------------");
}