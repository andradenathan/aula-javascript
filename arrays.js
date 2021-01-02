// Criando um array
var frutas = ['Maçã', 'Banana', 'Uva', 'Pêssego'];
var estacionamento = ['Ferrari', 'Ford Ká', 'Impala 67', 'Uno Escada'];

// Acessando um item do array
var primeiraFruta = frutas[0];
var ultimaFruta = frutas.slice(-1);

var ferrari = estacionamento[0];
var impala67 = estacionamento[2];
var unoEscada = estacionamento.slice(-1);

// Iterando um Array
console.log('LISTA DE FRUTAS:')
frutas.forEach((fruta) => {
    console.log(fruta);
});


// Adicionando itens ao final do Array
var addFinal = estacionamento.push('Palio 2010');
console.log('ADICIONANDO AO FINAL');
console.log(estacionamento); // Retornará um novo array contendo Palio 2010

// Adicionando itens ao início do Array
var addInicio = estacionamento.unshift('Kawasaki Ninja');
console.log('ADICIONANDO AO INÍCIO');
console.log(estacionamento);

// Removendo do final
console.log('REMOVENDO DO FINAL');
var remFinal = estacionamento.pop();
console.log(estacionamento);

// Removendo do início
console.log('REMOVENDO DO INÍCIO');
var remInicio = estacionamento.shift();
console.log(estacionamento);

function testeImport() {
    console.log('Teste de Import/Export')
}

