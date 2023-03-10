const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10],
];

// => COM FOR:
for (let i = 0; i < array.length; i++) {
    const frase = `Jogador ${i + 1}: ${array[i]}`;
    console.log(frase);
}

/*
    OBS: Se chamar o array assim no console:
    => console.log(array[i])
    saída: [27, 4, 20, 13, 14]
    ele vem em forma de array
    Mas se salvar em Template Strings,
    Ele mostra o conteúdo:
    => const arrayUnitario = `${array[i]}`
    console.log(arrayUnitario);
    saída: 27,4,20,13,14
*/

// => COM FOR OF:
// for (let jogador of array) {
//     const indice = array.indexOf(jogador);
//     const frase = `Jogador ${Number(indice) + 1}: ${jogador}`;
//     console.log(frase);
// }

// => COM FOR IN:
// for (jogador in array) {
//     const frase = `Jogador ${Number(jogador) + 1}: ${array[jogador]}`;
//     console.log(frase);
// }

/*
Tanto no FOR OF quanto no FOR IN eu preciso transformar os índices em number, porque por padrão eles vem como strings
*/

// => COM FOR ANINHADO:
// for(let i = 0; i < array.length; i++){
//     let frase = `Jogador ${i+1}: `
//     for(let j = 0; j < array[i].length; j++){
//     frase += `${array[i][j]}, `
//     }
//     console.log(frase)
// }

// => COM FOR IN E FOR OF
// for (posicao in array) {
//     let frase = `Jogador ${Number(posicao) + 1}: `;
//     for (conteudo of array[posicao]) {
//         frase += `${conteudo}, `;
//     }
//     console.log(frase);
// }
