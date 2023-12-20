// operadores aritméticos:
    // Suma
    2 + 3 // 5
    // Resta
    5 - 3 // 2
    // Multiplicación
    4 * 2 // 8
    // División
    6 / 2 // 3

// operador de residuo:
    //Residuo
    21 % 5 // 1

// operador de concatenación
    "Hola " + "Platzi" // "Hola Platzi"

// operador de incremento y decremento
    variable++
    variable--
    ++variable
    --variable
    //Sin embargo, si se emplea antes o después, el comportamiento es diferente. 
    //Si está previamente, el valor de la variable aumenta y devuelve el valor actual. 
    //Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.
    var a = 3
    var b = 3

    console.log(a++) //3
    console.log(++b) //4
    console.log(a) //4
    console.log(b) //4

//operadores de asignación
    //En la clase de variables aprendiste un operador de asignación (=). 
    //Este operador es diferente a los operadores de igualdad (== y ===).
    //El operador de asignación (=) consiste en asignar un valor a una variable.
    var saludo = "Hola Mundo";

    //Asignación de suma	        a += b	a = a + b
   // Asignación de resta	        a -= b	a = a - b
   // Asignación de multiplicación	a *= b	a = a * b
   // Asignación de división	    a /= b	a = a / b

    var contador = 1
    contador += 2
    contador -= 1
    contador *= 5
    contador /= 2
    console.log(contador)
    // el resultado es 5

// operadores de igualdad
    //Existen dos tipos de igualdad:

    //Igualdad por valor (==): compara dos variables solamente por su valor. 
    //Por ejemplo: ""3"" de tipo string y 3 de tipo número son iguales.
    //Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. 
    //Por ejemplo: ""3"" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.
    //Igualdad
    "3" == 3 // true
    3 == 3 // true

    // Igualdad estricta
    "3" === 3 // false
    3 === 3 // true

// Qué son los operadores de desigualdad
    //Desigualdad
    "3" != 3 // false
    3 != 3 // false

    // Desigualdad estricta
    "3" !== 3 // true
    3 !== 3 // false

// operadores de mayor o menor
    // Menor que
    3 < 5 // true

    // Mayor que
    3 > 5 // false

    // Mayor o igual a que
    3 >= 3 // true
    3 >= 5 // false

    // Menor o igual a que
    3 <= 3 // true
    3 <= 5 // true

// operadores lógicos
    //AND
    var a = 15
    var b = 5

    (a >= 10) && (a <= 20) // true
    (b >= 10) && (b <= 20) // false

    // OR
    var a = 15
    var b = 5

    (a <= 10) || (a >= 20) // false
    (b <= 10) || (b >= 20) // true

// operador negación lógico
    var a = 5
    !(a < 0) // true