if (true){
    console.log("hola");
}else{
    console.log("Soy falso");
}

// Ejemplo votación:
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar por primera vez.");
}   else if (edad > 18) {
    console.log("puedes votar otra vez.");
}    else {
        console.log("todavía no puedes votar.");
}

// Operador ternario:
// condicion ? Bloque verdadero : Bloque falso
// Ejemplo:
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*Ejercicio de condicionales
Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:

Genera las variables correspondientes
Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.*/

function piedraPapelTijera (manoMia,maquina){
    console.log("Vos ingresaste: "+ manoMia + " y la máquina ingreso: " + maquina);
    if (manoMia === maquina){
        console.log("Empataron, sigan probando");
        return "Empate";

    } else if ((manoMia === "piedra") && (maquina === "tijera")) {
        console.log("Ganaste");
        return "Ganaste";
    } else if ((manoMia === "piedra") && (maquina === "papel")) {
        console.log("Perdiste");
        return "Perdiste";

    } else if ((manoMia === "tijera") && (maquina === "papel")) {
        console.log("Ganaste");
        return "Ganaste";
    } else if ((manoMia === "tijera") && (maquina === "piedra")) {
        console.log("Perdiste");
        return "Perdiste";

    } else if ((manoMia === "papel") && (maquina === "piedra")) {
        console.log("Ganaste");
        return "Ganaste";
    } else if ((manoMia === "papel") && (maquina === "tijera")) {
        console.log("Perdiste");
        return "Perdiste";
    }
}
piedraPapelTijera("piedra","papel");

