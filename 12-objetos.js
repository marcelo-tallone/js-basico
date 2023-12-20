var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: "2019",
    detalleDelAuto: function(){
        console.log(`Auto ${this.marca} ${miAuto.modelo}`);
    }
}
miAuto.detalleDelAuto();

// Función constructora:

var mar = prompt("Ingresa la marca del auto");
var mod = prompt("Ingresa el modelo del auto");
var ann = prompt("Ingresa el anio del auto");

function auto(MARCA, MODELO, ANNIO){
this.marca = MARCA;
this.modelo = MODELO;
this.annio = ANNIO;
}
var miNuevoAuto = new auto(mar,mod,ann);

// reto hacer una función constructora para cagar 15 autos

function auto(MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
    }
    
var cant  = prompt("Indique la cantidad de autos a ingresar:");    
var totalAutos = [];
for (var i = 0; i < cant; i++){
    var mar = prompt("Ingresa la marca del auto");
    var mod = prompt("Ingresa el modelo del auto");
    var ann = prompt("Ingresa el anio del auto");
    totalAutos.push(new auto(mar,mod,ann));
}
console.log(totalAutos);


// Ejercicio:
function solution(car) {
   if (car.licensePlate){
    car.drivingLicense = true;
   } else{
    car.drivingLicense = false;
   }
    console.log(car);
    return car;
  }


  // Prueba 1
solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255'  });