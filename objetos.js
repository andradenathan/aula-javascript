const usuarios = [{
    "id": 1,
    "nome": "Nathan",
    "idade": "20",
    "cpf": "100.100.100-01",
    "email": "nathan@ejcm.com.br",
    "password": "123456",
    "isBackEnd": true,
    "isAdmin": true,
}, 
{
    "id": 2,
    "nome": "Fulano",
    "idade": "60",
    "cpf": "200.200.200-02",
    "email": "fulano@gmail.com",
    "password": "1234",
    "isBackEnd": false,
    "isAdmin": true,
}];

function info(id) {
    console.log(`Seja bem-vindo ao nosso sistema, ${usuarios[id].nome}!\n`)
    return console.log(`Suas informações:
    Nome: ${usuarios[id].nome}
    Idade: ${usuarios[id].idade}
    Email: ${usuarios[id].email}
    Back-end: ${usuarios[id].isBackEnd}
    Administrador: ${usuarios[id].isAdmin}`);
};

function admin(id) {
    if(usuarios[id].id == 1 && usuarios[id].isAdmin) {
        console.log('Acesso permitido!');
        info(id);
    } else {
        console.log('Acesso negado!');
    };
};
