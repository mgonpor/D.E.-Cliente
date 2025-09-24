let colores =["#AEC6CF", "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E7BAFF", "#FFD1DC", "#C1FFD7", "#F6D1F5"];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = () => {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.trunc(Math.random() * colores.length);
        ejercicios[i].style.backgroundColor = colores[colorAleatorio];
    }
}

// Ejer 0
function calcular_fibonacci() {
    let n = Number(prompt("Introduce un número para calcular su Fibonacci:"));
    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número válido (entero no negativo).");
        return;
    }
    return fibonacci(n);
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

