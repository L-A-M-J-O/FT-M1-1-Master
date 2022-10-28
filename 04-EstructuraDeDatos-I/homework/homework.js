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
   this.array = [];
}
Queue.prototype.size = function () {
   return this.array.length;
}
Queue.prototype.enqueue = function (value) {
   this.array.push(value)
}
Queue.prototype.dequeue= function () {
   let elemento = this.array.shift();
   return elemento
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
