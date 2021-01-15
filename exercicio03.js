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
        //tentativaErro(n); '-> CHAMADA PARA O EXERCÍCIO 01'
        array = preencherArray(n); '-> CHAMADA PARA O EXERCÍCIO 02, 03'
        console.log(`Valores triplicados de 0 até ${n}: `, triplicaValores(array));
        console.log('Últimos 3 valores: ',  ultimosValores(triplicaValores(array)));
        console.log('Valores embaralhados: ', embaralhaValores(triplicaValores(array)));
        leitor.close();
    });
}

// FUNÇÃO HELPER - PREENCHE O ARRAY DADO UM N VALOR.
const preencherArray = (n) => {
    var array = [];
    for(var i = 0; i < n; i++) array.push(i);
    return array;
}

const triplicaValores = (array) => {
    return array.map((num) => {
        return num * 3;
    });
}

const ultimosValores = (array, n) => {
    return array.slice(-3);
}

const embaralhaValores = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

main();