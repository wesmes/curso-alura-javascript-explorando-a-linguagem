console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
    console.log(listaDeDestinos[contador]);
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }
    contador++;
}

// if (podeComprar) {
//     console.log("Boa viagem!");
//     temPassagemComprada = true;
//     listaDeDestinos.splice(2, 1); // removendo um item na lista
// } else {
//     console.log("Não é maior de idade e não posso vender");
//     temPassagemComprada = false;
// }

// console.log("Embarque: \n\n");

// if (idadeComprador >= 18 && temPassagemComprada) {
//     console.log("Boa viagem!");
// } else {
//     console.log("Você não pode embarcar");
// }

// console.log(listaDeDestinos);