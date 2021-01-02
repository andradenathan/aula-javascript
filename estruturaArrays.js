var valores = ["Ás", "Valete", "Rei"]
var naipes = ["Espadas", "Paus", "Copas"]

var cartas = valores.map((valor) => {
    naipes.forEach((naipe) => {
        console.log(`${valor} de ${naipe}`);
    });
});

var numeros = [1, 2, 3, 4, 6, 7, 8, 10];
var pares = numeros.filter((num) => {
    if(num % 2 == 0){
        var arrayPar = num;
        console.log(arrayPar);
    };
});

var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
var somatoria = fibonacci.reduce((acumulador, valor) => {
    return acumulador + valor;
});

console.log(somatoria);