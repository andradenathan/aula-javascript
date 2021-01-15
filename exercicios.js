// Importando o Readline: Biblioteca de Input e Output do NodeJS
var readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Programa principal onde ocorre a recursividade que chama as funções de cada exercício
Para rodar o exercício 01 precisa descomentá-lo e comentar os exercícios abaixo */
const main = () => {
    leitor.question('Qual seria o n? ', (answer) => {
        const n = parseInt(answer);
        //tentativaErro(n); '-> CHAMADA PARA O EXERCÍCIO 01'
        array = preencherArray(n); '-> CHAMADA PARA O EXERCÍCIO 02, 03'
        console.log(`Ímpares e múltiplos de 3 até ${n}:`); '-> CHAMADA PARA O EXERCÍCIO 02'
        imparesMultiploTres(array)
        console.log('Valores triplicados: ', triplicaValores(array));
        console.log('Últimos 3 valores: ',  ultimosValores(array));
        console.log('Valores embaralhados: ', embaralhaValores(array));
    });
}

//EXERCÍCIO 01
const tentativaErro = (n) => {
    let randomNumber = Math.floor(Math.random() * n) + 1;
    acertarNumero(randomNumber);
}

//FUNÇÃO HELPER - UTILIZADA PARA VERIFICAR SE UM DADO NÚMERO É IGUAL AO NÚMERO QUE O COMPUTADOR PENSOU.
const acertarNumero = (randomNumber) => {
    leitor.question("Qual seria o número que estou pensando? (APERTE ENTER PARA DESISTIR) ", (answer) => {
        if(answer == ""){
            console.log(`Você desistiu! O número que eu estava pensando era: ${randomNumber}`);
            return leitor.close();
        }
        
        let givenNumber = parseInt(answer);
        if(givenNumber === randomNumber){
            console.log(`Parabéns! O número que eu estava pensando era o ${randomNumber}`);
            return leitor.close();
        } else {
            console.log("ERROU!");
            acertarNumero(randomNumber);
        }
    });
}

//EXERCÍCIO 02

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

    mostraArray = console.log(arrayImparesMultiplos)
    leitor.close();
    return mostraArray;
}

//EXERCÍCIO 03
const triplicaValores = (array) => {
    return array.map((num) => {
        return num * 3;
    });
}

const ultimosValores = (array) => {
    return array.slice(-3);
}

const embaralhaValores = (array) => {
    return array.sort(() => Math.random() - 0.5);
}


//EXERCÍCIO 04
var valores = ["Ás", "Valete", "Rei", "Rainha"];
var naipes = ["Espadas", "Paus", "Copas", "Ouros"];

const cartas = (valores, naipes) => {
    let arrayCartas = [];
    valores.forEach((valor) => {
        naipes.forEach((naipe) => {
            let carta = {
                "valor": valor,
                "naipe": naipe
            }

            arrayCartas.push(carta);
        });
    });

    return console.log(arrayCartas);
}

/* CHAMADA DAS FUNÇÕES ACIMA */
main(); //PARA RODAR O PROGRAMA PRINCIPAL
//cartas(valores, naipes) '-> PARA RODAR O EXERCÍCIO 04'