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
function ejercicio1(): void {
    // Escribir cookie
    let cookieIdioma: string = "user=Miguel";
    let cookieCurrency: string = "currency=EUR";
    let cookieLanguage: string = "lang=es-ES";
    document.cookie = "";
    document.cookie = cookieIdioma;
    document.cookie = cookieCurrency;
    document.cookie = cookieLanguage;

    // Leer cookies
    let arrayCookies: string[] = document.cookie.split(";");
    arrayCookies.forEach(cookie => console.log("Cookie: " + cookie));

    let cookieAConsultar: string = prompt("Que cookie quieres consultar?") as string;

    // Leer una en concreto (user)
    let valor: string = "";
    for (let i = 0; i < arrayCookies.length; i++) {
        let claveValor: string[] = arrayCookies[i].split("=");
        console.log(claveValor);
        if(claveValor[0].trim() == cookieAConsultar){
            valor = claveValor[1];
        }
    }

    let p: HTMLParagraphElement = document.getElementById("result1") as HTMLParagraphElement;
    p.textContent = valor ? "La cookie " + cookieAConsultar + " contiene: " + valor : "No existe esa cookie.";
}