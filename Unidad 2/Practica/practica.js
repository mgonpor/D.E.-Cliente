window.onload = function () {
    placeholderCookies();
};
function menu() {
    var option = document.getElementById("opciones").value;
    var result = document.getElementById("result");
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
function opcionA(result) {
    var nombre = document.getElementById("nombre").value;
    var nombreReverse = "";
    for (var i = nombre.length - 1; i >= 0; i--) {
        nombreReverse += nombre[i];
    }
    result.textContent = nombreReverse.toUpperCase() + $getFechaNac().getFullYear();
}
function $getFechaNac() {
    var fecha_string = document.getElementById("fecha_nac").value;
    return new Date(fecha_string);
}
function opcionB(result) {
    var url = document.getElementById("url").value;
    if (url.match("http")) {
        var apellidos = document.getElementById("apellidos").value.trim();
        // console.log(apellidos);
        var primer_apellido = apellidos.split(" ")[0];
        url += "/search?apellido=" + primer_apellido;
        result.textContent = "Redirigiendo...";
        window.open(url, "_blank");
    }
    else {
        result.textContent = "La URL debe incluir la cabecera 'http'.";
    }
}
function opcionC(result) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - $getFechaNac().getFullYear();
    result.textContent = "Tienes " + edad + " años.";
}
function opcionD(result) {
    $saveCookies();
    result.textContent = "Cookies guardadas.";
}
function placeholderCookies() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var telefono = document.getElementById("telefono");
    var fecha_nac = document.getElementById("fecha_nac");
    var url = document.getElementById("url");
    nombre.setAttribute("placeholder", $getCookieValue("nombre"));
    apellidos.setAttribute("placeholder", $getCookieValue("apellidos"));
    edad.setAttribute("placeholder", $getCookieValue("edad"));
    telefono.setAttribute("placeholder", $getCookieValue("telefono"));
    fecha_nac.setAttribute("placeholder", $getCookieValue("fecha_nac"));
    url.setAttribute("placeholder", $getCookieValue("url"));
}
function $getCookieValue(name) {
    var arrayCookies = document.cookie.split(";");
    var valor = "";
    for (var i = 0; i < arrayCookies.length; i++) {
        var claveValor = arrayCookies[i].split("=");
        if (claveValor[0].trim() == name) {
            valor = claveValor[1];
        }
    }
    return valor;
}
function $saveCookies() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var fecha_nac = $getFechaNac();
    var url = document.getElementById("url").value;
    var cookieNombre = "nombre=" + nombre;
    var cookieApellidos = "apellidos=" + apellidos;
    var cookieEdad = "edad=" + edad;
    var cookieTelefono = "telefono=" + telefono;
    var cookieFechaNac = "fecha_nac=" + fecha_nac.toLocaleDateString();
    var cookieUrl = "url=" + url;
    document.cookie = "";
    document.cookie = cookieNombre;
    document.cookie = cookieApellidos;
    document.cookie = cookieEdad;
    document.cookie = cookieTelefono;
    document.cookie = cookieFechaNac;
    document.cookie = cookieUrl;
}
