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
        tentativaErro(n);
    });
}


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

main(); 
