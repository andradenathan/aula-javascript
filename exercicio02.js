// Importando o Readline: Biblioteca de Input e Output do NodeJS
var readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Programa principal onde ocorre a chamada da função de cada exercício */
const main = () => {
    leitor.question('Qual seria o n? ', (answer) => {
        const n = parseInt(answer);
        array = preencherArray(n); 
        console.log(`Ímpares e múltiplos de 3 até ${n}:`);
        console.log(imparesMultiploTres(array));
        leitor.close();
    });
}

// FUNÇÃO HELPER - PREENCHE O ARRAY DADO UM N VALOR.
const preencherArray = (n) => {
    var array = [];
    for(var i = 0; i < n; i++) array.push(i);
    return array;
}

const imparesMultiploTres = (array) => {
    const arrayImparesMultiplos = array.filter((num) => {
        if(num % 2 == 1 && num % 3 == 0) {
            return num;
        }
    });

    return arrayImparesMultiplos;
}

main();