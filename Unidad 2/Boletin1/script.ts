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

//Helpers (comunes para todo el boletin)
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
// Linea 17
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