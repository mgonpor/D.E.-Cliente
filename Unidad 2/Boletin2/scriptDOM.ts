let colores: string[] =[
    "#AEC6CF", "#FFB3BA", 
    "#FFDFBA", "#FFFFBA", 
    "#BAFFC9", "#BAE1FF", 
    "#E7BAFF", "#FFD1DC", 
    "#C1FFD7", "#F6D1F5"
];

let ejercicios: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ejercicio") as HTMLCollectionOf<HTMLElement>;

window.onload = (): void => {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio: number = Math.floor(Math.random() * colores.length);
        ejercicios[i].style.backgroundColor = colores[colorAleatorio];
    }
    document.body.style.backgroundColor = "white";
}

/* 
------------------------------------------------------------------------
*/

//Ejercicio 1 Cambiar título
function cambiar_titulo(): void {
    let titulo: string = prompt("Introduce un nuevo título") as string;
    let nodoTitulo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo;
}

//Ejercicio 2 Color fondo
function cambiar_fondo(): void {
    let body: HTMLBodyElement = document.body as HTMLBodyElement;
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

//Ejercicio 3 Analizar edad
function analiza_edad(): void {
    let edad: number = Number((document.getElementById("edad") as HTMLInputElement).value);

    let nodoLista: HTMLOListElement = document.getElementById("res_edad") as HTMLOListElement;
    nodoLista.innerHTML = "";
    nodoLista.style.color = "green";
    nodoLista.style.fontWeight = "bold";
    nodoLista.type = "a";

    let mayor_menor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayor_menor.textContent = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";
    nodoLista.appendChild(mayor_menor);

    let par_impar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    par_impar.textContent = "Tu edad es " + (edad % 2==0 ? "par" : "impar");
    nodoLista.appendChild(par_impar);

    let divisores: string = "";
    for(let i=1; i<=edad; i++){
        if(edad % i == 0){
            divisores += i + ", "; 
        }
    }
    divisores = divisores.substring(0, divisores.length -2);
    let nodoDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    nodoDivisores.textContent = "Los divisores de tu edad son: " + divisores;
    nodoLista.appendChild(nodoDivisores);

    let nodoRango: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    switch(true){
        case edad < 15:
            nodoRango.textContent = "Según tu edad eres: Niño";
            break;
        case edad < 30:
            nodoRango.textContent = "Según tu edad eres: Joven";
            break;
        case edad < 60:
            nodoRango.textContent = "Según tu edad eres: Adulto";
            break;
        case edad > 60:
            nodoRango.textContent = "Según tu edad eres: Mayor";
            break;
        default:
            nodoRango.textContent = "Edad no válida";
            break;
    }
    nodoLista.appendChild(nodoRango);
}

//Ejercicio 4 Saludar
function saludo(): void {
    let nombre: string = prompt("Dime tu nombre: ") as string;
    let p_saludo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    p_saludo.textContent = "Hola, " + nombre + "!";
}

function cambiar_color(): void {
    let p_saludo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    let sel_colores: HTMLSelectElement = document.getElementById("colores") as HTMLSelectElement;
    p_saludo.style.color = sel_colores.value;
}