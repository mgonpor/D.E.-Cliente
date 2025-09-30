let colores =[
    "#AEC6CF", "#FFB3BA", 
    "#FFDFBA", "#FFFFBA", 
    "#BAFFC9", "#BAE1FF", 
    "#E7BAFF", "#FFD1DC", 
    "#C1FFD7", "#F6D1F5"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = () => {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.trunc(Math.random() * colores.length);
        ejercicios[i].style.backgroundColor = colores[colorAleatorio];
    }
}

/* 
------------------------------------------------------------------------
*/

// Ejer 0
function calcular_fibonacci() {
    let n = Number(prompt("Introduce un número para calcular su Fibonacci:"));
    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número válido (entero no negativo).");
        return;
    }
    console.log("Fibonacci de " + n + " es: " + fibonacci(n));
}
function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }  
}

// Ejer 1
function calcular_factorial(isRec) {
    let n = Number(prompt("Introduce un número para calcular su Factorial:"));
    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número válido (entero no negativo).");
        return;
    }
    if(isRec){
        console.log("Factorial (recursivo) de " + n + " es: " + factorial(n));
    }else{
        console.log("Factorial (iterativo) de " + n + " es: " + factorial_iterativo(n));
    }
}
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function factorial_iterativo(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejer 2
function transformar_dias_en_horas(){
    let dias = Number(prompt("Introduce un número de días:"));
    if (isNaN(dias) || dias < 0) {
        alert("Por favor, introduce un número válido (entero no negativo).");
        return;
    }
    let horas = dias*24;
    let minutos  = horas*60;
    let segundos = minutos*60;

    console.log(dias + " días son: " + horas + " horas.");
    console.log(dias + " días son: " + minutos + " minutos.");
    console.log(dias + " días son: " + segundos + " segundos.");
}

// Ejer 3
function resolver_ecuacion_2grado(){
    let a = Number(prompt("Introduce el valor de a:"));
    let b = Number(prompt("Introduce el valor de b:"));
    let c = Number(prompt("Introduce el valor de c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c) || a == 0) {
        alert("Por favor, introduce valores válidos (a no puede ser 0).");
        return;
    }

    let delta = b*b - 4*a*c;
    if(delta < 0){
        console.error("La ecuación no tiene soluciones reales.");
    }else if(delta == 0){
        let x = (-b / (2*a)).toFixed(2);
        console.log("La ecuación tiene una solución real: x = " + x);
    }else{
        let x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(2);
        let x2 = ((-b - Math.sqrt(delta)) / (2*a)).toFixed(2);
        console.log("La ecuación tiene dos soluciones reales: x1 = " + x1 + ", x2 = " + x2);
    }
}

// Ejer 4
function calcular_letra_DNI() {
    let dni = Number(prompt("Introduce tu número de DNI (sin letra):"));
    if (isNaN(dni) || dni < 0) {
        alert("Por favor, introduce un número válido (entero no negativo).");
        return;
    }
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = letras.charAt(dni % 23);
    console.log("La letra correspondiente al DNI " + dni + " es: " + letra);
}

// Ejer 5
function menu_areas(){
    do{
        var opcion = prompt("Elige una opción (a, b, c, d):");
        switch(opcion){
            case "a":
                let base = Number(prompt("Introduce la base del triángulo:"));
                let altura = Number(prompt("Introduce la altura del triángulo:"));
                if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                    alert("Por favor, introduce valores válidos (números positivos).");
                }
                else{
                    let area_triangulo = (base * altura) / 2;
                    console.log("El área del triángulo es: " + area_triangulo.toFixed(2));
                }
                break;
            case "b":
                let largo = Number(prompt("Introduce el largo del rectángulo:"));
                let ancho = Number(prompt("Introduce el ancho del rectángulo:"));
                if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
                    alert("Por favor, introduce valores válidos (números positivos).");
                }
                else{
                    let area_rectangulo = largo * ancho;
                    console.log("El área del rectángulo es: " + area_rectangulo.toFixed(2));
                }
                break;
            case "c":
                let radio = Number(prompt("Introduce el radio del círculo:"));
                if (isNaN(radio) || radio <= 0) {
                    alert("Por favor, introduce un valor válido (número positivo).");
                }
                else{
                    let area_circulo = Math.PI * radio * radio;
                    console.log("El área del círculo es: " + area_circulo.toFixed(2));
                }
                break;
            case "d":
                console.log("Saliendo del menú de áreas.");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción entre (a, b, c y d).");
        }
    }while(opcion != "d" && opcion != null);
}

// Ejer 6
function ejer6_for(){
    console.log("Números impares no múltiplos de 3 ni 7 entre 1 y 100:");
    for(let i=1; i<=100; i+=2){
        if(i % 3 != 0 && i % 7 != 0){
            console.log(i);
        }
    }
}

function ejer6_while(){
    console.log("Números impares no múltiplos de 3 ni 7 entre 1 y 100:");
    let i = 1;
    while(i <= 100){
        if(i % 3 != 0 && i % 7 != 0){
            console.log(i);
        }
        i += 2;
    }
}

function ejer6_foreach(){
    console.log("Números impares no múltiplos de 3 ni 7 entre 1 y 100:");
    let numeros = [];
    for(let i=1; i<=100; i+=2){
        numeros.push(i);
    }
    numeros.forEach(e => {
        if(e % 3 != 0 && e % 7 != 0){
            console.log(e);
        }
    });
}