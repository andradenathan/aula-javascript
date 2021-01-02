// Fatiamento
var nome = 'Nathan';
console.log(nome.length);
// Fatiando a string do intervalo 0 ao 2 
console.log(nome.slice(0, 2));  // OUTPUT: Na

var array = ['pessoa1', 'pessoa2', 'pessoa3', 'pessoa4', 'pessoa5'];
// Fatiando o array do intervalo 1 ao 3
console.log(array.slice(1, 3)); // OUTPUT: pessoa2, pessoa3

// FATIANDO O ÚLTIMO ELEMENTO DE UMA STRING E DE UM ARRAY
var ultimoElemento = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'ultimo'];
console.log(ultimoElemento.slice(-1));

// ENCONTRANDO O ELEMENTO DO MEIO DADA UMA STRING QUALQUER
var cidade = 'Barra'
meio = Math.floor(cidade.length / 2);
console.log(cidade.slice(0, meio) + cidade + cidade.slice(meio)); // OUTPUT: FunFundãodão