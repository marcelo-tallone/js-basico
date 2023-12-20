// Declarativas
function miFuncion () {
    return 3;
}
miFuncion();

// Expresion
var miFuncion2 = function(a,b){
    return a + b;
}
miFuncion2();

function saludarEstudiente(estudiante){
console.log(estudiante)
}
function saludarEstudiente2(estudiante){
console.log(`hola ${estudiante}`)
}

function suma(a,b){
    var resultado = a+b;
    return resultado;
}
function suma2(a,b){
    return a+b;
}
var nombre = "Marcelo";
function nombreCompleto(){
    var apellido = "Tallone";
    console.log (nombre + " " + apellido);

}
nombreCompleto();
