// STRINGS -> CONJUNTO DE CARACTERES QUE FORMAM UMA INFORMAÇÃO
var cor = 'vermelho'; // Informação de uma cor é vermelha
var cpf = '100.100.100-01' // Informação de um CPF
var email = 'nathan@ejcm.com.br' // Informação de um email

// INT -> NÚMEROS INTEIROS
var x = 10
var xQuadrado = x ** 2
var y = 20
var yMetade = y / 2
var media = (x + y) / 2

// FLOAT -> NÚMEROS DECIMAIS
var pi = 3.14159;
var logNeperiano = 2.71;


// BOOLEAN -> EXPRESSÃO PRIMITIVA
var isBack = true;
var isFront = false;


Number(String('500')); // Transforma a string 500 em número 500
String(Number(100.3)); // Transforma o número 100.3 em string

!!undefined; // False
!!null; // False 
!!Number(0); // False
!!Number(NaN); // False

// Qualquer outro valor numérico retorna true
!!Number(20) // true
!!Number(50) // true

// Strings -> false para strings vazias | true para strings com conteúdos
!!String(""); // False
!!String("Foo") // True
