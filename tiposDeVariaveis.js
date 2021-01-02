var cores = function() {
    if(true) {
        var corFuncao = 'vermelho';
        let corBloco = 'azul';

        console.log(corBloco);
    };

    console.log(corBloco) // Erro pois corBloco não está definido no programa principal;
    console.log(corFuncao) // Retorna vermelho;
};

cores(); 