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
    let opcion: string = (document.getElementById("option") as HTMLInputElement).value;
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    let parrafo: HTMLParagraphElement = document.getElementById("result") as HTMLParagraphElement;

    switch (opcion) {
        case "a":
            parrafo.textContent = "El número de elementos es " + lista.childElementCount;
            break;
        case "b":
            parrafo.textContent = "Primero: " + lista.firstElementChild.textContent + "\n -- Último: " + lista.lastElementChild.textContent;
            break;
        case "c":
            let nc: number = Math.abs(Number(prompt("Número: ")));
            if(lista.children.length >= nc){
                lista.appendChild(document.createElement("li")).textContent = lista.children.item(nc-1).textContent;
                parrafo.textContent = "Añadido elemento " + nc;
            }else{
                parrafo.textContent = "No existe el nodo " + nc;
            }
            break;
        case "d":
            let nd: number = Math.abs(Number(prompt("Número: ")));
            if(lista.children.length >= nd){
                lista.children.item(nd-1).textContent = prompt("Nuevo contenido: ");
                parrafo.textContent = "Modificado elemento " + nd;
            }else{
                parrafo.textContent = "No existe el nodo " + nd;
            }
            break;
        case "e":
            for(let i = 0; i < lista.children.length; i++){
                parrafo.textContent += (i+1) + "." + lista.children.item(i).textContent + " - ";
            }
            break;
        case "f":
            lista.appendChild(document.createElement("li")).textContent = prompt("Contenido: ");
            parrafo.textContent = "Añadido nuevo elemento.";
            break;
        case "g":
            let ng: number = Math.abs(Number(prompt("Elige un elemento a eliminar")));
            if(lista.children.length >= ng){
                lista.removeChild(lista.children.item(ng-1));
                parrafo.textContent = "Elemento " + ng + " eliminado";
            }else{
                parrafo.textContent = "No existe el nodo " + ng;
            }
            break;
        case "h":
            let elementos: HTMLLIElement[] = [].slice.call(lista.children) as HTMLLIElement[];
            elementos.sort((a: HTMLLIElement, b: HTMLLIElement): number => a.textContent.localeCompare(b.textContent));
            lista.innerHTML = "";
            for(let i = 0; i < elementos.length; i++){
                lista.appendChild(elementos[i]);
            }
            parrafo.textContent = "Lista ordenada alfabéticamente.";
            break;
        default:
            parrafo.textContent = "Elige una opción válida";
            break;
    }
}

// Ejercicio 2