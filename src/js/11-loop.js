//For
var estudiantes = ["Maria", "Jose", "Pepe", "Marcelo"];

function saludarEstudiente(estudiante){
    console.log(`Hola ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiente(estudiantes[i]);
}

// For off
var estudiantes = ["Maria", "Jose", "Pepe", "Marcelo"];

function saludarEstudiente(estudiante){
    console.log(`Hola ${estudiante}`);
}
for (var estudiante of estudiantes){
    saludarEstudiente(estudiante);
}

// While
var estudiantes = ["Maria", "Jose", "Pepe", "Marcelo"];

function saludarEstudiente(estudiante){
    console.log(`Hola ${estudiante}`);
}
while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiente(estudiante);
}





// Ejercicio:
function solution(estudiantes, deathCount, nuevo) {
    if (deathCount == 0) {
      estudiantes.push(nuevo);
      console.log(estudiantes);
    } else {
      for (var i = 0; i < deathCount; i++) {
        estudiantes.pop();
      }
      estudiantes.push(nuevo);
      console.log(estudiantes);
    }
  }
  solution(["Juan","Juanita","Daniela"] ,1 ,"Julian");