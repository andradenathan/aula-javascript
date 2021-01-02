var nome = 'EJCM'

for(let i = 10; nome.length; i--) {
    console.log(i);
    if(i == nome.length) {
        console.log(`Você chegou na palavra ${nome}`);
        break;
    };
};


var idade = 0;
var ano = 2021;

while (idade < 18) {
    idade++;
    ano++
    console.log(`A pessoa que nasceu em 2021 terá ${idade} ano(s) em ${ano}.`)
};
