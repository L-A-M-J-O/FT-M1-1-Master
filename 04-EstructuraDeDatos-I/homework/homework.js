'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n < 2) {
      return 1
   }
   return n *nFactorial(n -1)
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0) {
      return 0;
   }
   if (n === 1) {
      return 1;
   }
   return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3
function Queue() {
   
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
