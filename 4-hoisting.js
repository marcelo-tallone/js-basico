// El hoisting es cuando se declara una variable o función automáticamente aunque no haya sido declarada. Se debe tener en cuenta que
// la declara pero no la inicializa, por lo que si no lo hacemos, el usar variables no inicializadas dan por resultado "undefined".
console.log(miNombre);
var miNombre = "Marcelo";
// esto no da error porque la variable "miNombre" la declara automáticamente, pero da como resultado "undefined" porque la misma 
// no tiene ningún valor declarado.
