window.onload = () => {
    contarClicks();
    eventoClick();
    posicionClick();
    propagacionEventos();
    propagacionEventosInversa();
    abrirEnlaceAnterior();
    mostrarMasCampos();
    validarFormulario();
}

function contarClicks() {
    const span: HTMLSpanElement = document.getElementById("span1") as HTMLSpanElement;
    const p: HTMLParagraphElement = document.getElementById("p1") as HTMLParagraphElement;
    span.addEventListener("click", () => {
        p.textContent = (parseInt(p.textContent) + 1).toString();
    });
}

function eventoClick() {
    const span2: HTMLSpanElement = document.getElementById("span2") as HTMLSpanElement;
    span2.addEventListener("click", (event) => {
        console.log(event);
    });
}

function posicionClick() {
    document.addEventListener("click", (event: MouseEvent) => {
        const p: HTMLParagraphElement = document.getElementById("p3") as HTMLParagraphElement;
        p.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    });
}

function propagacionEventos() {
    const span4_1: HTMLSpanElement = document.getElementById("span4.1") as HTMLSpanElement;
    const p4_1: HTMLParagraphElement = document.getElementById("p4.1") as HTMLParagraphElement;
    const section4_1: HTMLElement = document.getElementById("section4.1") as HTMLElement;
    span4_1.addEventListener("click", (event) => {
        console.log("Estas en el " + event.currentTarget);
    });
    p4_1.addEventListener("click", (event) => {
        console.log("Estas en el " + event.currentTarget);
    });
    section4_1.addEventListener("click", (event) => {
        console.log("Estas en la " + event.currentTarget);
    });
}

function propagacionEventosInversa() {
    const span4_2: HTMLSpanElement = document.getElementById("span4.2") as HTMLSpanElement;
    const p4_2: HTMLParagraphElement = document.getElementById("p4.2") as HTMLParagraphElement;
    const section4_2: HTMLElement = document.getElementById("section4.2") as HTMLElement;
    span4_2.addEventListener("click", (event: PointerEvent) => {
        console.log("Estas en el " + (event.currentTarget as HTMLElement).tagName);
    }, true);
    p4_2.addEventListener("click", (event: PointerEvent) => {
        console.log("Estas en el " + (event.currentTarget as HTMLElement).tagName);
    }, true);
    section4_2.addEventListener("click", (event: PointerEvent) => {
        console.log("Estas en la " + (event.currentTarget as HTMLElement).tagName);
    }, true);
}

function abrirEnlaceAnterior() {
    const span5: HTMLSpanElement = document.getElementById("span5") as HTMLSpanElement;
    const a5: HTMLAnchorElement = document.getElementById("a5") as HTMLAnchorElement;
    a5.addEventListener("click", (event) => {
        event.preventDefault();
    });
    span5.addEventListener("click", () => {
        window.open(a5.href, "_blank");
    });
}

function mostrarMasCampos() {
    const checkbox6: HTMLInputElement = document.getElementById("checkbox6") as HTMLInputElement;
    const section6: HTMLElement = document.getElementById("section6") as HTMLElement;
    checkbox6.addEventListener("click", () => {
        section6.hidden = !checkbox6.checked;
    });
}

function validarFormulario() {
    const formulario: HTMLFormElement = document.getElementById("form6") as HTMLFormElement;
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre: HTMLInputElement = document.getElementById("nombre6") as HTMLInputElement;
        const apellidos: HTMLInputElement = document.getElementById("apellidos6") as HTMLInputElement;
        const checkbox6: HTMLInputElement = document.getElementById("checkbox6") as HTMLInputElement;
        console.log("Nombre " + (nombre.value ? "" : "no ") + "válido.");
        console.log("Apellidos " + (apellidos.value ? "" : "no ") + "válidos.");
        if (checkbox6.checked) {
            const telefono: HTMLInputElement = document.getElementById("telefono6") as HTMLInputElement;
            const email: HTMLInputElement = document.getElementById("email6") as HTMLInputElement;
            const telefonoRegex = /^[0-9]{9}$/;
            console.log("Teléfono " + (telefonoRegex.test(telefono.value) ? "" : "no ") + "válido.");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log("Email " + (emailRegex.test(email.value) ? "" : "no ") + "válido.");
        }
    });
}