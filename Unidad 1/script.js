// act1.html
function comprobador_edad() {
    let edad = window.prompt("Introduce tu edad");

    console.log("Tu edad es: " + edad);
    
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

// act2.html
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", algo considerado \"lento\" en la actualidad");
}

// act3.html
function pintar_ruta_partida() {
    let parte1 = "El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", ";
    let parte2 = " considerado \"lento\" en la actualidad";
    console.log(parte1 + "algo" + parte2);
}

// act4.html
function mostrar_valor(){
    let valor = 2e-9;
    console.log("El valor es: " + valor);
}

// act5.html
function mostrar_valor_bases(num) {
    let numDecimal = num;
    let numBinario = num.toString(2);
    let numOctal = num.toString(8);
    let numHexadecimal = num.toString(16);

    console.log("Número en decimal: " + numDecimal);
    console.log("Número en binario: " + numBinario);
    console.log("Número en octal: " + numOctal);
    console.log("Número en hexadecimal: " + numHexadecimal);
}

// act6.html
function dividir_por_cero_y_suma(num) {
    let resultado_division = num / 0;
    let resultado_suma = resultado_division + 23;
    console.log("Resultado de la división por cero y suma 23: " + resultado_suma);
}

// act7.html
function forzar_nan() {
    let resultado = 0 / 0;
    console.log("Resultado de forzar NaN: " + resultado);
}

// act8.html
function max_num() {
    let maximo = Number.MAX_VALUE;
    console.log("El número máximo representable es: " + maximo);
    let mas_cien = BigInt(maximo) + BigInt(100);
    console.log("El número máximo más 100 es: " + mas_cien);
}

// act9.html
function suma_distintos_tipos() {
    let numero = 5;
    let cadena = "10";
    console.log("Suma de número y cadena: " + (numero + cadena));
    console.log("Suma de número y cadena convertida a número: " + (numero + Number(cadena)));
}

// act10.html
{
    var var1act10 = 10;
    var var2act10 = 7;
}

function llamar_desde_fuera() {
    console.log("Llamada desde fuera: var1act10 = " + var1act10);
    console.log("var2act10 = " + var2act10);
    /* No hay problema en acceder a las variables globales (var fuera de una función)
        desde aquí.
        Otra línea*/
}

// act11.html
function crear_array() {
    let array = [1, "dos", 3.0, true, null];
    console.table(array);
}

// act12.html
function bucle_mas_temporizador() {
    let num = 11;

    let inicio = new Date().getMilliseconds();

    for (let i = 0; i < 10000000; i++) {
        num +=9;
    }

    let fin = new Date().getMilliseconds();

    console.log("Valor tras el bucle: " + num);
    console.log("Ha tardado " + (fin - inicio) + " milisegundos en ejecutarse el bucle");
}

// act13.html
function mostrar_error(){
    console.error("Esto es un mensaje de error");
}

// act14.html
function confimacion_eliminar(){
    window.confirm("¿Estás seguro de que quieres eliminar este elemento?");
}

// act15.html
function act15(){
    let salir = false;
    while(!salir){
        // pedir nombre
        var nombre = window.prompt("Introduce tu nombre");
        // preguntar salir o no del programa 
        salir = window.confirm("¿Quieres salir del programa?");
    }
    //mensaje final en azul
    console.log("%cFIN DEL PROGRAMA "+ nombre, "color: blue;");
}

// act16.html
function act16(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;
    let telefono = document.getElementById("telefono").value;

    if(ciudad == "Mairena del Alcor" || edad ** 5 == telefono){
        alert("Enhorabuena " + nombre + ", has ganado un premio!");
    }
}

// act17.html
function contar_cifras(){
    let numero = Math.abs(prompt("Introduce un número entero positivo"));
    let contador = 0;
    while(numero >= 1){
        numero = Math.floor(numero / 10);
        contador++;
    }
    console.log("El número tiene " + contador + " cifras.");
}

// act18.html
function clasificacion_edad(){
//    var edad = Number(window.prompt("Introduce tu edad"));
/*     switch(true){
        case (edad >= 0 && edad <= 16):
            console.log("Niño");
            break;
        case (edad > 16 && edad <= 25):
            console.log("Joven");
            break;
        case (edad > 25 && edad <= 60):
            console.log("Adulto");
            break;
        case (edad > 60):
            console.log("Senior");
            break;
        default:
            console.error("Edad no válida");
    } */
    let edad = document.getElementById("edad").value;
    switch(true){
        case (edad >= 0 && edad <= 16):
            pintar_mesaje("Niño", true);
            break;
        case (edad > 16 && edad <= 25):
            pintar_mesaje("Joven", true);
            break;
        case (edad > 25 && edad <= 60):
            pintar_mesaje("Adulto", true);
            break;
        case (edad > 60):
            pintar_mesaje("Senior", true);
            break;
        default:
            pintar_mesaje("Error! Edad no válida", false);
    }
}
function pintar_mesaje(mensaje, isOk){
    let aviso = document.getElementById("aviso");
    aviso.textContent = mensaje;
    if(isOk){
        aviso.style.color = "green";
    }else{
        aviso.style.color = "red";
    }
}

// act19.html
function adivina_numero(){
    let numero_aleatorio = Math.trunc(Math.random() * 10) + 1; //Numero entre 1 y 10
    let contador_intentos = 0;
    do{
        var intento = Number(window.prompt("Adivina el número entre 1 y 10"));
        contador_intentos++;
    }while(numero_aleatorio != intento);
    console.log("¡Has adivinado el número " + numero_aleatorio + " en " + contador_intentos + " intentos!");
}

// act20.html
function act20(){
    let n = Number(prompt("Introduce un número para buscar sus múltiplos entre n+1 y 100"));
    let contador_multiplos = 0;
    const MAX = 100;
    
    for(let i = n+1; i < MAX; i++){
        if(i % n == 0){
            contador_multiplos++;
        }
    }
    
    console.log("Hay " + contador_multiplos + " múltiplos de "+n+" entre "+(n+1)+" y 100.");
}