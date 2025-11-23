window.onload = function () {
    pedirNombreDeUsuario();
    numeroDeVisitas();
};
// MAIN
function pedirNombreDeUsuario() {
    if (!$existeCookie("nombreDeUsuario")) {
        var nombre = prompt("Por favor, introduzca su nombre de usuario: ");
        $guardarCookie("nombreDeUsuario", nombre);
    }
    else {
        var bienvenida = document.getElementById("bienvenida");
        bienvenida.textContent += " de " + $getCookieValue("nombreDeUsuario");
    }
}
function numeroDeVisitas() {
    if (!$existeCookie("visitas")) {
        var visitas = "0";
        $guardarCookie("visitas", visitas);
    }
    else {
        var nuevoValor = Number($getCookieValue("visitas")) + 1;
        $guardarCookie("visitas", String(nuevoValor));
    }
    var parrafoVisitas = document.getElementById("visitas");
    parrafoVisitas.textContent = "(Visitas: " + $getCookieValue("visitas") + ")";
}
function crearTarjeta() {
    var select = document.getElementById("tipo");
    var id = document.getElementById("id").valueAsNumber;
    var desripcion = document.getElementById("descripcion").value;
    var div = $tarjeta(id, desripcion, select.value);
    var main = document.getElementById("main");
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
function eliminarTarjetas() {
    var main = document.getElementById("main");
    main.replaceChildren("");
}
// HELPERS COOKIES
function $existeCookie(clave) {
    var arrayCookies = document.cookie.split(";");
    var existe = false;
    for (var i = 0; i < arrayCookies.length; i++) {
        var claveValor = arrayCookies[i].split("=");
        if (claveValor[0].trim() == clave.trim()) {
            existe = true;
        }
    }
    return existe;
}
function $guardarCookie(clave, valor) {
    if (!$existeCookie(clave)) {
        document.cookie = clave.trim() + "=" + valor.trim();
    }
    else {
        // Para eliminar una cookie se le añade un final de tiempo ya pasado
        // Fuente stackoverflow
        document.cookie = clave.trim() + "=" + $getCookieValue(clave.trim()) + ";expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = clave.trim() + "=" + valor.trim();
    }
}
function $getCookieValue(clave) {
    var result = "";
    if ($existeCookie(clave)) {
        var arrayCookies = document.cookie.split(";");
        for (var i = 0; i < arrayCookies.length; i++) {
            var claveValor = arrayCookies[i].split("=");
            if (claveValor[0].trim() == clave.trim()) {
                result = claveValor[1];
            }
        }
    }
    else {
        console.error("No existe esa cookie.");
    }
    return result;
}
// HELPERS TARJETAS
function $tarjeta(id, desripcion, tipo) {
    var div = document.createElement("div");
    div.textContent = "ID: " + id
        + ", Descripción: " + desripcion
        + ", Tipo: " + tipo
        + ", Fecha: " + new Date().toUTCString();
    div.setAttribute("onclick", "$enlace(".concat(id, ")"));
    return div;
}
function $enlace(id) {
    var url = "https://www.issues.com/".concat(id);
    window.open(url, "_blank");
}
