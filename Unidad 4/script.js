window.onload = function () {
    contarClicks();
    eventoClick();
    posicionClick();
    propagacionEventos();
    propagacionEventosInversa();
    abrirEnlaceAnterior();
    mostrarMasCampos();
    validarFormulario();
};
function contarClicks() {
    var span = document.getElementById("span1");
    var p = document.getElementById("p1");
    span.addEventListener("click", function () {
        p.textContent = (parseInt(p.textContent) + 1).toString();
    });
}
function eventoClick() {
    var span2 = document.getElementById("span2");
    span2.addEventListener("click", function (event) {
        console.log(event);
    });
}
function posicionClick() {
    document.addEventListener("click", function (event) {
        var p = document.getElementById("p3");
        p.textContent = "X: ".concat(event.clientX, ", Y: ").concat(event.clientY);
    });
}
function propagacionEventos() {
    var span4_1 = document.getElementById("span4.1");
    var p4_1 = document.getElementById("p4.1");
    var section4_1 = document.getElementById("section4.1");
    span4_1.addEventListener("click", function (event) {
        console.log("Estas en el " + event.currentTarget);
    });
    p4_1.addEventListener("click", function (event) {
        console.log("Estas en el " + event.currentTarget);
    });
    section4_1.addEventListener("click", function (event) {
        console.log("Estas en la " + event.currentTarget);
    });
}
function propagacionEventosInversa() {
    var span4_2 = document.getElementById("span4.2");
    var p4_2 = document.getElementById("p4.2");
    var section4_2 = document.getElementById("section4.2");
    span4_2.addEventListener("click", function (event) {
        console.log("Estas en el " + event.currentTarget.tagName);
    }, true);
    p4_2.addEventListener("click", function (event) {
        console.log("Estas en el " + event.currentTarget.tagName);
    }, true);
    section4_2.addEventListener("click", function (event) {
        console.log("Estas en la " + event.currentTarget.tagName);
    }, true);
}
function abrirEnlaceAnterior() {
    var span5 = document.getElementById("span5");
    var a5 = document.getElementById("a5");
    a5.addEventListener("click", function (event) {
        event.preventDefault();
    });
    span5.addEventListener("click", function () {
        window.open(a5.href, "_blank");
    });
}
function mostrarMasCampos() {
    var checkbox6 = document.getElementById("checkbox6");
    var section6 = document.getElementById("section6");
    checkbox6.addEventListener("click", function () {
        section6.hidden = !checkbox6.checked;
    });
}
function validarFormulario() {
    var formulario = document.getElementById("form6");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        var nombre = document.getElementById("nombre6");
        var apellidos = document.getElementById("apellidos6");
        var checkbox6 = document.getElementById("checkbox6");
        console.log("Nombre " + (nombre.value ? "" : "no ") + "válido.");
        console.log("Apellidos " + (apellidos.value ? "" : "no ") + "válidos.");
        if (checkbox6.checked) {
            var telefono = document.getElementById("telefono6");
            var email = document.getElementById("email6");
            var telefonoRegex = /^[0-9]{9}$/;
            console.log("Teléfono " + (telefonoRegex.test(telefono.value) ? "" : "no ") + "válido.");
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log("Email " + (emailRegex.test(email.value) ? "" : "no ") + "válido.");
        }
    });
}
