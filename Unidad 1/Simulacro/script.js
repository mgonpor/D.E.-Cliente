function bisiesto(num){
    if((num%4==0 && num%100==0) || num%400 == 0){
        return true;
    }
    return false;
}

function nota(num){
    num = Math.floor(num);
    let res = "";
    switch(true){
        case num<5:
            res = "Suspenso";
            break;
        case num<6:
            res = "Suficiente";
            break;
        case num<7:
            res = "Bien";
            break;
        case num<9:
            res = "Notable";
            break;
        case num<=10:
            res = "Sobresaliente";
            break;
        default:
            res = "Nota no válida";
            break;
    }
    return res;
}

var palabras = "abcdefghijklmnopqrstuvwxyz";
var caracteres = "1234567890()/=*#?";

function contr(fuerte, n){
    n = Math.floor(n);
    let contr = "";
    let si_fuerte = palabras + caracteres;

    if(fuerte){
        for(let i=0; i<n; i++){
            contr += si_fuerte.charAt(Math.floor(Math.random()*si_fuerte.length));
        }
    }else{
        for(let i=0; i<n; i++){
            contr += palabras.charAt(Math.floor(Math.random()*palabras.length));
        }
    }
    return contr;
}

function suma(n){
    if(n==0){
        return 0;
    }
    return (n + suma(n-1));
}

