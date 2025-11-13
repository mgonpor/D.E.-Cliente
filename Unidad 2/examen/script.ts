window.onload = (): void => {
    pedirNombreDeUsuario();
    numeroDeVisitas();
}

// MAIN
function pedirNombreDeUsuario(): void {
    if(!$existeCookie("nombreDeUsuario")) {
        let nombre: string = prompt("Por favor, introduzca su nombre de usuario: ");
        $guardarCookie("nombreDeUsuario", nombre);
    }else{
        let bienvenida: HTMLHeadingElement = document.getElementById("bienvenida") as HTMLHeadingElement;
        bienvenida.textContent += " de " + $getCookieValue("nombreDeUsuario");
    }
}

function numeroDeVisitas(): void {
    if(!$existeCookie("visitas")) {
        let visitas: string = "0";
        $guardarCookie("visitas", visitas);
    }else{
        let nuevoValor: number = Number($getCookieValue("visitas")) + 1;
        $guardarCookie("visitas", String(nuevoValor));
    }
    let parrafoVisitas: HTMLParagraphElement = document.getElementById("visitas") as HTMLParagraphElement;
    parrafoVisitas.textContent = "(Visitas: " + $getCookieValue("visitas") + ")";
}

function crearTarjeta(): void {
    let select: HTMLSelectElement = document.getElementById("tipo") as HTMLSelectElement;
    let id: number = (document.getElementById("id") as HTMLInputElement).valueAsNumber;
    let desripcion: string = (document.getElementById("descripcion") as HTMLInputElement).value;

    let div: HTMLDivElement = $tarjeta(id, desripcion, select.value);

    let main: HTMLBodyElement = document.getElementById("main") as HTMLBodyElement;
    switch (select.value) {
        case "incidencia":
            div.style.backgroundColor = "#FFCCCB"; // Light red
            main.appendChild(div);
            break;
        case "evento":
            div.style.backgroundColor = "lightgreen";
            main.appendChild(div);
            break;
        case "tarea":
            div.style.backgroundColor = "lightblue";
            main.appendChild(div);
            break;
        default:
            console.error("Seleccione un tipo correcto.");
            break;
    }
}

function eliminarTarjetas(): void {
    let main: HTMLBodyElement = document.getElementById("main") as HTMLBodyElement;
    main.replaceChildren("");
}

// HELPERS COOKIES
function $existeCookie(clave: string): boolean {
    let arrayCookies: string[] = document.cookie.split(";");
    let existe: boolean = false;
    for (let i = 0; i < arrayCookies.length; i++) {
        let claveValor: string[] = arrayCookies[i].split("=");
        if(claveValor[0].trim() == clave.trim()){
            existe = true;
        }
    }
    return existe;
}

function $guardarCookie(clave: string, valor: string): void {
    if(!$existeCookie(clave)){
        document.cookie = clave.trim() + "=" + valor.trim();
    }else{
        // Para eliminar una cookie se le añade un final de tiempo ya pasado
        // Fuente stackoverflow
        document.cookie = clave.trim() + "=" + $getCookieValue(clave.trim()) + ";expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = clave.trim() + "=" + valor.trim();
    }
}

function $getCookieValue(clave: string): string {
    let result: string = "";
    if($existeCookie(clave)){
        let arrayCookies: string[] = document.cookie.split(";");
        for (let i = 0; i < arrayCookies.length; i++) {
            let claveValor: string[] = arrayCookies[i].split("=");
            if(claveValor[0].trim() == clave.trim()){
                result = claveValor[1];
            }
        }
    }else{
        console.error("No existe esa cookie.");
    }
    return result;
}

// HELPERS TARJETAS
function $tarjeta(id: number, desripcion: string, tipo: string): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");

    div.textContent = "ID: " + id
        + ", Descripción: " + desripcion
        + ", Tipo: " + tipo
        + ", Fecha: " + new Date().toUTCString();
    div.setAttribute("onclick", `$enlace(${id})`);

    return div;
}

function $enlace(id: number): void {
    let url: string = `https://www.issues.com/${id}`;
    window.open(url, "_blank");
}