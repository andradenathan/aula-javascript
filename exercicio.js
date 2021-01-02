var readline = require('readline');
var minimo;
var maximo;

async function lerTeclado() {
	const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
	});
	
	console.log("Qual é o minimo e o maximo?")

  	for await (const line of leitor) {
		const array = line.split(" ");
		minimo = parseInt(array[0]);
    	maximo = parseInt(array[1]);
		if(maximo > minimo)	break;
		console.log("Qual é o minimo e o maximo?");
  	};
}

(async() => {
	await lerTeclado();
	array = [];

    for(let i = minimo + 1; i < maximo; i++)
		array.push(i);
		
	const multiplos = array.filter((number) => {
    	if(number % 2 == 0 && number % 3 == 0) return number;
	  });
	  
	const dobro = array.map((number) => {
		return number * 2
	});

  	const somatoria = array.reduce((acc, curr) => {
      	return acc + curr;
    });

	console.log(array);
	console.log(multiplos);
	console.log(dobro);
  	console.log(somatoria);
})();