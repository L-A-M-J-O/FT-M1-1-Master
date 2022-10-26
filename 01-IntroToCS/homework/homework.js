'use strict';

function BinarioADecimal(num) {
   let decimal = 0
   let indice = num.length - 1;
   for (let x = 0; x < num.length; x++) {
      decimal = decimal + num[x] * 2 ** indice;
      indice = indice - 1;
   }
   return decimal;
}

function DecimalABinario(num) {

   let binario = '';
   while(num > 0) {
      binario = num % 2 + binario;
      num = Math.floor(num / 2);
   }
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
