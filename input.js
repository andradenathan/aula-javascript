var readline = require('readline');
var minimo;
var maximo;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const lerTeclado = async() => {
    leitor.question("Qual o valor do mínimo e máximo?\n", function(minMax) {
        arrayMinMax = minMax.split(' ');
        minimo = arrayMinMax[0];
        maximo = arrayMinMax[1];
        if(maximo > minimo) {
            return Promise.resolve(leitor.close());
        } else {
            console.log('ERROR: O máximo não é maior do que o mínimo!');
            lerTeclado();
        }
    });
}

(async() => {
    lerTeclado().then(() => {
        array = []
        console.log(minimo, maximo)
        for(let i = minimo + 1; i < maximo; i++) {
            array.push(i);
        }
    });
})();


// RETORNAR TODOS OS NÚMEROS ENTRE MIN E MAX | RETORNAR OS NÚMEROS MÚLTIPLOS DE 2 E 3
// RETORNAR O DOBRO DE TODOS OS NÚMEROS | RETORNAR A SOMA DE TODOS OS NÚMEROS DO ARRAY 