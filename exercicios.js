// Importando o Readline: Biblioteca de Input e Output do NodeJS
var readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = () => {
    leitor.question('Qual seria o n? ', (answer) => {
        let n = parseInt(answer);
        tentativaErro(n);
    });
}

//EXERCÍCIO 01
const tentativaErro = (n) => {
    let randomNumber = Math.floor(Math.random() * n) + 1;
    acertarNumero(randomNumber);
}

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

//EXERCÍCIO 03
const triplicaValores = (array) => {
    return array.map((num) => {
        return num * 3;
    });
}

const ultimosValores = (array, n) => {
    return array.slice(-n);
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

// main();
cartas(valores, naipes);
