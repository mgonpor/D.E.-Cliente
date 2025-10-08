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

//Ejer 1
function numero_cifras(){
    let num = Math.abs(Number(prompt("Introduce un número: ")));
    let cifras = 0;
    do{
        cifras++;
        num = Math.trunc(num/10);
    }while(num > 0);

    console.log("Tiene " + cifras + " cifras.");
}

//Ejer 2
function pintar_triangulo(){
    let n = Math.abs(Number(prompt("Introduce el lado del triángulo: ")))
    let triangulo = "";

    for(let i=1; i<=n; i++){
        triangulo += "\n";

        triangulo += " ".repeat(n-i);

        triangulo += "* ".repeat(i);
    }

    console.log(triangulo);
}

//Ejer 3
function menu_numeros(){
    let array_nums = [];
    do{
        var opt = prompt("a. Introducir un nuevo número. "
            + "\nb. Calcular máximo. "
            + "\nc. Calcular mínimo. "
            + "\nd. Calcular media. "
            + "\ne. Salir. ")
            .toLowerCase();
        switch(opt){
            case "a":
                introducir(array_nums);
                break;
            case "b":
                maximo(array_nums);
                break;
            case "c":
                minimo(array_nums);
                break;
            case "d":
                media(array_nums);
                break;
            case "e":
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida. Inténtelo de nuevo.");
                break;
        }
    }while(opt != "e");
}

function introducir(array_nums){
    do{
        var n = Number(prompt("Introduce un número válido: "));
    }while(isNaN(n));
    array_nums.push(n);
    console.log(array_nums);
}

function maximo(array_nums){
    let max=0;
    array_nums.forEach(e => max = (e>max)? e : max);
    console.log("El máximo es: " + max);
}

function minimo(array_nums){
    let min=Infinity;
    array_nums.forEach(e => min = (e<min) ? e : min);
    console.log("El mínimo es: " + min);
}

function media(array_nums){
    if(array_nums.length == 0){
        console.log("No se puede hacer media de un array vacío.")
        return;
    }
    suma = 0
    array_nums.forEach(e => {
        suma += e;
    });
    console.log("La media es: " + (suma/array_nums.length))
}

//Ejer 4
