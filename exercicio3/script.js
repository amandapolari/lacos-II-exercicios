const seriesFavoritas = [
    'The Office',
    'Modern Family',
    'How I Met Your Mother',
    'Breaking Bad',
    'The Good Place',
];

for(serie of seriesFavoritas) {
    const indice = seriesFavoritas.indexOf(serie);
    const frase = `${Number(indice)+1} - ${serie}`
    console.log(frase);
}