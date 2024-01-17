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
let destinoExiste = false;

// while (contador < 3) {
    
//     if (listaDeDestinos[contador] == destino) {
//         console.log("Destino existe");
//         destinoExiste = true;
//         break;
//     } 
//     contador++;
// }

for (let i = 0; i < array.length; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}