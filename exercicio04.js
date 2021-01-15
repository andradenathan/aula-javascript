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

cartas(valores, naipes);