// act1.html
function comprobador_edad() {
    var edad = window.prompt("Introduce tu edad");

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
    var parte1 = "El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", ";
    var parte2 = " considerado \"lento\" en la actualidad";
    console.log(parte1 + "algo" + parte2);
}

// act4.html
function mostrar_valor(){
    var valor = 2e-9;
    console.log("El valor es: " + valor);
}

// act5.html
function mostrar_valor_bases(num) {
    var numDecimal = num;
    var numBinario = num.toString(2);
    var numOctal = num.toString(8);
    var numHexadecimal = num.toString(16);

    console.log("Número en decimal: " + numDecimal);
    console.log("Número en binario: " + numBinario);
    console.log("Número en octal: " + numOctal);
    console.log("Número en hexadecimal: " + numHexadecimal);
}

// act6.html
function dividir_por_cero_y_suma(num) {
    var resultado_division = num / 0;
    var resultado_suma = resultado_division + 23;
    console.log("Resultado de la división por cero y suma 23: " + resultado_suma);
}

// act7.html
function forzar_nan() {
    var resultado = 0 / 0;
    console.log("Resultado de forzar NaN: " + resultado);
}

// act8.html
function max_num() {
    var maximo = Number.MAX_VALUE;
    console.log("El número máximo representable es: " + maximo);
    var mas_cien = BigInt(maximo) + BigInt(100);
    console.log("El número máximo más 100 es: " + mas_cien);
}

// act9.html
function suma_distintos_tipos() {
    var numero = 5;
    var cadena = "10";
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
    var array = [1, "dos", 3.0, true, null];
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
    var salir = false;
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
    var nombre = window.prompt("Introduce tu nombre");
    var edad = window.prompt("Introduce tu edad");
    var ciudad = window.prompt("Introduce tu ciudad");
    // nos saltamos la direccion
    var telefono = window.prompt("Introduce tu teléfono");

    if(ciudad == "Mairena del Alcor" || edad ** 5 == telefono){
        alert("Enhorabuena " + nombre + ", has ganado un premio!");
    }
}

// act17.html
function contar_cifras(){
    var numero = window.prompt("Introduce un número entero positivo");
    console.log("El número " + numero + " tiene " + numero.length + " cifras.");
}

// act18.html
function clasificacion_edad(){
    var edad = window.prompt("Introduce tu edad");
    switch(true){
        case (edad <= 16):
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
            console.log("Edad no válida");
    }
}

// act19.html
function adivina_numero(){
    var numero_aleatorio = Math.floor(Math.random() * 10) + 1; //Numero entre 1 y 10
    var contador_intentos = 0;
    do{
        var intento = window.prompt("Adivina el número entre 1 y 10");
        contador_intentos++;
    }while(numero_aleatorio != intento);
    console.log("¡Has adivinado el número " + numero_aleatorio + " en " + contador_intentos + " intentos!");
}

// act20.html
function act20(){
    var contador_multiplos = 0;
    for(let i = 8; i <= 100; i++){
        if(i % 7 == 0){
            contador_multiplos++;
        }
    }
    console.log("Hay " + contador_multiplos + " múltiplos de 7 entre 8 y 100.");
}