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

//Ejercicio 2
function ejercicio2(): void{
    // let expReg: RegExp = /lo_que_sea/;
    let expReg: RegExp = new RegExp("[0-9]");

    //Nos aseguramos que no es null (no se puede almacenar en HTMLInputElement)
    if(document.getElementById("email")){
        let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
        
        // Creamos span
        let mensajeOK = document.createElement('span');
        if(expReg.test(email.value)){
            mensajeOK.textContent= "Email correcto";
            mensajeOK.style.color = "green";
        }else{
            mensajeOK.textContent= "Introduce un correo válido.";
            mensajeOK.style.color = "red";
        }
        // Insertamos span
        let div2 = document.getElementById("ejercicio2");
        if(div2){
            div2.appendChild(mensajeOK);
        }
    }
    
}