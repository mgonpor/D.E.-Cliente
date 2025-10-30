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

// Ejercicio 1
function menu1(): void {
    let option: string = prompt(
        "Elige una opción: " +
        "\na. El idioma del navegador" +
        "\nb. El nombre del navegador" +
        "\nc. Si tiene o no cookies habilitadas" +
        "\nd. El tamaño de alto y ancho de pantalla"
    ) as string;
    switch (option.toLowerCase()) {
        case "a":
            console.log("El idioma del navegador es: " + navigator.language);
            break;
        case "b":
            console.log("El nombre del navegador es: " + navigator.appName);
            break;
        case "c":
            console.log(navigator.cookieEnabled ? "Sí tiene cookies habilitadas" : "No tiene cookies habilitadas")
            break;
        case "d":
            console.log("El alto es: " + window.innerHeight + "px"+
                "\nEl ancho es: " + window.innerWidth + "px");
            break;
        default:
            console.error("Opción no válida.");
            break;
    }
}

// Ejercicio 2
function ir_a_url(): void{
    let url: string = (document.getElementById("url") as HTMLInputElement).value;
    if (url.indexOf("http") !== 0) {
        console.error("URL no empieza por http");
    }else{
        window.open(url, "_blank");
    }
}
function recargar(): void {
    window.location.reload();
}
function ir_delante(): void {
    window.history.forward();
}
function ir_atras(): void {
    window.history.back();
}

// Ejercicio 3
function reloj(): void {
    let reloj: HTMLParagraphElement = document.getElementById("reloj") as HTMLParagraphElement;
    let ahora: Date = new Date();
    reloj.textContent = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
}
window.onload = () => setInterval(reloj, 1000);