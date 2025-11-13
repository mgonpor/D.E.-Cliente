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

    pagina_cargada();
    saludo_tardio();
}

/* 
------------------------------------------------------------------------
*/

//Ejecicio 1
function ejercicio1(): void{

    //No exite primitivo
    let fecha: Date = new Date();

    console.log("Hoy es: "+ fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours()-1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours()+1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());

}

/* 
------------------------------------------------------------------------
*/

//Helpers (comunes para todoel boletin)
function $inputvalue(id: string) : string{
    const input = document.getElementById(id)! as HTMLInputElement;
    var result = "";
    if (input){
        result = input.value;           // value LEE
    }
    return result;
}
function $writeNode(id: string, msg: string) : void{
    const node = document.getElementById(id) as HTMLElement;
    if (node) {
        node.textContent = msg;         // textContent ESCRIBE
    }
}

/* 
------------------------------------------------------------------------
*/

//Ejercicio 2
function ejercicio2(): void{
    // let expReg: RegExp = /lo_que_sea/;
    let expReg: RegExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$");

    if(document.getElementById("email")){
        if(expReg.test($inputvalue("email"))){
            $writeNode("ok", "Email correcto");
            setTimeout(() => $writeNode("ok", ""), 5000);
            $writeNode("error", "");
        }else{
            $writeNode("ok", "");
            $writeNode("error", "Formato de email incorrecto");
            setTimeout(() => $writeNode("error", ""), 5000);
        }
    }
}

/* 
------------------------------------------------------------------------
*/

function $redimensionarVentana(width: number, heigth: number): void{
    window.resizeTo(window.screen.availWidth*width/100, window.screen.availHeight*heigth/100);
}

/* 
------------------------------------------------------------------------
*/

//Ejercicio 3
// window.open('http://localhost:52330/Unidad%202/Boletin1/index.html', 'miVentana', 'resizable=yes');
// SOLO FUNCIONA resizeTo() en ventanas abiertas con window.open()
function ejercicio3(): void{
    let ancho: number | null  = Number(prompt("Indica el porcentaje de ancho de la ventana: "));
    let alto: number | null  = Number(prompt("Indica el porcentaje de alto de la ventana: "));

    // let ventanaNueva = window.open("https:www.google.es", "resizable=yes")

    if(ancho && alto){
        console.log("El usuario rellenó los prompts.");
        if(confirm("¿Está seguro? \nAncho " + ancho + "% y alto " + alto + "%: ")){
            console.log("El usuario confirmó.");
            $redimensionarVentana(ancho, alto);
            console.log("La ventana se redimensionó.");
        }else{
            console.log("El usuario NO confirmó.");
        }
    }

    console.log("Se acabó la función.");
}

//Ejercicio 4
function ejercicio4(): void{
    const regex = new RegExp("^https:\/\/")
    const url = $inputvalue("enlace");
    if(regex.test(url)){
        window.location.href= url;
    }else{
        $writeNode("error2", "Introduzca una url válida.")
        setTimeout(() => $writeNode("error2", ""), 5000);
    }
}

//Ejercicio 5
function ejercicio5(): void{
    window.open("https://ieslosalcores.org/", "_blank");
}

//Ejercicio 6
// Linea 18
function saludo_tardio(): void{
    setTimeout((): void => {
        console.log("¡Hola! Perdón por la tardanza.");
    }, 5000);
}


//Ejercicio 7
function info_navegador(): void{
    let info: string = "Nombre: " + navigator.appName + 
    "\nVersión: " + navigator.appVersion + 
    "\nPlataforma: " + navigator.platform + 
    "\nConexión: " /*+ Navigator.connection*/;
    $writeNode("info_nav", info);
}

// -----------------------------------------------------------------------------------------
//Ejemplo de funciones normales y su definición corta (flecha)
function suma1(a: number, b: number): number{
    return a+b;
}
const suma2 = (a: number, b: number): number => a+b;
suma1(5,5);
suma2(5,5);

// Uso de funciones flecha predefinidas en JS
const arrayPruebas = [2,4,6,8,10];

// Filter
const arrayMayorCinco1 = [];
for(let i=0; i< arrayPruebas.length; i++){
    if(arrayPruebas[i] > 5){
        arrayMayorCinco1.push(arrayPruebas[i]);
    }
}

const arrayMayorCinco2: number[] = arrayPruebas.filter(data => data > 5);

// Map
const arrayDoble1 = [];

for(let i=0; i< arrayPruebas.length; i++){
    arrayDoble1.push(arrayPruebas[i]*2);
}

const arrayDoble2: number[] = arrayPruebas.map(data => data*2);

const arrayMayor5YDoble: number[] = arrayPruebas
    .filter(data => data > 5)
    .map(data => data*2);

// Reduce
const totalSuma: number = arrayPruebas.reduce((acumulador, data) => acumulador + data, 0 /* valor inicial acumulador */ );

// Foreach
arrayPruebas.forEach((data, i) => console.log("Este es el elemento " + (i+1) + ": " + data));

// Some
const hayMayorQue8: boolean = arrayPruebas.some(data => data > 8);
//true

// Every
const todosMayorQue8: boolean = arrayPruebas.every(data => data > 8);
//false

//Definir una función propia donde uno de sus parámetros sea una función
function resuelveOperacion(callback: (a:number, b:number) => number, a: number, b: number): number{
    console.log("Todavia no");
    const res = callback(a,b);
    console.log("Ya sí");
    return res;
}
// LO IMPORTANTE ES CUANDO SE EJECUTA LA FUNCION CALLBACK
resuelveOperacion((a, b)=> a+b, 10, 5);
resuelveOperacion((a, b)=> a-b, 10, 5);
resuelveOperacion((a, b)=> a*b, 10, 5);
resuelveOperacion((a, b)=> a/b, 10, 5);

// -----------------------------------------------------------------------------------------

//Ejercicio 8
//Linea 17
function pagina_cargada(){
    alert("La página ha terminado de cargar.");
}

//Ejercicio 9
// window.onbeforeunload = (e: BeforeUnloadEvent): string => {
//     e.preventDefault();
//     e.returnValue = '';
//     return "¿Estás seguro de que quieres salir?";
// }