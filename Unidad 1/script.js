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