window.onload = (): void => {
    placeholderCookies();
}

function menu(): void {
    let option: string = (document.getElementById("opciones") as HTMLSelectElement).value;
    let result: HTMLParagraphElement = document.getElementById("result") as HTMLParagraphElement;
    switch (option) {
        case "a":
            console.log("Opcion A elegida.");
            opcionA(result);
            break;
        case "b":
            console.log("Opcion B elegida.");
            opcionB(result);
            break;
        case "c":
            console.log("Opcion C elegida.");
            opcionC(result);
            break;
        case "d":
            console.log("Opcion D elegida.");
            opcionD(result);
            break;
        default:
            alert("Error: opción no válida.");
            break;
    }
}

function opcionA(result: HTMLParagraphElement): void{
    let nombre: string = (document.getElementById("nombre") as HTMLInputElement).value;
    let nombreReverse: string = "";
    for (let i = nombre.length -1 ; i >= 0; i--) {
        nombreReverse += nombre[i];
    }
    result.textContent = nombreReverse.toUpperCase() + $getFechaNac().getFullYear();
}

function $getFechaNac(): Date{
    let fecha_string: string = (document.getElementById("fecha_nac") as HTMLInputElement).value;
    return new Date(fecha_string);
}

function opcionB(result: HTMLParagraphElement): void{
    let url: string = (document.getElementById("url") as HTMLInputElement).value;
    if(url.match("http")){
        let apellidos: string = (document.getElementById("apellidos") as HTMLInputElement).value.trim();
        // console.log(apellidos);
        let primer_apellido: string = apellidos.split(" ")[0];
        url += "/search?apellido=" + primer_apellido;
        result.textContent = "Redirigiendo...";
        window.open(url, "_blank");
    }else{
        result.textContent = "La URL debe incluir la cabecera 'http'.";
    }
}

function opcionC(result: HTMLParagraphElement): void{
    let hoy: Date = new Date();
    let edad: number = hoy.getFullYear() - $getFechaNac().getFullYear();
    result.textContent = "Tienes " + edad + " años.";
}

function opcionD(result: HTMLParagraphElement): void{
    $saveCookies();
    result.textContent = "Cookies guardadas.";
}

function placeholderCookies(): void {
    let nombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let apellidos: HTMLInputElement = document.getElementById("apellidos") as HTMLInputElement;
    let edad: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let telefono: HTMLInputElement = document.getElementById("telefono") as HTMLInputElement;
    let fecha_nac: HTMLInputElement = document.getElementById("fecha_nac") as HTMLInputElement;
    let url: HTMLInputElement = document.getElementById("url") as HTMLInputElement;

    nombre.setAttribute("placeholder", $getCookieValue("nombre"))
    apellidos.setAttribute("placeholder", $getCookieValue("apellidos"));
    edad.setAttribute("placeholder", $getCookieValue("edad"));
    telefono.setAttribute("placeholder", $getCookieValue("telefono"));
    fecha_nac.setAttribute("placeholder", $getCookieValue("fecha_nac"));
    url.setAttribute("placeholder", $getCookieValue("url"));
}

function $getCookieValue(name:string): string{
    let arrayCookies: string[] = document.cookie.split(";");
    let valor: string = "";
    for (let i = 0; i < arrayCookies.length; i++) {
        let claveValor: string[] = arrayCookies[i].split("=");
        if(claveValor[0].trim() == name){
            valor = claveValor[1];
        }
    }
    return valor;
}

function $saveCookies(): void{
    let nombre: string = (document.getElementById("nombre") as HTMLInputElement).value;
    let apellidos: string = (document.getElementById("apellidos") as HTMLInputElement).value;
    let edad: string = (document.getElementById("edad") as HTMLInputElement).value;
    let telefono: string = (document.getElementById("telefono") as HTMLInputElement).value;
    let fecha_nac: Date = $getFechaNac();
    let url: string = (document.getElementById("url") as HTMLInputElement).value;

    let cookieNombre: string = "nombre=" + nombre;
    let cookieApellidos: string = "apellidos=" + apellidos;
    let cookieEdad: string = "edad=" + edad;
    let cookieTelefono: string = "telefono=" + telefono;
    let cookieFechaNac: string = "fecha_nac=" + fecha_nac.toLocaleDateString();
    let cookieUrl: string = "url=" + url;

    document.cookie = "";
    document.cookie = cookieNombre;
    document.cookie = cookieApellidos;
    document.cookie = cookieEdad;
    document.cookie = cookieTelefono;
    document.cookie = cookieFechaNac;
    document.cookie = cookieUrl;
}